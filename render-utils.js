// export function renderDisc(disc) {
//     const div = 
// }

export function renderDiscHome(disc) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('disc-home');

    p.textContent = disc.name;

    img.src = `${disc.image}`;
    
    a.href = `./detail-page/?id=${disc.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderDiscDetail(disc) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('disc-detail');

    h1.textContent = disc.name;

    img.src = `${disc.image}`;

    p.textContent = `The ${disc.name} was designed by ${disc.manufacturer}. It has a speed of ${disc.speed}, glide of ${disc.glide}, turn of ${disc.turn}, and a fade of ${disc.fade}.`;

    div.append(h1, img, p);
    return div;
}