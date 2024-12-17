const minusBtn = document.querySelector(".minus"),
  plusBtn = document.querySelector(".plus"),
  number = document.querySelector(".num"),
  img1 = document.querySelector("#item1"),
  img2 = document.querySelector("#item2"),
  img3 = document.querySelector("#item3"),
  img4 = document.querySelector("#item4"),
  img5 = document.querySelector("#item5"),
  left = document.querySelector("#left"),
  right = document.querySelector("#right"),
  orderNum = document.querySelector("#orderNum"),
  mainImg = document.querySelector(".main-img");
var imgIndex = 1;
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

left.addEventListener("click", () => {
  if (imgIndex == 1) {
    img5.click();
  } else if (imgIndex == 5) {
    img4.click();
  } else if (imgIndex == 4) {
    img3.click();
  } else if (imgIndex == 3) {
    img2.click();
  } else if (imgIndex == 2) {
    img1.click();
  }
});
right.addEventListener("click", () => {
  if (imgIndex == 1) {
    img2.click();
  } else if (imgIndex == 2) {
    img3.click();
  } else if (imgIndex == 3) {
    img4.click();
  } else if (imgIndex == 4) {
    img5.click();
  } else if (imgIndex == 5) {
    img1.click();
  }
});
img1.addEventListener("click", () => {
  imgIndex = 1;
  orderNum.textContent = "01";
  img1.classList.add("active");
  img2.classList.remove("active");
  img3.classList.remove("active");
  img4.classList.remove("active");
  img5.classList.remove("active");
  mainImg.innerHTML = `<img src="img/img2.svg" alt="" />`;
});
img2.addEventListener("click", () => {
  imgIndex = 2;
  img2.classList.add("active");
  img1.classList.remove("active");
  img3.classList.remove("active");
  img4.classList.remove("active");
  img5.classList.remove("active");
  orderNum.textContent = "02";
  mainImg.innerHTML = `<img src="img/img3.svg" alt="" />`;
});
img3.addEventListener("click", () => {
  imgIndex = 3;
  img3.classList.add("active");
  img2.classList.remove("active");
  img1.classList.remove("active");
  img4.classList.remove("active");
  img5.classList.remove("active");
  orderNum.textContent = "03";
  mainImg.innerHTML = `<img src="img/img4.svg" alt="" />`;
});
img4.addEventListener("click", () => {
  imgIndex = 4;
  orderNum.textContent = "04";
  img4.classList.add("active");
  img2.classList.remove("active");
  img3.classList.remove("active");
  img1.classList.remove("active");
  img5.classList.remove("active");

  mainImg.innerHTML = `<img src="img/img5.svg" alt="" />`;
});
img5.addEventListener("click", () => {
  imgIndex = 5;
  orderNum.textContent = "05";
  img5.classList.add("active");
  img2.classList.remove("active");
  img3.classList.remove("active");
  img4.classList.remove("active");
  img1.classList.remove("active");
  mainImg.innerHTML = `<img src="img/img6.svg" alt="" />`;
});
