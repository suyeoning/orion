//변수 선언
let n = 1;
let m;
let state3 = 1
const gnb = document.querySelector('#gnb');
const header = document.querySelector('#header');
let num;
let lilength = $('#main > ul li').length;
let lilength2 = $('.Year > ul > li').length;
let state = 1;

//==================header및gnb고정=====================
$(window).on('load', function(){
  if($(window).scrollTop() > 800 && state == 1){
    state = 0;
    $('#header').addClass('effect')
                .css({top:-20})
                .animate({top:0})

  }

  else if($(window).scrollTop() <= 800 && state == 0){
    state=1;
    $('#header').removeClass('effect')

  }
})

$(window).on('scroll', function(){
  if($(window).scrollTop() > 800 && state == 1){
    state = 0;
    $('#header').addClass('effect')
    .css({top:-70})
    .animate({top:0})

  }

  else if($(window).scrollTop() <= 800 && state == 0){
    state=1;
    $('#header').removeClass('effect')

  }
})

//===================gnb(down)섹션=======================

gnb.addEventListener('mouseenter', function(){
  header.classList.add('gnbdown');
})
header.addEventListener('mouseleave', function(){
  header.classList.remove('gnbdown')
})

//======================Bgnb(세로메뉴)===========================
//스크롤1번=1페이지넘김
function scrolling(e){

  if(e.wheelDelta < 0 && state3 == 1){
    state3=0;
    n++;

    if(n>4){
      n=4;
      state3 = 1;
    }
    else{
      $('#brand'+n+'> *').css({opacity:0})
      $('html, body').stop().animate({scrollTop:$('#brand'+n).position().top}, function(){
        $('#brand'+n+'> *').animate({opacity:1})
        state3 = 1;
      })
    }

  }

  else if(e.wheelDelta > 0 && state3 == 1){
    n--;
    state3=0;
    if(n<1){
      n=1;
      state3 = 1;

    }
    else{

      $('#brand'+n+'> *').css({opacity:0})
      $('html, body').stop().animate({scrollTop:$('#brand'+n).position().top}, function(){
        $('#brand'+n+'> *').animate({opacity:1})
        state3 = 1;

      })
    }

  }

  m = n-1;
  $('#Bgnb ul li a').removeClass('Bfoc')
  $('#Bgnb ul li:eq('+m+') a').addClass('Bfoc')

}

//함수호출
document.addEventListener('wheel', function(e){
  scrolling(e);
})


//원형 버튼 클릭시, 색상변화와 해당 페이지로 슬라이드 애니메이션
$('#Bgnb ul li a').on('click', function(){

  $('#Bgnb ul li a').removeClass('Bfoc')
  $(this).addClass('Bfoc')
  let idName = $(this).attr('href');
  $('html, body').animate({scrollTop: $(idName).position().top})
})

//새로고침하면 맨 위 페이지로
window.addEventListener('load', function(){
  setTimeout(function(){
    window.scrollTo(0,0)
  },10)
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


//==============topBtn클릭시 brand서브 페이지 세로 메뉴 원형 버튼 색===============
$('.topBtn').on('click',function(){
  $('#Bgnb ul li a').removeClass('Bfoc')
  $('#Bgnb ul li:eq(0) a').addClass('Bfoc')
  n = 1;
})
