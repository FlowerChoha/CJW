window.onload = function() {
    $('.gnb>li>a').on('click',function(){
				$('.gnb>li>a').removeClass('on').next().slideUp(1000);
				$(this).addClass('on').next().slideDown(1000);
				$('.subBg').slideUp(1000);
                $('.subBg').slideDown(1000);
                return false;
    });

}

