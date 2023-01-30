function vowelCount(input) {
  const vowels = "aeiou";
  const vowCount = new Map([
    ["a", 0],
    ["e", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0],
  ]);

  for (var i = 0; i < input.length; i++) {
    letter = input[i].toLowerCase();

    if (vowels.indexOf(letter) > -1) {
      vowCount.set(letter, vowCount.get(letter) + 1);
    }
  }

  return vowCount;
}

console.log(vowelCount("bcAuai$aaes^aaoq")); // Map(5) { 'a' => 6, 'e' => 1, 'i' => 1, 'o' => 1, 'u' => 1 }
