function bytesToAscii(byteArray){
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
}

//Example usage
const bytes = [72, 101, 108, 112, 111];
const asciiString = bytesToAscii(bytes);
console.log(asciiString);
