/* ----------------- Start Document ----------------- */
(function($){
    "use strict";

    $(document).ready(function(){
      /*--------------------------------------------------*/
      /*  Mobile Menu
	/*--------------------------------------------------*/
      $(".mmenu-trigger, .menu-icon-toggle").on("click", function (e) {
        $("body").toggleClass("mobile-nav-open");
        e.preventDefault();
      });

      $("#mobile-nav .sub-menu").prepend(
        '<div class="sub-menu-back-btn">' + ws.menu_back + "</div>"
      );
      $(function () {
        $("#mobile-nav .menu-item-has-children > a").on("click", function (ea) {
          ea.preventDefault();
        });

        var rwdMenu = $("#mobile-nav"),
          topMenu = $("#mobile-nav > li > a"),
          subMenu = $("#mobile-nav > li li > a"),
          parentLi = $("#mobile-nav > li"),
          parentSubLi = $("#mobile-nav > li li"),
          backBtn = $(".sub-menu-back-btn");

        topMenu.on("click", function (e) {
          var thisTopMenu = $(this).parent(); // current $this

          rwdMenu.addClass("rwd-menu-view");
          thisTopMenu.addClass("open-submenu");
        });

        subMenu.on("click", function (e) {
          var thisSubMenu = $(this).parent(); // current $this
          thisSubMenu.addClass("open-submenu");
        });

        backBtn.click(function () {
          var thisBackBtn = $(this);
          $(this).parent().closest(".open-submenu").removeClass("open-submenu");
          rwdMenu.removeClass("rwd-menu-view");
        });

        $(".menu-item-has-children a").on("click", function () {
          var newHeight = $(this).parent().find(".sub-menu").height();
          $(".mobile-navigation-list").animate({ height: newHeight }, 400);
          console.log("Child height " + newHeight);
        });
        $(".sub-menu-back-btn").on("click", function () {
          var newHeighta = $(this).closest("li").parent().height();
          console.log("Parent height " + newHeighta);
          $(".mobile-navigation-list").animate({ height: newHeighta }, 400);
        });
      });

      $(":checkbox").attr("autocomplete", "off");

      $("#login-tabs a").click(function (e) {
        e.preventDefault();

        // add class to tab
        $("#login-tabs li").removeClass("active");
        $(this).parent().addClass("active");
        // show the right tab
        $(".tab-content").hide();
        $($(this).attr("href")).show();
        return false;
      });

      if ($("body").hasClass("tax-job_listing_tag")) {
        $(".job_listings.job-list").addClass("new-layout");
      }
      $(".cart-in-header").hoverIntent({
        sensitivity: 3,
        interval: 60,
        over: function () {
          $(".cart-list", this).fadeIn(200);
          $(".cart-btn a.button", this).addClass("hovered");
        },
        timeout: 220,
        out: function () {
          $(".cart-list", this).fadeOut(100);
          $(".cart-btn a.button", this).removeClass("hovered");
        },
      });

      $(".search_keywords #search_keywords").change(function () {
        $(".sidebar #search_keywords").val($(this).val());
      });

      /*----------------------------------------------------*/
      /*  Elementor Smooth Loading
    /*----------------------------------------------------*/
      $(document).ready(function () {
        $(".intro-banner").after(
          '<div class="search-banner-placeholder"><div class="search-banner-placeholder-loader"></div></div>'
        );
        setTimeout(function () {
          $("body").addClass("theme-loaded");
          $(".search-banner-placeholder").fadeOut();
        }, 1100);
      });

      $(window).on("load", function () {
        $("body").addClass("theme-loaded");
        $(".search-banner-placeholder").fadeOut();
      });

      /*----------------------------------------------------*/
      /*  Navigation
    /*----------------------------------------------------*/
      if ($("header#main-header").hasClass("full-width")) {
        $("header#main-header").attr("data-full", "yes");
      }
      if ($("header#main-header").hasClass("alternative")) {
        $("header#main-header").attr("data-alt", "yes");
      }
      function menumobile() {
        var winWidth = $(window).width();

        if (winWidth < 973) {
          $("#navigation").removeClass("menu");
          $("#navigation li").removeClass("dropdown");
          $("header#main-header").removeClass("full-width");
          $("#navigation").superfish("destroy");
        } else {
          $("#navigation").addClass("menu");
          if ($("header#main-header").data("full") === "yes") {
            $("header#main-header").addClass("full-width");
          }
          $("#navigation").superfish({
            delay: 300, // one second delay on mouseout
            animation: { opacity: "show" }, // fade-in and slide-down animation
            speed: 200, // animation speed
            speedOut: 50, // out animation speed
          });
        }
        if (winWidth < ws.header_breakpoint) {
          $("header#main-header")
            .addClass("alternative")
            .removeClass("full-width");
        } else {
          if ($("header#main-header").data("alt") === "yes") {
          } else {
            $("header#main-header").removeClass("alternative");
          }
        }
      }

      // $(window).resize(function (){
      //     menumobile();
      // });
      // menumobile();

      $(window).load(function () {
        var $mascontainer = $(
          ".recent-blog-posts.masonry, .woo_pricing_tables"
        );
        $mascontainer.isotope({
          itemSelector: ".recent-blog, .plan",
          layoutMode: "fitRows",
        });
      });

      $(".workscout-signup-popup .modal-register-link").on(
        "click",
        function (e) {
          e.preventDefault();
          var magnificPopup = $.magnificPopup.instance;
          if (magnificPopup) {
            magnificPopup.close();
          }
          window.setTimeout(function () {
            $(".register-btn").trigger("click");
          }, 500);
        }
      );

      $(".my-account.static-login-page .modal-register-link").on(
        "click",
        function (e) {
          e.preventDefault();
          $(".tabs-nav.login-tabs li:last-child a").trigger("click");
        }
      );

      $(".workscout_form").on("click", ".modal-login-link", function (e) {
        e.preventDefault();
        var magnificPopup = $.magnificPopup.instance;
        if (magnificPopup) {
          magnificPopup.close();
        }
        window.setTimeout(function () {
          $(".login-btn").trigger("click");
        }, 500);
      });

      /*----------------------------------------------------*/
      /* Panel Dropdown
  /*----------------------------------------------------*/
      function close_panel_dropdown() {
        $(".panel-dropdown").removeClass("active");
        $(".fs-inner-container.content").removeClass("faded-out");
      }

      $(".panel-dropdown a").on("click", function (e) {
        if ($(this).parent().is(".active")) {
          close_panel_dropdown();
        } else {
          close_panel_dropdown();
          $(this).parent().addClass("active");
          $(".fs-inner-container.content").addClass("faded-out");
        }

        e.preventDefault();
      });

      // Apply / Close buttons
      $(".panel-buttons button,.panel-buttons span.panel-cancel").on(
        "click",
        function (e) {
          $(".panel-dropdown").removeClass("active");
          $(".fs-inner-container.content").removeClass("faded-out");
        }
      );

      // Closes dropdown on click outside the conatainer
      var mouse_is_inside = false;

      $(".panel-dropdown").hover(
        function () {
          mouse_is_inside = true;
        },
        function () {
          mouse_is_inside = false;
        }
      );

      $("body").mouseup(function () {
        if (!mouse_is_inside) close_panel_dropdown();
      });
      //   /*  User Menu */
      //   $('.user-menu').on('click', function(){
      //   $(this).toggleClass('active');
      // });

      //   var jPanelMenu = $.jPanelMenu({
      //     menu: '#responsive',
      //     animated: false,
      //     duration: 200,
      //     keyboardShortcuts: false,
      //     closeOnContentClick: true
      //   });

      // // desktop devices
      //   $('.menu-trigger').on('click',function(){
      //     var jpm = $(this);

      //     if( jpm.hasClass('active') )
      //     {
      //       jPanelMenu.off();
      //       jpm.removeClass('active');
      //     }
      //     else
      //     {
      //       jPanelMenu.on();
      //       jPanelMenu.open();
      //       jpm.addClass('active');
      //     }
      //     return false;
      //   });

      //   // Removes SuperFish Styles
      //   $('#jPanelMenu-menu').removeClass('sf-menu');
      //   $('#jPanelMenu-menu li ul').removeAttr('style');

      //   $(window).resize(function (){
      //     var winWidth = $(window).width();
      //     var jpmactive = $('.menu-trigger');
      //     if(winWidth>990) {
      //       jPanelMenu.off();
      //       jpmactive.removeClass('active');
      //     }
      //   });

      var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
      $(window).on("load", function () {
        if (pixelRatio > 1) {
          if (ws.retinalogo) {
            $("header:not(.transparent) #logo img").attr("src", ws.retinalogo);
          }
          if (ws.transparentretinalogo) {
            $("header.transparent:not(.cloned) #logo img").attr(
              "src",
              ws.transparentretinalogo
            );
            $(
              "#wrapper:not(.wrapper-with-transparent-header) #header:not(.cloned) #logo img"
            ).attr("src", ws.retinalogo);
          }
        } else {
          $("header:not(.transparent) #logo img").attr("src", ws.logo);
          $("header.transparent:not(.cloned) #logo img").attr(
            "src",
            ws.transparentlogo
          );
          $(
            "#wrapper.wrapper-with-transparent-header #header:not(.cloned) #logo img"
          ).attr("src", ws.transparentlogo);
          $(
            "#wrapper:not(.wrapper-with-transparent-header) #header:not(.cloned) #logo img"
          ).attr("src", ws.logo);
        }
      });

      $(window).bind("load resize", function () {
        var winWidth = $(window).width();
        if (winWidth < 1290) {
          $(".sticky-header.cloned").remove();
        }
      });

      /*----------------------------------------------------*/
      /*  Stacktable / Responsive Tables Plug-in
    /*----------------------------------------------------*/
      $(".shop_table,.responsive-table").stacktable();

      $(".small-only input.input-text.qty.text").on("change", function () {
        var value = $(this).val();
        var name = $(this).attr("name");
        $(".large-only")
          .find(".quantity.buttons_added .qty[name*='" + name + "']")
          .val(value);
      });

      /*----------------------------------------------------*/
      /*  Back to Top
    /*----------------------------------------------------*/
      var pxShow = 400; // height on which the button will show
      var fadeInTime = 400; // how slow / fast you want the button to show
      var fadeOutTime = 400; // how slow / fast you want the button to hide
      var scrollSpeed = 400; // how slow / fast you want the button to scroll to top.

      $(window).scroll(function () {
        if ($(window).scrollTop() >= pxShow) {
          $("#backtotop").fadeIn(fadeInTime);
        } else {
          $("#backtotop").fadeOut(fadeOutTime);
        }
      });

      $("#backtotop a").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, scrollSpeed);
        return false;
      });

      /*----------------------------------------------------*/
      /*  Showbiz Carousel
    // /*----------------------------------------------------*/

      $(".job-spotlight-car").slick({
        infinite: true,
        speed: 500,
        centerPadding: "20px",
        //slidesToShow: 2,
        adaptiveHeight: true,
      });

      $(".related-job-spotlight-car").slick({
        centerPadding: "20px",
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 1367,
            settings: {
              centerPadding: "15%",
            },
          },
          {
            breakpoint: 1025,
            settings: {
              centerPadding: "0",
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerPadding: "0",
              slidesToShow: 1,
            },
          },
        ],
      });

      $("#our-clients").slick({
        slidesToShow: 6,
        slidesToScroll: 4,
      });

      /*----------------------------------------------------*/
      /*  Flexslider
    /*----------------------------------------------------*/
      $(".testimonials-slider").flexslider({
        animation: "fade",
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a"),
      });

      /*----------------------------------------------------*/
      /*  Counters
    /*----------------------------------------------------*/

      $(".counter").counterUp({
        delay: 10,
        time: 800,
      });

      /*----------------------------------------------------*/
      /*  Magnific Popup
    /*----------------------------------------------------*/

      $("body").magnificPopup({
        type: "image",
        delegate: "a.mfp-gallery",

        fixedContentPos: true,
        fixedBgPos: true,

        overflowY: "auto",

        closeBtnInside: true,
        preloader: true,

        removalDelay: 0,
        mainClass: "mfp-fade",

        gallery: { enabled: true },

        callbacks: {
          buildControls: function () {
            this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
          },
        },
      });

      $(document).on(
        "submit",
        ".small-dialog-content.woo-reg-box form.login, .small-dialog-content.woo-reg-box form.register",
        function (e) {
          var form = $(this);
          var error = false;

          var base = $(this).serialize();
          var button = $(this).find("input[type=submit]");

          $(button).css("backgroundColor", "#ddd");
          var data = base + "&" + button.attr("name") + "=" + button.val();

          var $response = $("#ajax-response");

          var request = $.ajax({
            url: ws.woo_account_page,
            data: data,
            type: "POST",
            cache: false,
            async: false,
            success: function (response) {
              form.find($(".woocommerce-error")).remove();

              var $response = $("#ajax_response");
              var html = $.parseHTML(response);

              $response.append(html);
              error = $response.find($(".woocommerce-error"));

              $(button).css("backgroundColor", ws.theme_color);
              if (error.length > 0) {
                form.prepend(error.clone());
                $response.html("");
                e.preventDefault();
              } else {
                if (form.hasClass("register")) {
                  window.location.href = ws.woo_account_page;
                  e.preventDefault();
                  return false;
                } else {
                  document.location.href = ws.woo_account_page;
                }
              }
            },
          });
        }
      );

      $(".popup-with-zoom-anim").magnificPopup({
        type: "inline",

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: "auto",

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in",

        prependTo: "#wrapper",
      });

      $(".full-page-job-container").magnificPopup({
        type: "inline",
        delegate: "a.popup-with-zoom-anim",
        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: "auto",

        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in",

        prependTo: "#wrapper",
      });

      $(".mfp-image").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        mainClass: "mfp-fade",
        image: {
          verticalFit: true,
        },
      });

      $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,
      });

      var hash = window.location.hash;
      console.log(hash);
      if (hash == "#apply-dialog") {
        $(".small-dialog.popup-with-zoom-anim.apply-dialog-button").trigger(
          "click"
        );
      }

      
    var listing_gallery_grid_popup;
    $("#single-listing-grid-gallery-popup").on("click", function (e) {
      e.preventDefault();

      // Get the JSON-encoded data from the data attribute
      var imageData = $(this).data("gallery");

      // Create an array to hold the gallery items
      var items = [];

      // Loop through the JSON data and create Magnific Popup items
      $.each(imageData, function (index, image) {
        console.log(image);
        items.push({
          src: image,
          //title: image.title,
        });
      });

      // Open Magnific Popup with the gallery items
      $.magnificPopup.open({
        items: items,
        type: "image", // Specify the type of content (image, iframe, inline, etc.)
        fixedContentPos: true,
        fixedBgPos: true,

        overflowY: "auto",

        closeBtnInside: false,
        preloader: true,

        removalDelay: 0,
        mainClass: "mfp-fade",

        gallery: { enabled: true, tCounter: "" },
      });
      listing_gallery_grid_popup = $.magnificPopup.instance;
    });

    $("a.slg-gallery-img").on("click", function (e) {
      e.preventDefault();
      $("#single-listing-grid-gallery-popup").trigger("click");
      var index = $(this).data("grid-start-index");
      listing_gallery_grid_popup.goTo(index);
    });

      /*---------------------------------------------------*/
      /*  Contact Form
    /*---------------------------------------------------*/

      //reset previously set border colors and hide all comment on .keyup()
      $("#contactform input, #contactform textarea").keyup(function () {
        $("#contactform input, #contactform textarea").removeClass("error");
        $("#result").slideUp();
      });

      /*----------------------------------------------------*/
      /*  Accordions
    /*----------------------------------------------------*/

      var $accor = $(".accordion");

      $accor.each(function () {
        $(this).find("div").hide().first().show();
        $(this).find("h3").first().addClass("active-acc");
      });

      var $trigger = $accor.find("h3");

      $trigger.on("click", function (e) {
        var location = $(this).parent();

        if ($(this).next().is(":hidden")) {
          var $triggerloc = $("h3", location);
          $triggerloc.removeClass("active-acc").next().slideUp(300);
          $(this).addClass("active-acc").next().slideDown(300);
        }
        e.preventDefault();
      });

      /*----------------------------------------------------*/
      /*  Application Tabs
    /*----------------------------------------------------*/
      // Get all the links.
      var link = $(".app-link");
      $(".close-tab").hide();

      $(".app-tabs div.app-tab-content").hide();
      // On clicking of the links do something.
      link.on("click", function (e) {
        e.preventDefault();
        $(this).parents("div.application").find(".close-tab").fadeOut();
        if ($(this).hasClass("opened")) {
          $(this)
            .parents("div.application")
            .find(".app-tabs div.app-tab-content")
            .slideUp("fast");
          $(this).parents("div.application").find(".close-tab").fadeOut(10);
          $(this).removeClass("opened");
        } else {
          $(this)
            .parents("div.application")
            .find(".app-link")
            .removeClass("opened");
          $(this).addClass("opened");
          var a = $(this).attr("href");
          $(this)
            .parents("div.application")
            .find(a)
            .slideDown("fast")
            .removeClass("closed")
            .addClass("opened");
          $(this).parents("div.application").find(".close-tab").fadeIn(10);
        }

        $(this)
          .parents("div.application")
          .find(".app-tabs div.app-tab-content")
          .not(a)
          .slideUp("fast")
          .addClass("closed")
          .removeClass("opened");
      });

      $(".close-tab").on("click", function (e) {
        $(this).fadeOut();
        e.preventDefault();
        $(this)
          .parents("div.application")
          .find(".app-link")
          .removeClass("opened");
        $(this)
          .parents("div.application")
          .find(".app-tabs div.app-tab-content")
          .slideUp("fast")
          .addClass("closed")
          .removeClass("opened");
      });

      /*----------------------------------------------------*/
      /*  Add Resume 
    /*----------------------------------------------------*/
      $(".box-to-clone").hide();
      $(".add-box").on("click", function (e) {
        e.preventDefault();
        var newElem = $(this).parent().find(".box-to-clone:first").clone();
        newElem.find("input").val("");
        newElem.prependTo($(this).parent()).show();
        var height = $(this).prev(".box-to-clone").outerHeight(true);

        $("html, body")
          .stop()
          .animate({ scrollTop: $(this).offset().top - height }, 600);
      });

      $("body").on("click", ".remove-box", function (e) {
        e.preventDefault();
        $(this).parent().remove();
      });

      $(".stars a")
        .on("click", function () {
          $(".stars a").removeClass("prevactive");
          $(this).prevAll().addClass("prevactive");
        })
        .hover(
          function () {
            $(".stars a").removeClass("prevactive");
            $(this).addClass("prevactive").prevAll().addClass("prevactive");
          },
          function () {
            $(".stars a").removeClass("prevactive");
            $(".stars a.active").prevAll().addClass("prevactive");
          }
        );

      /*----------------------------------------------------*/
      /*  Tabs
    /*----------------------------------------------------*/
      var $tabsNav = $(".tabs-nav,.vc_tta-tabs-list"),
        $tabsNavLis = $tabsNav.children("li");
      // $tabContent = $('.tab-content');

      $tabsNav.each(function () {
        var $this = $(this);

        $this
          .next()
          .children(".tab-content")
          .stop(true, true)
          .hide()
          .first()
          .show();

        $this.children("li").first().addClass("active").stop(true, true).show();
      });

      $tabsNavLis.on("click", function (e) {
        var $this = $(this);

        $this.siblings().removeClass("active").end().addClass("active");

        $this
          .parent()
          .next()
          .children(".tab-content")
          .stop(true, true)
          .hide()
          .siblings($this.find("a").attr("href"))
          .fadeIn();

        e.preventDefault();
      });

      var hash = window.location.hash;
      console.log(hash);
      var anchor = $('.tabs-nav a[href="' + hash + '"]');
      if (anchor.length === 0) {
      } else {
        $(".tab-content").hide();
        anchor.trigger("click");
        $(hash + ".tab-content").show();
      }

      $("#login-tabs a").click(function (e) {
        e.preventDefault();
        // add class to tab
        $("#login-tabs li").removeClass("active");
        $(this).parent().addClass("active");
        // show the right tab
        $(" .tab-content").hide();
        $($(this).attr("href")).show();
        return false;
      });

      /*remove empty tags*/
      $("p").each(function () {
        var $this = $(this);
        if ($this.html().replace(/\s|&nbsp;/g, "").length === 0)
          $this.addClass("pfix").html("");
      });

      $(".ws-file-upload").change(function () {
        var filename = [];
        $.each($(this).prop("files"), function (k, v) {
          filename.push(
            '<span class="job-manager-uploaded-file-name">' +
              v["name"] +
              "</span> "
          );
        });

        $(this).prev(".job-manager-uploaded-files").html(filename);
      });

      /*----------------------------------------------------*/
      /*  Sliding In-Out Content
    /*----------------------------------------------------*/

      $(window).bind("load resize scroll", function (e) {
        var headerElem = $(".parallax .search-container");

        // flying out and fading for header content
        $(headerElem).css({
          transform: "translateY(" + $(window).scrollTop() / -9 + "px)",
        });
        // $(headerElem).css({ 'opacity': 1 - $(window).scrollTop() / 600 });
      });

      /*----------------------------------------------------*/
      /*  Parallax
    /*----------------------------------------------------*/
      /* detect touch */
      if ("ontouchstart" in window) {
        document.documentElement.className =
          document.documentElement.className + " touch";
      }
      if (!$("html").hasClass("touch")) {
        /* background fix */
        $(".parallax").css("background-attachment", "fixed");
      }

      /* fix vertical when not overflow
    call fullscreenFix() if .fullscreen content changes */
      function fullscreenFix() {
        var h = $("body").height();
        // set .fullscreen height
        $(".parallax-content").each(function (i) {
          if ($(this).innerHeight() > h) {
            $(this).closest(".fullscreen").addClass("overflow");
          }
        });
      }
      $(window).resize(fullscreenFix);
      fullscreenFix();

      /* resize background images */
      function backgroundResize() {
        var windowH = $(window).height();
        var winWidth = $(window).width();
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        var ios = false;

        if (
          userAgent.match(/iPad/i) ||
          userAgent.match(/iPhone/i) ||
          userAgent.match(/iPod/i)
        ) {
          ios = true;
        }
        if (ios == true) {
          $(".background").each(function (i) {
            $(this).addClass("mobilebg");
          });
          console.log("are we here IOS?");
        } else if (winWidth > 1023) {
          $(".background").each(function (i) {
            var path = $(this);
            $(this).removeClass("mobilebg");
            // variables
            var contW = path.width();
            var contH = path.height();
            var imgW = path.attr("data-img-width");
            var imgH = path.attr("data-img-height");
            var ratio = imgW / imgH;
            // overflowing difference
            var diff = parseFloat(path.attr("data-diff"));
            diff = diff ? diff : 0;
            // remaining height to have fullscreen image only on parallax
            var remainingH = 0;
            if (path.hasClass("parallax") && !$("html").hasClass("touch")) {
              var maxH = contH > windowH ? contH : windowH;
              remainingH = windowH - contH;
            }
            // set img values depending on cont
            imgH = contH + remainingH + diff;
            imgW = imgH * ratio;
            // fix when too large
            if (contW > imgW) {
              imgW = contW;
              imgH = imgW / ratio;
            }
            //
            path.data("resized-imgW", imgW);
            path.data("resized-imgH", imgH);
            path.css("background-size", imgW + "px " + imgH + "px");
          });
        }
      }
      $(window).resize(backgroundResize);
      $(window).focus(backgroundResize);
      backgroundResize();

      /* set parallax background-position */
      function parallaxPosition(e) {
        var winWidth = $(window).width();
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        var ios = false;
        if (
          userAgent.match(/iPad/i) ||
          userAgent.match(/iPhone/i) ||
          userAgent.match(/iPod/i)
        ) {
          ios = true;
        }
        if (winWidth > 1023 || ios == false) {
          var heightWindow = $(window).height();
          var topWindow = $(window).scrollTop();
          var bottomWindow = topWindow + heightWindow;
          var currentWindow = (topWindow + bottomWindow) / 2;
          $(".parallax").each(function (i) {
            var path = $(this);
            var height = path.height();
            var top = path.offset().top;
            var bottom = top + height;
            // only when in range
            if (bottomWindow > top && topWindow < bottom) {
              var imgW = path.data("resized-imgW");
              var imgH = path.data("resized-imgH");
              // min when image touch top of window
              var min = 0;
              // max when image touch bottom of window
              var max = -imgH + heightWindow;
              // overflow changes parallax
              var overflowH =
                height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
              top = top - overflowH;
              bottom = bottom + overflowH;
              // value with linear interpolation
              var value =
                -100 +
                min +
                ((max - min) * (currentWindow - top)) / (bottom - top);
              // set background-position
              var orizontalPosition = path.attr("data-oriz-pos");
              orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
              $(this).css(
                "background-position",
                orizontalPosition + " " + value + "px"
              );
            }
          });
        }
      }
      if (!$("html").hasClass("touch")) {
        $(window).resize(parallaxPosition);
        //$(window).focus(parallaxPosition);
        $(window).scroll(parallaxPosition);
        parallaxPosition();
      }

      /*----------------------------------------------------*/
      /*  Sticky Header 
    /*----------------------------------------------------*/
      if ($("header#main-header").hasClass("sticky-header")) {
        $(".sticky-header")
          .clone(true)
          .addClass("cloned")
          .insertAfter(".sticky-header");

        $(".sticky-header.cloned.transparent #logo a img").attr("src", ws.logo);
        $(".sticky_new.cloned #logo a img").attr("src", ws.logo);
        $(".sticky-header.cloned.alternative").removeClass("alternative");
        $(".sticky-header.cloned .popup-with-zoom-anim").magnificPopup({
          type: "inline",

          fixedContentPos: false,
          fixedBgPos: true,

          overflowY: "auto",

          closeBtnInside: true,
          preloader: false,

          midClick: true,
          removalDelay: 300,
          mainClass: "my-mfp-zoom-in",
        });

        var stickyHeader = document.querySelector(".sticky-header.cloned");

        var headroom = new Headroom(stickyHeader, {
          offset: $(".sticky-header").height(),
          tolerance: 0,
        });
        $(".sticky-header.cloned").find("#signup-dialog").remove();
        $(".sticky-header.cloned").find("#login-dialog").remove();

        // disabling on mobile
        $(window).bind("load resize", function (e) {
          $(".sticky-header.cloned").removeClass("transparent alternative");

          var winWidth = $(window).width();

          if (winWidth > ws.header_breakpoint) {
            headroom.init();
          } else if (winWidth < ws.header_breakpoint) {
            headroom.destroy();
          }
        });
      }

      $(".small-only #coupon_code").on("change", function () {
        var value = $(this).val();
        var name = $(this).attr("name");
        $(".large-only")
          .find("input[name*='" + name + "']")
          .val(value);
      });

      $(".large-only #coupon_code").on("change", function () {
        var value = $(this).val();
        var name = $(this).attr("name");
        $(".small-only")
          .find("input[name*='" + name + "']")
          .val(value);
      });

      /* move related jobs after job details*/
      var winWidth = $(window).width();
      if (winWidth < 768) {
        $("#related-job-container").detach().appendTo("#job-details");
      }

      // v1.5

      /*----------------------------------------------------*/
      /*  Slick Carousel
    /*----------------------------------------------------*/
      $(".testimonial-carousel").slick({
        centerMode: true,
        centerPadding: "34%",
        slidesToShow: 1,

        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              centerPadding: "10px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerPadding: "10px",
              slidesToShow: 1,
            },
          },
        ],
      });

      /*----------------------------------------------------*/
      /*  Flip Banner
    /*----------------------------------------------------*/
      function flipBanner() {
        $(".flip-banner").prepend('<div class="flip-banner-overlay"></div>');

        $(".flip-banner").each(function () {
          var attrImage = $(this).attr("data-background");
          var attrColor = $(this).attr("data-color");
          var attrOpacity = $(this).attr("data-color-opacity");

          if (attrImage !== undefined) {
            $(this).css("background-image", "url(" + attrImage + ")");
          }

          if (attrColor !== undefined) {
            $(this)
              .find(".flip-banner-overlay")
              .css("background-color", "" + attrColor + "");
          }

          if (attrOpacity !== undefined) {
            $(this)
              .find(".flip-banner-overlay")
              .css("opacity", "" + attrOpacity + "");
          }
        });
      }
      flipBanner();

      /*----------------------------------------------------*/
      /*  Image Box
    /*----------------------------------------------------*/
      $(".img-box").each(function () {
        $(this).append('<div class="img-box-background"></div>');
        $(this)
          .children(".img-box-background")
          .css({
            "background-image":
              "url(" + $(this).attr("data-background-image") + ")",
          });
      });

      /*----------------------------------------------------*/
      /*  Auto Header Padding
    /*----------------------------------------------------*/
      $(window).on("load resize", function () {
        var headerHeight = $(".dashboard-header").height();
        $("#dashboard").css("padding-top", headerHeight);
      });

      $(window).on("load resize", function () {
        var headerHeightTwo = $("#header").height();
        $(".page-template-template-tasks-fullpage #wrapper").css("padding-top", headerHeightTwo);
      });


      /*----------------------------------------------------*/
      /*  Counters
    /*----------------------------------------------------*/
      // $(window).on('load', function() {
      //     $('.dashboard-stat-content h4').counterUp({
      //         delay: 100,
      //         time: 800
      //     });
      // });

      /*----------------------------------------------------*/
      /* Dashboard Scripts
    /*----------------------------------------------------*/

      // Dashboard Nav Submenus
      $(".dashboard-nav ul li a").on("click", function (e) {
        if ($(this).closest("li").children("ul").length) {
          if ($(this).closest("li").is(".active-submenu")) {
            $(".dashboard-nav ul li").removeClass("active-submenu");
          } else {
            $(".dashboard-nav ul li").removeClass("active-submenu");
            $(this).parent("li").addClass("active-submenu");
          }
          e.preventDefault();
        }
      });

      // Dashbaord Nav Scrolling
      $(window).on("load resize", function () {
        var wrapperHeight = window.innerHeight;
        var headerHeight = $("#header-container").height();
        var winWidth = $(window).width();

        if (winWidth > 992) {
          $(".dashboard-nav-inner").css(
            "max-height",
            wrapperHeight - headerHeight
          );
        } else {
          $(".dashboard-nav-inner").css("max-height", "");
        }
      });

      // Responsive Nav Trigger
      $(".dashboard-responsive-nav-trigger").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");

        var dashboardNavContainer = $("body").find(".dashboard-nav");

        if ($(this).hasClass("active")) {
          $(dashboardNavContainer).addClass("active");
        } else {
          $(dashboardNavContainer).removeClass("active");
        }
      });

      /*----------------------------------------------------*/
      /* V2 Update
    /*----------------------------------------------------*/

      /*--------------------------------------------------*/
      /*  Sticky Header
    /*--------------------------------------------------*/
      function stickyHeaderOther() {
        if ($("#header-container").hasClass("sticky_new")) {
          $(window).on("scroll load", function () {
            if ($(window).width() < "1099") {
              $("#header-container").removeClass("cloned");
            }

            if ($(window).width() > "1099") {
              // CSS adjustment
              $("#header-container").css({
                position: "fixed",
              });

              var headerOffset = $("#header-container").height();

              if ($(window).scrollTop() >= headerOffset) {
                $("#header-container").addClass("cloned");
                $(".wrapper-with-transparent-header #header-container")
                  .addClass("cloned")
                  .removeClass("transparent-header unsticky");
              } else {
                $("#header-container").removeClass("cloned");
                $(".wrapper-with-transparent-header #header-container")
                  .addClass("transparent-header unsticky")
                  .removeClass("cloned");
              }

              if (
                $(
                  ".wrapper-with-transparent-header #header-container"
                ).hasClass("cloned")
              ) {
                $("#header-container.cloned #logo_nh img").attr("src", ws.logo);
              }

              if (
                $(
                  ".wrapper-with-transparent-header #header-container"
                ).hasClass("transparent-header")
              ) {
                $("#header-container #logo_nh img").attr(
                  "src",
                  ws.transparentlogo
                );
              }

              $(window).on("load resize", function () {
                var headerOffset = $("#header-container").height();
                $("#wrapper").css({ "padding-top": headerOffset });
              });
            }
          });
        }
      }

      // Sticky Header Init
      stickyHeaderOther();

      /*--------------------------------------------------*/
      /*  Transparent Header Spacer Adjustment
    /*--------------------------------------------------*/
      $(window).on("load resize", function () {
        var transparentHeaderHeight = $(".transparent-header").outerHeight();
        $(".transparent-header-spacer").css({
          height: transparentHeaderHeight,
        });
      });

      /*--------------------------------------------------*/
      /*  Ripple Effect
    /*--------------------------------------------------*/
     $("body").on("click",".ripple-effect, .ripple-effect-dark", function (e) {
      //$(".ripple-effect, .ripple-effect-dark").on("click", function (e) {
        var rippleDiv = $('<span class="ripple-overlay">'),
          rippleOffset = $(this).offset(),
          rippleY = e.pageY - rippleOffset.top,
          rippleX = e.pageX - rippleOffset.left;

        rippleDiv
          .css({
            top: rippleY - rippleDiv.height() / 2,
            left: rippleX - rippleDiv.width() / 2,
            // background: $(this).data("ripple-color");
          })
          .appendTo($(this));

        window.setTimeout(function () {
          rippleDiv.remove();
        }, 800);
      });

      /*--------------------------------------------------*/
      /*  Header User Dropdown
    /*--------------------------------------------------*/
      window.header_menu = function () {
        $(".header-notifications").each(function () {
          var userMenu = $(this);
          var userMenuTrigger = $(this).find(".header-notifications-trigger a");

          $(userMenuTrigger).on("click", function (event) {
            event.preventDefault();

            if ($(this).closest(".header-notifications").is(".active")) {
              close_user_dropdown();
            } else {
              close_user_dropdown();
              userMenu.addClass("active");
            }
          });
        });
      };
      header_menu();

      // Closing function
      function close_user_dropdown() {
        $(".header-notifications").removeClass("active");
      }

      // Closes notification dropdown on click outside the conatainer
      var mouse_is_inside = false;

      $(".header-notifications").on("mouseenter", function () {
        mouse_is_inside = true;
      });
      $(".header-notifications").on("mouseleave", function () {
        mouse_is_inside = false;
      });

      $("body").mouseup(function () {
        if (!mouse_is_inside) close_user_dropdown();
      });

      // Close with ESC
      $(document).keyup(function (e) {
        if (e.keyCode == 27) {
          close_user_dropdown();
        }
      });

      /*----------------------------------------------------*/
      /*  Inline CSS replacement for backgrounds
    /*----------------------------------------------------*/
      function inlineBG() {
        // Common Inline CSS
        $(".single-page-header, .intro-banner").each(function () {
          var attrImageBG = $(this).attr("data-background-image");

          if (attrImageBG !== undefined) {
            $(this).append('<div class="background-image-container"></div>');
            $(".background-image-container").css(
              "background-image",
              "url(" + attrImageBG + ")"
            );
          }
        });
      }
      inlineBG();

      // Fix for intro banner with label
      $(".intro-search-field").each(function () {
        var bannerLabel = $(this).children("label").length;
        if (bannerLabel > 0) {
          $(this).addClass("with-label");
        }
      });

      /*--------------------------------------------------*/
      /*  Full Screen Page Scripts
    /*--------------------------------------------------*/
