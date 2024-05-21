import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import '../scripts/components/heroElement.js';
import '../scripts/components/skipToMainContent.js';
import '../scripts/components/headerBar.js';
import '../scripts/components/footerBar.js';
import '../scripts/components/restaurantList.js';

import main from './view/main';

document.addEventListener('DOMContentLoaded', main);
