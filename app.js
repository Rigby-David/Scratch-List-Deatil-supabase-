// import functions and grab DOM elements

import { getDiscs } from './fetch-utils.js';
import { renderDiscHome } from './render-utils.js';

// let state
const discListEl = document.getElementById('discs');

async function loadData() {
    const discs = await getDiscs();


    for (let disc of discs) {
        const discDiv = renderDiscHome(disc);
        discListEl.append(discDiv);
    }
}
loadData();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
