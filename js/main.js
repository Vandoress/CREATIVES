function ibg(){$.each($(".ibg"),(function(e,t){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}function resize(){window.innerWidth>=768&&$(".burger__logo,.header__burger,.menu-header__menu").removeClass("active")}function initMap(){var e={lat:48.85705,lng:2.341325},t=new google.maps.Map(document.getElementById("map"),{center:e,zoom:16,styles:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"landscape.man_made",stylers:[{color:"#282828"}]},{featureType:"landscape.natural.terrain",elementType:"geometry.fill",stylers:[{color:"#0b602c"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#383838"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#004044"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]});new google.maps.Marker({position:e,map:t})}ibg(),$(document).ready((function(){$(".header__burger").click((function(e){$(".burger__logo,.header__burger,.menu-header__menu").toggleClass("active"),$("body").toggleClass("lock")}))})),$(document).ready((function(){resize(),$(window).resize(resize)})),$(document).ready((function(){$('.menu-header__menu a[href^="#"]').click((function(){$('.menu-header__menu a[href^="#"]').removeClass("menu-header__link_active"),$(this).addClass("menu-header__link_active")})),$(".menu-header__link:first").click()})),$((function(){$(".scroll-main-screen__arrow").on("click",(function(e){$("html,body").stop().animate({scrollTop:$(".header-block__letter_project").offset().top},1e3),e.preventDefault()}))}));