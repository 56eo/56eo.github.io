// Dean Attali / Beautiful Jekyll 2016
// https://mail.google.com/mail/u/0/?view=cm&fs=1&to=email@domain.com&su=testing

var main = {
    isMobileVersion: function(a) {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
    }(navigator.userAgent || navigator.vendor || window.opera),
    emailProtocol: {
        mobile: 'mailto:',
        desktop: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=',
    },

    bigImgEl: null,
    numImgs: null,

    init: function() {
        // Shorten the navbar after scrolling a little bit down
        $(window).scroll(function() {
            if ($(".navbar").offset().top > 50) {
                $(".navbar").addClass("top-nav-short");
                $(".navbar-custom .avatar-container").fadeOut(500);
            } else {
                $(".navbar").removeClass("top-nav-short");
                $(".navbar-custom .avatar-container").fadeIn(500);
            }
        });

        // On mobile, hide the avatar when expanding the navbar menu
        $('#main-navbar').on('show.bs.collapse', function() {
            $(".navbar").addClass("top-nav-expanded");
        });
        $('#main-navbar').on('hidden.bs.collapse', function() {
            $(".navbar").removeClass("top-nav-expanded");
        });

        // On mobile, when clicking on a multi-level navbar menu, show the child links
        $('#main-navbar').on("click", ".navlinks-parent", function(e) {
            var target = e.target;
            $.each($(".navlinks-parent"), function(key, value) {
                if (value == target) {
                    $(value).parent().toggleClass("show-children");
                } else {
                    $(value).parent().removeClass("show-children");
                }
            });
        });

        // Ensure nested navbar menus are not longer than the menu header
        var menus = $(".navlinks-container");
        if (menus.length > 0) {
            var navbar = $("#main-navbar ul");
            var fakeMenuHtml = "<li class='fake-menu' style='display:none;'><a></a></li>";
            navbar.append(fakeMenuHtml);
            var fakeMenu = $(".fake-menu");

            $.each(menus, function(i) {
                var parent = $(menus[i]).find(".navlinks-parent");
                var children = $(menus[i]).find(".navlinks-children a");
                var words = [];
                $.each(children, function(idx, el) {
                    words = words.concat($(el).text().trim().split(/\s+/));
                });
                var maxwidth = 0;
                $.each(words, function(id, word) {
                    fakeMenu.html("<a>" + word + "</a>");
                    var width = fakeMenu.width();
                    if (width > maxwidth) {
                        maxwidth = width;
                    }
                });
                $(menus[i]).css('min-width', maxwidth + 'px')
            });

            fakeMenu.remove();
        }

        // show the big header image
        main.initImgs();
        main.setEmailHref();
    },

    setEmailHref: function() {
        [...document.querySelectorAll('.social_email')].forEach(function(emailLinks) {
            var email = emailLinks.dataset.email;
            var href = main.isMobileVersion ? main.emailProtocol.mobile : main.emailProtocol.desktop;
            emailLinks.href = href + email;
        });
    },

    initImgs: function() {
        // If the page was large images to randomly select from, choose an image
        if ($("#header-big-imgs").length > 0) {
            main.bigImgEl = $("#header-big-imgs");
            main.numImgs = main.bigImgEl.attr("data-num-img");

            // 2fc73a3a967e97599c9763d05e564189
            // set an initial image
            var imgInfo = main.getImgInfo();
            var src = imgInfo.src;
            var desc = imgInfo.desc;
            main.setImg(src, desc);

            // For better UX, prefetch the next image so that it will already be loaded when we want to show it
            var getNextImg = function() {
                var imgInfo = main.getImgInfo();
                var src = imgInfo.src;
                var desc = imgInfo.desc;

                var prefetchImg = new Image();
                prefetchImg.src = src;
                // if I want to do something once the image is ready: `prefetchImg.onload = function(){}`

                setTimeout(function() {
                    var img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
                    $(".intro-header.big-img").prepend(img);
                    setTimeout(function() {
                        img.css("opacity", "1");
                    }, 50);

                    // after the animation of fading in the new image is done, prefetch the next one
                    //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                    setTimeout(function() {
                        main.setImg(src, desc);
                        img.remove();
                        getNextImg();
                    }, 1000);
                    //});
                }, 6000);
            };

            // If there are multiple images, cycle through them
            if (main.numImgs > 1) {
                getNextImg();
            }
        }
    },

    getImgInfo: function() {
        var randNum = Math.floor((Math.random() * main.numImgs) + 1);
        var src = main.bigImgEl.attr("data-img-src-" + randNum);
        var desc = main.bigImgEl.attr("data-img-desc-" + randNum);

        return {
            src: src,
            desc: desc
        }
    },

    setImg: function(src, desc) {
        $(".intro-header.big-img").css("background-image", 'url(' + src + ')');
        if (typeof desc !== typeof undefined && desc !== false) {
            $(".img-desc").text(desc).show();
        } else {
            $(".img-desc").hide();
        }
    }
};

document.addEventListener('DOMContentLoaded', main.init);
