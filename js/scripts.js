/**
 * Created by supimon on 17/July/17.
 */

setTimeout(function(){

    // initial animation on page load
    $('.main-nav-ul').one('animationend', function () {
        $('.main-nav-ul').removeClass('animated flipOutX');
    }).addClass('animated flipOutX');
    $('.child.right').one('animationend', function(){
        $('.child.right').removeClass('basis-0 collapse-menu').addClass('basis-97');
    }).addClass('collapse-menu');

    (function(){
        // text animation
        $('.child.right').on('animationstart', function(){
            return function(action) {
                $('.main-nav-ul').addClass('animated ' + action).one('animationend', function () {
                    $('.main-nav-ul').removeClass('animated ' + action);
                });
            }($('.child.right').hasClass('basis-97') ? "flipInX": "flipOutX");
        });
        // menu page swipe animation
        $('.child.left').on('click', function(){
            return function(action){
                $('.child.right').addClass(action[0]).one('animationend', function(){
                    $('.child.right').removeClass(action[1]+" "+action[0]).addClass(action[2]);
                });
            }($('.child.right').hasClass('basis-97') ? ['expand-menu', 'basis-97', 'basis-0'] :
                ['collapse-menu', 'basis-0', 'basis-97']);
        });
    })();
}, 2000);