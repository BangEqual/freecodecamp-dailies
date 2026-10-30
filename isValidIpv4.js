function isValidIPv4(ipv4) {
    let val = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test(ipv4);
    if (val) {
        let octets = ipv4.split('.');
        for (let i = 0; i < octets.length; i++) {
            if (octets[i].indexOf('0') === 0 && octets[i].length > 1) {
                val = false;
                break;
            }
            if (parseInt(octets[i], 10) > 255) {
                val = false;
                break;
            }
        }
    }
    return val;
}

module.exports = isValidIPv4;