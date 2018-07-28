const timeDom = document.getElementById('time');

window.addEventListener('load', function waktu(){
  const sekarang = new Date()
  const jam = sekarang.getHours()
  const menit = sekarang.getMinutes()
  const detik = sekarang.getSeconds()
  const dataWaktu = jam + ":" + menit + ":" + detik

  timeDom.innerHTML = dataWaktu;
  setInterval(waktu, 500)
})