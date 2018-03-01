//日曆本體
$(function() {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyBA8owMc6-Ozf9T9BTAEWufMSdVbOwb3hs',
    events: {
        googleCalendarId: 'pnk42e02rmm3rtgd5f0aves4ac@group.calendar.google.com',
        className: 'gcal-event'
    },
    header: {
      left: '',
      center: '',
      right: 'title today prev,next'
    },
    height: 'auto',
    eventAfterAllRender: function () {

      //分類開關
      function cataf(a,b,c){
        a = localStorage.getItem(b);
        if(a==0){
          $('.fc-content span:contains('+b+')').parent().parent().addClass('hidden');
        }
      }
      cataf('str1','#1','#b1');
      cataf('str2','#2','#b2');
      cataf('str3','#3','#b3');
      cataf('str4','#4','#b4');
      cataf('str5','#5','#b5');
      cataf('str6','#6','#b6');
      cataf('str7','#7','#b7');
      cataf('str8','#8','#b8');
      cataf('str9','#9','#b9');

      //分類色圖
      var colora = ['#cf2313','#ee5a2a','#efc337','#158046','#3f94e3','#4f49b2','#8f17a7','#944433','#e17f74'];
      $('span.fc-title').each(function(){
        var i = $(this).text()[1];
        $(this).parent().parent().css('background-color',colora[i-1]).prepend('<img src="img/cata_0'+i+'.png">');
      });

      //今天背景色,羽毛切換
      var tmn = localStorage.getItem("tm");
      $('td.fc-today').prepend('<img id="today" src="img/hane_01.png">');
      if(tmn==1){
        $('img#today').attr('src','img/hane_02.png');
        $('main .fc-today').addClass('tm2todaybc');
      }

      //移除活動連結
      $('a.fc-event').removeAttr('href');

      //事件點擊展開
      $('.fc-event').click(function(){
        $(this).children().children().toggleClass('wrapone');
      });

    }
  });
});

$(function(){

  //延時加入transition
  setTimeout(function(){
    $('body,h2,.fc-unthemed td,.fc-unthemed th').addClass('tran');
  },100);

  //展開按鈕
  $('#tk').click(function(){
    $('.fc-content span').removeClass('wrapone').toggleClass('wrap');
  });

  //today改今天
  $('.fc-today-button').text('今天');

  //過濾鈕
  if($(window).width()<991){
    $('#cm').after($('#tk'));
    $('.fc-today-button').before($('.fc-button-group'))
  }
  $('#cm').click(function(){
    $('.cata').toggleClass('visible');
  });

  //header插入.fc-left
  $('.fc-left').prepend($('header'));

  //展開鈕
  $('#tk').click(function(){
    $('#tk img').toggleClass('tkon');
  })

  //主題切換
  var tmn = localStorage.getItem("tm");
  if(tmn==1){
    $('#tm img').attr('src','img/theme2.png');
    $('h2').addClass('tm2cl');
    $('body').addClass('tm2bg');
    $('.fc-unthemed td,.fc-unthemed th,#tm').addClass('tm2bd');
    $('#tk,#cm').addClass('tm2bc');
    $('main .fc-today').addClass('tm2todaybc');
  }
  $('#tm').click(function(){
    $('#tm').addClass('tmanime');
    setTimeout(function(){
      $('#tm').removeClass('tmanime');
    },200);
    var tmn = localStorage.getItem("tm");
    if(tmn==0){
      $('#tm img').attr('src','img/theme2.png');
      $('h2').addClass('tm2cl');
      $('body').addClass('tm2bg');
      $('.fc-unthemed td,.fc-unthemed th,#tm,fc-right').addClass('tm2bd');
      $('#tk,#cm,main td.fc-today').addClass('tm2bc');
      $('img#today').attr('src','img/hane_02.png');
      $('main .fc-today').addClass('tm2todaybc');
      localStorage.setItem("tm", '1');
    }else{
      $('#tm img').attr('src','img/theme1.png');
      $('h2').removeClass('tm2cl');
      $('body').removeClass('tm2bg');
      $('.fc-unthemed td,.fc-unthemed th,#tm,fc-right').removeClass('tm2bd');
      $('#tk,#cm,main td.fc-today').removeClass('tm2bc');
      $('img#today').attr('src','img/hane_01.png');
      $('main .fc-today').removeClass('tm2todaybc');
      localStorage.setItem("tm", '0');
    }
  });

  //切月份時更改表格邊框顏色
  $('.fc-right').click(function(){
    $('#tk img').removeClass('tkon');
    var tmn = localStorage.getItem("tm");
    if(tmn==1){
      $('.fc-unthemed td,.fc-unthemed th,#tm').addClass('tm2bd');
    }
  });

  //分類開關
  function cataf(a,b,c){
    a = localStorage.getItem(b);
    if(a==0){
      $(c).addClass('grey').children().attr('src','img/cata_close.png');
    }
    $(c).click(function(){
      a = localStorage.getItem(b);
      if(a==0){
        $('.fc-content span:contains('+b+')').parent().parent().removeClass('hidden');
        localStorage.setItem(b, '1');
        $(c).removeClass('grey').children().attr('src','img/cata_0'+b.charAt(1)+'.png');
      }else{
        $('.fc-content span:contains('+b+')').parent().parent().addClass('hidden');
        localStorage.setItem(b, '0');
        $(c).addClass('grey').children().attr('src','img/cata_close.png');
      }
    });
  }
  cataf('str1','#1','#b1');
  cataf('str2','#2','#b2');
  cataf('str3','#3','#b3');
  cataf('str4','#4','#b4');
  cataf('str5','#5','#b5');
  cataf('str6','#6','#b6');
  cataf('str7','#7','#b7');
  cataf('str8','#8','#b8');
  cataf('str9','#9','#b9');

  //管理人與聲明視窗
  $('#kanri').click(function(){
    $('.kanri').toggleClass('visible');
    $('.statement').removeClass('visible');
  });
  $('.kanri img').click(function(){
    $('.kanri').removeClass('visible');
  });
  $('#statement').click(function(){
    $('.statement').toggleClass('visible');
    $('.kanri').removeClass('visible');
  });
  $('.statement img').click(function(){
    $('.statement').removeClass('visible');
  });

});




