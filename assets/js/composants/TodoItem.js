import {Icons} from "./Icons";

export const TodoItem = {

    init: function(parent) {
        this.parent = parent;
        this.container = this.createContainer();
        this.parent.append(this.container);
    },

    createContainer: function() {
        let div = document.createElement('div');
        div.id = "containerIcons";
        this.parent.append(div);
        return div;
    },

    /**
     * Create a line of the list
     */

    lineList: function() {
        let containerList = document.querySelector("#containerList");
        let line = document.createElement("div");
        line.className = "lineList";

        this.container.prepend(line);
        this.container.append(containerList);

        Icons.AddIcon();

    },

    /**
     * Create the title of the list
     */

    titleList: function(title){
        let titleList = document.createElement("p");
        titleList.className = "titleList"
        titleList.innerHTML = title;
        this.container.append(titleList);
    },


}
