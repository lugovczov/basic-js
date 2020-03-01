module.exports = function createDreamTeam(members) {
  let res = [];
  
  if ( Array.isArray(members) === true ) {
    members = members.filter( a => a === `${a}` );
    members = members.map( a => a = a.replace(/\s+/g, ' ').trim());
    members.forEach( a => res.push(a[0]));
    res = res.map( a => a.toUpperCase());

    res = res.sort().join('').split();
    return res;
    } else {
      return false;
  }

};