ukuran kompleksitas kodingan nomor 3
Kompleksitas Waktu
-Loop for yang berjalan sebanyak n kali, di mana n adalah panjang dari string 'str'.
-Setiap proses di dalam loop, seperti push, pop, dan length pada stack, membutuhkan waktu yang konstan yaitu O(1).
-Tidak ada nested loop atau operasi yang berulang berdasarkan ukuran input.
-Sebagai hasilnya, kompleksitas waktu keseluruhan adalah O(n), di mana n adalah panjang dari string str.

-Kompleksitas Ruang (Space Complexity):
-Stack digunakan untuk menyimpan tanda kurung pembuka yang belum ditutup.
-Jumlah elemen dalam stack pada kasus terburuk adalah sebanyak jumlah tanda kurung pembuka dalam string str.
-Dalam kasus terburuk, jika semua tanda kurung adalah tanda kurung pembuka, maka kompleksitas ruangnya adalah O(n), di mana n adalah panjang dari string str.
-Namun, kompleksitas ruang tersebut sering diabaikan dalam analisis kompleksitas umum karena biasanya jauh lebih kecil dibandingkan dengan kompleksitas waktu.
-Jadi, ukuran kompleksitas kodingan nmr 3  adalah O(n) untuk waktu dan O(n) untuk ruang.
