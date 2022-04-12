//header및gnb고정
// $(window).on('load', function(){
//   if($(window).scrollTop() > 800 && state == 1){
//     state = 0;
//     $('#header').addClass('effect')
//                 .css({top:-20})
//                 .animate({top:0})
//
//   }
//
//   else if($(window).scrollTop() <= 800 && state == 0){
//     state=1;
//     $('#header').removeClass('effect')
//
//   }
// })

// $(window).on('scroll', function(){
//   if($(window).scrollTop() > 800 && state == 1){
//     state = 0;
//     $('#header').addClass('effect')
//     .css({top:-70})
//     .animate({top:0})
//
//   }
//
//   else if($(window).scrollTop() <= 800 && state == 0){
//     state=1;
//     $('#header').removeClass('effect')
//
//   }
// })



//===================gnb(down)섹션=======================

gnb.addEventListener('mouseenter', function(){
  header.classList.add('gnbdown');
})
header.addEventListener('mouseleave', function(){
  header.classList.remove('gnbdown')
})

let m;
let n = 1;
let state3 = 1
//======================Bgnb===========================
//스크롤1번=1페이지넘김
function scrolling(e){
  if(e.wheelDelta<0 && state3 == 1){
    state3 = 0;
    n++;
    if(n==5){
      n=0;
      state3 = 1;
    }
    else{
      $('html, body').animate({scrollTop:$('#brand'+n).position().top})
      state3 = 1;
    }
  }
  else if(e.wheelDelta>0 && state3 == 0){
    state3 = 1;
    n--;
    $('html, body').animate({scrollTop:$('#brand'+n).position().top})
  }
  m = n-1;
  $('#Bgnb ul li a').removeClass('Bfoc')
  $('#Bgnb ul li:eq('+m+') a').addClass('Bfoc')
}

document.addEventListener('wheel', function(e){
  scrolling(e);
})



//원형 버튼 클릭시, 색상변화와 해당 페이지로 슬라이드 애니
//새로고침해도 원형버튼이 해당 섹션위치와 같은 버튼 색상 레드
// window.addEventListener('load', function()){
//
// }
$('#Bgnb ul li a').on('click', function(){

  $('#Bgnb ul li a').removeClass('Bfoc')
  $(this).addClass('Bfoc')
  let idName = $(this).attr('href');
  $('html, body').animate({scrollTop: $(idName).position().top})
})


//==============topBtn클릭시 버튼 색===============
$('.topBtn').on('click',function(){
  $('#Bgnb ul li a').removeClass('Bfoc')
  $('#Bgnb ul li:eq(0) a').addClass('Bfoc')
})


//=============footer 섹션 .f_menu 슬라이드 업다운===============

$('button').toggle(function(){
  $(this).removeClass('btn1');
  $(this).addClass('btn2');

  $('.f_menu').css({overflow:'visible'})
  $('.f_menuList ul').animate({top:'-169'})
}, function(){
  $(this).removeClass('btn2');
  $(this).addClass('btn1');


  $('.f_menuList ul').animate({top: 0})
  })
