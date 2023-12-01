function maskify(cc) {
  if (cc.length <= 4) {
    return last4(cc);
  } else {
    return mask(cc) + last4(cc);
  }
}

function mask(cc) {
  return "#".repeat(cc.length - 4);
}

function last4(cc) {
  return cc.substr(-4);
}

console.log(maskify("12345"));
