function talksAbout(node, string) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    for (let child of node.childNodes) {
      if (talksAbout(child, string)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType == Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

console.log(talksAbout(document.body, "book"));
// → true

//0303
let scriptA = Array.from(document.getElementsByTagName('script'))
let ScriptA_inner = scriptA.map(s => s.innerHTML)
console.log(ScriptA_inner)
let scripA_source = scriptA.map(s =>s.src)
console.log(scripA_source)
console.log(ScriptA_inner||scripA_source)
scriptA[16].innerHTML;
console.dir(scriptA[16])