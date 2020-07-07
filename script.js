$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    // console.log(wScroll);

    // if (wScroll > $('.portofolio').offset().top - 200) {
    //     $('.portofolio .card').each(function (i) {
    //         setTimeout(function () {
    //             $('.portofolio .card').eq(i).addClass('muncul');
    //         }, 300 * (i + 1));
    //     });
    // }

    // $('.jumbotron img').css({
    //     'transform': 'translate(0px, ' + wScroll / 4 + ' %)'
    // });
    // $('.jumbotron img').css({
    //     'transform': 'translate(0px, ' + wScroll / 2 + ' %)'
    // });
    // $('.jumbotron img').css({
    //     'transform': 'translate(0px, ' + wScroll / 1.2 + ' %)'
    // });
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });


    if (wScroll > $('.portofolio').offset().top - 3700) {



        $('.portofolio .card').each(function (i) {
            setTimeout(function () {
                $('.portofolio .card').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
        // 
    }
});

function ScrollTo(name) {
    scrollPageTo(document.getElementById(name), 1000);
}

let scrollPageTo = (to, duration = 500) => {
    const easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    return new Promise((resolve, reject) => {
        const element = document.scrollingElement;

        if (typeof to === "string") {
            to = document.querySelector(to) || reject();
        }
        if (typeof to !== "number") {
            to = to.getBoundingClientRect().top + element.scrollTop;
        }

        let start = element.scrollTop,
            change = to - start - 70,
            currentTime = 0,
            increment = 20;

        const animateScroll = function () {
            currentTime += increment;
            let val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            } else {
                resolve();
            }
        };
        animateScroll();
    });
};