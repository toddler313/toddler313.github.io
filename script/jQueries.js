
$(function () {
    $('button.hideDiv').click(function () {
        $('div').hide();
    })
});
$(function () {
    $('button.showDiv').click(function () {
        $('div').show();
    })
});

//.click() is deprecated
// $(function () {
//     $("div").click(function () {
//         console.log("You have just clicked the H1 header");
//     })
// });

//on('click'|'dblclick'|'mouseenter'|'mouseleave'|'mousedown'|'mouseup')
$(function() {
    $('h1').on('dblclick', function() {
        console.log('You clicked the Div!');
    })
})

//.hover(fn1, fn2), is .on("mouseenter", fn1).on("mouseleave", fn2).

//.hover() => cursor enters then leave
$(function() {
    $('h1').on('mouseenter', function() {
        $('div').hide();
        console.log("You hid the div!");
    }).on('mouseleave', function() {
        $('div').show();
        console.log("You showed the div!");
    })
})

//blur, focus, focusin, focusout, resize, scroll, dblclick, 
//mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, 
//change, select, submit, keydown, keypress, keyup, contextmenu
// $(function() {
//     $('input')
//     .on('focusin mouseover mouseenter', function() {
        // this.style = "width: 1000px; height: 70px; font-size: 50px;";
        // console.log('You have your focus on the textbox');
//     }).on('focusout mouseout mouseleave', function() {
        // this.style = "width: 100px; height: 30px; font-size: 10px";
        // console.log('You write something in the textbox');
//     }).on('change', function() {
        // console.log('The text has been changed!');
//     })
// })

//Alternatively, in just 1 .on() block
$(function() {
    $('input').on({
        'focusin mouseover mouseenter' : function() {
            this.style = "width: 1000px; height: 70px; font-size: 50px;";
            console.log('You have your focus on the textbox');
        }, 'focusout mouseout mouseleave' : function() {
            this.style = "width: 100px; height: 30px; font-size: 10px";
            console.log('You write something in the textbox');
        }, 'change' : function() {
            console.log('The text has been changed!');
        }
    })

//Using .off() to turn off all the .on('actions') above
    //$('input').off('');

//Using .one() only execute once.


});

