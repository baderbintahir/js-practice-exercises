// Global app controller
import str from './models/Search';
// import{add as a, mul as m, ID} from './views/searchView';
import * as searchView from './views/searchView';

console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.mul(4, 2)}. ${str}`);