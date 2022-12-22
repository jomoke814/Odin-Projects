import './styles/style.css';
import { initialLoadPage }  from './home.js';
import { menu } from './menu.js'
import { galley } from './galley.js';
import { events } from './events.js';
import { contact } from './contact.js';

initialLoadPage();
menu();
events();
galley();
contact();