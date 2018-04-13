//點擊continue按鈕後，顯示導覽列、產品、footer
function start(){
  $("#nav").css("display","block")
  $("#product").css("display","block")
  $("#footer").css("display","block")
  $("#home").css("display","none")
}
//點擊導覽列的首頁名稱，回到首頁，並把其他隱藏
function home(){
  $("#home").css("display","block")
  $("#nav").css("display","none")
  $("#product").css("display","none")
  $("#experiment").css("display","none")
  $("#about").css("display","none")
  $("#QA").css("display","none")
  $("#footer").css("display","none")
}
//點擊導覽列項目，把其他不相關的區塊隱藏
function fn(i){
  $("#footer").css("display","block")
  $("#home").css("display","none")
 
  switch(i){
    case 0:
      $("#product").css("display","block")
      $("#experiment").css("display","none")
      $("#about").css("display","none")
      $("#QA").css("display","none")
      break
    case 1:
      $("#product").css("display","none")
      $("#experiment").css("display","block")
      $("#about").css("display","none")
      $("#QA").css("display","none")
      break
    case 2:
      $("#product").css("display","none")
      $("#experiment").css("display","none")
      $("#about").css("display","block")
      $("#QA").css("display","none")
      break
    case 3:
      $("#product").css("display","none")
      $("#experiment").css("display","none")
      $("#about").css("display","none")
      $("#QA").css("display","block")
      break

  }
}
//螢幕小於480px，點擊選單項目後會自動收合(再點一次按鈕)
$(function(){
  if($(window).width() < 480){
    $(".navbar a").on("click",function(){
      $(".navbar-toggler").click();
    })
  }
})