// Enabling Scrollbar
      function fullPageScrollbar() {
        $(".full-page-sidebar-inner, .dashboard-sidebar-inner").each(
          function () {
            var headerHeight = $("#header-container").outerHeight();
            var windowHeight = $(window).outerHeight() - headerHeight;
            var sidebarContainerHeight = $(this)
              .find(".sidebar-container, .dashboard-nav-container")
              .outerHeight();

            // Enables scrollbar if sidebar is higher than wrapper
            if (sidebarContainerHeight > windowHeight) {
              $(this).css({ height: windowHeight });
            } else {
              $(this).find(".simplebar-track").hide();
            }
          }
        );
      }

      // Init
      $(window).on("load resize", function () {
        wrapperHeight();
        fullPageScrollbar();
      });
      wrapperHeight();
      fullPageScrollbar();

      // Wrapper Height (window height - header height)
      function wrapperHeight() {
        var headerHeight = $("#header-container").outerHeight();
        var windowHeight = $(window).outerHeight() - headerHeight;
        $(
          ".full-page-content-container-v2, .full-page-sidebar-v2, .full-page-content-container, .dashboard-content-container, .dashboard-sidebar-inner, .dashboard-container, .full-page-container"
        ).css({ height: windowHeight });
        $(".dashboard-content-inner").css({ "min-height": windowHeight });
      }


      // Init
      $(window).on("load resize", function () {
        wrapperHeight();
        fullPageScrollbar();
      });
      wrapperHeight();
      fullPageScrollbar();

      var rangeAttr = $("#search_radius").attr("data-slider-currency");
      $("#search_radius").bootstrapSlider({
        formatter: function (value) {
          return value + " " + rangeAttr;
        },
      });
      
      // formatter: function (value) {
        //   return ThousandSeparator(parseInt(value)) + rangeAttr;
        // },
      
      // $("#radius-range").slider({
      //   value: workscout_core.radius_default,
      //   min: 1,
      //   max: 800,
      //   step: 1,
      //   slide: function (event, ui) {
      //     $("input#radius_amount").val(ui.value);
      //     $(".radius_amount span").text(ui.value);
      //     // if(job_manager_ajax_filters.currency_postion === 'before') {
      //     //   $( ".salary_amount .from" ).text(job_manager_ajax_filters.currency+ui.values[ 0 ]);
      //     //   $( ".salary_amount .to" ).text(job_manager_ajax_filters.currency+ui.values[ 1 ]);
      //     // } else {
      //     //   $( ".salary_amount .from" ).text(ui.values[ 0 ]+job_manager_ajax_filters.currency);
      //     //   $( ".salary_amount .to" ).text(ui.values[ 1 ]+job_manager_ajax_filters.currency);
      //     // }
      //   },
      //   stop: function (event, ui) {
      //     var target = $("div.job_listings,div.resumes");
      //     target.triggerHandler("update_results", [1, false]);
      //   },
      // });

      // Single Select
      $(".select2-single").select2({
        minimumResultsForSearch: 20,
        width: "100%",
        allowClear: true,
      });

      // Multiple Select
      $(".select2-multiple").each(function () {
        $(this).select2({
          width: "100%",
          placeholder: $(this).attr("placeholder"),
        });
      });

      // Select on Home Search Bar
      $(".select-on-home").select2({
        dropdownParent: $(".intro-banner"),
        minimumResultsForSearch: 20,
        width: "100%",
      });
      $(".select-on-basichome").select2({
        dropdownParent: $(".sc-jobs"),
        minimumResultsForSearch: 20,
        width: "100%",
      });

      // Dashboard Wrapper Height
      $(window).on("load resize", function () {
        $("#dashboard").css(
          "min-height",
          $(window).height() - $(".new-header #header-container").height()
        );
      });

      /*--------------------------------------------------*/
      /*  Full Page Jobs Scripts
  /*--------------------------------------------------*/
      // Sliding Sidebar
      $(".enable-filters-button").on("click", function () {
        $(".full-page-sidebar").toggleClass("enabled-sidebar");
        $(".enable-filters-button").toggleClass("active");
        $(".filter-button-tooltip").removeClass("tooltip-visible");
      });

      // Sticky Filter
      $(".full-page-content-container").scroll(function () {
        if ($(this).scrollTop() >= 240) {
          $(".sticky-filter-button").addClass("btn-visible");
        } else {
          $(".sticky-filter-button").removeClass("btn-visible");
        }
      });

      //  Enable Filters Button Tooltip
      $(window).on("load", function () {
        $(".filter-button-tooltip")
          .css({
            left: $(".enable-filters-button").outerWidth() + 60,
          })
          .addClass("tooltip-visible");
      });

      //   $.post(
      //     workscout_core.ajaxurl,
      //     {
      //         'action': 'foobar',
      //         'foobar_id':   123
      //     },
      //     function(response) {
      //         console.log('The server responded: ', response);
      //     }
      // );

      $(window).on("load", function () {
        var winWidth = $(window).width();

        if (winWidth > 992) {
          $(
            ".full-page-job-listings-container .job_listings li:first-child a"
          ).trigger("click");
        }
      });


      
