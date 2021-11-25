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
     */
    titleList: function(){
        let div = document.querySelector("#containerList");
        let divList = document.createElement("div");
        divList.className = "list";
        let titleList = document.createElement("p");
        titleList.className = "titleList"

        let result = localStorage.getItem('vInput');
        console.log("la valeur de l'input est : " + result);
        titleList.innerHTML = result;

        div.append(divList);
        divList.append(titleList);
    },

    iconsList: ()=> {
        Icons.init();
    }

}
