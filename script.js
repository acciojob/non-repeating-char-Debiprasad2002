function firstNonRepeatedChar(str) {
  // Create an empty object to store character frequencies
  const charCount = {};

  // Iterate through the string to count character frequencies
  for (const char of str) {
    // If the character is not in the object, initialize its count to 1
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      // If the character is already in the object, increment its count
      charCount[char]++;
    }
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null
