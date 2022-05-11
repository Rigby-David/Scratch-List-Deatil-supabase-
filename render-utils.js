export function renderDisc(disc) {
    const div = document.createElement('div');
    div.classList.add('disc');

    const h1 = document.createElement('h1');
    h1.textContent = disc.name;

    const img = document.createElement('img');
    img.src = disc.image;

    const p = document.createElement('p');
    p.textContent = `The ${disc.name} has a speed of ${disc.speed} and glide of ${disc.glide}`;

    div.append(h1, img, p);
    return div;
}