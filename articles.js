const IMG={
  security:'assets/security.jpg',
  devices:'assets/device.jpg',
  phone:'assets/phone.jpg',
  password:'assets/password.jpg',
  email:'assets/email.jpg',
  gaming:'assets/gaming.jpg',
  passkey:'assets/cybersecurity.jpg', 
  cybersecurity: 'assets/cybersecurity.jpg',
};
const OFF={
  google:'https://accounts.google.com/signin/recovery',
  googleSecurity:'https://myaccount.google.com/security',
  google2fa:'https://myaccount.google.com/signinoptions/two-step-verification',
  instagram:'https://www.instagram.com/hacked/',
  instagramHelp:'https://help.instagram.com/',
  tiktok:'https://support.tiktok.com/en/log-in-troubleshoot',
  whatsapp:'https://faq.whatsapp.com/',
  discord:'https://support.discord.com/hc/en-us',
  facebook:'https://www.facebook.com/hacked/',
  x:'https://help.x.com/en/forms/account-access/regain-access',
  telegram:'https://telegram.org/faq',
  snapchat:'https://help.snapchat.com/',
  ff:'https://ffsupport.garena.com/',
  ml:'https://support.moonton.com/',
  pubg:'https://support.pubgmobile.com/',
  roblox:'https://www.roblox.com/support',
  minecraft:'https://help.minecraft.net/',
  genshin:'https://www.hoyolab.com/article/23709'
};
const SECURITY_IMAGES = {
  'security-strong-password': IMG.password,
  'security-2fa': IMG.security,
  'security-passkey': IMG.password,
  'security-recovery-email': IMG.email,
  'security-recovery-phone': IMG.phone,
  'security-phishing': IMG.email,
  'security-fake-login-link': IMG.email,
  'security-malicious-apps': IMG.devices,
  'security-foreign-session': IMG.devices,

  'security-hacked-signs': IMG.cybersecurity,
  'security-after-hack': IMG.cybersecurity,
  'security-prevent-repeat': IMG.cybersecurity,

  'security-checklist': IMG.security
};
function getSecurityImage(slug){
  return SECURITY_IMAGES[slug] || IMG.security;
}
function article(slug,title,category,description,image,tags,sections,official,officialLabel='Buka bantuan resmi'){return{slug,title,category,description,image,tags,sections,official,officialLabel}}
const A=[];
function add(x){A.push(x)}
const google=[
['google-hacked','Memulihkan akun Google yang diretas','Panduan untuk mengambil kembali kendali setelah password, email pemulihan, atau aktivitas akun berubah tanpa izin.',['Catat perubahan yang Anda kenali. Fokus pada pengamanan akun, bukan mencoba menebak atau melewati sistem verifikasi Google.','Mulai dari halaman pemulihan resmi dan jawab pertanyaan dengan informasi yang paling akurat dan konsisten.','Setelah berhasil masuk, buka Security Checkup, keluarkan perangkat yang tidak dikenal, ganti password, dan periksa metode pemulihan.'],['Gunakan perangkat dan lokasi yang biasa dipakai untuk login bila tersedia.','Jangan memberikan kode verifikasi kepada siapa pun, termasuk orang yang mengaku sebagai petugas bantuan.'],OFF.google],
['google-forgot-password','Lupa password akun Google','Langkah aman ketika Anda masih mengetahui alamat email tetapi tidak lagi mengingat password.',['Buka halaman pemulihan resmi Google.','Masukkan alamat email, lalu ikuti pemeriksaan identitas yang tersedia.','Buat password baru yang unik dan tidak digunakan di layanan lain.'],['Jika sebuah pemeriksaan tidak tersedia, gunakan opsi yang ditawarkan Google berikutnya. Jangan mengarang jawaban.'],OFF.google],
['google-forgot-email','Lupa alamat email Google','Mencari kembali alamat akun Google ketika Anda masih memiliki nomor telepon atau email pemulihan yang pernah ditambahkan.',['Gunakan halaman pencarian username Google dan masukkan informasi pemulihan yang benar.','Periksa daftar akun yang ditampilkan dan lanjutkan ke pemulihan jika ditemukan.'],['Masukkan nama sesuai informasi akun. Hasil dapat berbeda bila data pemulihan sudah diubah.'], 'https://accounts.google.com/signin/usernamerecovery'],
['google-recovery-email-lost','Email pemulihan hilang atau tidak bisa diakses','Panduan ketika email pemulihan Google sudah tidak dapat dibuka.',['Mulai proses pemulihan akun Google.','Gunakan metode lain yang masih tersedia, seperti perangkat yang sudah login atau nomor pemulihan.','Jika berhasil masuk, ganti email pemulihan dengan alamat yang benar-benar Anda kuasai.'],['Jangan membuat email baru hanya untuk meniru alamat lama. Tujuannya adalah membuktikan kepemilikan akun melalui metode resmi.'],OFF.google],
['google-recovery-phone-lost','Nomor telepon pemulihan hilang','Cara menangani nomor pemulihan yang sudah tidak aktif atau tidak lagi dimiliki.',['Mulai pemulihan akun menggunakan opsi yang tersedia.','Setelah berhasil masuk, hapus nomor lama hanya setelah metode pemulihan baru siap.','Tambahkan email pemulihan yang aman dan aktif.'],['Jika nomor lama masih terhubung ke operator, pertimbangkan memulihkan nomor melalui prosedur resmi operator.'],OFF.google],
['google-verification-code','Tidak bisa menerima kode verifikasi Google','Langkah untuk memeriksa masalah SMS, prompt, aplikasi authenticator, atau metode verifikasi lain.',['Pastikan nomor benar dan perangkat memiliki koneksi.','Periksa apakah notifikasi diblokir atau mode jangan ganggu aktif.','Coba metode verifikasi alternatif yang memang ditawarkan Google.'],['Jangan meminta orang lain menerima kode atas nama Anda. Kode verifikasi bersifat rahasia.'],OFF.google],
['google-prompt-not-showing','Google Prompt tidak muncul','Panduan ketika notifikasi persetujuan login tidak muncul di ponsel.',['Pastikan perangkat sudah login ke akun yang benar.','Aktifkan koneksi internet dan notifikasi Google Play services atau aplikasi terkait.','Di halaman login, pilih opsi lain bila prompt tetap tidak muncul.'],['Prompt dapat bergantung pada perangkat yang terdaftar dan status koneksi. Gunakan metode alternatif resmi bila tersedia.'],OFF.googleSecurity],
['google-2fa-problem','Verifikasi 2 langkah Google bermasalah','Memulihkan akses ketika autentikasi dua langkah tidak berjalan seperti biasanya.',['Coba metode cadangan yang sudah Anda siapkan.','Jika masih memiliki sesi login di perangkat tepercaya, buka pengaturan keamanan dan perbarui metode verifikasi.','Gunakan alur pemulihan resmi bila semua metode dua langkah tidak tersedia.'],['Simpan backup code di tempat offline yang aman dan jangan mengirimkannya melalui chat.'],OFF.google2fa],
['google-account-locked','Akun Google terkunci','Apa yang perlu dilakukan ketika sistem Google meminta pemeriksaan tambahan atau membatasi login.',['Ikuti notifikasi dan pemeriksaan keamanan yang ditampilkan.','Gunakan halaman pemulihan bila diminta.','Setelah akses kembali, tinjau aktivitas keamanan dan perangkat.'],['Mengulang login secara agresif atau memakai layanan pihak ketiga tidak membantu proses kepemilikan akun.'],OFF.google],
['google-suspicious-login','Aktivitas login Google mencurigakan','Cara memeriksa login yang tidak Anda kenali dan menutup akses yang mencurigakan.',['Buka Security Checkup.','Periksa perangkat, lokasi, dan waktu aktivitas.','Keluarkan sesi yang tidak dikenal lalu ganti password jika ada indikasi akses tidak sah.'],['Lokasi jaringan bisa terlihat berbeda dari lokasi fisik. Prioritaskan perangkat dan aktivitas yang benar-benar tidak Anda kenali.'],OFF.googleSecurity],
['google-change-password','Mengganti password Google dengan aman','Panduan mengganti password tanpa melemahkan keamanan akun.',['Buka halaman keamanan akun Google.','Pilih perubahan password dan buat passphrase unik yang panjang.','Periksa kembali sesi login setelah perubahan.'],['Jangan gunakan password yang sama untuk email utama, media sosial, dan game.'],OFF.googleSecurity],
['google-recovery-methods','Mengganti email dan nomor pemulihan Google','Menata ulang metode pemulihan agar akun tetap dapat diakses ketika perangkat utama hilang.',['Buka pengaturan Security akun Google.','Perbarui email dan nomor pemulihan yang masih Anda kuasai.','Pastikan metode baru bisa diakses sebelum menghapus metode lama jika memungkinkan.'],['Gunakan data pemulihan pribadi yang dapat diakses dalam jangka panjang, bukan nomor pinjaman.'],OFF.googleSecurity],
['google-enable-2fa','Mengaktifkan 2FA di Google','Langkah dasar untuk menambah lapisan keamanan setelah password.',['Buka pengaturan verifikasi dua langkah.','Ikuti metode yang ditawarkan dan selesaikan pengujian.','Simpan backup code secara offline.'],['2FA tetap perlu dipadukan dengan password unik dan perangkat yang aman.'],OFF.google2fa],
['google-check-devices','Mengecek perangkat yang login ke Google','Mengetahui perangkat dan sesi yang masih memiliki akses ke akun.',['Buka bagian perangkat di keamanan akun.','Cocokkan nama perangkat dengan perangkat yang Anda gunakan.','Keluarkan perangkat yang tidak dikenali.'],['Perangkat lama yang sudah dijual sebaiknya dikeluarkan agar sesi tidak tertinggal.'],OFF.googleSecurity],
['google-signout-unknown-device','Mengeluarkan perangkat asing dari Google','Cara menutup sesi pada perangkat yang tidak Anda kenali.',['Buka daftar perangkat akun.','Pilih perangkat yang tidak dikenal dan gunakan opsi keluar.','Ganti password bila sesi asing muncul bersama aktivitas yang mencurigakan.'],['Mengeluarkan perangkat tidak menggantikan proses pemulihan bila email atau password sudah diubah penyerang.'],OFF.googleSecurity]
];
google.forEach(([slug,title,description,steps,notes,official])=>add(article(
  slug,
  title,
  'Akun Google',
  description,
  IMG.devices,
  ['Google','Pemulihan','Keamanan'],

  [
    {
      heading:'Masalah yang mungkin terjadi',
      text:description
    },

    {
      heading:'Langkah penyelesaian',
      items:[
        ...steps,

        'Gunakan halaman dan aplikasi Google resmi ketika melakukan pemulihan.',
        'Pastikan alamat email atau akun yang dimasukkan memang milik Anda.',
        'Gunakan perangkat yang biasa digunakan untuk login jika masih tersedia.',
        'Gunakan koneksi dan lokasi yang biasanya digunakan untuk mengakses akun jika memungkinkan.',
        'Ikuti setiap pemeriksaan keamanan yang ditampilkan Google.',
        'Berikan informasi pemulihan yang benar dan konsisten.',
        'Jangan mencoba menebak-nebak informasi akun jika tidak yakin.',
        'Jika masih memiliki sesi login di perangkat lain, manfaatkan sesi tersebut untuk mengamankan akun.',
        'Setelah berhasil masuk, segera periksa pengaturan keamanan akun.'
      ]
    },

    {
      heading:'Periksa keamanan akun setelah berhasil masuk',
      items:[
        'Periksa perangkat yang masih memiliki akses ke akun.',
        'Keluarkan perangkat yang benar-benar tidak Anda kenali.',
        'Periksa aktivitas keamanan terbaru.',
        'Periksa email pemulihan dan nomor telepon pemulihan.',
        'Pastikan tidak ada perubahan informasi keamanan yang dilakukan orang lain.',
        'Periksa metode verifikasi dua langkah.',
        'Periksa aplikasi dan layanan pihak ketiga yang memiliki akses.',
        'Cabut akses yang tidak lagi diperlukan atau tidak Anda kenali.',
        'Ganti password jika terdapat indikasi akses tidak sah.'
      ]
    },

    {
      heading:'Hal yang harus diperhatikan',
      items:[
        ...notes,

        'Jangan memberikan password kepada siapa pun.',
        'Jangan memberikan kode verifikasi atau OTP kepada orang lain.',
        'Jangan memberikan backup code kepada pihak lain.',
        'Jangan memberikan cookie atau token sesi akun.',
        'Jangan menggunakan jasa pemulihan yang meminta akses langsung ke akun.',
        'Jangan mencoba melewati sistem verifikasi kepemilikan Google.',
        'Jangan mempercayai orang yang mengaku sebagai petugas Google dan meminta kode keamanan melalui chat.',
        'Pastikan Anda hanya memasukkan informasi akun pada halaman resmi Google.'
      ]
    },

    {
      heading:'Setelah akun berhasil dipulihkan',
      items:[
        'Buat password baru yang unik dan tidak digunakan pada akun lain.',
        'Aktifkan verifikasi dua langkah jika belum aktif.',
        'Simpan backup code di tempat yang aman.',
        'Perbarui email pemulihan jika sudah tidak dapat diakses.',
        'Perbarui nomor pemulihan jika sudah tidak aktif.',
        'Periksa kembali perangkat yang terhubung.',
        'Periksa aktivitas keamanan akun.',
        'Pastikan email utama dan metode pemulihan benar-benar berada di bawah kendali Anda.'
      ]
    },

    {
      heading:'Tips keamanan',
      items:[
        'Gunakan password unik untuk akun Google.',
        'Aktifkan 2FA atau passkey jika tersedia dan sesuai kebutuhan.',
        'Jangan menggunakan password Google pada layanan lain.',
        'Periksa perangkat yang login secara berkala.',
        'Periksa aktivitas keamanan secara berkala.',
        'Pastikan email dan nomor pemulihan selalu dapat diakses.',
        'Simpan backup code secara offline di tempat yang aman.',
        'Jangan login melalui link mencurigakan.',
        'Perbarui browser, Android, dan aplikasi secara berkala.',
        'Jangan pernah membagikan kode verifikasi kepada siapa pun.'
      ]
    },

    {
      heading:'FAQ',
      items:[
        `Apa yang harus dilakukan jika ${title.toLowerCase()}? Mulai dari halaman pemulihan atau pengaturan keamanan Google yang resmi dan ikuti pemeriksaan yang diberikan.`,

        'Bagaimana jika saya tidak bisa menggunakan metode pemulihan utama? Gunakan metode alternatif yang memang ditawarkan Google pada proses pemulihan.',

        'Apakah saya boleh memberikan kode verifikasi kepada orang lain? Tidak. Kode verifikasi bersifat rahasia dan tidak boleh diberikan kepada pihak lain.',

        'Bagaimana jika masih login di perangkat lain? Jangan langsung keluar. Gunakan sesi yang masih aktif untuk memeriksa dan mengamankan akun jika memungkinkan.',

        'Bagaimana jika menemukan perangkat asing? Periksa perangkat tersebut. Jika benar bukan milik Anda, keluarkan aksesnya dan pertimbangkan mengganti password.',

        'Apakah akun yang berhasil dipulihkan sudah pasti aman? Belum tentu. Setelah pulih, tetap periksa password, perangkat, aktivitas, metode pemulihan, dan aplikasi pihak ketiga.'
      ]
    }
  ],

  official
)));