if ($("#media-uploader.gallery").length > 0) {
  var gallery_limit = $("#media-uploader.gallery").data("maxfiles");
  if (!gallery_limit) {
    gallery_limit = workscout_core.maxFiles;
  }

  console.log("gallery_limit" + gallery_limit);
  /* Upload using dropzone */
  Dropzone.autoDiscover = false;

  var galleryDropzone = new Dropzone("#media-uploader.gallery", {
    url: workscout_core.upload,
    timeout: 999999,
    maxFiles: gallery_limit,
    acceptedFiles: "image/*",
    maxFilesize: workscout_core.maxFilesize,
    dictMaxFilesExceeded: workscout_core.dictMaxFilesExceeded,
    dictDefaultMessage: workscout_core.dictDefaultMessage,
    dictFallbackMessage: workscout_core.dictFallbackMessage,
    dictFallbackText: workscout_core.dictFallbackText,
    dictFileTooBig: workscout_core.dictFileTooBig,
    dictInvalidFileType: workscout_core.dictInvalidFileType,
    dictResponseError: workscout_core.dictResponseError,
    dictCancelUpload: workscout_core.dictCancelUpload,
    dictCancelUploadConfirmation: workscout_core.dictCancelUploadConfirmation,
    dictRemoveFile: workscout_core.dictRemoveFile,
    init: function () {
      this.on("sending", function (file, xhr, formData) {
        var id = $("input[name=property_id]").val();
        formData.append("data", id);
      });
      this.on("addedfile", function (file) {
        /* Set active thumb class to preview that is used as thumbnail*/

        if (file["attachment_id"] === parseInt($("#_thumbnail_id").val())) {
          file.previewElement.className +=
            " active-thumb gallery" + file["attachment_id"];
        } else {
          file.previewElement.className +=
            " gallery" + parseInt(file["attachment_id"]);
        }
        file.previewElement.addEventListener("click", function () {
          $(".dz-preview").removeClass("active-thumb");
          $(this).addClass("active-thumb");

          var id = file["attachment_id"];
          $("#_thumbnail_id").val(id);
        });
      }),
        this.on("complete", function (file) {
          file.previewElement.className += " gallery" + file.attachment_id;
        });
      this.on("queuecomplete", function (file) {
        $(".dz-image-preview:first").trigger("click"); //file.previewElement.click();
      });
    },
    success: function (file, response) {
      file.previewElement.classList.add("dz-success");
      response = response.replace(/(\r\n|\n|\r)/gm, "");
      file["attachment_id"] = response; // push the id for future reference

      $("#media-uploader-ids").append(
        '<input id="gallery' +
          file["attachment_id"] +
          '" type="hidden" name="gallery[' +
          file["attachment_id"] +
          ']"  value="' +
          file["name"] +
          '">'
      );
    },
    error: function (file, response) {
      file.previewElement.classList.add("dz-error");
      $(file.previewElement).find(".dz-error-message").text(response);
    },
    // update the following section is for removing image from library
    addRemoveLinks: true,
    removedfile: function (file) {
      var attachment_id = file["attachment_id"];
      $("input#gallery" + attachment_id).remove();
      /*remove thumbnail if the image was set as it*/
      if ($("#_thumbnail_id").val() == attachment_id) {
        $("#_thumbnail_id").val("");
      }
      $.ajax({
        type: "POST",
        url: workscout_core.delete,
        data: {
          media_id: attachment_id,
        },
        success: function (result) {
          console.log(result);
        },
        error: function () {
          console.log("delete error");
        },
      });
      var _ref;
      return (_ref = file.previewElement) != null
        ? _ref.parentNode.removeChild(file.previewElement)
        : void 0;
    },
  });

  if (typeof images !== typeof undefined && images !== false) {
    var uploaded_media = jQuery.parseJSON(images);
    for (var i = 0; i < uploaded_media.length; ++i) {
      var mockFile = {
        name: uploaded_media[i].name,
        size: uploaded_media[i].size,
        attachment_id: uploaded_media[i].attachment_id,
      };
      galleryDropzone.emit("addedfile", mockFile);
      galleryDropzone.emit("thumbnail", mockFile, uploaded_media[i].thumb);
      galleryDropzone.emit("complete", mockFile);
      galleryDropzone.files.push(mockFile);
      // If you use the maxFiles option, make sure you adjust it to the
      // correct amount:
      var existingFileCount = 1; // The number of files already uploaded
      galleryDropzone.options.maxFiles =
        galleryDropzone.options.maxFiles - existingFileCount;
    }
  }

  $(".dropzone")
    .sortable({
      items: ".dz-preview",
      cursor: "move",
      opacity: 0.5,
      containment: ".dropzone",
      distance: 20,
      tolerance: "pointer",
      update: sortinputs,
    })
    .disableSelection();

  function sortinputs() {
    $(".dropzone .dz-preview").each(function (i, el) {
      var p = $(el).attr("class").match(/\d+/g);

      $("#media-uploader-ids input#gallery" + p)
        .remove()
        .appendTo($("#media-uploader-ids"));
    });
  }
}

