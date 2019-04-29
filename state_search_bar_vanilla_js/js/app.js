const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches
      .map(
        match => `
    <div class="card card-body mb-1">
      <h4>${match.name}  (${match.abbr}) </h4>
      <span class='text-primary'> ${match.capital} </span>
      <small>Lat: ${match.lat} / Long: ${match.long}  </small>
    </div>
    `
      )
      .join('');
    matchList.innerHTML = html;
  }
};

const searchStates = async searchTxt => {
  const resp = await fetch('../data/states.json');
  const states = await resp.json();

  let matches = states.filter(state => {
    const reg = new RegExp(`^${searchTxt}`, 'gi');
    return state.name.match(reg) || state.abbr.match(reg);
  });

  if (searchTxt.length === 0) {
    matches = [];
    setTimeout(() => (matchList.innerHTML = ''), 2500);
  }

  outputHtml(matches);
};

search.addEventListener('input', () => searchStates(search.value));
