/* const core = (tab,type) => {
  if(Array.isArray(tab)) {
    if(type ==="croissant") {
      for (let index = 0; index < tab.length; index++) {
        let indexMin = index
  
        for (let index2 = index+1; index2 < tab.length; index2++) {
          if(tab[indexMin] > tab[index2]) {
            indexMin = index2
          }
          
        }
  
        if(indexMin != index) {
          let save = tab[index]
          tab[index] = tab[indexMin]
          tab[indexMin] = save
        }
      }
    }
    else {
      for (let index = 0; index < tab.length; index++) {
        let indexMax = index
  
        for (let index2 = index+1; index2 < tab.length; index2++) {
          if(tab[indexMax] < tab[index2]) {
            indexMax = index2
          }
          
        }
  
        if(indexMax != index) {
          let save = tab[index]
          tab[index] = tab[indexMax]
          tab[indexMax] = save
        }
        
      }
    }
  }
  else {
    alert('tableau invalide')
  }
}

const triCroissant = (tab) => {
  core(tab,'croissant')
} 


const triDecroissant  = (tab) => {
  core(tab,"decroissant")
}


const estPremier = (nbre) => {
  nbre = Number(nbre)
  
  for (let index = 2; index < nbre - 1; index++) {
    if(nbre % index == 0) {
      return false
    }
    
  }
  return true
}

const factorielle  = (nbre) => {
  let fact = 1
  if(nbre == 0 || nbre == 1) {
    fact = 1
  }
  else {
    fact = nbre * factorielle(nbre - 1)
  }
  return fact
}


console.log(factorielle(4)) */




const twoSUm  = (nums,target) => {
  if(Array.isArray(nums))
  target = Number(target)
  const output = []

  for (let index = 0; index < nums.length; index++) {
    
    if(nums[index] + nums[index+1] == target) {
      output.push(index,index+1)
    }

  }

  return output

}

const addTwoNumber = (l1,l2) => {
  if(Array.isArray(l1) && Array.isArray(l2)) {
   
   let nbreL1 = ''
   for (let index = 0; index < l1.length; index++) {
    const element = l1[index];
    nbreL1 = element + nbreL1 
   }
   let nbreL2 = ''
   for (let index = 0; index < l2.length; index++) {
    const element = l2[index];
    nbreL2 = element + nbreL2 
   }
  
   let somme = Number(nbreL1) + Number(nbreL2)
   console.log(somme)
   somme = somme + ''
   somme = [...somme]

   const result = somme.reverse()
   return result
   
   
  }
}


const addTwoNumberV2 = (l1,l2) => {
  if(Array.isArray(l1) && Array.isArray(l2)) {
    l1 = l1.reverse()
    l2 = l2.reverse()
    let nbreL1 = l1.join('')
    let nbreL2 = l2.join('')
    let somme = Number(nbreL1) + Number(nbreL2)
    somme = somme + ''
    somme = [...somme]
    let resultat = somme.reverse()
    return resultat
  }
}

const sous_chaine = (chaine) => {
  if(typeof chaine === 'string') {
    const sousChaine = []
    let svg = ''
    for (let index = 0; index < chaine.length; index++) {
      const element = chaine[index];
      svg = element
      svgIndex = index
      for (let index2 = index + 1; index2 < chaine.length; index2++) {
        const element2 = chaine[index2];
        if(chaine[index] !== element2) {
          if(!svg.includes(element2)) {
            svg = svg + element2
          }
        }
        else {
          break
        }
        index++
      }
      index = svgIndex
      sousChaine.push(svg)
      svg = ''
    }
    let maxi = 0
    maxi = sousChaine[0].length
    for (let index = 0; index < sousChaine.length; index++) {
      const element = sousChaine[index];
      
      if(maxi < sousChaine[index].length ) {
        maxi = sousChaine[index].length
      }
    }
    return maxi
  }
}

console.log('foncion sous chaine',sous_chaine('pwwkew'))

const l1 = [2,4,3]
const l2 = [5,6,4]
console.log(addTwoNumberV2(l1,l2))
//console.log(twoSUm([3,2,4,7,11,15],6))