const socialPlatforms=[
['Instagram','instagram',IMG.phone],['TikTok','tiktok',IMG.phone],['WhatsApp','whatsapp',IMG.phone],['Discord','discord',IMG.devices],['Facebook','facebook',IMG.phone],['X/Twitter','x',IMG.phone],['Telegram','telegram',IMG.phone],['Snapchat','snapchat', IMG.phone]
];
const issueTemplates={
'hacked':{label:'Akun diretas',desc:p=>`Panduan pemulihan ${p} ketika ada tanda akun diambil alih atau data login berubah tanpa izin.`,steps:['Mulai dari halaman bantuan atau recovery resmi platform.','Jika masih login di salah satu perangkat, segera amankan sesi tersebut dan ganti password.','Periksa email/nomor pemulihan, perangkat aktif, serta aplikasi pihak ketiga.','Keluarkan sesi yang tidak Anda kenali dan aktifkan keamanan tambahan.'],notes:['Jangan membayar jasa pemulihan yang meminta password atau kode OTP.','Simpan bukti perubahan akun, email notifikasi, dan tanggal kejadian bila dukungan meminta verifikasi.']},
'forgot':{label:'Lupa password',desc:p=>`Langkah aman untuk ${p} ketika password tidak lagi diingat.`,steps:['Gunakan opsi forgot password atau reset password resmi.','Ikuti pemeriksaan identitas yang tersedia.','Buat password baru yang unik dan panjang.'],notes:['Jangan memasukkan password baru ke situs yang link-nya berasal dari pesan mencurigakan.']},
'login':{label:'Tidak bisa login',desc:p=>`Pemeriksaan dasar ketika login ke ${p} gagal walaupun Anda merasa data akun sudah benar.`,steps:['Pastikan username, email, atau nomor yang digunakan memang terkait akun.','Coba pemulihan atau reset login resmi.','Periksa apakah layanan sedang meminta verifikasi tambahan.','Jika tetap gagal, gunakan pusat bantuan resmi untuk kasus akses akun.'],notes:['Hindari mencoba terlalu banyak kombinasi password dalam waktu singkat.']},
'contact':{label:'Email/nomor telepon hilang',desc:p=>`Apa yang perlu dilakukan pada ${p} jika email atau nomor lama sudah tidak bisa diakses.`,steps:['Gunakan metode pemulihan alternatif yang masih terhubung.','Cari opsi verifikasi lain yang disediakan platform.','Setelah masuk, perbarui detail kontak pemulihan.'],notes:['Jangan mengganti informasi akun lewat link yang dikirim orang lain.']},
'locked':{label:'Akun terkunci',desc:p=>`Panduan dasar ketika ${p} menahan login atau meminta pemeriksaan keamanan tambahan.`,steps:['Ikuti pemberitahuan resmi yang muncul pada halaman login.','Gunakan recovery resmi dan lengkapi data yang diminta.','Setelah terbuka, tinjau aktivitas keamanan dan ganti password jika perlu.'],notes:['Kunci keamanan tidak boleh dicoba dilewati dengan tool atau layanan pihak ketiga.']},
'disabled':{label:'Akun dinonaktifkan atau dibatasi',desc:p=>`Langkah yang aman jika akun ${p} dinonaktifkan atau dibatasi.`,steps:['Baca notifikasi alasan pembatasan.','Gunakan formulir banding atau bantuan resmi yang tersedia.','Jangan membuat banyak akun pengganti untuk menghindari pembatasan.'],notes:['Gunakan bahasa yang singkat dan faktual saat mengajukan banding.']},
'security':{label:'Mengaktifkan keamanan tambahan',desc:p=>`Cara memperkuat akun ${p} setelah akses sudah berhasil dipulihkan.`,steps:['Gunakan password unik.','Aktifkan 2FA atau metode keamanan tambahan yang tersedia.','Periksa perangkat aktif dan aplikasi pihak ketiga.','Simpan kode cadangan sesuai mekanisme resmi platform.'],notes:['Keamanan tambahan tidak efektif jika kode verifikasi masih dibagikan ke pihak lain.']},
'activity':{label:'Mengecek aktivitas login',desc:p=>`Cara meninjau perangkat, sesi, dan aktivitas keamanan pada ${p}.`,steps:['Buka pengaturan keamanan akun.','Periksa perangkat, sesi, lokasi, atau aktivitas terbaru.','Keluarkan sesi yang tidak Anda kenal.','Ganti password jika ada indikator pengambilalihan.'],notes:['Beberapa lokasi login bisa tampak berbeda karena jaringan seluler atau VPN.']}
};
const socialIssues=['hacked','forgot','login','contact','locked','disabled','security','activity'];
socialPlatforms.forEach(([platform,key,image])=>socialIssues.forEach(issue=>{
  const t=issueTemplates[issue];

  add(article(
    `${key}-${issue}`,
    `${t.label} di ${platform}`,
    'Media Sosial',
    t.desc(platform),
    image,
    [platform,t.label,'Pemulihan'],

    [
      {
        heading:'Masalah dan penyebab yang mungkin',
        text:t.desc(platform)
      },

      {
        heading:'Langkah penyelesaian',
        items:[
          ...t.steps,

          'Pastikan Anda menggunakan aplikasi atau situs resmi platform.',
          'Periksa kembali email, nomor telepon, atau username yang digunakan untuk login.',
          'Jika masih memiliki sesi login di perangkat lain, gunakan sesi tersebut untuk mengamankan akun.',
          'Periksa perangkat dan sesi login yang masih aktif.',
          'Periksa email atau notifikasi keamanan untuk mengetahui perubahan yang mungkin terjadi.',
          'Setelah akses berhasil dipulihkan, segera perbarui password jika diperlukan.',
          'Aktifkan 2FA atau metode keamanan tambahan yang tersedia.',
          'Periksa aplikasi pihak ketiga yang masih memiliki akses ke akun.',
          'Hapus akses aplikasi yang tidak lagi digunakan atau tidak Anda kenali.'
        ]
      },

      {
        heading:'Hal yang harus diperhatikan',
        items:[
          ...t.notes,

          'Jangan memberikan password kepada siapa pun.',
          'Jangan memberikan OTP, recovery code, backup code, atau kode verifikasi.',
          'Jangan memberikan cookie atau token sesi kepada pihak lain.',
          'Jangan menggunakan jasa pemulihan akun yang menjanjikan akses instan.',
          'Jangan mencoba melewati sistem keamanan atau verifikasi platform.',
          'Jika menerima pesan bantuan melalui DM, pastikan sumbernya benar-benar resmi.',
          'Simpan email dan notifikasi keamanan penting sebagai bukti jika nantinya diperlukan.'
        ]
      },

      {
        heading:'Setelah akun berhasil dipulihkan',
        items:[
          'Ganti password dengan password yang unik dan tidak digunakan pada akun lain.',
          'Aktifkan 2FA atau metode keamanan tambahan jika tersedia.',
          'Periksa email dan nomor telepon yang terhubung.',
          'Periksa perangkat dan sesi login.',
          'Keluarkan perangkat yang benar-benar tidak Anda kenali.',
          'Periksa aplikasi dan layanan pihak ketiga yang memiliki akses.',
          'Periksa profil, pesan, postingan, atau aktivitas lain yang mungkin berubah.',
          'Pastikan informasi pemulihan akun masih berada di bawah kendali Anda.'
        ]
      },

      {
        heading:'Tips keamanan',
        items:[
          'Gunakan password unik untuk setiap akun penting.',
          'Jangan login melalui link yang dikirim dari sumber yang mencurigakan.',
          'Periksa alamat domain sebelum memasukkan kredensial.',
          'Aktifkan keamanan tambahan setelah akses pulih.',
          'Tinjau perangkat aktif secara berkala.',
          'Tinjau aplikasi pihak ketiga secara berkala.',
          'Perbarui aplikasi dan sistem operasi secara rutin.',
          'Jangan pernah membagikan kode verifikasi kepada orang lain.'
        ]
      },

      {
        heading:'FAQ',
        items:[
          `Apa yang harus dilakukan jika akun ${platform} diretas? Segera gunakan jalur pemulihan resmi ${platform}, amankan sesi yang masih Anda miliki, lalu periksa password, perangkat, dan metode pemulihan.`,
          `Bagaimana jika email atau nomor telepon akun ${platform} sudah berubah? Gunakan metode recovery resmi yang masih tersedia dan ikuti pemeriksaan kepemilikan yang diberikan platform.`,
          `Apakah boleh menggunakan jasa recovery akun? Sebaiknya tidak menggunakan jasa yang meminta password, OTP, cookie, recovery code, atau akses langsung ke akun.`,
          `Bagaimana jika masih bisa login di salah satu perangkat? Jangan logout terlebih dahulu. Gunakan sesi tersebut untuk mengamankan akun melalui pengaturan resmi jika memungkinkan.`,
          `Apakah akun yang sudah dipulihkan pasti aman? Tidak selalu. Setelah pulih, periksa sesi aktif, aplikasi pihak ketiga, metode pemulihan, dan aktivitas akun.`,
          `Kapan harus menghubungi bantuan resmi? Gunakan bantuan resmi ketika metode pemulihan otomatis tidak tersedia, akun dibatasi, atau Anda membutuhkan pemeriksaan kepemilikan tambahan.`
        ]
      }
    ],

    OFF[key]||OFF.instagram
  ));
}));

