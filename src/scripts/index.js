import 'regenerator-runtime'; /* for async await transpile */
import "@fortawesome/fontawesome-free/css/all.css";
import '../styles/main.css';
import '../styles/responsive.css';
import '../scripts/components/heroElement.js';
import '../scripts/components/skipToMainContent.js';
import '../scripts/components/headerBar.js';
import '../scripts/components/footerBar.js';
import '../scripts/components/restaurantList.js';

import main from './view/main';

document.addEventListener('DOMContentLoaded', main);
