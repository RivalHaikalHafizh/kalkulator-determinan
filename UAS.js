if (window.innerWidth <= 600) {
	const isi =document.getElmenetsByClassName('isi')[0];
	isi.innerHTML+"halaman ini harus dibuka dileptop jika ingin menguunakan kalkulator";
	alert
}
// kali empat
// value
const m11 =document.querySelector('input[name=satusatu]');
const m12 =document.querySelector('input[name=satudua]');
const m13 =document.querySelector('input[name=satutiga]');
const m14 =document.querySelector('input[name=satuempat]');
const m21 =document.querySelector('input[name=duasatu]');
const m22 =document.querySelector('input[name=duadua]');
const m23 =document.querySelector('input[name=duatiga]');
const m24 =document.querySelector('input[name=duaempat]');
const m31 =document.querySelector('input[name=tigasatu]');
const m32 =document.querySelector('input[name=tigadua]');
const m33 =document.querySelector('input[name=tigatiga]');
const m34 =document.querySelector('input[name=tigaempat]');
const m41 =document.querySelector('input[name=empatsatu]');
const m42 =document.querySelector('input[name=empatdua]');
const m43 =document.querySelector('input[name=empattiga]');
const m44 =document.querySelector('input[name=empatempat]');

const result=document.querySelector('#output');
const button =document.querySelector('#ordo4');

function empath(){
	const satu1=m11.value;
	const satu2=m12.value;
	const satu3=m13.value;
	const satu4=m14.value;
	const dua1=m21.value;
	const dua2=m22.value;
	const dua3=m23.value;
	const dua4=m24.value;
	const tiga1=m31.value;
	const tiga2=m32.value;
	const tiga3=m33.value;
	const tiga4=m34.value;
	const empat1=m41.value;
	const empat2=m42.value;
	const empat3=m43.value;
	const empat4=m44.value;
	const hasil =(satu1*dua2*tiga3*empat4)-(satu2*dua3*tiga4*empat1)+(satu3*dua4*tiga1*empat2)-(satu4*dua1*tiga2*empat3)-(satu1*dua4*tiga3*empat2)+(satu2*dua1*tiga4*empat3)-(satu3*dua2*tiga1*empat4)+(satu4*dua3*tiga2*empat1);
	const h3baru=document.createElement('h3');
	h3baru.innerHTML=hasil;
	const result=document.querySelector('#output');
	result.appendChild(h3baru);
}
// kali tiga
const kalitiga =document.querySelector('#kalitiga');
const empat = document.querySelector('.empat');
let ilang3 =document.querySelectorAll('.tiga');
kalitiga.addEventListener('click',function(){
	if (tiga.classList.item(2) =='none') {
		tiga.classList.remove('none');
	ilang2.forEach(function(ele){
		ele.classList.remove('none');
	});	
	}else{
	empat.classList.add('none');
	ilang3.forEach(function(ele){
	ele.classList.add('none');
	});
	button.setAttribute('onclick','tigah()');
	}

	
});
function tigah(){
	const satu1=m11.value;
	const satu2=m12.value;
	const satu3=m13.value;
	const dua1=m21.value;
	const dua2=m22.value;
	const dua3=m23.value;
	const tiga1=m31.value;
	const tiga2=m32.value;
	const tiga3=m33.value;
	const hasil =(satu1*dua2*tiga3)+(satu2*dua3*tiga1)+(satu3*dua1*tiga2)-(satu3*dua2*tiga1)-(satu1*dua3*tiga2)-(satu2*dua1*tiga3);
	const h3baru=document.createElement('h3');
	h3baru.innerHTML=hasil;
	const result=document.querySelector('#output');
	result.appendChild(h3baru);
 }
// kali 2
const kalidua =document.querySelector('#kalidua');
const tiga = document.querySelector('.tigas');
let ilang2 =document.querySelectorAll('.dua');
kalidua.addEventListener('click',function(){

	tiga.classList.add('none');
	empat.classList.add('none');
	ilang2.forEach(function(ele){
		ele.classList.add('none');
	});	
	ilang3.forEach(function(ele){
		ele.classList.add('none');
	});
	button.setAttribute('onclick','duah()');
});

function duah(){
	const satu1=m11.value;
	const satu2=m12.value;
	const dua1=m21.value;
	const dua2=m22.value;
	const hasil =(satu1*dua2)-(satu2*dua1);
	const h3baru=document.createElement('h3');
	h3baru.innerHTML=hasil;
	const result=document.querySelector('#output');
	result.appendChild(h3baru);
 }



// kali4
const kaliempat =document.querySelector('#kaliempat');
kaliempat.addEventListener('click',function(){
	tiga.classList.remove('none');
	empat.classList.remove('none');
	ilang2.forEach(function(ele){
		ele.classList.remove('none');
	});	
	ilang3.forEach(function(ele){
		ele.classList.remove('none');
	});
	button.setAttribute('onclick','empath()');
});
