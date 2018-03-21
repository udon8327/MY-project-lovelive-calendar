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
      right: 'title today basic,month prev,next'
    },
    views: {
      month: {
      titleFormat: 'YYYY.MM'
      },
      basic: {
      titleFormat: 'YY.MM.DD'
      }
    },
    height: 'auto',
    navLinks: 'true',
    eventAfterAllRender: function () {

      //分類開關
      function cataf(a,b){
        a = localStorage.getItem(b);
        if(a==0){
          $('.fc-content span').each(function(){
            if($(this).text()[1]==b){
              $(this).parent().parent().addClass('hidden');
            }
            if($(this).text()[0]==b){
              $(this).parent().parent().addClass('grouphidden');
            }
          });
        }
      }
      cataf('cata1','1');
      cataf('cata2','2');
      cataf('cata3','3');
      cataf('cata4','4');
      cataf('cata5','5');
      cataf('cata6','6');
      cataf('cata7','7');
      cataf('cata8','8');
      cataf('cata9','9');
      cataf('muse','u');
      cataf('aqours','a');
      cataf('niji','n');

      //多團分類開關
      u = localStorage.getItem('u');
      a = localStorage.getItem('a');
      n = localStorage.getItem('n');
      if(u==0&&a==0&&n==0){
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='c'){
            $(this).parent().parent().addClass('grouphidden');
          }
        });
      }
      if(u==0&&a==0){
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='x'){
            $(this).parent().parent().addClass('grouphidden');
          }
        });
      }
      if(u==0&&n==0){
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='y'){
            $(this).parent().parent().addClass('grouphidden');
          }
        });
      }
      if(a==0&&n==0){
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='z'){
            $(this).parent().parent().addClass('grouphidden');
          }
        });
      }

      //今天背景色,羽毛切換
      var tmn = localStorage.getItem("tm");
      $('td.fc-today').prepend('<img id="today" src="img/hane_01.png?v=2">');
      if(tmn==1){
        $('img#today').attr('src','img/hane_02.png?v=2');
        $('main .fc-today').addClass('tm2todaybc');
      }

      //移除活動連結
      $('a.fc-event').removeAttr('href');

      //事件點擊展開
      $('.fc-event').click(function(){
        $(this).children().children().toggleClass('wrapone');
      });

      //清除讀取動畫
      $('#papa').remove();



      //分類色圖
      var colora = ['#cf2313','#ee5a2a','#efc337','#158046','#8f17a7','#4f49b2','#8f17a7','#944433','#e17f74'];
      $('span.fc-title').each(function(){
        var i = $(this).text()[1];
        if(i!=='7'){$(this).parent().parent().css('background-color',colora[i-1]).prepend('<img src="img/cata_0'+i+'.png?v=2">');}
        var g = $(this).text()[0];
        if(g=='a'&&i=='7'||g=='c'&&i=='7'||g=='x'&&i=='7'||g=='y'&&i=='7'||g=='z'&&i=='7'){$(this).parent().parent().css('background-color','#00a1e9').prepend('<img src="img/cata_07a.png?v=2">');}
        if(g=='u'&&i=='7'){$(this).parent().parent().css('background-color','#e5007f').prepend('<img src="img/cata_07u.png?v=2">');}
        if(g=='n'&&i=='7'){$(this).parent().parent().css('background-color','#f09700').prepend('<img src="img/cata_07n.png?v=2">');}
      });

      //無事件花丸
      $('#mu').remove();
      if($('div.fc-content-skeleton td').text()==''){
        $('.fc-bg').before('<img id="mu" src="img/mu.png">');
      }

    }
  });
});

