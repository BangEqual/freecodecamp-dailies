function spookify(val) {
    let arr = val.split('');
    let caseUp = true;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === '_' || arr[i] === '-') {
            arr[i] = '~';
        }
        if (arr[i] === '~') {
            continue;
        }
        if (caseUp) {
            arr[i] = arr[i].toUpperCase();
        } else {
            arr[i] = arr[i].toLowerCase();
        }
        caseUp = !caseUp;
    }

    return arr.join('');
}

module.exports = spookify;