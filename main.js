// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory( num, array ) {
  let obj = {
    specimenNum: num,
    dna: array,
    mutate () {
      let index =  Math.floor(Math.random() * this.dna.length );
      let oldBase = this.dna[index]
      let newBase = returnRandBase()
      while ( oldBase === newBase ) {
        newBase = returnRandBase();
      }
      this.dna.splice( index, 1, newBase )
      return this.dna;
    },
    compareDNA ( obj ) {
      let newDNA = obj.dna;
      let currentDNA = this.dna;
      let sameDNA = [];
      for ( let i = 0; i < newDNA.length; i++ ) {
        let newDNACompare = newDNA.shift();
        let currentDNACompare = currentDNA.shift();
        if ( newDNACompare === currentDNACompare ) {
          sameDNA.push(newDNACompare)
        }
      } 
      let answer = (100 / currentDNA.length ) * sameDNA.length;
      console.log('specimen #1 and specimen #2 have ' + Math.round(answer) + '% DNA in common.')
    }, 
    willLikelySurvive () {
      let DNA = this.dna; 
      let DNALength = DNA.length;
      let results = [];
      for ( let i = 0; i < DNA.length; i ++ ) {
        let current = DNA[i];
        if ( current === 'C' || current === 'G' ) {
          results.push(current);
        }
      }
      let resultsLength = results.length; 
      let answer = (100 / DNALength) * resultsLength;
      if (Math.round(answer) >= 60 ) {
        return true;
      } else {
        return false;
      }
      
    }
  }
  return obj;
}

function test() {
  let instances = [];
  let i = 1;
  while ( instances.length < 30 ) {
    let instance = pAequorFactory( i , mockUpStrand() );
    let answer = instance.willLikelySurvive()
    if ( answer ) {
      instances.push(instance)
      i++
    }
  }
  return instances;
}

console.log(test())








