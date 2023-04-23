(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    /*** Contact US Form */
    $(document).ready(function() {
        // Select the form element
        var form = $('#contactUs');
      
        // Handle form submission
        form.submit(function(event) {
          // Prevent the default form submission behavior
          event.preventDefault();
      
          // Select form fields
          var name = $('#name');
          var email = $('#email');
          var phone = $('#phone');
          var subject = $('#subject');
      
          // Check if fields are empty
          if (name.val() === '') {
            name.after('<span class="error-message">Please enter your name</span>');
            return;
          }
      
          if (email.val() === '') {
            email.after('<span class="error-message">Please enter your email</span>');
            return;
          }
      
          if (phone.val() === '') {
            phone.after('<span class="error-message">Please enter your phone number</span>');
            return;
          }
      
          if (subject.val() === '') {
            subject.after('<span class="error-message">Please enter a subject</span>');
            return;
          }
      
          // Check if Name format is valid
          var nameRegex = /^[a-zA-Z ]+$/;
          if (!nameRegex.test(email.val())) {
            console.log('Please enter a valid email address');
            return;
          }
         
      
          // Check if email format is valid
          var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          if (!emailRegex.test(name.val())) {
            console.log('Please enter a valid Name without number');
            return;
          }
        
          // Check if phone format is valid
          var phoneRegex = /^(\+1)?[\s-]?\(?([0-9]{3})\)?[\s-]?([0-9]{3})[\s-]?([0-9]{4})$/;
          if (!phoneRegex.test(phone.val())) {
            console.log('Please enter a valid phone number');
            return;
          }
      
          // Serialize the form data
          var formData = form.serialize();
      
          // Submit the form via AJAX
          
           $.ajax({
            url: $(form).attr("action"),
            type: $(form).attr("method"),
            data: $(form).serialize(),
            dataType: 'json',
            accepts: 'application/json',
            success: function(response) {
                setTimeout(function() {
                    window.location.href = "https://dallashindupriest.com/success.html";
                }, 200);
                form[0].reset();
             
              // Handle successful submission
            },
            error: function(xhr, status, error) {
               alert('There was an error submitting the form: ' + error);
              // Handle submission error
            }
          });
            
        });
      });
      
      // Year for copy right
      var currentYear= new Date().getFullYear(); 
      document.getElementById("year").innerHTML = currentYear;


    
})(jQuery);

