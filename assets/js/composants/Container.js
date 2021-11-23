import {Icons} from "./Icons";
import {TodoItem} from "./TodoItem";

/**
 * Object Container
 * @type {{init: Container.init, createInput: Container.createInput, bigDiv: Container.bigDiv, createTitle: Container.createTitle, createClearBtn: Container.createClearBtn, createListContainer: Container.createListContainer}}
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
    createContainer: function() {
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

    createForm:function() {
        let divForm = document.createElement('div');
        divForm.id = 'divForm';
        let form = document.createElement('form');
        form.className = 'todoForm';

        this.container.append(divForm);
        this.container.append(form);
    },

    /* Create input and btn addItem of the list */
    createInput: function () {
        let divInput = document.createElement("div");
        let input = document.createElement('input');
        let submit = document.createElement("input");

        divInput.id = "input";

        input.type = 'text';
        input.placeholder = 'Name...';
        input.id = "nameList";

        submit.id = 'addItem';
        submit.type = "submit";
        submit.name ="submit";
        submit.value = "Add Item";

        this.container.append(divInput);
        this.container.append(input);
        this.container.append(submit);
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
    }

}


