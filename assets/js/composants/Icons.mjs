import {TodoItemLine} from "./TodoItemLine.mjs";

export class Icons {

     /*  Container initialization
     */
    constructor(todoElement) {
        this.todoElement = todoElement;
        this.createIcons();
    };

    /**
     * create icons
     */
    createIcons() {

        /**
         * Create div for i
         */
        let divIcons = document.createElement('div');
        divIcons.className = 'icons';


        /**
         * Place i in the div .icons
         */
        let iTrash = document.createElement('i');
        iTrash.className ='far fa-times-circle';
        iTrash.style.color = '#dc5350';
        iTrash.addEventListener('click', ()=> this.delete());

        let iUpdate = document.createElement('i');
        iUpdate.className ='far fa-edit';
        iUpdate.style.color = '#45bfe7';
        iUpdate.addEventListener('click',() => this.update());

        let iCheck = document.createElement('i');
        iCheck.className = 'far fa-check-circle';
        iCheck.style.color = '#95d6b7';
        iCheck.addEventListener('click',()  => this.check());

        this.todoElement.append(divIcons);


        divIcons.appendChild(iCheck);
        divIcons.appendChild(iUpdate);
        divIcons.appendChild(iTrash);
    };

    /**
     *  Actions btns (trash,edit,update)
     */
   check(event) {
        this.todoElement.querySelector('.titleList').style.textDecoration = 'line-through lime 4px';
   };

   update(event){
       let input = document.createElement('input');

       /** Div for update input **/
       let updateList = document.createElement('div');
       updateList.className = 'updateList';
       let container = document.querySelector('#containerList');
       container.appendChild(updateList);
       updateList.appendChild(input);

       let todos = localStorage.getItem('todos');

       input.addEventListener('keypress', (event) => {
            if(event.key === 'Enter') {
                let valueNewInput = input.value;
                localStorage.setItem('todos',valueNewInput);
                console.log('le nouveau titre est : ' + valueNewInput);
                let title = document.querySelector('.titleList');
                title.innerHTML = input.value;
                return title;
            }

           todos.push(input.value);
           localStorage.setItem('updated', JSON.stringify(todos));
       })

       /**
        * Hides the input once the mouse has left it
        **/
       input.addEventListener('mouseout',(event) => {
           input.style.display = 'none';
       });

   };

    delete(event) {
        let deleteCount = localStorage.getItem('deleted');
        if(!deleteCount)
            deleteCount = 1;
        else
            deleteCount = parseInt(deleteCount) + 1;

       localStorage.setItem('deleted', deleteCount.toString());

        let todos = localStorage.getItem('todos');
        if(!todos) {
            todos = [];
        }
        else {
            todos = JSON.parse(todos);
        }

        localStorage.setItem('todos', todos.splice(1,todos.length));
        this.todoElement.remove();
    };

}

