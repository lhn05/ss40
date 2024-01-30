function printLocalStorageValues() {
    let keys = Object.keys(localStorage);
    keys.forEach(function(key) {
        let value = localStorage.getItem(key);
        console.log(key + ": " + value);
        document.write(key + ": " + value);
    });
}
printLocalStorageValues();
