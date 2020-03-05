const chainMaker = {

  chain: [],
  
  getLength() {
    this.chain.length;
    return this;
  },

  addLink(value) {
    if ( typeof(value) == 'undefined') {
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${value} )`); 
    } 
    return this;
  },

  removeLink(position) {
    if ( typeof( position ) == 'number' & position > 0 & position < this.chain.length) {
      this.chain.splice(position-1, 1);
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let str = this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
