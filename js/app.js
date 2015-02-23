//Sliding Menu:

function main () {
    $('.menu-toggle-btn').click( function () {
    	$(this).toggleClass("open");
        $('.menu').animate({left: '0px'}, 200);
        $('body').animate( {left: '285px'}, 200);

        if ($(this).hasClass('open')){
        $('.menu').animate({left: '-285px'}, 200);
        $('body').animate({left: '0px'}, 200);
        };

        });
    
    };  


$(document).ready(main);