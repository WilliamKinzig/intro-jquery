$(function()
{
  $("h1").click(function()
  {
    //alert("Hi");
  });

  $("p").click(function()
  {
    //alert("Hereafter");
    //$("img").show();
    //$(".walrus-showing").toggle();
    //$(".walrus-hidden").toggle();
  });

  $("img").click(function()
  {
    //alert("Hi");
  });

  $(".clickable").click(function()
  {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".fade-clickable").click(function()
  {
    $(".fade-show").fadeIn();
    $(".fade-hide").fadeOut();
  });

  $(".slide-clickable").click(function()
  {
    $(".slide-show").slideDown();
    $(".slide-hide").slideUp();
  });

});
