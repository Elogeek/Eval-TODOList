//import 'boxicons';
import {TodoItemLine} from "./TodoItemLine";
import {GraphDeleteChart} from "./GraphDeleteChart";

export class Icons {

     /*  Container initialization
     */
    constructor(todoElement) {
        this.todoElement = todoElement;
        this.createContainer();
        this.createIcons();
        //this.update();
        this.check();
        //this.delete();
    };

    /**
     *  creates an <i> and place it in the div.icons
     */
    createContainer() {
        let container = document.createElement('div');
        container.className = 'icons';
        this.todoElement.append(container);

    };

    /**
     * create icons
     */
    createIcons(){
        let divIcons = document.querySelector('.icons');

        /**
         * Create div for i
         */
        let divCheck = document.createElement('div');
        let divTrash = document.createElement('div');
        let divUpdate = document.createElement('div');

        divCheck.className = 'divCheck';
        divTrash.className = 'divTrash';
        divUpdate.className = 'divUpdate';

        /**
         * Place i in the div
         */
        let iTrash = document.createElement('i');
        iTrash.className ='far fa-times-circle';
        iTrash.style.color = '#dc5350';

        let iUpdate = document.createElement('i');
        iUpdate.className ='far fa-edit';
        iUpdate.style.color = '#45bfe7';

        let iCheck = document.createElement('i');
        iCheck.className = 'far fa-check-circle';
        iCheck.id = 'iCheck';
        iCheck.style.color = '#95d6b7';

        divIcons.append(divCheck);
        divIcons.append(divTrash);
        divIcons.append(divUpdate);

        divCheck.appendChild(iCheck);
        divTrash.appendChild(iTrash);
        divUpdate.appendChild(iUpdate);
    };

    /**
     *  Actions btns (trash,edit,update)
     */
    check() {
        let checkI = document.querySelectorAll('#iCheck');
        checkI.addEventListener('click',(evt => {
            let input = document.querySelector('.titleList').values();
            localStorage.setItem('title-checked',input);
            let resultTitle = localStorage.getItem('title-checked');
            console.log("la valeur est " + resultTitle);
            if(input === resultTitle) {
                console.log("c'est pareil");
            }
            else {
                console.log("merde");
            }
        }))

    };

  /*  update:()=>{
        let updateI = document.querySelectorAll(".divUpdate");
        updateI.addEventListener('click',(evt => {

        });

    },
    delete:()=>{
        let trashI = document.querySelector('.divTrash');
        trashI.addEventListener("click",(evt => {

            new GraphDeleteChart();
        }))
    },
*/

}

