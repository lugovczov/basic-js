module.exports = function transform(arr) {

    let res = [];
    
    if ( Array.isArray(arr) === false) {
        return error;
    }

    for ( let i = 0; i < arr.length; i++) {
        if (arr[arr.length-1] == '--discard-next') {
            arr.splice(-1, 1); 
        } else if (arr[0] == '--discard-prev') {
            arr.splice(0, 1);  
        } else if (arr[arr.length-1] == '--double-next') {
            arr.splice(-1, 1); 
        } else if(arr[0] == '--double-prev') {
            arr.splice(0, 1); 
        }
    }
    
    for ( let i = 0; i < arr.length; i++) {
        
        if (arr[i] === '--discard-next' & arr[i + 2] === '--double-prev') {
            res.push(arr[i+1]) & i++ & i++;
        } else if (arr[i] === '--double-next' & arr[i + 2] === '--discard-prev') {
            res.push(arr[i+1]) & i++ & i++;
        } else if (arr[i] == '--double-next') {
            res.push(arr[i+1]);
        } else if(arr[i] == '--double-prev') {
            res.push(arr[i-1]) ; 
        } else if (arr[i] == '--discard-next') {
            i++;
        } else if (arr[i] == '--discard-prev') {
            res.pop();
        } else {
            res.push(arr[i]);
        }
    }

    return res;

  
};
