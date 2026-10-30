function sequence(n) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(i+1);
    }
    return arr.join('');
}

module.exports = sequence;