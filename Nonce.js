const crypto = require("crypto");
//nonce 
let xyz1 = 0;
let nonce = 0;
while (true) {
    const input2 = "100abxyz" + xyz1.toString();
    const hash2 = crypto.createHash('sha256').update(input2).digest("hex");
    if (hash2.startsWith("00000")) {
        nonce++;
        console.log("Hash : " + hash2 + " \n" + "Number : " + input2);
        if (nonce > 2) {
            break;
        }
    }
    xyz1++;
}