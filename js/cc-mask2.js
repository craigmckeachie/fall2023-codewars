function maskify(cc) {
  numberToDisplay = 4;
  if (cc.length <= numberToDisplay) {
    return display(cc, numberToDisplay);
  } else {
    return mask(cc,numberToDisplay) + display(cc, numberToDisplay);
  }
}

function mask(cc, numberToDisplay) {
  return "#".repeat(cc.length - numberToDisplay);
}

function display(cc, numberToDisplay) {
  return cc.substr(-numberToDisplay);
}

console.log(maskify("12345"));
