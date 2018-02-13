//gotop
$(function(){
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
})


$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'title',
      right: 'today,prev,next,month,agendaWeek'
    },
    googleCalendarApiKey: 'AIzaSyBA8owMc6-Ozf9T9BTAEWufMSdVbOwb3hs',
    events: {
        googleCalendarId: 'pnk42e02rmm3rtgd5f0aves4ac@group.calendar.google.com',
        className: 'gcal-event' // an option!
    }
  });

});
window.onload = function ()
{
  function color(){
    $('.fc-content span:contains("Aqours")').parent().parent().css('background-color','green');
  }
  color();
  $('.fc-right').click(function(){
    window.setTimeout(function() {
      color();
    }, 300);
    window.setTimeout(function() {
      color();
    }, 500);
    window.setTimeout(function() {
      color();
    }, 700);
    window.setTimeout(function() {
      color();
    }, 1000);
    window.setTimeout(function() {
      color();
    }, 2000);
  });
}