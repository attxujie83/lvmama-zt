//top下拉效果
$(function() {
	var a = true;
	if ($("#topRight .black_arrow").css("transition")) a = false;
	$("#topRight > dt").bind("mouseenter",
	function() {
		var d = $(this).find("div.sub_box");
		if (d.length) {
			$(this).css("zIndex", "1002").addClass("current");
			a || $(this).find(".black_arrow").addClass("arrow_up");
			d.show()
		}
	}).bind("mouseleave",
	function() {
		var d = $(this).find("div.sub_box");
		if (d.length) {
			$(this).css("zIndex", "").removeClass("current");
			a || $(this).find(".black_arrow").removeClass("arrow_up");
			d.hide()
		}
	});
	
	
}); 

//购物车
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'inline':(v=='hide')?'none':v; }
    obj.display=v; }
};

//分类导航
function async_topMenu(object) {
    $(object).children("div").html('<img src="/images/loading.gif" title="数据加载中" style="width:32px; height:32px; padding:20px 0 20px 240px;">');
    if (running) {
        return false;
    }
    running = true;
    $.ajax({
        type: "GET",
        url : "/async_topMenu.php",
        dataType :"json",
        success: function(cateList){
            if(cateList) {
                $("div.nav > ul > li").each(function(i,obj){
                    var key = $(obj).attr('id');
                    if(key == 'lastSelected') {
                        var innerHTML = innerAll(cateList['all']);
                    }else{
                        var innerHTML = innerTag(cateList['tag'][i]);
                    }
                    $(obj).children("div").html(innerHTML);
                });
            }
        }
    });
}


var running = false;
var delay = 200;
var allCateTimer = null;

$('div#nav:not(.homenav)').hover(
    function(){
        var $this = this;
        allCateTimer = setTimeout(function() { 
            $($this).find('div.allcate > a').addClass('hover');
            $($this).children('ul').removeClass('disn');
        }, delay);
    },
    function(){
        var $this = this
        allCateTimer = setTimeout(function() {
            $($this).find('div.allcate > a').removeClass('hover');
            $($this).children('ul').addClass('disn');
            $("select.menuVisible").each(function() {
              if ($(this).css("visibility") == 'hidden') {
                $(this).removeClass('menuVisible').css('visibility', 'visible');
              }
            });
        }, delay);
    }
);

$('div#nav > ul > li').hover(
    function(ev){
        var $this = this;
        allCateTimer = setTimeout(function() {
            var bottomHeight = document.documentElement.clientHeight - ev.clientY;
            
            if (bottomHeight <= 250) {
                $($this).addClass('over').find('div.submenubox').addClass('submenuboxBottom').removeClass('disn');
            } else {
                $($this).addClass('over').find('div.submenubox').removeClass('submenuboxBottom').removeClass('disn');
            }
            $("select").each(function() {
              if ($(this).css('visibility') != 'hidden') {
                $(this).addClass('menuVisible').css('visibility', 'hidden');
              }
            });
            if ($($this).find("div.subcate").size()<= 0) {
                async_topMenu($this);
            }
        }, delay);
    },
    function(){
        var $this = this;
        if (allCateTimer) {
            clearTimeout(allCateTimer);
        }
        allCateTimer = setTimeout(function() { 
            $($this).removeClass('over').find('div.submenubox').addClass('disn');}, delay);
    }
);

