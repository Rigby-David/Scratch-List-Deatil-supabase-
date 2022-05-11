// export function renderDisc(disc) {
//     const div = document.createElement('div');
//     div.classList.add('disc');

//     const h1 = document.createElement('h1');
//     h1.textContent = disc.name;

//     const img = document.createElement('img');
//     img.src = disc.image;

//     const p = document.createElement('p');
//     p.textContent = `The ${disc.name} has a speed of ${disc.speed} and glide of ${disc.glide}`;

//     div.append(h1, img, p);
//     return div;
// }

export function renderDisc(disc) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('disc');

    h1.textContent = disc.name;

    img.src = disc.image;

    p.textContent = `The ${disc.name} has a speed of ${disc.speed}, glide of ${disc.glide}, turn of ${disc.turn}, and a fade of ${disc.fade}.`;
    
    
}