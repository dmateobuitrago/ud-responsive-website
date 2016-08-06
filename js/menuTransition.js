var $menuIcon = $(".menu-icon");
var $nav = $(".nav")

$menuIcon.mouseup(function(){
    $nav.toggleClass("open");
})