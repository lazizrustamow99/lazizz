$(".ask").on('click',function (e) {
   e.preventDefault();
   $(this).toggleClass('active').next().stop().slideToggle(500);
   $('.ask').not($(this)).removeClass('active');
   $(".answer").not($(this).next()).slideUp(500)
})

$("button[data-filter]").click(function () {
    let attr = $(this).attr("data-filter");
    if (attr === 'all') {
        $('div[data-filter]').stop().slideDown(500)
    }else{
        $('div[data-filter]').stop().slideUp(500);
    }
    $(`div[data-filter=${attr}]`).stop().slideDown(500)
})

function typing(element) {
    let inner = element.html()
    fullText = '',
    letterCount = 0,
    interval = setInterval(() => {
        fullText = fullText + inner[letterCount]
        element.html(fullText)
        letterCount++;
        if(fullText === inner){
            clearInterval(interval)
        }
    }, 150);
}
typing($('h1'));


let hidden = $('.text-hidden');
let btn = $('.read-more');
btn.on('click', function(){
    hidden.toggleClass('hidden')
    btn.html('Hide')
})