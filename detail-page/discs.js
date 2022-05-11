import { getDisc } from '../fetch-utils.js';
import { renderDiscDetail } from '../render-utils.js';

const discDetailContainer = document.getElementById('disc-detail-container');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const disc = await getDisc(id);

    const discDetailEl = renderDiscDetail(disc);
    discDetailContainer.append(discDetailEl);
}

loadData();