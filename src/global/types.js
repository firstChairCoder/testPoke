export const stringToPokemonType = {
  Normal: "normal",
  Fire: "fire",
  Water: "water",
  Electric: "electric",
  Grass: "grass",
  Ice: "ice",
  Fighting: "fighting",
  Poison: "poison",
  Ground: "ground",
  Flying: "flying",
  Psychic: "pPsychic",
  Bug: "bug",
  Rock: "rock",
  Ghost: "ghost",
  Dragon: "dragon",
  Dark: "dark",
  Steel: "steel",
  Fairy: "fairy",
};

export const stringToType = (typeString) => {
  if (!typeString) {
    return undefined;
  }
  return Object.values(PokemonTypes).find(
    (t) => t.toLowerCase() === typeString.toLowerCase()
  );
};
