//ver 1
function convert(dec1, dec2, dec3) {
  let hex1 = dec1.toString(16);
  let hex2 = dec2.toString(16);
  let hex3 = dec3.toString(16);
  let result = [hex1, hex2, hex3];
  return result[0] + result[1] + result[2];
}
console.log(convert(230, 45, 56));

//ver 2
function convert2(dec1, dec2, dec3) {
  let hex = dec1.toString(16) + dec2.toString(16) + dec3.toString(16);
  return hex;
}
console.log(convert2(230, 45, 56));

//ver 2.1
function convert3(dec1, dec2, dec3) {
  return dec1.toString(16) + dec2.toString(16) + dec3.toString(16);
}
console.log(convert3(230, 45, 56));

document.write(convert(230, 45, 56), "<br>", convert2(230, 45, 56), "<br>",  convert3(230, 45, 56));