//attachments dropzone

      
if ($("#media-uploader.task_file").length > 0) {
  var gallery_limit = $("#media-uploader.task_file").data("maxfiles");
  if (!gallery_limit) {
    gallery_limit = workscout_core.maxFiles;
  }

  
  /* Upload using dropzone */
  Dropzone.autoDiscover = false;

  var galleryDropzone = new Dropzone("#media-uploader.task_file", {
    url: workscout_core.upload,
    timeout: 999999,
    maxFiles: gallery_limit,
    // acceptedFiles: "image/*",
    maxFilesize: workscout_core.maxFilesize,
    dictMaxFilesExceeded: workscout_core.dictMaxFilesExceeded,
    dictDefaultMessage: workscout_core.dictDefaultMessage,
    dictFallbackMessage: workscout_core.dictFallbackMessage,
    dictFallbackText: workscout_core.dictFallbackText,
    dictFileTooBig: workscout_core.dictFileTooBig,
    dictInvalidFileType: workscout_core.dictInvalidFileType,
    dictResponseError: workscout_core.dictResponseError,
    dictCancelUpload: workscout_core.dictCancelUpload,
    dictCancelUploadConfirmation: workscout_core.dictCancelUploadConfirmation,
    dictRemoveFile: workscout_core.dictRemoveFile,
    init: function () {
      this.on("sending", function (file, xhr, formData) {
        var id = $("input[name=property_id]").val();
        formData.append("data", id);
      });
      this.on("addedfile", function (file) {
        /* Set active thumb class to preview that is used as thumbnail*/

   
      }),
        this.on("complete", function (file) {
          file.previewElement.className += " task_file" + file.attachment_id;
        });
    
    },
    success: function (file, response) {
      file.previewElement.classList.add("dz-success");
      response = response.replace(/(\r\n|\n|\r)/gm, "");
      file["attachment_id"] = response; // push the id for future reference

      $("#attachment-uploader-ids").append(
        '<input id="task_file' +
          file["attachment_id"] +
          '" type="hidden" name="task_file[' +
          file["attachment_id"] +
          ']"  value="' +
          file["name"] +
          '">'
      );
    },
    error: function (file, response) {
      file.previewElement.classList.add("dz-error");
      $(file.previewElement).find(".dz-error-message").text(response);
    },
    // update the following section is for removing image from library
    addRemoveLinks: true,
    removedfile: function (file) {
      var attachment_id = file["attachment_id"];
      $("input#gallery" + attachment_id).remove();
      /*remove thumbnail if the image was set as it*/
      
      $.ajax({
        type: "POST",
        url: workscout_core.delete,
        data: {
          media_id: attachment_id,
        },
        success: function (result) {
          console.log(result);
        },
        error: function () {
          console.log("delete error");
        },
      });
      var _ref;
      return (_ref = file.previewElement) != null
        ? _ref.parentNode.removeChild(file.previewElement)
        : void 0;
    },
  });

  if (typeof images !== typeof undefined && images !== false) {
    var uploaded_media = jQuery.parseJSON(images);
    for (var i = 0; i < uploaded_media.length; ++i) {
      var mockFile = {
        name: uploaded_media[i].name,
        size: uploaded_media[i].size,
        attachment_id: uploaded_media[i].attachment_id,
      };
      galleryDropzone.emit("addedfile", mockFile);
      // check if uploaded_media[i] has thumb,
      if ('thumb' in uploaded_media[i]) {
      galleryDropzone.emit("thumbnail", mockFile, uploaded_media[i].thumb);
      }
      galleryDropzone.emit("complete", mockFile);
      galleryDropzone.files.push(mockFile);
      // If you use the maxFiles option, make sure you adjust it to the
      // correct amount:
      var existingFileCount = 1; // The number of files already uploaded
      galleryDropzone.options.maxFiles =
        galleryDropzone.options.maxFiles - existingFileCount;
    }
  }

  $(".dropzone")
    .sortable({
      items: ".dz-preview",
      cursor: "move",
      opacity: 0.5,
      containment: ".dropzone",
      distance: 20,
      tolerance: "pointer",
      update: sortinputs,
    })
    .disableSelection();

  function sortinputs() {
    $(".dropzone .dz-preview").each(function (i, el) {
      var p = $(el).attr("class").match(/\d+/g);

      $("#media-uploader-ids input#gallery" + p)
        .remove()
        .appendTo($("#media-uploader-ids"));
    });
  }
}



