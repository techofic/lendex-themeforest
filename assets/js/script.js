$('.service-carousel').owlCarousel({
    loop:true,
    margin:45,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        },
    }
})

$('.project-carousel').owlCarousel({
    loop:false,
    margin:50,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})

$('.testomonial-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    }
})

// Navbar offcanvas dropdown toggle starts
const navbarOffCanvas = document.querySelector(".offcanvas.navbar-content__item");
if (navbarOffCanvas) {
    navbarOffCanvas.addEventListener('show.bs.offcanvas', event => {
        $(".offcanvas.navbar-content__item .offcanvas-body .nav-item a").on("click", function () {
            var $this = $(this);
            if ($this.hasClass("dropdown-toggle")) {
                $this.toggleClass("icon-rotate");
                $this.next().slideToggle();
                if ($this.parent().siblings().children().hasClass("dropdown-toggle")) {
                    $this.parent().siblings().children().removeClass("icon-rotate");
                    $this.parent().siblings().children().next().slideUp();
                }
            }
        });
    })

    // When navbar offcanvas gets hide
    navbarOffCanvas.addEventListener('hide.bs.offcanvas', event => {
        $(".nav-item a").removeClass("icon-rotate");
        $(".nav-item a").next().slideUp();
    })
}