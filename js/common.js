//변수 선언
const gnb = document.querySelector('#gnb');
const header = document.querySelector('#header');
let num;
let lilength = $('#main > ul li').length;
let lilength2 = $('.Year > ul > li').length;
let classNum;
let state = 1;
let state2 = 1;
let state3 = 1;
let state5 = 1;

//==================header 및 scroll 후 gnb고정=====================
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
// brand.js 


//===================gnb(down)섹션=======================

// gnb.addEventListener('mouseenter', function(){
//   header.classList.add('gnbdown');
// })
// header.addEventListener('mouseleave', function(){
//   header.classList.remove('gnbdown')
// })



// =========max-width: 1024px에서 gnbHamBtn활성화=========
// gnbUl slideToggle!!!
function rwdgnb(){

  if($(window).width() <= 1024){
    $("#gnb > ul > li > a ").off()

    if(state2 == 1){
      state2 = 0;
      $('#gnb').hide();
      $('.gnbUl').hide();
    }

    $('#gnbHamBtn').show();
    $('#gnbHamBtn').toggle(function(){
      $('#gnb').show();
      $('#gnbHamBtn').addClass('White')
    },function(){
      $('#gnb').hide();
      $('#gnbHamBtn').removeClass('White')
    })
    $('.gnbUl').hide();
    
    $('#gnb ul li > a').on('click', function(e){
      e.preventDefault();
      $(this).next().slideDown(function(){
        $('.gnbUl').not($(this)).slideUp();
      })
    })
    
    gnb.addEventListener('mouseenter', function(){
      header.classList.remove('gnbdown')
    })
  }
  
  if($(window).width() > 1024){
    $("#gnb > ul > li > a ").off()

    if(state2 == 0){
      state2 = 1;
      $('#gnb').show();
      $('.gnbUl').show();
    }

    gnb.addEventListener('mouseenter', function(){
      header.classList.add('gnbdown');
    })
    header.addEventListener('mouseleave', function(){
      header.classList.remove('gnbdown')
    })
  }

}


rwdgnb();
$(window).on('resize',function(){
  rwdgnb();
})



//===================메인슬라이드 섹션====================
// 자동슬라이드함수
function fading() {
  state = 0;

  classNum = $('#main > ul li:first').attr('id').substr(6,1);

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
// 숫자 클릭 시=> 해당 연도의 제품 사진 나오도록, 해당연도부터 슬라이드 이어지게
let state4 = 1;
let pos, ddLength;
$('.Year ul li').on('click',function(){
  if(state4==1){
    state4 = 0;
    let yearIndex = $(this).index();
    $('.Year ul li').removeClass('yearFoc')
    $('.Year ul li:eq('+ yearIndex +')').addClass('yearFoc')
    ddLength = $(this).find('dd').length;

//제품 각각이 위에서 떨어지면서 모두 다른시간에 스르륵 나타나는 애니메이션
  $('#orionway .Year ul li dl dd').each(function(){
    // pos = $(this).position().top;
    $(this).css({opacity:0}).stop().delay($(this).index()*100).animate({opacity:1})
  })
  setTimeout(function(){
    state4 = 1;
  },1000)
}
})



//==============brands 섹션 마우스 롤오버=================

  // $('#brands div li a').hover(function(){
  //   $(this).stop().animate({opacity:1})
  //   $(this).parent().stop().animate({backgroundSize: '125%'})
  //   $(this).children('dl').stop().animate({opacity:1})

  // },function(){
  //   $(this).stop().animate({opacity:0})
  //   $(this).parent().stop().animate({backgroundSize: '120%'})
  //   $(this).children('dl').stop().animate({opacity:0})
  //   })


//=======222222brands 섹션 마우스 롤오버2222222========
// 1350이상서 mouseenter하고있으면서 resize해 1350이하가 되면 원하는 js 적용이 안됨
function brands2(){
  if($(window).width() <= 1349){
    $('#brands div li a').off()
    if(state3 == 1){
      state3 = 0;
      $('#brands div li a').css({opacity: 1});
      $('#brands div li a').children('dl').stop().css({opacity:1})
      $('#brands div li a').parent().stop().css({backgroundSize: '100%'})
    }
        $('#brands div li a').hover(function(){
          $(this).parent().stop().animate({backgroundSize: '120%'})        
          $(this).children('dl').stop().animate({opacity: 1})        
        }, function(){
          $(this).parent().stop().animate({backgroundSize: '100%'})
          $(this).children('dl').stop().animate({opacity: 1})        
          
        })
    }
  else if($(window).width() > 1349){
    // $('#brands div li a').off()
    if(state3 == 0){
      state3 = 1;
      $('#brands div li a').css({opacity: 0});
      $('#brands div li a').children('dl').stop().css({opacity:0})
      $('#brands div li a').parent().stop().css({backgroundSize: '120%'})
    }
        $('#brands div li a').hover(function(){
          $(this).stop().animate({opacity:1})
          $(this).parent().stop().animate({backgroundSize: '125%'})
          $(this).children('dl').stop().animate({opacity:1})
      
        },function(){
          $(this).stop().animate({opacity:0})
          $(this).parent().stop().animate({backgroundSize: '120%'})
          $(this).children('dl').stop().animate({opacity:0})
          })
    }
  }


brands2();

$(window).on('resize', function(){
  brands2();
})




//===============recipes 섹션 마우스 롤오버=================
$('#recipes ul li').hover(function(){
  $(this).children('a').addClass('reciFoc').stop().animate({top: '30%'})
},function(){
  $(this).children('a').removeClass('reciFoc').stop().animate({top: 180})
})



//===================followUs섹션 마우스 롤오버====================
$('#followUs .insta_ph ul li a').hover(function(){
  $(this).stop().animate({backgroundSize:360})
}, function(){
  $(this).stop().animate({backgroundSize:330})
}) 

//====1350px이하에서 자동 슬라이드====

let aWidth = $('#followUs .insta_ph ul li a').width();

function flwSliding(){
  if($(window).width() < 1350){
    $('#followUs .insta_ph ul').animate({marginLeft: -aWidth}, function(){
      $(this).append($('#followUs .insta_ph ul li:first'))})

  }
}
setInterval(flwSliding, 3000);



$(window).on("resize", function(){
  if($(window).width() > 1350){
    $('#followUs .insta_ph ul').css({marginLeft:'calc(50% - 653px)'})
      // 원래 img순서대로 재배치해주기
      $('#followUs .insta_ph ul li a').removeClass();
      $('#followUs .insta_ph ul li:eq(0)').children('a').addClass('img1')
      $('#followUs .insta_ph ul li:eq(1)').children('a').addClass('img2')
      $('#followUs .insta_ph ul li:eq(2)').children('a').addClass('img3')
      $('#followUs .insta_ph ul li:eq(3)').children('a').addClass('img4')
  }
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



  //==============topBtn클릭시(brand서브 페이지에서) 세로 메뉴 원형 버튼 색===============
  $('.topBtn').on('click',function(){
    $('#Bgnb ul li a').removeClass('Bfoc')
    $('#Bgnb ul li:eq(0) a').addClass('Bfoc')
    n = 1;
  })
