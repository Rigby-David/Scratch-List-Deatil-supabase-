// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDiscDetail, renderDiscHome } from '../render-utils.js';
import { discs } from '../disc.data.js';

const test = QUnit.test;

test('time to test renderDiscDetail', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="disc-detail"><h1>Buzzz</h1><img src="../assets/buzzz.jpg"><p>The Buzzz was designed by Discraft. It has a speed of 5, glide of 4, turn of -1, and a fade of 1.</p></div>`;
    
    const disc = { 
        name: 'Buzzz', 
        manufacturer: 'Discraft', 
        speed: 5, 
        glide: 4, 
        turn: -1, 
        fade: 1, 
        image: './assets/buzzz.jpg' };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDiscDetail(disc);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('time to test renderDiscHome function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a href="./detail-page/?id=1"><div class="disc-home"><p>Wraith</p><img src="./assets/wraith.jpg"></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDiscHome(discs[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
