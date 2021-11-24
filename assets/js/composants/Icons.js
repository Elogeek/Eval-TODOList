import 'boxicons';
import {TodoItemLine} from "./TodoItemLine";
import {GraphDeleteChart} from "./GraphDeleteChart";

export  const Icons = {

     /*  Container initialization
     */
    init: function () {
        this.createContainer();
        this.createIcons();
        this.update();
        this.check();
        this.delete();
    },

    /**
     *  creates an <i> and place it in the div.icons
     */
    createContainer: function(className) {

        let line = document.querySelector('.list');
        let container = document.createElement('div');
        container.className = 'icons';
        line.append(container);

    },

    /**
     * creta icons
     */
    createIcons: function(){
        let divIcons = document.querySelector('.icons');

        /**
         * Create div for i
         */
        let divCheck = document.createElement('div');
        divCheck.className = 'divCheck';
        let divTrash = document.createElement('div');
        divTrash.className = 'divTrash';
        let divUpdate = document.createElement('div');
        divUpdate.className = 'divUpdate';

        /**
         * Place i in the div
         */
        let iTrash = document.createElement('i');
        iTrash.className ='x-circle';
        iTrash.style.color = '#dc5350;'
        let iUpdate = document.createElement('i');
        iUpdate.className ='edit';
        iUpdate.style.color = '#45bfe7;'
        let iCheck = document.createElement('i');
        iCheck.className ='check-circle';
        iCheck.style.color ='color: #95d6b7';

        divIcons.append(divCheck);
        divIcons.append(divTrash);
        divIcons.append(divUpdate);

        divCheck.appendChild(iCheck);
        divTrash.appendChild(iTrash);
        divUpdate.appendChild(iUpdate);
    },

    /* Actions btns (trash,edit,update) */
    check:()=>{
        let checkI = document.querySelector('.divCheck');
        checkI.addEventListener('click',(evt => {
            let item = evt;
            for(let key in localStorage) {
                if(localStorage.getItem(key) === item.innerHTML){
                    localStorage.setItem(key,item.innerHTML + " : ");
                }
            }
        }))

    },

    update:()=>{
        let updateI = document.querySelector(".divUpdate");
        updateI.addEventListener('click',(evt => {
            let titleLine = evt;

            let input = document.createElement("input");
            input.type = "text";
            input.value = titleLine.innerHTML;
            input.style.width = "85%";

            titleLine.remove();

            input.addEventListener("keypress", (evt)=>{
                if (evt.key === "checked"){
                    if (input.value){
                        TodoItemLine.titleList(input.value, evt.target.parentNode)
                        for (let key in localStorage){
                            if (localStorage.getItem(key) === titleLine.innerHTML){
                                localStorage.setItem(key, input.value);
                            }
                        }
                        input.remove();
                    }
                }
            })
        }))
    },
    delete:()=>{
        let trashI = document.querySelector('.divTrash');
        trashI.addEventListener("click",(evt => {
            let item = evt.innerHTML;
            for (let key in localStorage){
                if (localStorage.getItem(key) === item){
                    localStorage.setItem(key, "deleteItem");
                }
            }
            evt.remove();
            let graphTrash = new GraphDeleteChart();

        }))
    },


}

