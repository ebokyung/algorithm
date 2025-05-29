/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const choices = ['A','C','G','T']
    const geneBank = new Set(bank)

    // if(!geneBank.has(endGene)) return -1

    const queue = [[startGene, 0]]
    const seen = new Set()
    seen.add(startGene)

    while (queue.length > 0){
        [currGene, mutations] = queue.shift()

        if(currGene === endGene) return mutations

        for(let i=0; i<startGene.length; i++){
            for(let char of choices){
                if(char === currGene[i]) continue;

                const curr = currGene.split('')
                curr[i] = char
                const newGene = curr.join('')

                if(!seen.has(newGene) && geneBank.has(newGene)){
                    seen.add(newGene)
                    queue.push([newGene, mutations+1])
                }
            }
        }
    }

    return -1
};