function navigate(commands) {
    const start = 'Home';
    let prev = [];
    const history = [start];
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];
        if (command.indexOf("Visit ") == 0) {
            let val = command.substring(6);
            history.push(val);
            prev = [];
        }
        if (command === 'Back') {
            if (history.length > 1) {
                prev.push(history.pop());
            }
        }
        if (command === 'Forward') {
            if (prev.length) {
                history.push(prev.pop());
            }
        }
    }

    let page = history.pop();
    return page;
}

module.exports = navigate;