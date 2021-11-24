import {Icons} from "./Icons";

/**
 * Create the title of the list
 */


export const TodoItemLine = {

    init: function() {
        this.titleList();
        this.iconsList();
    },

    /**
     * Get the input value and display it in #containerList
     * @param title
     */
    titleList: function(title){
        let div = document.querySelector("#containerList");
        let divList = document.createElement("div");
        divList.className = "list";
        let titleList = document.createElement("p");
        titleList.className = "titleList"
        titleList.innerHTML = title;

        div.append(divList);
        divList.append(titleList);
    },

    iconsList: ()=> {
        Icons.init();
    }

}
