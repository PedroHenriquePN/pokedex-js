const fetchPokemon = async(pokemon) =>{

  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  console.log(APIResponse);
}
fetchPokemon();