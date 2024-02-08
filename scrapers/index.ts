import scrapingAnt from './services/scrapingant';
import scrapingRobot from './services/scrapingrobot';
import serpapi from './services/serpapi';
import serply from './services/serply';
import spaceserp from './services/spaceserp';
import proxy from './services/proxy';
import searchapi from './services/searchapi';
import local from './services/local';

export default [
   local,
   scrapingRobot,
   scrapingAnt,
   serpapi,
   serply,
   spaceserp,
   proxy,
   searchapi,
];