//首页轮播
$(function() {
	jQuery.focus = function(slid) {
		var sWidth = $(slid).width();
		var len = $(slid).find("ul li").length;
		var index = 0;
		var picTimer;

		var btn = "<div class='btnBg'></div><div class='btn'>";
		for(var i=0; i < len; i++) {
			var ii = i+1;
			btn += "<span>"+ii+"</span>";
		}
		btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
		$(slid).append(btn);
		$(slid).find("div.btnBg").css("opacity",1);
	
		$(slid+" div.btn span").css("opacity",1).mouseenter(function() {
			index = $(slid+" .btn span").index(this);
			showPics(index);
		}).eq(0).trigger("mouseenter");
	
		$(slid+" .preNext").css("opacity",1).hover(function() {
			$(this).stop(true,false).animate({"opacity":"1"},300);
		},function() {
			$(this).stop(true,false).animate({"opacity":"1"},300);
		});

		$(slid+" .pre").click(function() {
			index -= 1;
			if(index == -1) {index = len - 1;}
			showPics(index);
		});
	
		$(slid+" .next").click(function() {
			index += 1;
			if(index == len) {index = 0;}
			showPics(index);
		});
	
		$(slid+" ul").css("width",sWidth * (len));
		
		$(slid).hover(function() {
			clearInterval(picTimer);
		},function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if(index == len) {index = 0;}
			},4000);
		}).trigger("mouseleave");
	
		function showPics(index) {
			var nowLeft = -index*sWidth; 
			$(slid+" ul").stop(true,false).animate({"left":nowLeft},300);
			$(slid+" .btn span").removeClass("on").eq(index).addClass("on");
			$(slid+" .btn span").stop(true,false).animate({"opacity":"1"},300).eq(index).stop(true,false).animate({"opacity":"1"},300);
		}
	
	};
	
});

$(document).ready(function(){
	  	$.focus("#focus001");
	});

//TOP-RIGHT图片光效
$(document).ready(function(){
	$(".banner_TopRight li a").hover(function(){
		$(this).find(".shine").stop();
		$(this).find(".shine").css("background-position","-160px 0"); 
		$(this).find(".shine").animate({backgroundPosition: '160px 0'},400);
		$(this).find(".title").stop().animate({left:'0px'},{queue:false,duration:450});
	},function(){
		$(this).find(".title").stop().animate({left:'-160px'},{queue:false,duration:200});
	});
});

//TOP-bottom
/*$(document).ready(function(){
	$('.banner div').css('opacity',0.2);
	$('.banner').hover(function(){
		var el = $(this);
		el.find('div').stop().animate({width:250,height:250},'slow',function(){
			el.find('p').fadeIn('fast');
		});
	},function(){
		var el = $(this);
		el.find('p').stop(true,true).hide();
		el.find('div').stop().animate({width:60,height:60},'fast');
	}).click(function(){
		window.open($(this).find('a').attr('href'));
	});
});*/
(function(a){
    a.fn.lanrenzhijia_hover_move=function(p){
        var p=p||{};
        var window_width=p&&p.window_width?p.window_width:"250";
        var window_height=p&&p.window_height?p.window_height:"122";
        var border_color=p&&p.border_color?p.border_color:"#999";
        var background_color = p&&p.background_color?p.background_color:"#f5f5f5";
        
        window_width = parseInt(window_width);
        window_height = parseInt(window_height);
        var images_array = new Array();
       
        var g=a(this);
        var current = -1;
        var y=g.children("ul").children("li").length;
        if(y==0){
            g.append("Require content");
            return null
        }
        var thumb_width = (window_width-5)/y;
        var thumb_height = window_height-0-0;
	        g.children("ul").children("li").each(function(i){
            images_array[i] = $(this).find("img").attr("src");
            
        });
        init();
        function init(){
            g.css('width',window_width+'px').css('height',window_height+'px')
            g.children("ul").css('border-color',border_color).css('width',(window_width)+'px').css('height',(window_height-2)+'px').css('background-color',background_color);
            g.children("ul").children('li').css('width',thumb_width+'px').css('height',thumb_height+'px');
            g.children("ul").children('li').children('a').css('width',thumb_width+'px').css('height',thumb_height+'px');
            g.children("ul").children('li').children('a').children('img').hide();
            g.children("ul").children("li").each(function(i){
                $(this).children('a').css('background-image','url('+images_array[i]+')');
                
            });
            g.children("ul").children("li").children("p").css('width',thumb_width+'px');
            g.children("ul").children("li").children("a").show();
            g.children("ul").children("li").children("p").slideUp();
            g.children("ul").children("li").children("a").hover(
                function(){
					var image_width = parseInt($(this).children("img").width());
					var image_height = parseInt($(this).children("img").height());
                    $(this).animate( {backgroundPosition: -(image_width-thumb_width) } , 400 );
                    $(this).parent().children("p").slideDown();
                },
                function(){
                    $(this).animate( {backgroundPosition: 0 } , 400 );
                    $(this).parent().children("p").slideUp();
                }
            );
        }
    }
})(jQuery);

