
function isValidAnagram(str1, str2){
   return str1.split('').sort().join('') === str2.split('').sort().join('')
} 

isValidAnagram('bat', 'tab')
isValidAnagram('bat', 'taab')
isValidAnagram('nagaram', 'anagram')

// a function to create a simple
// frequency counter using a map
function createFrequencyCounter(array) {
    let frequencies = new Map();
  
    for (let val of array) {
      let valCount = frequencies.get(val) || 0;
      frequencies.set(val, valCount + 1);
    }
  
    return frequencies;
  }
  


function isValidAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    const charMap1 = createFrequencyCounter(str1);
    const charMap2 = createFrequencyCounter(str2);
    if(charMap1.size !== charMap2.size) return false
    for(let letter of charMap1.keys()){
        if(charMap2.get(letter) !== charMap1.get(letter)) return false;
    }
    return true;
}

isValidAnagram('bat', 'tab')
isValidAnagram('bat', 'taab')
isValidAnagram('nagaram', 'anagram')