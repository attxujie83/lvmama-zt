    //rem自适应
    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if(clientWidth>640)
                    clientWidth = 640;
                if (!clientWidth) return;
                docEl.style.fontSize = 10 * (clientWidth / 320) + "px";
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener("DOMContentLoaded", recalc, false);
    })(document, window);
    $.fn.lazyLoad = function(option){
        var _this={
            imgArea : 0,                //图片高度范围
            loadComplete : undefined,   //图片处理后回调
            callback : undefined        //回调函数
        }
        $.extend(_this,option);
        var h = $(window).height();
        var st = $(window).scrollTop();
        var imgArea = _this.imgArea;
        var viewArea = h+st;
        var item = $(this);
        function loadImg(item){
            h = $(window).height();
            st = $(window).scrollTop();
            viewArea = h+st;
            item.each(function(index){
                if(!$(this).hasClass("load")&&($(this).offset().top!=st)){
                    var itemTop = $(this).offset().top;
                    if((itemTop<viewArea) && (itemTop>st-imgArea)){ //如果图片进入到这个范围则进行load处理                    
                        if($(this)[0].nodeName == "IMG"){
                            $(this).attr("src",$(this).attr("data-src"));
                        }else{
                            $(this).css("backgroundImage","url("+$(this).attr("data-src")+")");
                        }
                        $(this).addClass("load");
                        if (typeof(_this.loadComplete) != 'undefined') {
                            _this.loadComplete.apply($(this), arguments);
                        }
                    }
                }
            })
        }
        setTimeout(function(){      //初始化，为了避免加载中出现不确定问题增加了延时执行
            loadImg(item);
        },50);
        if (typeof(_this.callback) != 'undefined') {
            _this.callback.apply($(this), arguments);
        }
        $(window).scroll(function(){
            h = $(window).height();
            st = $(window).scrollTop();
            viewArea = h+st;
            loadImg(item);
        })
    }
    $(".imgCon").lazyLoad();
	
		// top显示
		function animate(){
	        if($(window).scrollTop() > $("#container").offset().top+30){//显示底部导航
	            $(".top").fadeIn(500);
	        }else{
	            $(".top").fadeOut(500);
	        }
	    }
	    $(window).bind("touchstart",animate);
	    $(window).bind("touchend",animate);
	    $(window).bind("touchmove",animate);
	    $(window).scroll(function () {
	        animate();
	    });	    
	    // 滚动到顶端
	    $(".top").on("click",function(){
	        $("body").animate({scrollTop:0},500);
	    });
