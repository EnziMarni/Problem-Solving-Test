const readline = require("readline"); //melakukan import modul readline

function calculateSequence(n) {
  let result = [1]; //inisialisasi array result dengan elemen awal adalah 1
  let currentNum = 1; //inisialisasi currentNum dengan nilai 1

  for (let i = 2; i <= n; i++) {
    //dilakukan perulangan loop untuk menghasilkan elemen-elemen berikutnya
    currentNum += i - 1; //menambah nilai i-1 ke currentNum
    result.push(currentNum); //menambahkan currentNum ke dalam array result
  }

  return result; //mengembalikan urutan bilangan
}

const rl = readline.createInterface({
  //membuat antar muka user dan penulisan di terminal
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input: ", (answer) => {
  //meminta nilai input
  const input = parseInt(answer); //mengubah input menjadi angka dan menyimpan dalam variabel input
  const sequence = calculateSequence(input); //memanggil fungsi calculateSequence

  console.log("Output:", sequence.join("-")); //mencetak hasil urutan bilangn

  rl.close(); //menutup antarmuka readline
});
