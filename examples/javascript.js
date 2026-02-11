function addNumbers(a, b) {
  return a + b;
}
function isMagicKeyword(word) {
  if (word === "magic") {
    return true;
  }
  return false;
}
const result = addNumbers(1, 2);
let isMagic = isMagicKeyword("magic");
console.log(`${isMagic}, ${result}`);
