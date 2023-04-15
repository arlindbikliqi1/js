const sum = new Function('a', 'b', 'return a + b');
console.log(sum(400,1));


function Car (model, year,serie) {
  this.model = model;
  this.year = year;
  this.serie =serie;
};

let my_chevy = new Car("Chevrolet", 2015, "CHE-2015");
let my_prius = new Car("Toyota", 2020, "TOY-2020");
let audi=new Car("Audi",2021,"Audia7");
let mercedes=new Car("mercedes",2014,"Mercedess");

console.log(audi);
console.log(my_chevy);
console.log(my_prius);
console.log(mercedes);

let buton1=document.getElementById('btn1');
let  buton2=document.getElementById('btn2');
let text=document.getElementById('txt');
let text2=document.getElementById('txt2');
let buton3=document.getElementById('btn3');
let image=document.getElementById('img1');



buton1.onclick=function(){
	image.setAttribute("class","arlind");
}
buton2.onclick=function(){
	text2.setAttribute("class","bikliqi");
}
buton3.onclick=function(){
	text2.setAttribute("class","hide");
	text.setAttribute("class","hide");
}

let obj=(firstname="arlind");

let array=[obj,"bikliqi",18,true,null];
console.log(array);


array.push("hello world");
console.log(array);


array.splice(2,1,"one milion");
console.log(array);

let text6="hello world free"
let result=text6.replace(/world/,"arlind bossi")
document.getElementById("txt").innerHTML=result;


let input=document.getElementById('input');
let button3=document.getElementById('btn3');
let ttext=document.getElementById('ttext');

button3.onclick=function(){
	ttext.innerHTML=input.value;
}
let textt="hello my friend is a ";
let rezultat=textt.search("my friend");
document.getElementById("ttext").innerHTML=rezultat;







function testNum(a) {
	let result;
	if (a > 1) {
	  result = 'positive';
	} else {
	  result = 'NOT positive';
	}
	return result;
  }
  
  console.log(testNum(2));