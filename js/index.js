function start(){
  $("#nav").css("display","flex")
  $("#product").css("display","block")
  $("#footer").css("display","block")
  $("#home").css("display","none")
}

function home(){
  $("#home").css("display","block")
  $("#nav").css("display","none")
  $("#product").css("display","none")
  $("#experiment").css("display","none")
  $("#about").css("display","none")
  $("#QA").css("display","none")
  $("#footer").css("display","none")
}

function product(){
  $("#product").css("display","block")
  $("#experiment").css("display","none")
  $("#about").css("display","none")
  $("#footer").css("display","block")
  $("#home").css("display","none")
}

function experiment(){
  $("#product").css("display","none")
  $("#experiment").css("display","block")
  $("#about").css("display","none")
  $("#QA").css("display","none")
  $("#footer").css("display","block")
  $("#home").css("display","none")
}

function about(){
  $("#product").css("display","none")
  $("#experiment").css("display","none")
  $("#about").css("display","block")
  $("#QA").css("display","none")
  $("#footer").css("display","block")
  $("#home").css("display","none")
}

function qa(){
  $("#product").css("display","none")
  $("#experiment").css("display","none")
  $("#about").css("display","none")
  $("#QA").css("display","block")
  $("#footer").css("display","block")
  $("#home").css("display","none")
}