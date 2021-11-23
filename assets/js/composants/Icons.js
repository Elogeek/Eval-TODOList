import 'boxicons';
import {TodoItem} from "./TodoItem";

 export const Icons = {

     /**
     *  Container initialization
     * @param parent
     */
    init: function (parent) {
        this.parent = parent;
        this.container = this.createContainer();
        this.addIcon();
        this.parent.append(this.container);

        TodoItem.createContainer();
        TodoItem.lineList();
        TodoItem.titleList();

         let edit = this.addIcon("edit");
         let trash = this.addIcon("x-circle");
         let check = this.addIcon("check-circle");


    },

    /**
     * All the elements are placed in this divAll the elements are placed in this div
     */
    createContainer: function() {
        let div = document.createElement('div');
        div.id = "containerIcons";
        this.parent.append(div);
        return div;
    },

     /**
      *  creates an <i> and place it in the div.icons
      */
     addIcon:function(className) {

         let line = document.querySelectorAll('.lineList');
         let container = document.createElement('div');
         container.className = 'icons';
         let i = document.createElement('i');

         this.container.append(line);
         this.container.append(container);
         this.container.appendChild(i);
         return container;
     },



 }





