//日曆連結
$(document).ready(function() {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyBA8owMc6-Ozf9T9BTAEWufMSdVbOwb3hs',
    events: {
        googleCalendarId: 'pnk42e02rmm3rtgd5f0aves4ac@group.calendar.google.com',
        className: 'gcal-event'
    },
    height: 'auto'
  });
});

$(document).ready(function(){
    //today改今天
  $('.fc-today-button').text('今天');
});
//日曆動作
window.onload = function (){


  //展開按鈕
  $('#tk').click(function(){
    $('.fc-content span').toggleClass('wrap');
  });
  if($(window).width()<768){
    $('.fc-content span').addClass('wrap');
  }

  //主題切換
  $('#tm').click(function(){
    $('body').css('background','url(../img/bg1.jpg)');
    $('main .fc-unthemed td').css('border-color','#e5007f');
    $('main .fc-unthemed th').css('border-color','#e5007f');
  });

  //移除活動連結
  $('a.fc-event').removeAttr('href');

  //分類切換
  function cata(){
    //#1
    var str1 = localStorage.getItem("#1");
    var otarget1 = '.fc-content span:contains("#1")'
    if(str1==0){
      $(otarget1).parent().parent().addClass('hidden');
      $('#b1').text('#1_X');
    }
    $('#b1').click(function(){
      var str1 = localStorage.getItem("#1");
      if(str1==0){
        $(otarget1).parent().parent().removeClass('hidden');
        localStorage.setItem('#1', '1');
        $('#b1').text('#1_O');
      }else{
        $(otarget1).parent().parent().addClass('hidden');
        localStorage.setItem('#1', '0');
        $('#b1').text('#1_X');
      }
    });
    //#2
    var str2 = localStorage.getItem("#2");
    var otarget2 = '.fc-content span:contains("#2")'
    if(str2==0){
      $(otarget2).parent().parent().addClass('hidden');
      $('#b2').text('#2_X');
    }
    $('#b2').click(function(){
      var str2 = localStorage.getItem("#2");
      if(str2==0){
        $(otarget2).parent().parent().removeClass('hidden');
        localStorage.setItem('#2', '1');
        $('#b2').text('#2_O');
      }else{
        $(otarget2).parent().parent().addClass('hidden');
        localStorage.setItem('#2', '0');
        $('#b2').text('#2_X');
      }
    });
    //#3
    var str3 = localStorage.getItem("#3");
    var otarget3 = '.fc-content span:contains("#3")'
    if(str3==0){
      $(otarget3).parent().parent().addClass('hidden');
      $('#b3').text('#3_X');
    }
    $('#b3').click(function(){
      var str3 = localStorage.getItem("#3");
      if(str3==0){
        $(otarget3).parent().parent().removeClass('hidden');
        localStorage.setItem('#3', '1');
        $('#b3').text('#3_O');
      }else{
        $(otarget3).parent().parent().addClass('hidden');
        localStorage.setItem('#3', '0');
        $('#b3').text('#3_X');
      }
    });
    //#4
    var str4 = localStorage.getItem("#4");
    var otarget4 = '.fc-content span:contains("#4")'
    if(str4==0){
      $(otarget4).parent().parent().addClass('hidden');
      $('#b4').text('#4_X');
    }
    $('#b4').click(function(){
      var str4 = localStorage.getItem("#4");
      if(str4==0){
        $(otarget4).parent().parent().removeClass('hidden');
        localStorage.setItem('#4', '1');
        $('#b4').text('#4_O');
      }else{
        $(otarget4).parent().parent().addClass('hidden');
        localStorage.setItem('#4', '0');
        $('#b4').text('#4_X');
      }
    });
    //#5
    var str5 = localStorage.getItem("#5");
    var otarget5 = '.fc-content span:contains("#5")'
    if(str5==0){
      $(otarget5).parent().parent().addClass('hidden');
      $('#b5').text('#5_X');
    }
    $('#b5').click(function(){
      var str5 = localStorage.getItem("#5");
      if(str5==0){
        $(otarget5).parent().parent().removeClass('hidden');
        localStorage.setItem('#5', '1');
        $('#b5').text('#5_O');
      }else{
        $(otarget5).parent().parent().addClass('hidden');
        localStorage.setItem('#5', '0');
        $('#b5').text('#5_X');
      }
    });
    //#6
    var str6 = localStorage.getItem("#6");
    var otarget6 = '.fc-content span:contains("#6")'
    if(str6==0){
      $(otarget6).parent().parent().addClass('hidden');
      $('#b6').text('#6_X');
    }
    $('#b6').click(function(){
      var str6 = localStorage.getItem("#6");
      if(str6==0){
        $(otarget6).parent().parent().removeClass('hidden');
        localStorage.setItem('#6', '1');
        $('#b6').text('#6_O');
      }else{
        $(otarget6).parent().parent().addClass('hidden');
        localStorage.setItem('#6', '0');
        $('#b6').text('#6_X');
      }
    });
    //#7
    var str7 = localStorage.getItem("#7");
    var otarget7 = '.fc-content span:contains("#7")'
    if(str7==0){
      $(otarget7).parent().parent().addClass('hidden');
      $('#b7').text('#7_X');
    }
    $('#b7').click(function(){
      var str7 = localStorage.getItem("#7");
      if(str7==0){
        $(otarget7).parent().parent().removeClass('hidden');
        localStorage.setItem('#7', '1');
        $('#b7').text('#7_O');
      }else{
        $(otarget7).parent().parent().addClass('hidden');
        localStorage.setItem('#7', '0');
        $('#b7').text('#7_X');
      }
    });
    //#8
    var str8 = localStorage.getItem("#8");
    var otarget8 = '.fc-content span:contains("#8")'
    if(str8==0){
      $(otarget8).parent().parent().addClass('hidden');
      $('#b8').text('#8_X');
    }
    $('#b8').click(function(){
      var str8 = localStorage.getItem("#8");
      if(str8==0){
        $(otarget8).parent().parent().removeClass('hidden');
        localStorage.setItem('#8', '1');
        $('#b8').text('#8_O');
      }else{
        $(otarget8).parent().parent().addClass('hidden');
        localStorage.setItem('#8', '0');
        $('#b8').text('#8_X');
      }
    });
    //#9
    var str9 = localStorage.getItem("#9");
    var otarget9 = '.fc-content span:contains("#9")'
    if(str9==0){
      $(otarget9).parent().parent().addClass('hidden');
      $('#b9').text('#9_X');
    }
    $('#b9').click(function(){
      var str9 = localStorage.getItem("#9");
      if(str9==0){
        $(otarget9).parent().parent().removeClass('hidden');
        localStorage.setItem('#9', '1');
        $('#b9').text('#9_O');
      }else{
        $(otarget9).parent().parent().addClass('hidden');
        localStorage.setItem('#9', '0');
        $('#b9').text('#9_X');
      }
    });
    //#0
    var str0 = localStorage.getItem("#0");
    var otarget0 = '.fc-content span:contains("#0")'
    if(str0==0){
      $(otarget0).parent().parent().addClass('hidden');
      $('#b0').text('#0_X');
    }
    $('#b0').click(function(){
      var str0 = localStorage.getItem("#0");
      if(str0==0){
        $(otarget0).parent().parent().removeClass('hidden');
        localStorage.setItem('#0', '1');
        $('#b0').text('#0_O');
      }else{
        $(otarget0).parent().parent().addClass('hidden');
        localStorage.setItem('#0', '0');
        $('#b0').text('#0_X');
      }
    });
  };

  //分類上色上圖
  function color(){
    function colorf(a,b){
      $('.fc-content span:contains("#'+a+'")').parent().parent().css('background-color',b).prepend('<img src="img/cata_0'+a+'.png">');
    }
    colorf(1,'#cf2313');
    colorf(2,'#ee5a2a');
    colorf(3,'#efc337');
    colorf(4,'#158046');
    colorf(5,'#3f94e3');
    colorf(6,'#4f49b2');
    colorf(7,'#8f17a7');
    colorf(8,'#e17f74');
    colorf(9,'#944433');
    colorf(0,'#616161');
  };

  //初始化函數
  color();
  cata();

  //點擊頁面切換鈕
  $('.fc-right').click(function(){
    function page(t){
      window.setTimeout(function() {
        $('a.fc-event').removeAttr('href');
        if($(window).width()<768){
          $('.fc-content span').addClass('wrap');
        }
        color();
        cata();
      }, t);
    }
    page(300);
    page(500);
    page(700);
    page(1000);
  });

}