$(function(){

  //讀取動畫
  var tmn = localStorage.getItem("tm");
  if(tmn==1){
    var papa = Math.floor(Math.random()*9+1);
    $('body').prepend('<img id="papa" src="img/upapa_'+papa+'.png?v=2">');
  }else{
    var papa = Math.floor(Math.random()*9+1);
    $('body').prepend('<img id="papa" src="img/apapa_'+papa+'.png?v=2">');
  }

  //gotop
  $('#gotop').click(function(){
    $('html,body').animate({scrollTop: 0}, 500);
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
      $('#gotop').fadeIn('fast');
    }
    else{
      $('#gotop').stop().fadeOut('fast');
    }
  });

  //fastclick
  FastClick.attach(document.body);

  //preload
  $.preload( 'img/bg2.jpg?v=2',
    'img/bg2_m.jpg?v=2',
    'img/bg1.jpg?v=2',
    'img/bg1_m.jpg?v=2',
    'img/apapa_1.png?v=2',
    'img/apapa_2.png?v=2',
    'img/apapa_3.png?v=2',
    'img/apapa_4.png?v=2',
    'img/apapa_5.png?v=2',
    'img/apapa_6.png?v=2',
    'img/apapa_7.png?v=2',
    'img/apapa_8.png?v=2',
    'img/apapa_9.png?v=2',
    'img/upapa_1.png?v=2',
    'img/upapa_2.png?v=2',
    'img/upapa_3.png?v=2',
    'img/upapa_4.png?v=2',
    'img/upapa_5.png?v=2',
    'img/upapa_6.png?v=2',
    'img/upapa_7.png?v=2',
    'img/upapa_8.png?v=2',
    'img/upapa_9.png?v=2',
    'plugins/bootstrap-3.3.1-24/fonts/glyphicons-halflings-regular.woff2'
  );

  //延時加入transition
  setTimeout(function(){
    $('body,h2,.fc-unthemed td,.fc-unthemed th').addClass('tran');
  },100);

  //展開按鈕
  $('#tk').click(function(){
    $('.fc-content span').removeClass('wrapone').toggleClass('wrap');
  });

  //中文化
  $('.fc-today-button').text('今天');
  $('.fc-basic-button').text('日');
  $('.fc-month-button').text('月');

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
    $('#tm img').attr('src','img/theme2.png?v=2');
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
      $('#tm img').attr('src','img/theme2.png?v=2');
      $('h2').addClass('tm2cl');
      $('body').addClass('tm2bg');
      $('.fc-unthemed td,.fc-unthemed th,#tm,fc-right').addClass('tm2bd');
      $('#tk,#cm,main td.fc-today').addClass('tm2bc');
      $('img#today').attr('src','img/hane_02.png?v=2');
      $('main .fc-today').addClass('tm2todaybc');
      localStorage.setItem("tm", '1');
    }else{
      $('#tm img').attr('src','img/theme1.png?v=2');
      $('h2').removeClass('tm2cl');
      $('body').removeClass('tm2bg');
      $('.fc-unthemed td,.fc-unthemed th,#tm,fc-right').removeClass('tm2bd');
      $('#tk,#cm,main td.fc-today').removeClass('tm2bc');
      $('img#today').attr('src','img/hane_01.png?v=2');
      $('main .fc-today').removeClass('tm2todaybc');
      localStorage.setItem("tm", '0');
    }
  });

  //切月份時更改表格邊框顏色
  $('.fc-right button').click(function(){
    $('#tk img').removeClass('tkon');
    var tmn = localStorage.getItem("tm");
    if(tmn==1){
      $('.fc-unthemed td,.fc-unthemed th,#tm').addClass('tm2bd');
    }
    //讀取動畫
    $('#papa').remove();
    $('.fc-content-skeleton>table>tbody>tr>td').remove();
    $('#calendar').fullCalendar('refetchEvents');
    var tmn = localStorage.getItem("tm");
    if(tmn==1){
      var papa = Math.floor(Math.random()*9+1);
      $('body').prepend('<img id="papa" src="img/upapa_'+papa+'.png?v=2">');
    }else{
      var papa = Math.floor(Math.random()*9+1);
      $('body').prepend('<img id="papa" src="img/apapa_'+papa+'.png?v=2">');
    }
    //調整單日視圖高度
    var wh = $(window).height()-198;
    if($(window).width()>1200){
      var wh = $(window).height()-130;
    }
    $('tbody.fc-body > tr > td > div').css('min-height',wh+'px');
    $('#calendar > div.fc-view-container .fc-bg td').css('height',wh+'px');
    //無事件花丸
    $('#mu').remove();
  });

  //分類開關
  function cataf(a,b,c){
    a = localStorage.getItem(b);
    if(a==0){
      $(c).addClass('grey').children().attr('src','img/cata_close.png?v=2');
    }
    $(c).click(function(){
      a = localStorage.getItem(b);
      if(a==0){
        $('.fc-content span').each(function(){
          if($(this).text()[1]==b){
            $(this).parent().parent().removeClass('hidden');
          }
          if($(this).text()[0]==b){
            $(this).parent().parent().removeClass('grouphidden');
          }
        });
        localStorage.setItem(b, '1');
        $(c).removeClass('grey').children().attr('src','img/cata_0'+b+'.png?v=2');
      }else{
        $('.fc-content span').each(function(){
          if($(this).text()[1]==b){
            $(this).parent().parent().addClass('hidden');
          }
          if($(this).text()[0]==b){
            $(this).parent().parent().addClass('grouphidden');
          }
        });
        localStorage.setItem(b, '0');
        $(c).addClass('grey').children().attr('src','img/cata_close.png?v=2');
      }
    });
  }
  cataf('cata1','1','#b1');
  cataf('cata2','2','#b2');
  cataf('cata3','3','#b3');
  cataf('cata4','4','#b4');
  cataf('cata5','5','#b5');
  cataf('cata6','6','#b6');
  //cataf('cata7','7','#b7');
  cataf('cata8','8','#b8');
  cataf('cata9','9','#b9');
  cataf('muse','u','#muse');
  cataf('aqours','a','#aqours');
  cataf('niji','n','#niji');

  //聲優類專用分類開關
  function aunf(a,b,c){
    a = localStorage.getItem(b);
    if(a==0){
      $(c).removeClass('aun').children().attr('src','img/cata_close.png?v=2');
    }else{
      $(c).addClass('aun').children().attr('src','img/cata_0'+b+'.png?v=2');
    }
    $(c).click(function(){
      a = localStorage.getItem(b);
      if(a==0){
        $('.fc-content span').each(function(){
          if($(this).text()[1]==b){
            $(this).parent().parent().removeClass('hidden');
          }
          if($(this).text()[0]==b){
            $(this).parent().parent().removeClass('grouphidden');
          }
        });
        localStorage.setItem(b, '1');
        $(c).addClass('aun').children().attr('src','img/cata_0'+b+'.png?v=2');
      }else{
        $('.fc-content span').each(function(){
          if($(this).text()[1]==b){
            $(this).parent().parent().addClass('hidden');
          }
          if($(this).text()[0]==b){
            $(this).parent().parent().addClass('grouphidden');
          }
        });
        localStorage.setItem(b, '0');
        $(c).removeClass('aun').children().attr('src','img/cata_close.png?v=2');
      }
    });
  }
  aunf('cata7','7','#b7');

  //多團分類開關
  function xcataf(c){
    $(c).click(function(){
      u = localStorage.getItem('u');
      a = localStorage.getItem('a');
      n = localStorage.getItem('n');
      if(u==0&&a==0&&n==0){
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='c'){
            $(this).parent().parent().addClass('grouphidden');
          }
        });
      }else{
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='c'){
            $(this).parent().parent().removeClass('grouphidden');
          }
        });
      }
      if(u==0&&a==0){
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='x'){
            $(this).parent().parent().addClass('grouphidden');
          }
        });
      }else{
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='x'){
            $(this).parent().parent().removeClass('grouphidden');
          }
        });
      }
      if(u==0&&n==0){
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='y'){
            $(this).parent().parent().addClass('grouphidden');
          }
        });
      }else{
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='y'){
            $(this).parent().parent().removeClass('grouphidden');
          }
        });
      }
      if(a==0&&n==0){
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='z'){
            $(this).parent().parent().addClass('grouphidden');
          }
        });
      }else{
        $('.fc-content span').each(function(){
          if($(this).text()[0]=='z'){
            $(this).parent().parent().removeClass('grouphidden');
          }
        });
      }
    });
  }
  xcataf('#muse');
  xcataf('#aqours');
  xcataf('#niji');

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
