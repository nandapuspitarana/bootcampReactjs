const timeDom = document.getElementById('time');
const salamDom = document.getElementById('salam');

window.addEventListener('load', function waktu(){
  const sekarang = new Date()
  let jam = sekarang.getHours()
  let menit = sekarang.getMinutes()
  let detik = sekarang.getSeconds()
  menit = checkTime(menit);
  detik = checkTime(detik);
  const dataWaktu = jam + ":" + menit
  let dataSalam = salam(jam);

  timeDom.innerHTML = dataWaktu;
  salamDom.innerHTML = dataSalam;
  //setInterval(waktu, 500)
})

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function salam(waktu) {
  if (waktu < 10) {
    return "Good Morning";
  } else if (waktu > 9 && waktu < 16 ) {
    return "Good Afternoon";
  } else if (waktu > 15 && waktu < 21 ) {
    return "Good night";
  } else {
    return "Have a nice dream";    
  }
}