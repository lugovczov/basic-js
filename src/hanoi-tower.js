module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    let a = 2 ** disksNumber - 1;
    let b = a / (turnsSpeed / 3600);

    let obj = {turns: a, seconds: b};

    return obj;
}   