import 'boxicons';
import {TodoItem} from "./TodoItem";

 class Icons {

    constructor(){
        this.newIcon = document.getElementsByClassName('icons');
    }
     /**
     *  Container initialization
     */
    init = function () {
        TodoItem.titleList();
        TodoItem.iconsList();
    }

     /**
      *  creates an <i> and place it in the div.icons
      */
     addIcon = function(className) {

         let line = document.querySelector('#containerList');
         let container = document.createElement('div');
         container.className = 'icons';
         let i = document.createElement('i');

         line.append(container);
         line.append(i);

     };

 }

 export {Icons};




