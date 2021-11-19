import 'boxicons';

class AddItem {

    constructor(tagName,className,type,size) {
        this.i = tagName;
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
      boby.append(mainContainer);

      // I create element i
      this.container = document.createElement('div');
      this.container.className = 'icons';
      let i = document.createElement('i');


      mainContainer.append(this.container);
      this.container.append(this.i)
    };

}

export {AddItem};

/**
 * The icons

/* Icon circle v
let checkIcon = new AddItem("i","check-circle","solid","md");
checkIcon.createI();
/* Icon edit
let editIcon = new AddItem('i','edit',"solid",'md');
editIcon.createI();
/* Icon trash
let trashIcon = new AddItem('i','x-circle',"solid","md");
trashIcon.createI();

*/