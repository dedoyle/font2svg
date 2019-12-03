const TextToSVG = require('text-to-svg');
const saveAsFile = require('./lib/saveASFile')


const textToSVG = TextToSVG.loadSync('./font/qigong.ttf');
 
const attributes = {fill: 'none', stroke: 'black'};
const options = {x: 0, y: 0, fontSize: 800, anchor: 'top', attributes: attributes};
 
const svg = textToSVG.getSVG('中华', options);

saveAsFile(svg, 'char.svg', true)
 
console.log(svg);