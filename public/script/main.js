const bgAnimation = document.querySelector('.bgAnimation');
const images = ["section01_bg", "section02_bg", "section03_bg", "section04_bg" ,"section05_bg"];

const bgChange = ()=>{
  const selectImg = images[Math.floor(Math.random()*images.length)];
  //console.log(`url(/images/${selectImg}.jpg)`);
  bgAnimation.style.background = `url(/images/${selectImg}.jpg)`;  
}
bgChange(); // 맨처음 이미지 셋팅
setInterval(bgChange, 7000);


// swiperjs 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
});