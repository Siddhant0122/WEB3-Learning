const crypto = require("crypto");

const input = "100abxyz";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);

//starts with 00000
let xyz = 0;
let count = 0;
while (true) {

    const input1 = xyz.toString();
    const hash1 = crypto.createHash('sha256').update(input1).digest("hex");
    if (hash1.startsWith("00000")) {
        count++;
        console.log("Hash : " + hash1 + " \n" + "Number : " + input1);
        if (count > 2) {
            break;
        }
    }
    xyz++;
}
