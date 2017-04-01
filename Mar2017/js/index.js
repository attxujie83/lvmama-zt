$(function(){
    //侧导航
    var winHeight = $(window).height();
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if( scrollTop >= winHeight*0.5){
            $(".fdRight").show();
        }else{
            $(".fdRight").hide();
        }
    });
});
$(function(){
    /*=============图片延迟加载=============*/
    $.expr[":"].loading=function(elt,index){
        var height=$(window).height();
        var top=$(elt).offset().top;
        return top>$(window).scrollTop()&&top<(height+$(window).scrollTop())
    };
    $.expr[":"].loaded=function(elt,index){
        var height=$(window).height();
        var top=$(elt).offset().top;
        return top<height
    };
    var loadImg=function(){
        this.src=$(this).css({'opacity':0}).attr("to");
        $(this).removeAttr("to");
        var This = this;
        if($(this).load()){
            $(This).animate({'opacity':1},300,function(){$(This).removeAttr('style')});
        }

        this.onerror=function(){
            this.src="http://pic.lvmama.com/img/new_v/ui_scrollLoading/loading.gif"
        }
    };
    var imgTimeId=null;
    var scrollImgLoading=function(){
        clearTimeout(imgTimeId);
        imgTimeId=setTimeout(function(){
                $("img[to]:loading").each(function(){
                    loadImg.call(this)
                });
                if($("img[to]").size()==0){
                    $(window).unbind('scroll',scrollImgLoading)
                }
            }
            ,200)
    };
    $(window).bind('scroll click',scrollImgLoading);
    $("img[to]:loaded").each(function(){
        loadImg.call(this)
    });
    setTimeout(function(){
            $("img[to]:loaded").each(function(){
                loadImg.call(this)
            })
        }
        ,1000);
    /*============图片延迟加载结束===========*/

}); 