// Dibuat otomatis oleh update.py dari keterangan.xlsx — jangan diedit manual.
// KETERANGAN[kode] = [alias, keterangan]
const KETERANGAN = {
 "1010501004": [
  "Rampasan Motor, Mobil, Handphone, dan peralatan dan mesin lainnya",
  "Persediaan rampasan berupa peralatan, mesin, kendaraan, komputer, dan aset sejenis"
 ],
 "1010501007": [
  "Rampasan saham",
  "Persediaan rampasan berupa aset yang tidak berwujud seperti surat berharga saham, obligasi, sukuk, kripto, hak cipta, paten, desain industri, dan lain-lain. Saat ini yang boleh dicatat hanya saham saja."
 ],
 "1010501008": [
  "Rampasan kayu, bbm, tabung gas",
  "Persediaan rampasan berupa bahan baku (kayu, semen, kaca, pasir, batu, cat, baja, besi, nikel, biji plastik, tanah yang mengandung emas), bahan kimia, bahan peledak, bahan bakar dan pelumas, suku cadang, flashdisk, micro SD, harddisk, pakan hewan, pupuk, pipa, tabung gas, limbah/scrap, dan lain-lain"
 ],
 "3010304003": [
  "Genset, Jenset",
  "Mesin pembangkit listrik yang mengubah energi mekanik menjadi energi listrik, biasanya digunakan sebagai sumber listrik cadangan saat listrik utama padam."
 ],
 "3020101003": [
  "Mobil, Innova, Avanza",
  "Kendaraan bermotor beroda empat dengan bodi tertutup, memiliki kabin tempat duduk penumpang dan pengemudi, dilengkapi dengan mesin di bagian depan atau belakang, serta jendela dan pintu untuk keluar masuk. Contohnya Mobil Innova, Avanza, Rush, Fortuner dll, yang dapat mengangkut 7 penumpang ke bawah"
 ],
 "3020102003": [
  "Minibus",
  "Kendaraan bermotor beroda empat atau lebih dengan bentuk lebih panjang dari mobil biasa, berkapasitas hingga 14 penumpang. contoh, hiace, elf dll"
 ],
 "3020103002": [
  "Pickup, Hilux, Triton",
  "Pickup (atau pickup truck) adalah jenis kendaraan bermotor yang memiliki kabinnya tertutup di depan untuk penumpang, dan bagian belakangnya terbuka (bak) untuk mengangkut barang."
 ],
 "3020104001": [
  "Sepeda motor, Motor bebek,",
  "Sepeda motor adalah kendaraan bermotor beroda dua yang dirancang untuk dikendarai oleh satu atau dua orang, dan digunakan sebagai alat transportasi yang cepat dan praktis di jalan raya."
 ],
 "3020104002": [
  "Sepeda motor matic, motor matic, skutik, skuter matic",
  "Skuter (scooter) adalah kendaraan bermotor beroda dua dengan desain lantai pijakan kaki yang datar dan bodi ringan, yang digunakan untuk transportasi praktis dan efisien."
 ],
 "3020104006": [
  "Motor listrik",
  "Sepeda motor listrik adalah kendaraan roda dua yang menggunakan motor listrik dan baterai sebagai sumber tenaga, sehingga lebih ramah lingkungan dan hemat energi dibandingkan sepeda motor berbahan bakar bensin."
 ],
 "3020104007": [
  "Sepeda listrik",
  "Sepeda listrik adalah sepeda yang dilengkapi dengan motor listrik dan baterai sebagai tenaga tambahan, sehingga dapat dikayuh seperti sepeda biasa atau dijalankan dengan bantuan motor untuk mempermudah perjalanan."
 ],
 "3020104008": [
  "Motor Listrik, Skuter listrik",
  "Skuter listrik adalah kendaraan ringan beroda dua dengan lantai pijakan kaki yang digerakkan oleh motor listrik dan baterai, biasanya digunakan untuk jarak pendek di area perkotaan secara praktis dan ramah lingkungan."
 ],
 "3020105020": [
  "Mobil tahanan, bus tahanan",
  "Kendaraan bermotor berbentuk seperti minibus atau truk yang dimodifikasi khusus dengan jeruji atau ruang tahanan di dalamnya, digunakan oleh aparat keamanan untuk mengangkut narapidana atau tersangka secara aman dari satu tempat ke tempat lain."
 ],
 "3020105132": [
  "Motor trail, sepeda motor trail",
  "Motor trail adalah sepeda motor beroda dua yang dirancang khusus untuk melintasi medan berat atau off-road, dengan suspensi tinggi, ban bergerigi, dan rangka yang kuat agar dapat digunakan di jalan berbatu, berlumpur, atau pegunungan."
 ],
 "3020105133": [
  "Mobil listrik, mobil EV",
  "Mobil listrik adalah kendaraan roda empat yang digerakkan oleh motor listrik dan menggunakan baterai sebagai sumber energi, sehingga ramah lingkungan karena tidak menghasilkan emisi gas buang."
 ],
 "3050104001": [
  "Lemari besi, lemari penyimpan",
  "Lemari besi adalah furnitur berbentuk kotak yang terbuat dari bahan logam atau baja, digunakan untuk menyimpan dokumen, barang berharga, atau peralatan, dan sering dipakai di perkantoran, sekolah, atau tempat yang membutuhkan keamanan dan ketahanan tinggi."
 ],
 "3050104002": [
  "Lemari kayu, lemari penyimpan",
  "Lemari kayu adalah furnitur berbentuk kotak yang terbuat dari kayu, digunakan untuk menyimpan berkas, barang, atau peralatan rumah tangga, dan biasanya dilengkapi pintu serta rak di dalamnya."
 ],
 "3050104007": [
  "Brankas, Brangkas, Brankas",
  "Brandkas adalah lemari penyimpanan berbahan logam yang dirancang khusus untuk menyimpan barang berharga, dokumen penting, atau uang, dan dilengkapi dengan sistem penguncian yang kuat serta tahan terhadap api (fireproof) dan upaya pencurian."
 ],
 "3050105007": [
  "CCTV",
  "CCTV adalah sistem kamera video yang digunakan untuk memantau, merekam, dan mengawasi suatu area secara langsung, biasanya dipakai untuk tujuan keamanan di rumah, kantor, atau tempat umum."
 ],
 "3050105099": [
  "Digital signage, interaktif kios",
  "Digital signage adalah media tampilan digital berupa layar elektronik yang digunakan untuk menyampaikan informasi, promosi, atau iklan secara visual dan dinamis, biasanya dipasang di tempat umum seperti pusat perbelanjaan, bandara, kantor, atau restoran."
 ],
 "3050201003": [
  "Kursi Kantor, kursi kerja",
  "Kursi Kantor yang berbahan Besi/Metal"
 ],
 "3050201005": [
  "Sofa sudut, sice, sofa",
  "jenis sofa berbentuk huruf L atau U yang dirancang untuk diletakkan di sudut ruangan, sehingga dapat memaksimalkan ruang dan memberikan tempat duduk lebih banyak."
 ],
 "3050201033": [
  "Sofa tunggal, kursi sofa",
  "Sofa adalah kursi panjang berlapis busa dan kain atau kulit, biasanya memiliki sandaran dan lengan, yang dirancang untuk diduduki beberapa orang sekaligus."
 ],
 "3050204004": [
  "AC Split, AC",
  "Perangkat pendingin udara dengan dua unit terpisah, yaitu indoor dan outdoor, yang dipasang permanen dan mampu mendinginkan ruangan secara efisien dan senyap."
 ],
 "3050204005": [
  "AC Portable, AC Standing",
  "AC portabel adalah alat pendingin udara yang berbentuk seperti kotak berdiri dan dapat dipindah-pindahkan dengan mudah, tanpa perlu dipasang permanen di dinding seperti AC split."
 ],
 "3050206002": [
  "TV, televisi",
  "Televisi adalah perangkat elektronik berbentuk kotak dengan layar yang digunakan untuk menampilkan gambar dan suara dari siaran atau media lain, sehingga memungkinkan pengguna menonton acara hiburan, berita, dan informasi lainnya."
 ],
 "3050206046": [
  "handy cam, handycam",
  "Handycam adalah kamera video berbentuk kecil dan ringan yang dirancang agar mudah digenggam dengan satu tangan, digunakan untuk merekam video dan audio secara praktis, serta menyimpannya dalam format digital."
 ],
 "3050206058": [
  "",
  "Gordyn adalah tirai atau kain penutup jendela yang digantung untuk mengatur cahaya masuk, memberikan privasi, serta menambah estetika ruangan, dan biasanya terbuat dari bahan kain tebal atau tipis sesuai kebutuhan."
 ],
 "3060102128": [
  "kamera, tustel, DSLR",
  "Perangkat elektronik berbentuk kotak kecil dengan lensa di bagian depan, layar di belakang, dan tombol pengatur di sekitarnya, yang digunakan untuk mengambil foto dan video serta menyimpannya dalam format digital."
 ],
 "3060102167": [
  "drone",
  "Drone adalah pesawat tanpa awak yang dikendalikan dari jarak jauh, biasanya dilengkapi kamera atau sensor, dan digunakan untuk berbagai keperluan seperti pemotretan udara, pemantauan, pengiriman barang, hingga kegiatan militer dan pertanian."
 ],
 "3060102168": [
  "Videotron, vidiotron, vidiowall",
  "Videotron adalah layar elektronik berukuran besar yang menggunakan teknologi LED untuk menampilkan gambar, video, atau teks secara dinamis, dan biasanya digunakan untuk media iklan, informasi publik, atau tampilan acara di ruang terbuka maupun dalam ruangan."
 ],
 "3070112002": [
  "kursi roda",
  "alat bantu berbentuk kursi dengan roda, yang dirancang khusus untuk membantu penyandang disabilitas atau orang dengan keterbatasan mobilitas agar dapat berpindah tempat dengan lebih mudah dan mandiri."
 ],
 "3100102001": [
  "Komputer, PC AIO, PC",
  "Komputer adalah perangkat elektronik berbentuk kotak dengan layar, keyboard, dan komponen lainnya, yang berfungsi untuk mengolah data, menjalankan program, serta membantu pekerjaan seperti mengetik, menghitung, mengakses internet, dan menyimpan informasi."
 ],
 "3100102002": [
  "Laptop, leptop",
  "Laptop adalah komputer berbentuk ringkas dan dapat dilipat, yang dirancang untuk mudah dibawa serta digunakan untuk berbagai keperluan seperti mengetik, mengakses internet, belajar, dan bekerja."
 ],
 "3100203003": [
  "Printer",
  "Printer adalah perangkat keras komputer yang digunakan untuk mencetak teks atau gambar dari file digital ke media fisik, seperti kertas."
 ],
 "3100203004": [
  "Scanner",
  "Scanner adalah perangkat elektronik yang digunakan untuk memindai dokumen, foto, atau gambar fisik dan mengubahnya menjadi format digital yang dapat disimpan dan diedit di komputer."
 ],
 "3100203018": [
  "Interactive board",
  "Papan digital berbentuk layar sentuh yang dapat menampilkan materi dari komputer dan memungkinkan pengguna berinteraksi langsung melalui sentuhan atau pena digital, sering digunakan di ruang kelas, kantor, atau presentasi untuk meningkatkan partisipasi dan pemahaman."
 ],
 "6010101003": [
  "buku bacaan, buku",
  "Buku adalah kumpulan lembaran tercetak atau ditulis, dijilid, berisi informasi atau ilmu pengetahuan, yang digunakan sebagai sarana pendidikan, referensi, atau dokumentasi"
 ],
 "6070301001": [
  "renovasi gedung, rehab gedung, rehabilitasi",
  "Kode barang ini umumnya digunakan untuk penerimaan hibah / belanja berupa renovasi pada gedung dan bangunan seperti renovasi gedung, aula, rumah negara dll"
 ]
};
