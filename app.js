const minusBtn = document.querySelector(".minus"),
  plusBtn = document.querySelector(".plus"),
  number = document.querySelector(".num"),
  img2 = document.querySelector("#item1"),
  img3 = document.querySelector("#item2"),
  img4 = document.querySelector("#item3"),
  img5 = document.querySelector("#item4"),
  img6 = document.querySelector("#item5"),
  orderNum = document.querySelector("#orderNum"),
  mainImg = document.querySelector(".main-img");

plusBtn.addEventListener("click", () => {
  var value = Number(number.textContent);
  number.textContent = value + 1;
});

minusBtn.addEventListener("click", () => {
  var value = Number(number.textContent);
  if (value > 1) {
    number.textContent = value - 1;
  }
});

img2.addEventListener("click", () => {
    orderNum.textContent = '01'
  item1.style.border = "2px solid green";
  item2.style.border = "2px solid #a2a3b1";
  item3.style.border = "2px solid #a2a3b1";
  item4.style.border = "2px solid #a2a3b1";
  item5.style.border = "2px solid #a2a3b1";
  mainImg.innerHTML = `<img src="img/img2.svg" alt="" />`;
});
img3.addEventListener("click", () => {
    orderNum.textContent = '02'
  item1.style.border = "2px solid #a2a3b1";
  item3.style.border = "2px solid #a2a3b1";
  item4.style.border = "2px solid #a2a3b1";
  item5.style.border = "2px solid #a2a3b1";
  item2.style.border = "2px solid green";
  mainImg.innerHTML = `<img src="img/img3.svg" alt="" />`;
});
img4.addEventListener("click", () => {
    orderNum.textContent = '03'
  item1.style.border = "2px solid #a2a3b1";
  item2.style.border = "2px solid #a2a3b1";
  item4.style.border = "2px solid #a2a3b1";
  item5.style.border = "2px solid #a2a3b1";
  item3.style.border = "2px solid green";
  mainImg.innerHTML = `<img src="img/img4.svg" alt="" />`;
});
img5.addEventListener("click", () => {
    orderNum.textContent = '04'
  item1.style.border = "2px solid #a2a3b1";
  item2.style.border = "2px solid #a2a3b1";
  item3.style.border = "2px solid #a2a3b1";
  item5.style.border = "2px solid #a2a3b1";
  item4.style.border = "2px solid green";
  mainImg.innerHTML = `<img src="img/img5.svg" alt="" />`;
});
img6.addEventListener("click", () => {
    orderNum.textContent = '05'
  item5.style.border = "2px solid green";
  item1.style.border = "2px solid #a2a3b1";
  item2.style.border = "2px solid #a2a3b1";
  item3.style.border = "2px solid #a2a3b1";
  item4.style.border = "2px solid #a2a3b1";
  mainImg.innerHTML = `<img src="img/img6.svg" alt="" />`;
});
