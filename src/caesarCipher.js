function shiftCharacter(character, shift) {
  const code = character.charCodeAt(0);

  const isUpperCase = code >= 65 && code <= 90;
  const isLowerCase = code >= 97 && code <= 122;

  if (!isUpperCase && !isLowerCase) {
    return character;
  }

  const base = isUpperCase ? 65 : 97;

  return String.fromCharCode(((code - base + shift) % 26) + base);
}

function caesarCipher(string, shift) {
  return string
    .split("")
    .map((character) => shiftCharacter(character, shift))
    .join("");
}

export default caesarCipher;
