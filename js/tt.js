let hours=00;
let secand=00;
let min=00;
let appendh=document.getElementById('hours')
let appends=document.getElementById('secand')
let appendm=document.getElementById('min')
let buth=document.getElementById('but-start')
let buts=document.getElementById('but-stop')
let butm=document.getElementById('but-reset')
let int;


function starttimer(){
  //increse ms
  min++;
  //check how to print ms
  if (min<=9){
    appendm.innerHTML="0"+ min;
  }else if (min<=99){
    appendm.innerHTML= min;
  }else{
    min=0;
    secand++; 
    appendm.innerHTML="00";
  }
  //check how to print s
  if (secand<=9){
    appends.innerHTML="0"+ secand;
  }else if (secand<=59){
    appends.innerHTML= secand;
  }else{
    secand=0;
    hours++;
    appends.innerHTML="00"; 
  }
  //check how to print m
  if (hours<=9){
    appendh.innerHTML="0"+ hours;
  }else  {
    appendh.innerHTML= hours;
  } 
}
buth.onclick= function(){
  int = setInterval(starttimer)
}
buts.onclick= function(){
clearInterval(int)
}
butm.onclick= function(){
  clearInterval(int)
  hours="00"
  secand="00"
  min="00"
  appendh.innerHTML = hours
  appendm.innerHTML = min
  appends.innerHTML = secand
  }
