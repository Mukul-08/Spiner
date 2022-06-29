
function shuffle(array){

  var ci= array.length,
  ri;
  while(0!=ci){
     ri=Math.floor(Math.random()*ci);
     ci--;
     [array[ci],array[ri]] = [
      array[ci],
      array[ri],
     ];
  }
  return array;
}


var x = 0;
function spin(){
  // Wheel.play();
  if(x==0){
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SI = "";


  let O50 = shuffle([1890, 2250, 2610]);
  let O25 = shuffle([1850, 2210, 2570]);
  let Free = shuffle([1770, 2130, 2490]);
  let O80 = shuffle([1810, 2170, 2530]);
  let O75= shuffle([1750, 2110, 2470]);
  let O10 = shuffle([1630,1990,2350]);
  let O30 = shuffle([1570,1930,2290]);
  
  let result = shuffle([
    O50[0],
    O25[0],
    Free[0],
    O80[0],
   O75[0],
   O10[0],
   O30[0],
  ]);

  if(O50.includes(result[0])) SI = "50% OFF";
  if(O25.includes(result[0])) SI = "25% OFF";
  if(Free.includes(result[0])) SI = "Free";
  if(O80.includes(result[0])) SI = "80% OFF";
  if(O75.includes(result[0])) SI = "75% OFF";
  if(O10.includes(result[0])) SI = "10% OFF";
  if(O30.includes(result[0])) SI = "30% OFF";

  box.style.setProperty("transition","all ease 5s");
  box.style.transform = "rotate(" + result[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function(){
  element.classList.add("animate");
},5000);



setTimeout(function(){
  //alert;
  Swal.fire({
    title:'Congratulations 🎉🎉you have won 25% OFF',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  
},5500);
 
setTimeout(function(){
  box.style.setProperty("transition","initial");
  box.style.transform = "rotate(90deg)";
},6000);




// console.log(SI);
// alert(SI);

}
x=x+1;
}



var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





  

