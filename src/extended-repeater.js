module.exports = function repeater(str, {

    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',

}) {

    let arrAddition = new Array(additionRepeatTimes);
    let arrRes = new Array(repeatTimes);

    arrAddition.fill(`${addition}`);

    strAdd = arrAddition.join(additionSeparator);

    arrRes.fill(`${str+strAdd}`);

    strRes = arrRes.join(separator);
    
    return strRes;
};
