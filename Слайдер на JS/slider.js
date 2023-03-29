const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const outImg = document.querySelector('.image');
const pressPoint = document.querySelector('.point');
const point1Btn = document.querySelector('#point1');
const point2Btn = document.querySelector('#point2');
const point3Btn = document.querySelector('#point3');

const art1 = 'images1/стулья1.jpg'
const art2 = 'images1/стол2.jpg'
const art3 = 'images1/горка3.jpg'
const pointWhite = 'images1/белая.svg'
const pointGrey = 'images1/серая.svg'


const images = [art1, art2, art3];
const points = [point1Btn, point2Btn, point3Btn];


let i = 0;

outImg.innerHTML =`<img src=${images[i]}>` 


nextBtn.onclick = function responseOfButtonsNext() {
    if(i < images.length - 1){
        i++
    }else{
        i = 0
    }
    outImg.innerHTML =`<img src=${images[i]}>`;
    points[i].click()
}

prevBtn.onclick = function responseOfButtonsPrev() {
    if(i > 0 ){
        i--
    }else{
        i = images.length-1 
    }
    outImg.innerHTML =`<img src=${images[i]}>`;
    points[i].click()
};


point1Btn.onclick = () =>{
  outImg.innerHTML =`<img src=${art1}>`;
  admiralBtn.click();
  point1Btn.innerHTML = `<img src=${pointWhite}>`;
  sochiBtn.classList.remove('rostov1');
  patrioticBtn.classList.remove('rostov1');
  point2Btn.innerHTML = `<img src=${pointGrey}>`;
  point3Btn.innerHTML = `<img src=${pointGrey}>`;
};

point2Btn.onclick = () =>{
  outImg.innerHTML =`<img src=${art2}>`
  sochiBtn.click();
  point2Btn.innerHTML = `<img src=${pointWhite}>`;
  admiralBtn.classList.remove('rostov1');
  patrioticBtn.classList.remove('rostov1');
  point1Btn.innerHTML = `<img src=${pointGrey}>`;
  point3Btn.innerHTML = `<img src=${pointGrey}>`;
};

point3Btn.onclick = () =>{
  outImg.innerHTML =`<img src=${art3}>`;
  patrioticBtn.click();
  point3Btn.innerHTML = `<img src=${pointWhite}>`;
  sochiBtn.classList.remove('rostov1');
  admiralBtn.classList.remove('rostov1');
  point2Btn.innerHTML = `<img src=${pointGrey}>`;
  point1Btn.innerHTML = `<img src=${pointGrey}>`;
};

const admiralBtn = document.querySelector('#admiral');
const sochiBtn = document.querySelector('#sochi');
const patrioticBtn = document.querySelector('#patriotic');

admiralBtn.onclick = () =>{
  outImg.innerHTML =`<img src=${art1}>`
  admiralBtn.classList.add('rostov1');
  point1Btn.click();

};

sochiBtn.onclick = () =>{
  outImg.innerHTML =`<img src=${art2}>`
  sochiBtn.classList.add('rostov1');
  point2Btn.click();
};

patrioticBtn.onclick = () =>{
  outImg.innerHTML =`<img src=${art3}>`
  patrioticBtn.classList.add('rostov1');
  point3Btn.click();
};