$(function () {
    $('.section').eq(0).addClass('on');
    // var -> const, let
    const option = {
        anchors: ['01', "02", "03"],
        // afterRender: function (anchorLink, index) {
        //     $('.section').eq(0).addClass('on');}

        onLeave: function (index, nextIndex, direction) {
            console.log(index, nextIndex, direction);
            $('h1 span').text(nextIndex)
            $('nav li').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');
            $('.section').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');
        },
    }

    $('.main_full').fullpage(option);

    $('.section').eq(0).addClass('on');

    const num = [1, 2, 3];


})



    // // document.querySelector('h1').style.display = 'none';
    // // $('h1').css({ display: 'none' })
    // $('h1').hide()