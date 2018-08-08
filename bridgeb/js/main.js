$(document).ready( function() {
$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

var form = $('#bookForm');

$( '#hamburger' ).click(function() {
    $( '.navbar' ).toggleClass( 'navbar-transparent' );
    $( '.navbar' ).toggleClass( 'bg-secondary' );
});

$("#book-submit").click(function() {
    alert("Your message has been sent.")
});

$("#contactSubmit").click(function() {
    alert("Your message has been sent.")
});

form.find('select:first').change(function() {
    $.ajax( {
        type: "POST",
        url: form.attr( 'action' ),
        data: form.serialize(),
        success: function() {
            alert("your message was sent");
        }
    })
})
$('#contact-form').validate({
    rules: {
        name: {
            minlength: 2,
            required: true
        },
        email: {
            required: true,
            email: true
        },
        message: {
            minlength: 2,
            required: true
        }
    },
    highlight: function (element) {
        $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function (element) {
        element.text('OK!').addClass('valid')
            .closest('.control-group').removeClass('error').addClass('success');
    }
});
});

});