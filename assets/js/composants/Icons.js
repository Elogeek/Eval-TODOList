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
     * creata icons
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
        iTrash.type = "solid";
        iTrash.style.color = '#dc5350;'
        let iUpdate = document.createElement('i');
        iUpdate.className ='edit';
        iUpdate.type = "solid";
        iUpdate.style.color = '#45bfe7;'
        let iCheck = document.createElement('i');
        iCheck.className ='check-circle';
        iCheck.type = "solid";
        iCheck.style.color ='color: #95d6b7';

        divIcons.append(divCheck);
        divIcons.append(divTrash);
        divIcons.append(divUpdate);

        divCheck.appendChild(iCheck);
        divTrash.appendChild(iTrash);
        divUpdate.appendChild(iUpdate);
    },

    /**
     *  Actions btns (trash,edit,update)
     */
    check:()=>{
        let checkI = document.querySelector('.check-circle');
        checkI.addEventListener('click',(evt => {
            let item = evt;
            for(let check in localStorage) {
                if(localStorage.getItem(check) === item.innerHTML){
                    localStorage.setItem(check,item.innerHTML + " : ");
                }
            }
        }))

    },

    update:()=>{
        let updateI = document.querySelector(".edit");
        updateI.addEventListener('click',(evt => {
            let titleList = evt;

            let input = document.createElement("input");
            input.type = "text";
            input.value = titleList.innerHTML;
            input.style.width = "85%";

            titleList.remove();

            input.addEventListener("keypress", (evt)=>{
                if (evt.key === "checked"){
                    if (input.value){
                        TodoItemLine.titleList(input.value, evt.target.parentNode)
                        for (let edit in localStorage){
                            if (localStorage.getItem(edit) === titleList.innerHTML){
                                localStorage.setItem(edit, input.value);
                            }
                        }
                        input.remove();
                    }
                }
            })
        }))
    },
    delete:()=>{
        let trashI = document.querySelector('.x-circle');
        trashI.addEventListener("click",(evt => {
            let item = evt.innerHTML;
            for (let trash in localStorage){
                if (localStorage.getItem(trash) === item){
                    localStorage.setItem(trash, "deleteItem");
                }
            }
            evt.remove();
            new GraphDeleteChart();

        }))
    },


}

