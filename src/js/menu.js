import itemMenu from "../templates/menu-item.hbs"
import data from "../menu.json"
import refs from "./refs.js"

refs.menuRef.insertAdjacentHTML('beforeend', itemMenu(data))