console.log(max(2, 2));
console.log(isLandscape(2, 2));

function max(a, b) {
    return a > b ? a : b;
}

function isLandscape(width, height) {
    return width > height;
}