const main = document.getElementById("main");

let alturaHeader = document.getElementById("inicio").clientHeight;
let alturaFooter = document.getElementById("footer").clientHeight;

main.style.minHeight = `calc(100vh - (${alturaHeader}px + (${alturaFooter}px))`