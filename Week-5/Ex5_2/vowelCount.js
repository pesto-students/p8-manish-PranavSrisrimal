function vowelCount(input) {
  const vowels = ['a','e','i','o','u'];
  const vowCount = new Map();

  for (var i = 0; i < input.length; i++) {
    letter = input[i].toLowerCase();

    if (vowels.includes(letter)) {

        if ((vowCount.get(letter) == undefined)){
                vowCount.set(letter, 0);
                vowCount.set(letter, vowCount.get(letter) + 1);
        } 
    
        else {
        vowCount.set(letter, vowCount.get(letter) + 1);
        }        
    }
  }  

  return vowCount;
}

console.log(vowelCount("AbcaaaEEuuIi^&oo")); // Map(5) { 'a' => 4, 'e' => 2, 'u' => 2, 'i' => 2, 'o' => 2 }
