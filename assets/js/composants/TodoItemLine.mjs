import {Icons} from "./Icons.mjs";

/**
 * Create the title of the list
 */


export const TodoItemLine = {

    init: function() {
        this.titleList();
    },

    /**
     * Get the input value and display it in #containerList
     */
    titleList: function(){
        let div = document.querySelector("#containerList");
        let todos = localStorage.getItem('todos');
        if(!todos) {
            todos = [];
        }
        else {
            todos = JSON.parse(todos);
        }

        for(const todo of todos) {
            let divList = document.createElement("div");
            divList.className = "list";

            let titleList = document.createElement("p");
            titleList.className = "titleList"
            titleList.innerHTML = todo;

            new Icons(divList);

            div.append(divList);
            divList.prepend(titleList);
        }
    },


}
