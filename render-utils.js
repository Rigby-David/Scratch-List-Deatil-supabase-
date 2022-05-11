// export function renderDisc(disc) {
//     const div = 
// }

export function renderDiscDetail(disc) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('disc-detail');

    h1.textContent = disc.name;

    img.src = `../assets/${disc.image}`;

    p.textContent = `The ${disc.name} was designed by ${disc.manufacturer}. It has a speed of ${disc.speed}, glide of ${disc.glide}, turn of ${disc.turn}, and a fade of ${disc.fade}.`;

    div.append(h1, img, p);
    return div;
}