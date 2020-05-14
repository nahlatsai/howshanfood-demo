let cookFooter = document.getElementById("cook-footer");
let scrollUpBtn = document.getElementById("scrollUp");
let menuBtn = document.getElementById("menu-icon");
let mobileHeader = document.getElementById("mobile-header");





// function effects() {
  
  
//   console.log(window.pageYOffset)
  
//   if (window.pageYOffset >= 400 && window.pageYOffset < 899) {
//     console.log("400-899");
//     cookFooter.classList.add("fixed");
//     cookFooter.classList.remove("bottom");
//   } else if (window.pageYOffset >= 899) {
//     console.log(">899");
//     cookFooter.classList.add("bottom");
//   } else {
//     console.log("<400");
//     cookFooter.classList.remove("fixed");
//     cookFooter.classList.remove("bottom");
//   }
//   a();
// }

function effects () {
  console.log(window.pageYOffset)
  
  if (window.pageYOffset >= 400 && window.pageYOffset < 899) {
    console.log("400-899");
    cookFooter.classList.add("fixed");
    cookFooter.classList.remove("bottom");
  } else if (window.pageYOffset >= 899) {
    console.log(">899");
    cookFooter.classList.add("bottom");
  } else {
    console.log("<400");
    cookFooter.classList.remove("fixed");
    cookFooter.classList.remove("bottom");
  }
  a();
}


function a() {
    var e = $("#bg-info").offset().top,//元素(#bg-info)上邊框相對於html上邊界的偏移量
        n = $("#bg-info").outerHeight(),//bg-info的高度(包括padding，border和选择性的margin)
        i = $("#bg-info .about").offset().top + 220,//about 上邊框相對於html上邊界的偏移量
        r = $("#bg-info .cook-footer").outerHeight(),//cook-footer的高度
        o = $(window).scrollTop(),//網頁右邊的那個卷軸到最上端網頁的距離有多少
        s = $(window).height(),//視窗高度
        a = 0;
        i + r + a - s < o
          ? ($("#bg-info .cook-footer").removeClass("bottom"), $("#bg-info .cook-footer").addClass("fixed"))
          : $("#bg-info .footer").removeClass("fixed"),
          e + n - s < o && ($("#bg-info .cook-footer").removeClass("fixed"), $("#bg-info .cook-footer").addClass("bottom"))
  }

new WOW().init();

function btnUp() {
  console.log(window.pageYOffset)
  
  if (window.pageYOffset >= 500) {
  scrollUpBtn.classList.add("show");
  } else {
  scrollUpBtn.classList.remove("show");
  }
}

 
window.onscroll = function() {
  effects();
  btnUp();
}

scrollUpBtn.onclick = function() {
  console.log("click");
  window.scrollTo({ 
    top: 100,
    behavior: "smooth" 
  });
}

menuBtn.onclick = function() {
  if(mobileHeader.classList.contains("open")) {
    menuBtn.classList.remove("close-icon");
    mobileHeader.classList.remove("open");
  } else{
    mobileHeader.classList.add("open");
    menuBtn.classList.add("close-icon");
  }
}


// let menuBtn = document.getElementById("menu-icon");

// menuBtn.onclick = function() {
//   if(mobileHeader.classList.contains("open")) {
//     menuBtn.classList.remove("close-icon");
//     mobileHeader.classList.remove("open");
//   } else{
//     mobileHeader.classList.add("open");
//     menuBtn.classList.add("close-icon");
//   }
// }