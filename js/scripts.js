/**
 * Created by supimon on 18/July/17.
 */

setTimeout(function(){

    // initial animation on page load
    $('.main-nav-ul').one('animationend', function () {
        $('.main-nav-ul').removeClass('animated flipOutX');
    }).addClass('animated flipOutX');
    $('.child.right').one('animationend', function(){
        $('.child.right').removeClass('basis-0 collapse-menu').addClass('basis-97');
        $('.hamburger').removeClass('open');
        $('#nav-icon1').removeClass('open');
        $('#nav-icon1 span').css("backgroundColor", "green");
    }).addClass('collapse-menu');

    (function(){
        // mobile menu animation
        $('#nav-icon1').one('click', function(){
            menuSwipe($(this));
        });
        // desktop menu animation
        $('.hamburger').one('click', function(){
            menuSwipe($(this));
        });
        // text animation
        $('.child.right').on('animationstart', function(){
            return function(action) {
                $('.main-nav-ul').addClass('animated ' + action).one('animationend', function () {
                    $('.main-nav-ul').removeClass('animated ' + action);
                });
            }($('.child.right').hasClass('basis-97') ? "flipInX": "flipOutX");
        });
        // menu page swipe utility
        function menuSwipe($this){
            return function(action){
                $('.child.right').addClass(action[0]).one('animationend', function(){
                    $('.hamburger, #nav-icon1').toggleClass('open');
                    $('.child.right').removeClass(action[1]+" "+action[0]).addClass(action[2]);
                    $('#nav-icon1 span').css("backgroundColor", action[3]);
                    $this.one('click', function(){
                        menuSwipe($(this));
                    });
                });
            }($('.child.right').hasClass('basis-97') ? ['expand-menu', 'basis-97', 'basis-0', 'white'] :
                ['collapse-menu', 'basis-0', 'basis-97', '#005d3d']);
        }
        // pulse animation for slider navigators
        $('.slide-indicator-ul li a').on('mouseover', function(){
            $(this).addClass('animated pulse').on('animationend', function(){
                $(this).removeClass('animated pulse');
            });
        });
        // company lift animation
        $('.company-details-item').on('mouseover', function(){
            $(this).children(".details").removeClass('dip-company').addClass('lift-company').end()
                .children(".cool-line").removeClass("raise-line").addClass("sink-line");
        }).on('mouseout', function(){
            $(this).children(".details").removeClass('lift-company').addClass('dip-company').end()
                .children(".cool-line").removeClass("sink-line").addClass("raise-line");;
        });
        // show mobile gallery details
        $('.gallery h2').on('click', function(){
            $('.gallery-details').removeClass('hide-details-mobile').addClass('show-details-mobile')
                .one('animationend', function(){
                    $('.gallery-details .close').show();
                });
            $('body').addClass('block-vertical-scroll');
        });
        // hide mobile gallery details
        $('.gallery-details .close, .mobile-logo-holder').on('click', function(){
            if($('.gallery-details').hasClass('show-details-mobile')){
                $('.gallery-details .close').css('display', 'none');
                $('.gallery-details').addClass('hide-details-mobile').removeClass('show-details-mobile');
                $('body').removeClass('block-vertical-scroll');
            }
        });
    })();
}, 2000);