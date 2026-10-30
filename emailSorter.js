function sort(emails) {
    emails.sort((a, b) => a.localeCompare(b, 'en', { 'sensitivity': 'base' }));
    emails.sort((a, b) => {
        return a.split('@')[1].toLowerCase().localeCompare(b.split('@')[1].toLowerCase());
    });
    return emails;
}

module.exports = sort;