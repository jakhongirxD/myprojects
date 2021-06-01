$(".ask").on("click", function () {
    $(this).toggleClass("active").next().stop().slideToggle(500)
    $(".answer").not($(this).next()).slideUp(500)
    $(".ask").not($(this)).removeClass("active")

})

$("button[data-filter]").click(function () {
    $("div[data-filter]").stop().slideUp(500);
    let attr = $(this).attr("data-filter");
    $(`div[data-filter=${attr}]`).stop().slideDown(500);
    if (attr == "all") {
        $("div[data-filter]").stop().slideDown(500);
    }
    $(this).addClass("active");
    $("button[data-filter]").not(this).removeClass("active");
})

function typing(element) {
    if (typeof element == "string") {
        let inner = $(element).html()
        let fullText = "";
        let count = 0;
        let interval = setInterval(() => {
            fullText = fullText + inner[count];
            count++
            $(element).html(fullText)
            if (fullText == inner) {
                clearInterval(interval)
            }
        }, 100);
    }
}

typing("h1")


$(".js-modal-show").click(function (e) {
    e.preventDefault();
    $(".modal").fadeIn(500);
})

$(".close").click(function (e) {
    e.preventDefault();
    $(".modal").fadeOut(500)
})

$(".modal").click(function (e) {
    if (e.target == this) {
        $(this).fadeOut(500);
    }
    //console.log(e);

})

$(".nav").css({
    "position": "fixed",
    "width": "100%",
    "z-index": 999,
    "top": $(window).height() + "px"
})

$(window).on("scroll", function () {
    let position = $(window).height() - $(".nav").outerHeight() - $(window).scrollTop();
    if (position > 0) {
        $(".nav").css("top", position + "px")
    } else {
        $(".nav").css("top", "0px")
    }
})

$(".js-scroll-to-id").click(function (e) {
    e.preventDefault();
    let attr = $(this).attr("href");
    let toEl = $(attr).offset().top
    console.log(toEl);
    $("html").animate({
        scrollTop: toEl -  $(".nav").outerHeight()
    },1000)
})

