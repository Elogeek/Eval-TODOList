import {AddItem} from "./AddItem";

class Container {

    constructor() {
        this.containerList = containerList;
        this.tite = title;
        this.input = input;
        this.btnAddLineList = btnAddLineList;
        this.textList = textList;
        this.icons = new AddItem();
        this.btnClearList = btnClearList;

    }

}

let containerList = document.createElement('div');
document.body.appendChild(containerList);

let title = document.createElement('h1');
title.innerHTML = 'to do list';
title.style.cssText = `
    textTransform : to uppercase;
    color : #F5F5F5;
    fontSize : light;
    `;
