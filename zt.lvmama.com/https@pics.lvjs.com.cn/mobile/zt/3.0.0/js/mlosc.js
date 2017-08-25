var agent = navigator.userAgent;

document.write('<script type="text/javascript" src="//pics.lvjs.com.cn/mobile/lib/plugins/statisticsUtil/2.0/statisticsUtil-2.6.min.js"></script>');
window.onload = function(){
	var activeTitle = document.title;
	window.statisticsUtil && statisticsUtil.execStatis('page',{
		pi:activeTitle,
		cg:"Topic"
	})
}


//专题统计代码引用