$("document").ready(function () {
  $(".tab-slider--body").hide();
  $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function () {
  $(".tab-slider--body").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  if ($(this).attr("rel") == "tab2") {
    $(".tab-slider--tabs").addClass("slide");
  } else {
    $(".tab-slider--tabs").removeClass("slide");
  }
  $(".tab-slider--nav li").removeClass("active");
  $(this).addClass("active");
});



      $(".full-page-job-listings-container").on(
        "click",
        ".job_listings a:not(.load_more_jobs)",
        function (e) {
          var winWidth = $(window).width();
          if (winWidth > 992) {
            e.preventDefault();
            var el = $(this);
            $(".full-page-job-container").addClass("loading");
            $(this).parent().addClass("loading");
            var job_id = $(this).parent().data("job_id");

            var ajax_data = {
              action: "workscout_load_job_view",
              job_id: job_id,
            };

            $.ajax({
              type: "POST",
              dataType: "json",
              url: ws.ajaxurl,
              data: ajax_data,
              success: function (data) {
                // display loader class
                console.log(data);
                $(".full-page-job-container")
                  .html(data.data)
                  .removeClass("loading");
                $(".full-page-job-container").triggerHandler("load_job_view");
              },
            });
          }
        }
      );

      // ------------------ End Document ------------------ //
    });

})(this.jQuery);

  
  /**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 50,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);