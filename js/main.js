$(window).on("load", function() {
    setTop();
});
$(document).ready(function() {
    /*......Adding class for keyTab to handle focus......*/
    $('body').on('mousedown', function() {
        $('body').removeClass('using-keytab')
    });
    $('body').on('keydown', function(event) {
        if (event.keyCode === 9) {
            $('body').addClass('using-keytab');
        }
    });
    checkBrowser();
    setTop();
    if (checkMobile()) {
        $('html').addClass('device');
    } else {
        $('html').addClass('system');
    }
    $('.ham-button').on('click keypress', function(event) {
        if (event.type == 'click' || event.which == 1) {
            $('html').toggleClass('menu-open');
            if (!$('html').hasClass('menu-open')) {
                $('html').addClass('menu-closed');
                $('.ham-button').attr('aria-label', "menu open");
                $('.ham-menu').attr('aria-hidden', true);
            } else {
                $('html').removeClass('menu-closed');
                $('.ham-button').attr('aria-label', "menu close");

                $('.ham-menu').attr('aria-hidden', false);
            }
        }
    });
    $('.primary-menu li').on('click keypress', function(event) {
        $(this).find('ul').slideToggle(500, "linear")

    });
    $(document).ready(function() {
        $(".videoitem").on('click', function(event) {

            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1200, function() {
                });
            } 
        });
    });

});
$(window).resize(function() {
    checkBrowser();
    setTop();
    if (getWidth() <= 767) {
        slickify();  
    }
});
//browser width calculation
function getWidth() {
    if (self.innerHeight) {
        return self.innerWidth;
    }
    if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientWidth;
    }
    if (document.body) {
        return document.body.clientWidth;
    }
}

function setTop() {
    var height = $('header').innerHeight();
    var height1 = $(window).height();
        $('.intro-wrapper .item').css({
            height: height1 - height
        });  
    // $('.item').css({
    //     height: height1 - height
    // }); 
    $('.tbblz .item.slick-slide').css({
        height: height1 - height - 50
    });
    $('.daily-updates .tbblz').css({
        height: height1 - height - 200
    });
    $('.detailz').css({
        height: height1 - height
    });

}
$(window).on('load', function() {

});

function checkMobile() {
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
        isMobile = true;

    return isMobile;
}

function checkBrowser() {
    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

}
if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('html').addClass('ios')

}
$(document).ready(function() {
    $('.ham-menu').mCustomScrollbar();
    $('header nav ol ul.submenu').mCustomScrollbar();
    $('.our-projects .our-projects-wrapper .news ul').mCustomScrollbar();


    // limiting characters
    var $locate = $('.text-report');
    $.each($locate, function() {
        var $element = $(this);
        var textToHide = $element.text().substring(100);
        var visibleText = $element.text().substring(1, 100);
        $element
            .html(visibleText + ('<span>' + textToHide + '</span>'))
            .append('<a id="read-more" title="Read More" style="display: block; cursor: pointer;"> Read More&hellip;</a>')
            .click(function() {
                $(this).find('span').toggle();
                $(this).find('a:last').hide();
            });
        $('p span').hide();
    });

    // adding loadmore
    $(".report-wrapper .report-item").slice(0, 4).show();
    $("#loadMore").on('click', function(e) {
        e.preventDefault();
        $("div:hidden").slice(0, 4).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

    $('.slider-wrapper').slick({
        slidesToShow: 1,
        dots: false,
        cssEase: 'ease-in-out',
        autoplay: false,
        autoplaySpeed: 7000,
        slidesToScroll: 1,
        speed: 1000,
        pauseOnHover: false,
        prevArrow: '<img src="images/prev.png" class="prev" alt="prev arrow">',
        nextArrow: '<img src="images/next.png" class="next" alt="next arrow">',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.tbblz').slick({
        slidesToShow: 1,
        dots: false,
        cssEase: 'ease-in-out',
        autoplay: false,
        autoplaySpeed: 7000,
        slidesToScroll: 1,
        speed: 1000,
        pauseOnHover: false,
        prevArrow: '',
        nextArrow: '',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.report-wrapper').slick({
        slidesToShow: 3,
        dots: false,
        cssEase: 'ease-in-out',
        autoplay: false,
        autoplaySpeed: 7000,
        slidesToScroll: 1,
        speed: 1000,
        pauseOnHover: false,
        prevArrow: '<img src="images/prev.png" class="prev" alt="prev arrow">',
        nextArrow: '<img src="images/next.png" class="next" alt="next arrow">',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.recent-report-wrapper').slick({
        slidesToShow: 3,
        dots: false,
        cssEase: 'ease-in-out',
        autoplay: false,
        autoplaySpeed: 7000,
        slidesToScroll: 1,
        speed: 1000,
        pauseOnHover: false,
        prevArrow: '<img src="images/prev.png" class="prev" alt="prev arrow">',
        nextArrow: '<img src="images/next.png" class="next" alt="next arrow">',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.video-wrapper').slick({
        slidesToShow: 3,
        dots: false,
        cssEase: 'ease-in-out',
        autoplay: false,
        autoplaySpeed: 7000,
        slidesToScroll: 1,
        speed: 1000,
        pauseOnHover: false,
        prevArrow: '<img src="images/prev.png" class="prev" alt="prev arrow">',
        nextArrow: '<img src="images/next.png" class="next" alt="next arrow">',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.gallery-wrapper').slick({
        slidesToShow: 3,
        dots: false,
        cssEase: 'ease-in-out',
        autoplay: false,
        autoplaySpeed: 7000,
        slidesToScroll: 1,
        speed: 1000,
        pauseOnHover: false,
        prevArrow: '<img src="images/prev.png" class="prev" alt="prev arrow">',
        nextArrow: '<img src="images/next.png" class="next" alt="next arrow">',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});

function slickify(){

}