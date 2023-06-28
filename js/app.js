$( function (){
    var hide = $('.hide')
    var show = $('.show')
    var box = $('.box')
    var toggle =$('.toggle')
    var para = $('p')    

    // **CONSOLE LOG
    console.log(para)
    console.log(show)
    console.log(hide)
    console.log(box)
    console.log(toggle)

    //  **HIDE FUNCTION  
    hide.click(function(){
        box.fadeOut(200)
    })

    // **SHOW FUNCTION

    show.click(function(){
        box.fadeIn(200)
    })

    // **TOGGLE FUNCTION

    toggle.click(function(){
        box.fadeToggle(200)
    })

    // **PARA FUNCTION 

    para.click(function(){
        $(this).toggle()
    })
})