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
      let newDNACompare = newDNA.shift();
      let currentDNACompare = currentDNA.shift()
      console.log(newDNA)
      console.log(currentDNA)
      console.log(newDNACompare);
      console.log(currentDNACompare);  
    }
  }
  return obj;
}

let answer = pAequorFactory(12, mockUpStrand());
let answer2 = pAequorFactory(12, mockUpStrand());
console.log(answer)
answer.compareDNA(answer2);








