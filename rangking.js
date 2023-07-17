function denseRanking(playerScores, gitsScores) {
  // Menghapus duplikat skor dan mengurutkannya secara menurun
  const uniqueScores = [...new Set(playerScores)].sort((a, b) => b - a);
  //menghasilkan array unik dengan skor pemain, dan diurutkan menurun
  const rankings = []; //menginisialisasi array untuk menyimpan peringkat

  // Menentukan peringkat untuk setiap skor GITS
  for (let i = 0; i < gitsScores.length; i++) {
    let rank = 1; //inisialisasi peringkat awal

    //membandingkan  skor GITS dengan skor pemain lain
    for (let j = 0; j < uniqueScores.length; j++) {
      if (gitsScores[i] < uniqueScores[j]) {
        rank++; //jika skor gits lebih kecil peringkat ditambah
      } else {
        break; //jika skor gits sudah  lebih dari pemain lain, maka keluar dari perulangan
      }
    }

    rankings.push(rank); //menambahkan peringkat ke dalam array peringkat
  }

  return rankings; //mengembalikan nilai array peringkat
}

const playerScores = [100, 100, 50, 40, 40, 20, 10];
const gitsScores = [5, 25, 50, 120];
const result = denseRanking(playerScores, gitsScores);

console.log("Output:", result.join(" "));
