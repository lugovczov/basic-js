module.exports = function getSeason(date) {
  
  if ( date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Date.parse(date) != (Date.parse(full(date)))) {
    return season(date);
  } else if (full(date) == undefined) {
    return 'Error';
  } else {
    return 'Error';
  }

  function full(date) {  
    let y =  date.getYear() + 1900;
    let m =  date.getMonth() + 1;

    if (m < 10) {
      m = '0' + `${m}`;
    }
    
    let d =  date.getDate();
    let h =  date.getHours() - 3;
    let min =  date.getMinutes();
    let s =  date.getSeconds();
    let ms =  date.getMilliseconds();

    return `${y}-${m}-${d}T${h}:${min}:${s}.${ms}Z`;
  }

  function season(date) {

    if (date.getMonth() == 0) {
      return 'winter';
    }
       
    if (date.getMonth() == 1) {
      return 'winter';
    }

    if (date.getMonth() == 11) {
      return 'winter';
    }

    if (date.getMonth() == 2) {
      return 'spring';
    }

    if (date.getMonth() == 4) {
      return 'spring';
    }

    if (date.getMonth() == 3) {
      return 'spring';
    }

    if (date.getMonth() == 5) {
      return 'summer';
    }

    if (date.getMonth() == 6) {
      return 'summer';
    }

    if (date.getMonth() == 7) {
      return 'summer';
    }

    if (date.getMonth() == 9) {
      return 'autumn';
    }

    if (date.getMonth() == 10) {
      return 'autumn';
    }

    if (date.getMonth() == 8) {
      return 'autumn';
    }


  }
};
