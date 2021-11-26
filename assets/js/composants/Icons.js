
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
        iTrash.addEventListener('click', this.delete);

        let iUpdate = document.createElement('i');
        iUpdate.className ='far fa-edit';
        iUpdate.style.color = '#45bfe7';
        iUpdate.addEventListener('click',this.update);

        let iCheck = document.createElement('i');
        iCheck.className = 'far fa-check-circle';
        iCheck.style.color = '#95d6b7';
        iCheck.addEventListener('click',this.check);

        this.todoElement.append(divIcons);


        divIcons.appendChild(iCheck);
        divIcons.appendChild(iUpdate);
        divIcons.appendChild(iTrash);
    };

    /**
     *  Actions btns (trash,edit,update)
     */
   check(event) {
        let checkk = localStorage.getItem('checked');

        if(!checkk) {
            checkk = [];
        }
        else {
            checkk = JSON.parse(checkk);
        }

        for(const ck of checkk) {

            let title = document.getElementById('new title').value;
            title += localStorage.setItem('updated',title);

        }
   };

   update(event){
      let update = localStorage.getItem('updated');
      if(!update) {
          update = [];
      }
      else {
          update = JSON.parse(update);
      }

      for(const up of update) {
          let divInput = document.createElement('div');
          let input = document.createElement('input');
          let btn = document.createElement('button');

          divInput.className = "new input";
          input.id = "new title";
          btn.value = 'OK';

          this.todoElement.append(divInput);
          divInput.append(input);
          divInput.append(btn);

          let valueI = input.value;

          update.push(valueI);
          localStorage.setItem('updated', JSON.stringify(update));
      }
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

         event.parentElement.nodeName.remove();

        localStorage.setItem('todos', todos);
    };

}

