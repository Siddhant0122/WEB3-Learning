function asciiToBytes(asciiString){
    return new Uint8Array([...asciiString.map(char => char.charCodeAt(0))]);
}

//example usage
const asciiString = "Lets Go!";
const byteArray = asciiToBytes(asciiString);
console.log(byteArray);
