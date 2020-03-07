module.exports = class DepthCalculator {
    calculateDepth(arr, j = 1, arrRes = []) {
                
        arrRes.push(j);

        for( let key of arr) {
            if (Array.isArray(key) === true){ 
                this.calculateDepth(key, j + 1, arrRes );
            } 
        };
        
        arrRes.sort( (a, b) => a - b);
        
        return arrRes[ arrRes.length - 1 ];
        
    }
};