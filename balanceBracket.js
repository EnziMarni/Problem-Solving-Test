function isBalanced(str) {
  const stack = []; //array stack
  const openingBrackets = ["(", "[", "{"]; //inisialisasi tipe constan
  const closingBrackets = [")", "]", "}"];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (openingBrackets.includes(currentChar)) {
      stack.push(currentChar); //jika karakter saat ini adalah tanda kurung pembuka, tambahkan ke dalam stack
    } else if (closingBrackets.includes(currentChar)) {
      const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(currentChar)]; //mencari tanda kurung pembuka yang sesuai
      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return "NO"; //jika stack kosong atau tanda kurung tidak cocok  maka akan di outputkan NO
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO"; //Jika stack kosong, kembalikan 'yes', jika tidak kembalikan No
}

console.log(isBalanced("{[()]}")); // Akan menghasilkan Output: YES
console.log(isBalanced("{[(])}")); // Menghasilkan Output: NO
console.log(isBalanced("{(([])[])[]}")); // Menghasilkan Output: YES
