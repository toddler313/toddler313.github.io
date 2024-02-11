function generateRandomString(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomStr = '';

    for (let i = 0; i < length; i++) {
        const temp = Math.floor(Math.random() * charset.length);
        randomStr += charset.charAt(temp);
    }
    return randomStr;
}

$(function() {
    //SHOW CONTENT
    $('#btn').on('click', function(){
        console.log($('#test').text());
        console.log($('#test').html());
        console.log($('#fcc').attr("href"));
    })

    //SET & MODIFY CONTENT
    $('#btn2').on('click', function() {
        $('#test').text("freeCodeCamp is awesome!");
        $('#test').html("Visit <a href='https://freecodecamp.org'>freeCodeCamp</a> <b>more often!</b>");
    })

    //SET VALUE
    $('#btn3').on('click', function() {
        $('#name').val(generateRandomString(8));
    })

    //SET NEW VALUE AND PRESERVE OLD VALUE
    //Note: remember to use .html() if want to use the <br/> tag. Otherwise use .text()
    //Note: the 'i' records the index number of how many elements the callbackFunction has changed text
    $('#btn4').on('click', function() {
        $('p').html(function(i, origText) {
            return "Original Text: " + origText + "<br/>" 
            + "New Text: freeCodeCamp@" + generateRandomString(15) + "<br/>"
            + "Index: " + i;
        })
    })
})