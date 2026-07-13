//duplicating even number 

const arr = [1, 2, 3, 4, 0, 5]

function duplicateEvenNumber(arrd) {
 let evenNumberCount = 0
 for (let num = 0; num < arrd.length; num++) {
      if (arrd[num]%2 ===0) {
        evenNumberCount++
      }
    }
      let originalLength = arrd.length
      arrd.length = originalLength + evenNumberCount
      let i = originalLength -1
      let j = arrd.length - 1

      while (i>=0) {
        if (arrd[i]%2===0) {
          arrd[j]=arrd[i]
          j--
          arrd[j]=arrd[i]
          j--
        } else {
           arrd[j]=arrd[i]
          j--
        }
      i--
        
      }
      return arrd
  
 

}
console.log(duplicateEvenNumber(arr));
