
import {Confetti} from "../Confetti.mjs";

/**
 * Object Container
 * @type {{init: Container.init, createInput: Container.createInput, createForm: Container.createForm, createContainer: (function(): HTMLDivElement), createTitle: Container.createTitle, createClearBtn: Container.createClearBtn, createListContainer: Container.createListContainer}}
 */
export const Container = {

    /**
     *  Container initialization
     * @param parent
     */
    init: function (parent) {
        this.parent = parent;
        this.container = this.createContainer();
        this.createTitle();
        this.createForm();
        this.createInput();
        this.createListContainer();
        this.createClearBtn();
        this.parent.append(this.container);
    },

    /**
     * All the elements are placed in this div
     */
    createContainer: function () {
        let div = document.createElement('div');
        div.id = "container";
        this.parent.append(div);
        return div;
    },

    /**
     * Create the title of the list
     */
    createTitle: function () {
        let title = document.createElement('h1');
        title.innerHTML = 'to do list';
        this.container.append(title);
    },

    createForm: function () {
        let divForm = document.createElement('div');
        divForm.id = 'divForm';
        let form = document.createElement('form');
        form.className = 'todoForm';

        this.container.append(divForm);
        divForm.append(form);
    },

    /* Create input and btn addItem of the list */
    createInput: function () {
        let divInput = document.createElement("div");
        let input = document.createElement('input');
        let submit = document.createElement("input");
        let f = document.querySelector(".todoForm");

        divInput.id = "divInput";

        input.type = 'text';
        input.placeholder = 'Name...';
        input.id = "nameList";

        submit.id = 'addItem';
        submit.type = "submit";
        submit.name = "submit";
        submit.value = "Add Item";

        f.append(divInput);
        divInput.append(input);
        divInput.append(submit);

        submit.addEventListener('click', ((ev) => {
            let vInput = input.value;
            let todos = localStorage.getItem('todos');
            if(!todos) {
                todos = [];
            }
            else {
                todos = JSON.parse(todos);
            }
            todos.push(vInput);
            localStorage.setItem('todos', JSON.stringify(todos));
        }));

    },

    /* Create div for Container */
    createListContainer: function () {
        let containerList = document.createElement('div');
        containerList.id = "containerList";
        this.container.append(containerList);
    },

    /* Create btn clear item of the list */
    createClearBtn: function () {
        let btn = document.createElement('button');
        btn.type = "submit";
        btn.innerHTML = "clear items";
        btn.id = "btnClear";
        this.container.append(btn);

        /**
         * when clicking on the button the list is deleted
         * and the confetti animation starts
         */
        let count = 0;
        let duration ;
        let timer = 0;

        function timedCount() {
            count = count + 1;
            duration = setTimeout(timedCount, 1000);
        }
        function stopCount() {
            clearTimeout(timer);
            timer = 10;
        }

        btn.addEventListener('click', (ev => {

            let list = document.querySelector('#containerList');
            let titleStore = document.querySelectorAll('.titleList').values();
            localStorage.setItem('itemStore',titleStore.toString());
            localStorage.clear();
            list.remove();

            new Confetti();
            if (!timer) {
                timer = 1;
                timedCount();
            }
            timedCount();
        }));

        /**
         *  Animation ends when we dblclick on the btn
         * @type {Element}
         */
         btn.addEventListener("dblclick",()=> {
                let divCanvas = document.querySelector('#divCanvas');
                stopCount();
                divCanvas.remove();
         });

    }

}



