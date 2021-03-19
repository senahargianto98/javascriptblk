const judul = document.getElementById('judul');
judul.style.color = "red";
judul.style.backgroundColor = '#ccc';
judul.innerHTML = "Belajar Dom";

const p = document.getElementsByTagName('p');
p[0].style.backgroundColor = 'lightblue';
p[1].style.backgroundColor = 'lightblue';
p[2].style.backgroundColor = 'yellow';
p[3].style.backgroundColor = 'green';

// for ( let i = 0; i < p.length;i++ ){
//     p[i].style.backgroundColor = 'lightblue';
// } 
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini di ubah javascript';

const p4 = document.querySelector('#b p');
p4.style.color = 'blue';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'purple';

const li3 = document.querySelector('section#b ul li:nth-child(1)');
li3.style.backgroundColor = 'orange';

const p2 = document.querySelector('p');
p2.innerHTML = 'ini diubah javascript';

const p3 = document.querySelectorAll('p');
p3[1].style.backgroundColor = 'lightblue';