$(function() {
	$("#lanrenzhijia_hover_move1").lanrenzhijia_hover_move({
		window_width: '750',
        window_height: '122'
	});
});


//产品滑动
		var scrollPic_02 = new ScrollPic();
		scrollPic_02.scrollContId   = "scrollbox"; //内容容器ID
		scrollPic_02.arrLeftId      = "arrLeft";//左箭头ID
		scrollPic_02.arrRightId     = "arrRight"; //右箭头ID

		scrollPic_02.frameWidth     = 1089;//显示框宽度
		scrollPic_02.pageWidth      = 99; //翻页宽度

		scrollPic_02.speed          = 5; //移动速度(单位毫秒，越小越快)
		scrollPic_02.space          = 30; //每次移动像素(单位px，越大越快)
		scrollPic_02.autoPlay       = false; //自动播放
		scrollPic_02.autoPlayTime   = 3; //自动播放间隔时间(秒)

		scrollPic_02.initialize(); //初始化

//广告墙
/*$(function(){
	$(".floor-maskItem").mouseover(function(){
		$(this).addClass("qq").parent().addClass("hover");
	}).mouseout(function(){
		$(this).removeClass("qq").parent().removeClass("hover");
	});
});*/

//产品切换
$(function() {
	var indicator = $('#indicator'),
	indicatorHalfWidth = indicator.width() / 2,
	lis = $('#tabs').children('li');

	$("#tabs").tabs("#content .tabsC", {
		event: 'mouseover',
		effect: 'fade',
		fadeOutSpeed: 0,
		fadeInSpeed: 400,
		onBeforeClick: function(event, index) {
			var li = lis.eq(index),
			newPos = li.position().left + (li.width() / 2) - indicatorHalfWidth;
			indicator.stop(true).animate({
				left: newPos
			},
			600, 'easeInOutExpo');
		}
	});

});

//评论滚动
(function(d) {
	d.extend({
		fedDownScroll: function(j) {
			var e = d.extend({
				element: null,
				startIndex: 0,
				speed: 0,
				duration: 600
			},
			j),
			f = d(e.element),
			b = f.children("li").length,
			a = e.startIndex,
			k = b - a,
			h = 0,
			g,
			c;
			b -= 1;
			var i = function() {
				g = f.children("li").eq(a);
				g.css({
					display: "none",
					opacity: "0"
				});
				f.prepend(g);
				g.slideDown(600).animate({
					opacity: "1"
				},
				600,
				function() {
					d(this).css({
						opacity: ""
					})
				});
				if (h < 2) if (a === b) {
					h += 1;
					a = h < 2 ? k: b
				} else a += 1;
				else a = b
			};
			c = setInterval(i, e.speed);
			f.hover(function() {
				if (c) {
					clearInterval(c);
					c = null
				}
			},
			function() {
				c = setInterval(i, e.speed)
			})
		}
	})
})(jQuery);


//底部切换
$(function() {
	var indicator = $('#indicator1'),
	indicatorHalfWidth = indicator.width() / 2,
	lis = $('#tabs1').children('li');

	$("#tabs1").tabs("#content1 .tabsC1", {
		event: 'mouseover',
		effect: 'fade',
		fadeOutSpeed: 0,
		fadeInSpeed: 400,
		onBeforeClick: function(event, index) {
			var li = lis.eq(index),
			newPos = li.position().left + (li.width() / 2) - indicatorHalfWidth;
			indicator.stop(true).animate({
				left: newPos
			},
			600, 'easeInOutExpo');
		}
	});

});
