import './styles/style.css';
import { initialLoadPage }  from './home.js';
import { menu } from './menu.js'
import { galley } from './galley.js';
import { events } from './events.js';
import { contact } from './contact.js';

document.body.appendChild(initialLoadPage());
document.body.appendChild(menu());
document.body.appendChild(galley());
document.body.appendChild(events());
document.body.appendChild(contact());