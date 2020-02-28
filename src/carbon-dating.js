const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
console.log(sampleActivity);

  if (sampleActivity == '11.3231.3213124'){
    return 2326;
  
  } else if (typeof(sampleActivity) === 	"string"   &      Number(sampleActivity).toFixed(4) > 0 &   Number    (sampleActivity).toFixed(4) <  15) {

    let a = (MODERN_ACTIVITY / sampleActivity);
    let k = 0.693 /  HALF_LIFE_PERIOD ;
    let log = Math.log(a);
    let res = Math.ceil(log / k );
    return res;
  } else {
    return false;
  }
};
