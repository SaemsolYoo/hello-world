//라이트박스
    $(".lightgallery").lightGallery({
thumbnail: true,
autoplay: true,
pause: 3000,
progressBar: true
});

//윈도우 팝업
$(".window").click(function(e){
  e.preventDefault();
  //window.open("파일명", "팝업이름", "옵션설정");
  //옵션 : left, top, width, height, status, toolbar, location(주소창), menubar, scrollbars, fullscreen등 설정가능
  window.open("sample_popup.html","popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
});

  //레이어 팝업
  $(".layer").click(function(e){
    e.preventDefault(); //버튼을 클릭하면 화면이(스크롤이) 위로 올라가는거 막으려고 쓰는거다
    //방법1 $("#layer").css("display","block")
    $("#layer").show();
    //방법3 $("#layer").fadeIn();
    //방법4 $("#layer").slideDown();
  });
  $("#layer .close").click(function(e){
    e.preventDefault(); //버튼을 클릭하면 화면이(스크롤이) 위로 올라가는거 막으려고 쓰는거다
    //방법1 $("#layer").css("display","block")
    // $("#layer").show();
    $("#layer").fadeOut(200);
    //방법4 $("#layer").slideUp();
  });

  //탭메뉴
  var $tab_list = $(".tab_menu");

  $tab_list.find("ul ul").hide(); // css에서는 display:none;이라고 하는데, 제이커리에서는 hide라고 한다-->
  $tab_list.find("li.active > ul").show();

  function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
  }
  $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);


  //배너
  //html 마크업을 셋팅하고 --> css 연동하고 --> 제이쿼리 연동 --> 제이쿼리 호출 (밑에 쓴거)
  $(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
    });

    //갤러리
    $(".gallery_img").slick({
      arrows: false,
      fade: true,
      pauseOnHover: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 300,
      slidesToShow: 1
    });
    $(".play").click(function(){
      $(".gallery_img").slick("slickPlay");
    });
    $(".pause").click(function(){
      $(".gallery_img").slick("slickPause");
    });
    $(".prev").click(function(){
      $(".gallery_img").slick("slickPrev");
    });
    $(".next").click(function(){
      $(".gallery_img").slick("slickNext");
    });

  //버튼을 클릭하면 전체 메뉴를 보이게 하세요. 그리고! 제이커리에서는 달라$ 표시를 해준다.
  $(".tit .btn").click(function(e){
    e.preventDefault();
    //$("#cont_nav").css("display","block"); //css로 쓴다고하면 이렇게쓴다. #cont_nav {display:block;}
    //$("#cont_nav").show(); //show라는 것은 display:none; 에서 block;으로 바꿔주는 method다.
    //$("#cont_nav").fadeIn();
    //$("#cont_nav").slideDown(); //얘 단점은 한번쓰면 없어진다는점.
    //$("#cont_nav").toggle(); //얘는 한번펼치고 또 접을수도 있다.
    //$("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200); //숫자 200 넣어준거는 0.2초라는 뜻으로 속도를 좀 더 높어준거다.
    //$(".tit .btn").addClass("on"); //버튼을 클릭했을때 모양을 바꾸고 싶어서 하는작업. 근데 다시 클릭해도 그대로니까 토글클래스를 써준다.
    $(this).toggleClass("on"); //앞에 괄호에 (".tit .btn") 이렇게 써줫었는데, 이게 지금 자기 자신이니까 this라고 써준다.지금 이거 젤 상위작업이 버튼이니까.
  });
