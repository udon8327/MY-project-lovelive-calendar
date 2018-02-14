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

//日曆動作
window.onload = function (){

  //展開按鈕
  $('#tk').click(function(){
    $('.fc-content span').toggleClass('wrap');
  });
  if($(window).width()<991){
    $('.fc-content span').addClass('wrap');
  }

  //主題切換
  $('#tm').click(function(){
    $('body').css('background','src="img/bg2.jpg"');
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
      $('#s1').text(str1);
    }else{
      $('#s1').text(str1);
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
  };

  //分類上色上圖
  function color(){
    $('.fc-content span:contains("#1")').parent().parent().css('background-color','#cf2313').prepend('<img src="img/bg1.jpg">');
    $('.fc-content span:contains("#2")').parent().parent().css('background-color','#ee5a2a').prepend('<img src="img/bg2.jpg">');
    $('.fc-content span:contains("#3")').parent().parent().css('background-color','#efc337').prepend('<img src="img/bg1.jpg">');
    $('.fc-content span:contains("#4")').parent().parent().css('background-color','#158046').prepend('<img src="img/bg1.jpg">');
    $('.fc-content span:contains("#5")').parent().parent().css('background-color','#3f94e3').prepend('<img src="img/bg1.jpg">');
    $('.fc-content span:contains("#6")').parent().parent().css('background-color','#4f49b2').prepend('<img src="img/bg1.jpg">');
    $('.fc-content span:contains("#7")').parent().parent().css('background-color','#8f17a7').prepend('<img src="img/bg1.jpg">');
    $('.fc-content span:contains("#8")').parent().parent().css('background-color','#e17f74').prepend('<img src="img/bg1.jpg">');
    $('.fc-content span:contains("#9")').parent().parent().css('background-color','#616161').prepend('<img src="img/bg1.jpg">');
  };

  //初始化函數
  color();
  cata();

  //點擊頁面切換鈕
  $('.fc-right').click(function(){
    window.setTimeout(function() {
      $('a.fc-event').removeAttr('href');
      color();
      cata();
    }, 300);
    window.setTimeout(function() {
      $('a.fc-event').removeAttr('href');
      color();
      cata();
    }, 500);
    window.setTimeout(function() {
      $('a.fc-event').removeAttr('href');
      color();
      cata();
    }, 700);
    window.setTimeout(function() {
      $('a.fc-event').removeAttr('href');
      color();
      cata();
    }, 1000);
  });

}