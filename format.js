function format(n) {
    let minutes = Math.floor((n/60%60)).toString(10);
    let hours = Math.floor(n/60/60%60).toString(10);
    let seconds = (n%60).toString(10);
    let time = [];

    if (hours != '0') {
        time.push(hours);
        minutes = minutes.padStart(2, '0');
    }

    seconds = seconds.padStart(2, "0");
    
    time.push(minutes);
    time.push(seconds);
    return time.join(':');
}

module.exports = format;