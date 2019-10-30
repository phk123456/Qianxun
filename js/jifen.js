/*
* @Author: hp
* @Date:   2019-08-15 13:50:43
* @Last Modified by:   hp
* @Last Modified time: 2019-08-15 13:50:54
*/
$(function(){
        var num=0;
        var timee;
        var p=0;
        function zou(){
        	timee=setInterval(function(event){
        	num=num+1;
        	if(num>4)
        	{
        		num=0; 
                $('.lunbotu ul').css('left', -740*num+'px'); 
                num=1;
        	}		
        $('.lunbotu ul').animate({'left':-740*num+'px'})
        },2000);	
        }
        zou();
        $('.lunbotu').hover(function(){		
        	clearInterval(timee);
        },function(){
        	zou();
        });
        $('.left').click(function(event){
        	num=num-1;
        	if(num<0)
        	{
        		num=4;
                $('.lunbotu ul').css('left',-740*num+'px'); 
                num=3;
        	}
        	$('.lunbotu ul').animate({'left':-740*num+'px'})
        	});
        	$('.right').click(function(event) {
        		num=num+1;
                if(num==4){
                    p=0;
                    $('.lunbotu ol li').eq(n).addClass('current').siblings('').removeClass('current');
                }
        		if(num>4)
        		{
                    num=0; 
                    $('.lunbotu ul').css('left', -740*num+'px'); 
                    num=1;
        		}
        		$('.lunbotu ul').animate({'left':-740*num+'px'})
        		});


        	$('.lunbotu span').click(function(event) {
                console.log(event.target)
        		console.log($(this).index());		
        	});
        })