//변수 선언
const gnb = document.querySelector('#gnb');
const header = document.querySelector('#header');
let num;
let lilength = $('#main > ul li').length;
let lilength2 = $('.Year > ul > li').length;
let classNum;
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

//============brand원페이지==================




//===================gnb(down)섹션=======================

gnb.addEventListener('mouseenter', function(){
  header.classList.add('gnbdown');
})
header.addEventListener('mouseleave', function(){
  header.classList.remove('gnbdown')
})



//===================메인슬라이드 섹션====================
// 자동슬라이드함수
function fading() {
  state = 0;

  classNum = $('#main > ul li:first').attr('id').substr(6,1)

  if(classNum==lilength){
    classNum = 0;
  }
  $('.mainNum a span').removeClass('numFoc')
  $('.mainNum a:eq('+ classNum +')').children('span:eq(0)').addClass('numFoc')


  $('#main li:eq(1):not(:animated)').addClass('sliderFoc')
                                    .css({opacity:0})
                                    .animate({opacity:1}, 500, function(){
                        $('#main > ul ').append($('#main > ul > li:first'))
                        $('#main > ul > li:last').removeClass('sliderFoc')
            })
}




//자동슬라이드실행
//번호버튼 클릭시 색 변경 및 해당 슬라이드로 전환
let timer = setInterval(fading, 3000)

$('.mainNum a').on('click',function(){


  let btnIndex = $(this).index()+1;
  num = btnIndex;

  if($(this).children('span:eq(0)').hasClass('numFoc')){return;}

  $('.mainNum a span').removeClass('numFoc')
  $(this).children('span:eq(0)').addClass('numFoc')

  $('#slider'+ btnIndex ).addClass('sliderFoc')
                          .css({opacity:0})
                          .animate({opacity:1}, function(){
                            $('#main > ul li').not($(this)).removeClass('sliderFoc');
                            for( i=1; i<lilength; i++)
                            {
                              num++;
                              if(num==lilength+1)
                              num=1;
                              $('#main ul').append($('#slider'+ num))
                            }
                          })
})



//버튼 링크 기능 막기(top버튼,로고버튼 제외하고)
$('a').not('.topBtn, #header h1 a, #gnb a').on('click', function(e){
  e.preventDefault();
  clearInterval(timer);
  timer = setInterval(fading, 3000)
})


//===============orionway 슬라이드========================
//오토슬라이드 추가
// let i = 0
//
// function yearsliding(){
//   state = 0;
//   i++;
//   if (i==lilength2){ i=0;}
//   $('.Year > ul > li').removeClass('yearFoc')
//   $('.Year > ul > li:eq('+ i +')').addClass('yearFoc')
//                                   .css({opacity:0})
//                                   .animate({opacity:1})
// }
//
//


// 숫자 클릭 시=> 해당 연도의 제품 사진 나오도록, 해당연도부터 슬라이드 이어지게
$('.Year ul li').on('click',function(){
  let yearIndex = $(this).index();
  // i = yearIndex;
  // $('.Year ul li:eq('+ yearIndex +') dl').css({opacity:1})
  $('.Year ul li').removeClass('yearFoc')
  $('.Year ul li:eq('+ yearIndex +')').addClass('yearFoc')
                                      .fadeIn()
    // $('.Year ul li:eq('+ yearIndex +') dl').addClass('yearFoc').fadeIn()
})

// let timer2 = setInterval(yearsliding, 3000)







//==============brands 섹션 마우스 롤오버=================
$('#brands div li a').hover(function(){
  $(this).addClass('on').stop().css({opacity:0})
                        .animate({opacity:1})
  $(this).parent().stop().animate({backgroundSize: '125%'})

  $(this).children('dl').stop().animate({opacity:1})

},function(){
  $(this).removeClass('on')
  $(this).parent().stop().animate({backgroundSize: '120%'})
  $(this).children('dl').stop().animate({opacity:0})
})


//===============recipes 섹션 마우스 롤오버=================
$('#recipes ul li').hover(function(){
  $(this).children('a').addClass('reciFoc').stop().animate({top: '30%'})
},function(){
  $(this).children('a').removeClass('reciFoc').stop().animate({top: 180})
})


//===================followUs섹션 마우스 롤오버====================
$('#followUs .insta_ph ul li a').hover(function(){
  $(this).stop().animate({backgroundSize:330})
}, function(){
  $(this).stop().animate({backgroundSize:300})
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
