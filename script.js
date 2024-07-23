$(document).ready(function () {
    // Evento de envío del formulario
    $('#contact-form').submit(function (event) {
        event.preventDefault();
        var nombre = $('#name').val();
        var asunto = $('#subject').val();
        var mensaje = $('#message').val();
        alert('Nombre: ' + nombre + '\nAsunto: ' + asunto + '\nMensaje: ' + mensaje);
        setTimeout(function () {
            window.scrollTo(0, 0);
            location.reload();
        }, 2000);
    });
//Imagenes proyectos
    $('.portfolio-image').hover(function () {
        $(this).css('transform', 'scale(1.1)');
        $(this).find('figcaption').show();
    }, function () {
        $(this).css('transform', 'scale(1)');
        $(this).find('figcaption').hide();
    });

    $('.portfolio-image').click(function () {
        var imageUrl = $(this).attr('src');
        var url = 'https://www.holibai.com/es';
        window.open(url, '_blank');
    });

    $('.portfolio-image2').hover(function () {
        $(this).css('transform', 'scale(1.1)');
        $(this).find('figcaption').show();
    }, function () {
        $(this).css('transform', 'scale(1)');
        $(this).find('figcaption').hide();
    });

    $('.portfolio-image2').click(function () {
        var imageUrl = $(this).attr('src');
        var url = 'https://rccelta.es/';
        window.open(url, '_blank');
    });

    $('.portfolio-image3').hover(function () {
        $(this).css('transform', 'scale(1.1)');
        $(this).find('figcaption').show();
    }, function () {
        $(this).css('transform', 'scale(1)');
        $(this).find('figcaption').hide();
    });

    $('.portfolio-image3').click(function () {
        var imageUrl = $(this).attr('src');
        var url = 'https://estopaweb.000webhostapp.com/estopa/web.html';
        window.open(url, '_blank');
    });
    
    
});
