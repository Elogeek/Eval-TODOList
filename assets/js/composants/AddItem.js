import 'boxicons';
import {confetti} from '/assets/confetti.js'

class AddItem {

    constructor(tagName,className,type,size) {
        this.tagName = tagName;
        this.className = className;
        this.type = type;
        this.size = size;
    }
    /**
     *  function of the AddItem object which creates an i and places automatically it in the div.icons
     */
    createI = function() {

       // I create my mainContainer where all the code will be inside
        let mainContainer = document.createElement('div');
        mainContainer.id = 'mainController';
        document.boby.append(mainContainer);

        // I create element i
        let container = document.createElement('div');
        container.className = 'icons';
        let i = document.createElement('i');

        mainContainer.append(container);
        container.append(i)
    };

}

export {AddItem};



/* Create btn add text in the list */
let input = document.createElement('input');
input.type = 'text';
input.innerHTML = 'Name...';

let btnAdd = document.createElement('button');
btnAdd.innerHTML = 'Add Item';

/* si l'ajout est réussi alors les confettis appariassent */
let partyrainbowConfetti = new confetti();
