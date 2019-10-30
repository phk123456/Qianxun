$(function(){
	var n=0;
	var timer;
	// 切换背景
	$('.screen1').children('.title').removeClass('no');
	$('.aside li').click(function(e) {
		var index=$(this).index();
        $(this).addClass('current').siblings().removeClass();
		$('section').stop().animate({ top:-index*100+'%' },500);
		num=index;
		$('section>div').eq(num).removeClass('no').siblings().addClass('no');
    });
	$(document).mousewheel(function(e,d){
		clearTimeout(timer)
		timer=setTimeout(function(){
			n=n-d
			if(n>6){n=6}
			if(n<0){n=0}
			$('section').animate({'top':-100*n+'%'},500)
		$('section>div').eq(n).children('.title').removeClass('no').parent('div')
		.siblings('div').children('.title').addClass('no');
		$('.aside ul>li').eq(n).addClass('current').siblings('li').removeClass('current');
		},500)// 切换侧导航栏
	});
 })


$(function(){
		$('.music').click(function(event) {
			$(this).toggleClass('play');
				if($(this).hasClass('play')){
					$('audio')[0].play()
				}else{
					$('audio')[0].pause()
			}
		});
})




