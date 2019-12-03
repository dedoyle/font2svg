const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync('./NanumPenScript-Regular.ttf');
 
const attributes = {fill: 'none', stroke: 'black'};
const options = {x: 0, y: 0, fontSize: 800, anchor: 'top', attributes: attributes};
 
const svg = textToSVG.getSVG('1', options);
 
console.log(svg);