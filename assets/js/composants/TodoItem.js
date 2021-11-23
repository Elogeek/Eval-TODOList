import {Icons} from "./Icons";

/**
 * Create the title of the list
 */


export const TodoItem = {

    init: function() {
        this.titleList();
        this.iconsList();
    },

    titleList: function(title){
        let div = document.querySelector("#containerList");
        let divList = document.createElement("div");
        divList.className = "divList";
        let titleList = document.createElement("p");
        titleList.innerHTML = 'hello';
        titleList.className = "titleList"
        //titleList.innerHTML = title;

        div.append(divList);
        divList.append(titleList);
    },

    iconsList: ()=> {
        new Icons("x-circle");
        new Icons("edit");
        new Icons("check-circle");
    }

}
