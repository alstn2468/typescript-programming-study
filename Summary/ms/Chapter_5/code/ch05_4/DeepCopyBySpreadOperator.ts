const oArray = [1, 2, 3, 4];
const deepCopiedArray = [...oArray];
deepCopiedArray[0] = 0;
console.log(oArray, deepCopiedArray); // [ 1, 2, 3, 4 ] [ 0, 2, 3, 4 ]
