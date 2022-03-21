var x = document.getElementById("divCont");
var y = document.getElementById("divForm");
var z = document.getElementById("divHab");
var a = document.getElementById("divCon");
var b = document.getElementById("divMain");
var i = document.getElementById("image");

function inicio() {
    if (b.style.display === "none") {
        z.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        a.style.display = "none";
        b.style.display = "inline-block";
    } else {
        z.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        a.style.display = "none";
        b.style.display = "inline-block";
    }
}
function nosotros() {    
    if (x.style.display === "none") {
        x.style.display = "inline-block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
    } else {
        x.style.display = "inline-block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
	}
}
function menu() {
    if (z.style.display === "none") {
        z.style.display = "inline-block";
        x.style.display = "none";
        y.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
    } else {
        z.style.display = "inline-block";
        x.style.display = "none";
        y.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
	}
}
function info() {
    if (y.style.display === "none") {
        y.style.display = "inline-block";
        x.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        
    } else {
        y.style.display = "inline-block";
        x.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
	}
}



let titleCoffe = document.getElementById('titleCoffe')
let titleCake = document.getElementById('titleCake')
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let left2 = document.querySelector('.left2');
let right2 = document.querySelector('.right2');
let counter = 0;
let coffes = ['imagenes/frape.png','imagenes/espresso.png', 'imagenes/moka.jpg'];
let title = ['Frapé','Espresso','Moka'];
let cakes = ['imagenes/cake.jpg','imagenes/hotcake.jpg', 'imagenes/pay.jpg'];
let title2 = ['Cake','Hotcake','Pay'];

let coffeArray = ()=> {
    left.addEventListener("click", ()=> {
        counter--;
        counter == -1 ? counter = coffes.length-1 : counter;
        titleCoffe.innerHTML = `${title[counter]}`
        changeImage(`${coffes[counter]}`, 'coff');
    });
    right.addEventListener("click", ()=> {
        counter++;
        counter == coffes.length ? counter = 0 : counter;
        titleCoffe.innerHTML = `${title[counter]}`
        changeImage(`${coffes[counter]}`, 'coff');
    }); 
}
let cakeArray = ()=> {
    left2.addEventListener("click", ()=> {
        counter--;
        counter == -1 ? counter = cakes.length-1 : counter;
        titleCake.innerHTML = `${title2[counter]}`
        changeImage(`${cakes[counter]}`, 'pancake');
    });
    right2.addEventListener("click", ()=> {
        counter++;
        counter == cakes.length ? counter = 0 : counter;
        titleCake.innerHTML = `${title2[counter]}`
        changeImage(`${cakes[counter]}`, 'pancake');
    });
}

function changeImage(a, imgid) {
    document.getElementById(imgid).src=a;
}

coffeArray()
cakeArray()

let btnMenu = document.getElementById('btn');
let float = document.getElementById('move');
let pivote = false;

btnMenu.addEventListener('click', () => {
    if (pivote == false){
        float.style.display = 'block';  
        float.setAttribute('class','show');
        pivote = true;
    }else{
        float.style.display = 'none';
        pivote = false;
    }    
});
