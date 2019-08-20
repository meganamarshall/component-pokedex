export default function renderPoke(poke) {
  console.log(poke.pokemon.slice(1, poke.pokemon.length));
  const name = poke.pokemon.charAt(0).toUpperCase() + poke.pokemon.slice(1, poke.pokemon.length);
  const shape = poke.shape.charAt(0).toUpperCase() + poke.shape.slice(1, poke.shape.length);
  const ability = poke.ability_1.charAt(0).toUpperCase() + poke.ability_1.slice(1, poke.ability_1.length);
  const type = poke.type_1.charAt(0).toUpperCase() + poke.type_1.slice(1, poke.type_1.length);
  const html = /*html*/ `
  <li class="pokemon-card">
          <a href="${poke.pokedex}">${name}</a>
          <div class="image-container">
            <img src="${poke.url_image}" alt="pichu image">
          </div>
          <p class="description">${shape}</p>
          <p class="ability">${ability}</p>
          <p class="type">${type}</p>
        </li>`;
  
  return html;
}
