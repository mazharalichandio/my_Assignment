var perrsonName = "mazhar Ali";
console.log(perrsonName.toLowerCase());
console.log(perrsonName.toUpperCase());
console.log(perrsonName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
