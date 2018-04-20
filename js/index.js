cards = [
  {
    "id": "product",
    "title": "即將上市",
    "target": "#pro01",
    "target_id": "pro01",
    "img": "./img/product/01.jpg",
    "intro": "intro1\n\n\nintro1intro1intro1intro1intro1"
  },
  {
    "id": "experiment",
    "title": "即將上市",
    "target": "#exp01",
    "target_id": "exp01",
    "img": "./img/product/01.jpg",
    "intro": "intro1intro1intro1intro1intro1intro1"
  },
  {
    "id": "experiment",
    "title": "即將上市",
    "target": "#exp01",
    "target_id": "exp01",
    "img": "./img/product/01.jpg",
    "intro": "intro1intro1intro1intro1intro1intro1"
  },
  {
    "id": "experiment",
    "title": "即將上市",
    "target": "#exp01",
    "target_id": "exp01",
    "img": "./img/product/01.jpg",
    "intro": "intro1intro1intro1intro1intro1intro1"
  },
  {
    "id": "experiment",
    "title": "即將上市",
    "target": "#exp01",
    "target_id": "exp01",
    "img": "./img/product/01.jpg",
    "intro": "intro1intro1intro1intro1intro1intro1"
  },
  {
    "id": "product",
    "title": "即將上市",
    "target": "#pro02",
    "target_id": "pro02",
    "img": "./img/product/01.jpg",
    "intro": "intro1intro1intro1intro1intro1intro1"
  },
  {
    "id": "product",
    "title": "即將上市",
    "target": "#pro03",
    "target_id": "pro03",
    "img": "./img/product/01.jpg",
    "intro": "intro1intro1intro1intro1intro1intro1"
  },
  {
    "id": "product",
    "title": "即將上市",
    "target": "#pro04",
    "target_id": "pro04",
    "img": "./img/product/01.jpg",
    "intro": "intro1intro1intro1intro1intro1intro1"
  },
  {
    "id": "product",
    "title": "即將上市",
    "target": "#pro05",
    "target_id": "pro05",
    "img": "./img/product/01.jpg",
    "intro": "intro1intro1intro1intro1intro1intro1"
  },
  {
    "id": "product",
    "title": "即將上市",
    "target": "#pro06",
    "target_id": "pro06",
    "img": "./img/product/01.jpg",
    "intro": "intro1intro1intro1intro1intro1intro1"
  },
  {
    "id": "product",
    "title": "即將上市",
    "target": "#pro07",
    "target_id": "pro07",
    "img": "./img/product/01.jpg",
    "intro": "intro1intro1intro1intro1intro1intro1"
  },
  {
    "id": "product",
    "title": "即將上市",
    "target": "#pro08",
    "target_id": "pro08",
    "img": "./img/product/01.jpg",
    "intro": "intro1intro1intro1intro1intro1intro1"
  }
]


Vue.component("card",{
  template: "#card",
  props: ["card_data"]
})

var vm = new Vue({
  el: "#app",
  data: {
    cards: cards
  }
})


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
