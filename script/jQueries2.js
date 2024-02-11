
$(function() {
    //Animation on img hide() & show()
    // $('img').hide("slow"); //or hide(500)  ms
    // $('img').show("normal");  // show(1500) ms

    // $('h1').hide("500"); 
    // $('h1').show("1000");

    // $('h1').slideUp("500"); 
    // $('h1').slideDown("1000"); 

    // $('h1').fadeOut("1000"); 
    // $('h1').fadeIn("500"); 

    // $('h1').toggle('slow');
    // $('h1').toggle("700"); 

    // $('h1').hide();
    // $('h1').fadeIn(2400).addClass('blue');

    $('h1').hide();
    $('h1').fadeIn(1000, function() {
        $(this).addClass('blue');
    })

    $('img').on({'mouseenter' : function() {
        $('h1').stop();
    }, 'mouseleave' : function() {
        // $('h1').re();
    }})

    $('p').hide(500).delay(1000).show(300);

    //=================================================>

    //.animate( properties [, duration ] [, easing ] [, complete ] )
    $('#go').on('click', function() {
        $('#block').animate({
            opacity : .5,
            marginLeft : "+=50",
            height : "400px",
            marginTop : "+=50"
        }, 1000, function() {
            $(this).after("<div>Animation completes.</div>");
        })
    })

    $('#stretch').on('click', function() {
        $('#block')
        .animate({ width : "70%"}, 1000)
        .animate({ fontSize : "40px"}, 1000)
        .animate({ borderLeftWidth : "530px" }, 1000)
    })

});