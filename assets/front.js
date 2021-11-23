import "./css/style.css";
import {Icons} from "./js/composants/Icons";
import {Container} from "./js/composants/Container";
import {confetti} from "./confetti";
import {TodoItem} from "./js/composants/TodoItem";



Container.init(document.body);
//new Icons().init();
TodoItem.init();