const games=[['Free Fire','free-fire',OFF.ff],['Mobile Legends','mobile-legends',OFF.ml],['PUBG Mobile','pubg-mobile',OFF.pubg],['Roblox','roblox',OFF.roblox],['Minecraft','minecraft',OFF.minecraft],['Genshin Impact','genshin-impact',OFF.genshin]];
const gameIssues=[
['Akun diretas','hacked','Gunakan jalur dukungan akun resmi dan amankan email atau metode login yang terhubung terlebih dahulu.'],
['Lupa password','forgot','Reset melalui metode login resmi yang memang terhubung ke akun.'],
['Kehilangan akses akun','lost','Periksa semua metode login yang pernah ditautkan dan siapkan bukti kepemilikan yang diminta dukungan.'],
['Akun tidak tertaut','unlink','Periksa akun platform yang terhubung dan gunakan pengaturan resmi untuk menautkannya kembali.'],
['Masalah login','login','Periksa metode login, versi aplikasi, dan status layanan sebelum mengajukan tiket bantuan.'],
['Pemulihan akun','recover','Gunakan formulir recovery resmi dan berikan informasi yang konsisten.'],
['Mengamankan akun','security','Perkuat password, keamanan email, dan metode login tertaut.'],
['Menghubungkan metode login','link-login','Hubungkan akun hanya melalui menu resmi di game atau pusat akun platform.']
];
games.forEach(([platform,key,official])=>gameIssues.forEach(([label,slug,note])=>{

  const title =
    slug==='hacked' ? `Akun ${platform} diretas` :
    slug==='forgot' ? `Lupa password akun ${platform}` :
    slug==='lost' ? `Kehilangan akses akun ${platform}` :
    slug==='unlink' ? `Akun ${platform} tidak tertaut` :
    slug==='login' ? `Tidak bisa login ke akun ${platform}` :
    slug==='recover' ? `Pemulihan akun ${platform}` :
    slug==='security' ? `Mengamankan akun ${platform}` :
    slug==='link-login' ? `Menghubungkan metode login ${platform}` :
    `${label} ${platform}`;

  const content = {

    hacked: {
      description:
        `Panduan lengkap untuk memulihkan akun ${platform} yang diduga diambil alih, ` +
        `mengalami perubahan informasi login, atau tidak lagi dapat diakses oleh pemiliknya. ` +
        `Panduan ini berfokus pada pemulihan akun milik sendiri melalui jalur resmi.`,

      sections: [
        {
          heading:'Tanda-tanda akun mungkin diretas',
          items:[
            'Password akun tiba-tiba tidak dapat digunakan padahal Anda tidak pernah menggantinya.',
            'Email, nomor telepon, atau metode login yang terhubung berubah tanpa sepengetahuan Anda.',
            'Muncul aktivitas atau perangkat yang tidak Anda kenali.',
            'Nama, profil, atau informasi akun berubah tanpa izin.',
            'Akun game tiba-tiba tidak dapat digunakan melalui metode login yang sebelumnya normal.',
            'Muncul notifikasi keamanan atau perubahan akun yang tidak pernah Anda lakukan.'
          ]
        },
        {
          heading:'Langkah pertama yang harus dilakukan',
          items:[
            'Jangan mencoba menggunakan tool, script, atau layanan yang mengklaim dapat membobol kembali akun.',
            'Periksa email utama atau akun platform yang digunakan untuk masuk ke game.',
            'Jika Anda masih memiliki akses ke salah satu metode login, segera amankan akun tersebut.',
            'Ganti password akun yang terhubung jika password tersebut juga digunakan di tempat lain.',
            'Aktifkan keamanan tambahan seperti 2FA apabila tersedia.'
          ]
        },
        {
          heading:'Jika Anda masih bisa masuk ke akun',
          items:[
            'Segera buka pengaturan keamanan akun.',
            'Periksa metode login yang terhubung.',
            'Hapus atau keluarkan perangkat dan sesi yang tidak Anda kenali jika opsi tersebut tersedia.',
            'Ganti password akun platform yang terhubung.',
            'Pastikan email dan nomor pemulihan masih benar.',
            'Jangan langsung keluar dari semua perangkat sebelum memastikan metode pemulihan baru sudah dapat digunakan.'
          ]
        },
        {
          heading:'Jika sudah tidak bisa masuk',
          items:[
            'Gunakan pusat bantuan atau recovery resmi dari platform yang digunakan untuk login.',
            'Pilih kategori yang berkaitan dengan akun yang diambil alih atau kehilangan akses.',
            'Berikan informasi kepemilikan yang benar dan konsisten.',
            'Siapkan informasi akun yang memang Anda miliki jika diminta oleh dukungan resmi.',
            'Ikuti instruksi verifikasi yang diberikan oleh layanan tersebut.'
          ]
        },
        {
          heading:'Jika akun platform yang terhubung ikut bermasalah',
          items:[
            'Pulihkan terlebih dahulu akun Google, Facebook, Apple, atau platform lain yang digunakan untuk login.',
            'Setelah akun platform berhasil diamankan, periksa kembali akses ke akun game.',
            'Ganti password akun platform jika ada kemungkinan password telah diketahui pihak lain.',
            'Aktifkan 2FA pada akun platform yang mendukungnya.'
          ]
        },
        {
          heading:'Bukti yang mungkin diperlukan',
          items:[
            'Informasi akun yang masih Anda ingat.',
            'Riwayat atau informasi transaksi yang memang merupakan milik Anda.',
            'Perkiraan waktu pembuatan atau penggunaan akun.',
            'Metode login yang sebelumnya digunakan.',
            'Informasi perangkat yang biasa digunakan untuk bermain.',
            'Bukti lain yang secara resmi diminta oleh layanan dukungan.'
          ]
        },
        {
          heading:'Setelah akun berhasil dipulihkan',
          items:[
            'Ganti password dengan password yang unik.',
            'Jangan menggunakan password yang sama dengan email utama atau akun lain.',
            'Aktifkan 2FA jika tersedia.',
            'Periksa seluruh metode login yang tertaut.',
            'Periksa kembali perangkat dan aktivitas akun.',
            'Hapus akses aplikasi atau layanan pihak ketiga yang tidak diperlukan.',
            'Amankan email utama karena email tersebut sering menjadi kunci pemulihan akun.'
          ]
        },
        {
          heading:'Hal yang harus dihindari',
          items:[
            'Jangan memberikan OTP kepada orang lain.',
            'Jangan memberikan password kepada orang yang mengaku sebagai admin.',
            'Jangan mengirim cookie atau token sesi akun.',
            'Jangan menggunakan jasa recovery yang meminta kredensial lengkap.',
            'Jangan mencoba bypass sistem keamanan atau verifikasi akun.',
            'Jangan mempercayai orang yang menjanjikan akun kembali secara instan.'
          ]
        },
        {
          heading:'FAQ',
          items:[
            `Apakah akun ${platform} yang diretas masih bisa dipulihkan? Pemulihan bergantung pada kondisi akun dan kemampuan layanan untuk memverifikasi kepemilikan akun.`,
            'Bagaimana jika password sudah diganti orang lain? Gunakan prosedur recovery resmi dan jangan mencoba melewati sistem verifikasi.',
            'Bagaimana jika email pemulihan juga tidak bisa diakses? Pulihkan email atau akun platform tersebut terlebih dahulu jika memungkinkan.',
            'Apakah orang yang mengaku sebagai admin boleh meminta OTP? Jangan memberikan OTP atau kode keamanan kepada siapa pun.',
            'Apakah jasa recovery pihak ketiga aman? Hindari layanan yang meminta password, OTP, cookie, atau token sesi.'
          ]
        }
      ]
    },

    forgot: {
      description:
        `Panduan lengkap untuk memulihkan akses akun ${platform} ketika password ` +
        `tidak lagi diingat, dengan menggunakan metode pemulihan resmi.`,

      sections:[
        {
          heading:'Sebelum melakukan reset',
          items:[
            'Pastikan username, email, atau metode login yang digunakan memang benar.',
            'Gunakan perangkat yang biasa digunakan untuk bermain jika memungkinkan.',
            'Pastikan Anda masih memiliki akses ke email atau akun platform yang terhubung.'
          ]
        },
        {
          heading:'Langkah pemulihan',
          items:[
            'Buka halaman login resmi.',
            'Gunakan opsi lupa password atau pemulihan akun yang tersedia.',
            'Ikuti verifikasi kepemilikan yang diberikan.',
            'Buat password baru yang unik dan sulit ditebak.',
            'Simpan password dengan aman dan jangan membagikannya kepada orang lain.'
          ]
        },
        {
          heading:'Setelah password berhasil diubah',
          items:[
            'Periksa perangkat yang masih login.',
            'Aktifkan 2FA jika tersedia.',
            'Pastikan email dan metode login lainnya masih benar.',
            'Jangan menggunakan password lama pada akun lain.'
          ]
        }
      ]
    },

    login: {
      description:
        `Panduan lengkap ketika Anda tidak dapat login ke akun ${platform} ` +
        `meskipun merasa informasi login yang digunakan sudah benar.`,

      sections:[
        {
          heading:'Pemeriksaan awal',
          items:[
            'Pastikan metode login yang dipilih benar.',
            'Periksa kembali username atau email.',
            'Pastikan koneksi internet stabil.',
            'Perbarui aplikasi game jika terdapat pembaruan resmi.',
            'Periksa apakah layanan meminta verifikasi tambahan.'
          ]
        },
        {
          heading:'Jika masih gagal login',
          items:[
            'Gunakan opsi pemulihan akun resmi.',
            'Coba metode login lain yang sebelumnya memang telah ditautkan.',
            'Jangan mencoba terlalu banyak kombinasi password secara berulang.',
            'Jika tetap gagal, hubungi pusat bantuan resmi.'
          ]
        }
      ]
    },

    security: {
      description:
        `Panduan mengamankan akun ${platform} setelah berhasil login atau memulihkan akun.`,

      sections:[
        {
          heading:'Amankan password',
          items:[
            'Gunakan password unik.',
            'Jangan gunakan password yang sama pada email utama.',
            'Hindari password berdasarkan nama, tanggal lahir, atau informasi yang mudah ditebak.'
          ]
        },
        {
          heading:'Amankan metode login',
          items:[
            'Periksa semua akun platform yang tertaut.',
            'Hapus metode yang sudah tidak digunakan jika tersedia.',
            'Aktifkan 2FA pada akun platform yang mendukungnya.'
          ]
        },
        {
          heading:'Periksa perangkat',
          items:[
            'Tinjau perangkat yang memiliki akses.',
            'Keluarkan perangkat yang tidak dikenal jika tersedia.',
            'Pastikan perangkat bebas dari aplikasi mencurigakan.'
          ]
        }
      ]
    }
  };

  const data = content[slug];

  add(article(
    `${key}-${slug}`,
    title,
    'Akun Game',
    data?.description ||
      `Panduan ${label.toLowerCase()} untuk akun ${platform} melalui prosedur resmi.`,
    IMG.gaming,
    [platform,'Akun Game',label],
    [
      ...(data?.sections || []),
      {
        heading:'Tips keamanan',
        items:[
          'Gunakan password unik pada akun penting.',
          'Aktifkan 2FA jika tersedia.',
          'Jangan membagikan OTP, recovery code, password, cookie, atau token sesi.',
          'Gunakan hanya halaman dan aplikasi resmi.',
          'Periksa keamanan akun secara berkala.'
        ]
      }
    ],
    official
  ));

}));
const security=[
['security-strong-password','Cara membuat password yang kuat','Password kuat harus sulit ditebak sekaligus tidak dipakai ulang di banyak layanan.'],
['security-2fa','Memahami dan menggunakan 2FA','2FA menambah lapisan verifikasi setelah password sehingga satu kebocoran password tidak langsung membuka akun.'],
['security-passkey','Passkey: login tanpa password','Passkey menggunakan kredensial kriptografis pada perangkat untuk mengurangi risiko phishing dan password reuse.'],
['security-recovery-email','Menyiapkan email pemulihan','Email pemulihan membantu proses account recovery, tetapi harus dilindungi seperti akun utama.'],
['security-recovery-phone','Menyiapkan nomor pemulihan','Nomor pemulihan berguna sebagai jalur verifikasi tambahan jika platform mendukungnya.'],
['security-phishing','Mengenali phishing','Phishing meniru halaman atau pesan resmi untuk mencuri password, kode verifikasi, atau sesi login.'],
['security-fake-login-link','Mengenali link login palsu','Periksa domain, HTTPS, konteks pesan, dan jangan login dari link mencurigakan.'],
['security-malicious-apps','Mengenali aplikasi berbahaya','Aplikasi tidak resmi dapat meminta kredensial atau izin yang tidak perlu.'],
['security-foreign-session','Mendeteksi session atau perangkat asing','Perangkat yang tidak dikenal perlu diperiksa dan dikeluarkan bila benar bukan milik Anda.'],
['security-hacked-signs','Tanda akun mungkin diretas','Perubahan email, password, perangkat, posting, atau notifikasi keamanan yang tidak Anda lakukan adalah indikator penting.'],
['security-after-hack','Apa yang dilakukan setelah akun diretas','Prioritaskan email utama, keluar dari sesi asing, ubah password, dan pulihkan metode pemulihan melalui jalur resmi.'],
['security-prevent-repeat','Mencegah akun diretas kembali','Setelah pulih, perbaiki akar masalah: password reuse, phishing, perangkat tidak aman, atau aplikasi pihak ketiga.'],
['security-checklist','Checklist keamanan akun','Pemeriksaan berkala untuk password, 2FA, recovery, perangkat, aplikasi, dan kebiasaan login.']
];
const secOfficial={
'security-strong-password':OFF.googleSecurity,'security-2fa':OFF.google2fa,'security-passkey':'https://www.google.com/account/about/passkeys/','security-recovery-email':OFF.googleSecurity,'security-recovery-phone':OFF.googleSecurity,'security-phishing':'https://safety.google/security/security-tips/','security-fake-login-link':'https://safety.google/security/security-tips/','security-malicious-apps':OFF.googleSecurity,'security-foreign-session':OFF.googleSecurity,'security-hacked-signs':OFF.googleSecurity,'security-after-hack':OFF.google,'security-prevent-repeat':OFF.googleSecurity,'security-checklist':OFF.googleSecurity};
function getSecurityImage(slug){
  const s = slug.toLowerCase();

  if(s === 'security-strong-password')
    return IMG.password;

  if(s === 'security-2fa')
    return IMG.security;

  if(s === 'security-passkey')
    return IMG.password;

  if(s === 'security-recovery-email')
    return IMG.email;

  if(s === 'security-recovery-phone')
    return IMG.phone;

  if(s === 'security-phishing')
    return IMG.email;

  if(s === 'security-fake-login-link')
    return IMG.email;

  if(s === 'security-malicious-apps')
    return IMG.devices;

  if(s === 'security-foreign-session')
    return IMG.devices;

  if(s === 'security-hacked-signs')
    return IMG.security;

  if(s === 'security-after-hack')
    return IMG.security;

  if(s === 'security-prevent-repeat')
    return IMG.security;

  if(s === 'security-checklist')
    return IMG.security;

  return IMG.security;
}
security.forEach(([slug,title,description])=>add(article(
  slug,
  title,
  'Keamanan Akun',
  description,
  getSecurityImage(slug),
  
['Keamanan','Praktik Aman'],

[
  {
    heading:'Mengapa ini penting',
    text:description
  },

  {
    heading:'Langkah yang disarankan',
    items:

    slug==='security-strong-password'
    ?[
      'Gunakan passphrase yang panjang, unik, dan mudah Anda ingat tetapi sulit ditebak orang lain.',
      'Gunakan password yang berbeda untuk setiap akun penting.',
      'Jangan menggunakan nama, tanggal lahir, nomor telepon, nama sekolah, nama hewan peliharaan, atau informasi pribadi lain yang mudah ditemukan.',
      'Hindari pola sederhana seperti 123456, password, qwerty, atau kombinasi yang mudah ditebak.',
      'Jangan mengganti password dengan pola sederhana seperti Password1, Password2, dan variasi sejenis.',
      'Gunakan password manager jika sesuai kebutuhan untuk membuat dan menyimpan password unik.',
      'Prioritaskan pengamanan email utama karena email sering menjadi jalur pemulihan berbagai akun lain.',
      'Segera ganti password jika password pernah dibagikan, digunakan pada situs mencurigakan, atau diduga telah bocor.',
      'Jangan menyimpan password di tempat yang dapat diakses orang lain.',
      'Setelah mengganti password, periksa perangkat dan sesi login untuk memastikan tidak ada akses asing.'
    ]

    :slug==='security-2fa'
    ?[
      'Aktifkan 2FA pada akun penting seperti email, media sosial, dan akun game yang mendukungnya.',
      'Pilih metode autentikasi yang tersedia dan paling sesuai dengan kondisi Anda.',
      'Gunakan authenticator app jika layanan menyediakannya dan metode tersebut sesuai kebutuhan.',
      'Simpan backup code di tempat yang aman dan tidak mudah diakses orang lain.',
      'Pastikan Anda masih memiliki akses ke metode cadangan sebelum menghapus metode keamanan lama.',
      'Jangan membagikan kode verifikasi kepada siapa pun.',
      'Periksa perangkat yang memiliki akses ke akun setelah 2FA diaktifkan.',
      'Jika menerima permintaan login yang tidak Anda lakukan, jangan menyetujuinya.',
      'Segera periksa keamanan akun jika ada kode 2FA yang masuk tanpa Anda meminta login.'
    ]

    :slug==='security-passkey'
    ?[
      'Gunakan passkey pada layanan yang memang mendukungnya.',
      'Buat passkey hanya melalui halaman atau aplikasi resmi layanan.',
      'Pastikan perangkat yang digunakan memiliki keamanan layar seperti PIN, pola, password, atau biometrik.',
      'Jangan membuat passkey melalui halaman login yang berasal dari link mencurigakan.',
      'Periksa daftar passkey pada pengaturan keamanan akun secara berkala.',
      'Hapus passkey dari perangkat yang sudah tidak Anda miliki jika layanan menyediakan opsi tersebut.',
      'Tetap siapkan metode pemulihan akun yang benar-benar dapat Anda akses.',
      'Gunakan passkey pada akun penting untuk mengurangi ketergantungan pada password.'
    ]

    :slug==='security-recovery-email'
    ?[
      'Gunakan email pemulihan yang benar-benar Anda kuasai dan dapat diakses.',
      'Pastikan email pemulihan memiliki password yang unik dan keamanan tambahan.',
      'Jangan menggunakan email milik orang lain sebagai email pemulihan.',
      'Periksa kembali alamat email pemulihan setelah menambahkannya.',
      'Pastikan email pemulihan tetap aktif dan dapat menerima pesan.',
      'Jika email pemulihan tidak lagi aman, segera perbarui melalui pengaturan resmi akun.',
      'Lindungi email pemulihan karena siapa pun yang menguasainya dapat berpotensi memengaruhi proses recovery akun utama.'
    ]

    :slug==='security-recovery-phone'
    ?[
      'Gunakan nomor telepon yang benar-benar masih Anda miliki.',
      'Pastikan nomor tersebut dapat menerima SMS atau panggilan jika metode tersebut digunakan layanan.',
      'Perbarui nomor pemulihan jika nomor lama sudah tidak digunakan.',
      'Jangan menggunakan nomor pinjaman sebagai satu-satunya metode pemulihan.',
      'Siapkan metode pemulihan alternatif jika layanan menyediakannya.',
      'Periksa kembali nomor pemulihan setelah melakukan perubahan keamanan.',
      'Jika nomor hilang, gunakan prosedur resmi untuk memulihkan akses sebelum mengganti informasi akun.'
    ]

    :slug==='security-phishing'||slug==='security-fake-login-link'
    ?[
      'Buka situs dari aplikasi resmi atau alamat yang Anda ketik sendiri ketika memungkinkan.',
      'Periksa nama domain sebelum memasukkan email, password, atau kode verifikasi.',
      'Waspadai pesan yang mendesak Anda untuk segera login karena akun akan diblokir atau hadiah akan hilang.',
      'Jangan mempercayai tampilan halaman hanya karena terlihat mirip dengan situs resmi.',
      'Periksa alamat situs secara keseluruhan, bukan hanya nama yang terlihat pada halaman.',
      'Jangan memasukkan password setelah membuka link dari sumber yang tidak Anda kenal.',
      'Jika menerima pesan mencurigakan, buka aplikasi atau situs resmi secara manual untuk memeriksa status akun.',
      'Jangan mengirim OTP, backup code, recovery code, password, atau cookie sesi kepada siapa pun.',
      'Jika terlanjur memasukkan password pada situs mencurigakan, segera ganti password melalui situs resmi dan periksa sesi aktif.'
    ]

    :slug==='security-malicious-apps'
    ?[
      'Unduh aplikasi dari sumber resmi dan terpercaya.',
      'Periksa nama pengembang sebelum memasang aplikasi.',
      'Tinjau izin yang diminta aplikasi dan pastikan sesuai dengan fungsi aplikasi.',
      'Hapus aplikasi yang tidak lagi digunakan atau meminta izin yang tidak masuk akal.',
      'Jangan memasukkan password akun ke aplikasi pihak ketiga yang tidak jelas reputasinya.',
      'Perbarui sistem operasi dan aplikasi secara berkala.',
      'Jika akun mulai menunjukkan aktivitas mencurigakan setelah memasang aplikasi tertentu, periksa dan cabut akses aplikasi tersebut.'
    ]

    :slug==='security-foreign-session'
    ?[
      'Buka pengaturan keamanan akun dan periksa daftar perangkat atau sesi aktif.',
      'Cocokkan perangkat yang terdaftar dengan perangkat yang benar-benar Anda gunakan.',
      'Perhatikan perangkat lama yang sudah dijual, dipinjamkan, atau tidak lagi digunakan.',
      'Keluarkan perangkat yang benar-benar tidak Anda kenali.',
      'Ganti password jika terdapat sesi asing yang disertai aktivitas mencurigakan.',
      'Periksa aplikasi pihak ketiga yang masih memiliki akses.',
      'Lakukan pemeriksaan kembali setelah mengganti password atau metode keamanan.'
    ]

    :slug==='security-hacked-signs'
    ?[
      'Periksa apakah email, password, nomor pemulihan, atau informasi akun berubah tanpa Anda lakukan.',
      'Periksa perangkat dan sesi login yang aktif.',
      'Cari notifikasi keamanan yang tidak Anda kenali.',
      'Periksa aktivitas akun seperti pesan, posting, perubahan profil, atau tindakan lain yang bukan Anda lakukan.',
      'Periksa aplikasi pihak ketiga yang baru mendapatkan akses.',
      'Jika menemukan indikasi pengambilalihan, segera amankan akun melalui prosedur resmi.',
      'Amankan email utama terlebih dahulu jika akun tersebut digunakan sebagai metode pemulihan.',
      'Setelah akses kembali, ganti password dan aktifkan keamanan tambahan.'
    ]

    :slug==='security-after-hack'
    ?[
      'Amankan email utama yang digunakan untuk memulihkan akun.',
      'Ganti password melalui halaman resmi layanan.',
      'Gunakan password baru yang unik dan tidak pernah digunakan pada layanan lain.',
      'Keluarkan perangkat atau sesi yang tidak dikenal.',
      'Periksa dan perbarui email serta nomor pemulihan.',
      'Aktifkan 2FA atau passkey jika tersedia.',
      'Cabut akses aplikasi pihak ketiga yang tidak diperlukan.',
      'Periksa aktivitas akun untuk mengetahui perubahan yang dilakukan selama akun dikuasai pihak lain.',
      'Simpan bukti email notifikasi dan perubahan akun jika nantinya diperlukan untuk menghubungi dukungan resmi.'
    ]

    :slug==='security-prevent-repeat'
    ?[
      'Gunakan password unik untuk setiap akun penting.',
      'Aktifkan 2FA atau passkey jika tersedia.',
      'Jangan memasukkan password melalui link yang mencurigakan.',
      'Periksa perangkat dan sesi login secara berkala.',
      'Hapus aplikasi pihak ketiga yang tidak diperlukan.',
      'Perbarui sistem operasi, browser, dan aplikasi.',
      'Pastikan email dan nomor pemulihan selalu dapat diakses.',
      'Jangan membagikan OTP, recovery code, password, atau cookie sesi.',
      'Periksa notifikasi keamanan dan segera tangani aktivitas yang tidak dikenali.'
    ]

    :slug==='security-checklist'
    ?[
      'Pastikan password setiap akun penting unik dan tidak digunakan ulang.',
      'Aktifkan 2FA atau passkey bila tersedia.',
      'Perbarui email dan nomor pemulihan.',
      'Pastikan email pemulihan juga memiliki keamanan yang baik.',
      'Periksa perangkat dan sesi aktif.',
      'Keluarkan perangkat yang benar-benar tidak dikenal.',
      'Tinjau aplikasi pihak ketiga dan izin yang tidak diperlukan.',
      'Periksa aktivitas login dan notifikasi keamanan.',
      'Pastikan sistem operasi, browser, dan aplikasi diperbarui.',
      'Simpan backup code atau recovery method di tempat yang aman.',
      'Jangan membagikan kredensial atau kode keamanan kepada siapa pun.'
    ]

    :[
      'Aktifkan metode keamanan yang tersedia pada layanan.',
      'Gunakan password yang unik dan sulit ditebak.',
      'Simpan kode cadangan atau recovery method sesuai petunjuk resmi.',
      'Periksa perangkat dan sesi login secara berkala.',
      'Periksa aplikasi pihak ketiga yang memiliki akses.',
      'Perbarui sistem operasi, browser, dan aplikasi.',
      'Jangan memasukkan kredensial pada halaman yang asal-usulnya tidak jelas.'
    ]
  },

  {
    heading:'Hal yang harus dihindari',
    items:[
      'Jangan memasukkan password pada halaman yang asal-usulnya tidak jelas.',
      'Jangan menggunakan jasa pemulihan yang meminta password, cookie, OTP, atau recovery code.',
      'Jangan membagikan kode verifikasi kepada orang yang mengaku sebagai petugas bantuan.',
      'Jangan menggunakan password yang sama pada banyak akun penting.',
      'Jangan memasang aplikasi atau ekstensi yang meminta akses berlebihan tanpa alasan yang jelas.',
      'Jangan menyetujui permintaan login yang tidak Anda lakukan.',
      'Jangan menyimpan backup code di tempat yang dapat diakses sembarang orang.'
    ]
  },

  {
    heading:'FAQ',
    items:[
      'Apakah keamanan tambahan berarti akun pasti tidak akan diretas? Tidak. Keamanan tambahan mengurangi risiko dan dapat memperkecil dampak ketika salah satu faktor keamanan bocor.',
      'Apakah password yang panjang selalu aman? Tidak selalu. Password yang panjang tetapi digunakan ulang atau sudah diketahui pihak lain tetap berisiko.',
      'Apakah saya boleh menggunakan password yang sama untuk beberapa akun? Sebaiknya tidak. Jika satu layanan mengalami kebocoran, password yang sama dapat dicoba pada akun lain.',
      'Apakah OTP boleh diberikan kepada petugas bantuan? Jangan. Kode verifikasi bersifat rahasia dan tidak seharusnya diberikan kepada orang lain.',
      'Kapan perlu melakukan pemeriksaan keamanan? Lakukan secara berkala dan segera setelah menerima notifikasi keamanan yang tidak Anda kenali.',
      'Apa yang harus dilakukan jika terlanjur memasukkan password di situs mencurigakan? Segera buka situs resmi layanan secara manual, ganti password, periksa sesi aktif, dan aktifkan keamanan tambahan.',
      'Apakah menggunakan 2FA sudah cukup? Tidak. Tetap gunakan password unik, perangkat yang aman, dan kebiasaan login yang baik.',
      'Apa yang harus dilakukan setelah kehilangan perangkat? Gunakan perangkat lain untuk mengamankan akun, keluarkan sesi perangkat yang hilang jika layanan menyediakan opsi tersebut, lalu periksa metode pemulihan.'
    ]
  }
],

secOfficial[slug]
)));
window.HELP_ARTICLES=A;
