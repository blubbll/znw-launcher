$(document).ready(function() {

  function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours === 0) ? 12 : currentHours;

    var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;

    $("#time").html(currentTimeString);

  }

  setInterval(updateClock(), 1000);

  $("#home-btn").on("click", function() {
    sendHome();
  });

  $("#home-button").on("click", function() {
    $("#taskbar").attr('style', "height:" + $("#taskbar").height() + "px");
      if ($("#start-menu").height() <= 0) {
       $("#start-menu").attr('style', "display:block;");
        setTimeout(function(){
          $("#start-menu").attr('style', "display:block;bottom:"+
      ($("#start-menu").height()+ $("#taskbar").height()+16) + "px");
        },0);}
       else $("#start-menu").attr('style', "display:none;height:0px");
  });

  $(".start-menu-item:first-child").on("click", function() {
 
  });

  $("#window-exit").on("click", function() {
    $("#window-wrapper").fadeToggle('fast');
    sendHome();
  });

  $(".folder").on("click", function() {
    $(this).toggleClass("folder-clicked");
  });
  $(".folder").on("hover", function() {
    $(this).toggleClass("folder-hover");
  });

  function setFrameSource() {
    var frameSource = $("#address-bar").val();
    $("#frame").attr('src', "http://" + frameSource);
    $("#address-bar").attr("placeholder", frameSource);
    $("#address-bar").val("");
  }

  function sendHome() {
    var home = "www.duckduckgo.com";
    $("#frame").attr('src', "http://" + home);
    $("#address-bar").attr("placeholder", home);
  }

});