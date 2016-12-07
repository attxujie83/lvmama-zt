$.fn.extend({
	ztheader:function(){
		var reffer = document.referrer;
		var title = document.title;
		var agent = navigator.userAgent;
		var wp_version = getUrlParam("wpversion");
		var wp_agent = getUrlParam("wpagent");
		var headerSign = getUrlParam("headerSign");
		var isIos7 = agent.indexOf('iPhone OS 7');
		var isIos8 = agent.indexOf('iPhone OS 8');
		var isIos9 = agent.indexOf('iPhone OS 9');
		var isIos10= agent.indexOf('iPhone OS 10');
		var str="";
		if((headerSign && headerSign=="show") || !(agent.indexOf("LVMM") != -1 || agent.indexOf("ANDROID_") != -1 || agent.indexOf("MicroMessenger") != -1 || agent.indexOf("innerBrower") != -1 || (agent.indexOf("Windows")!=-1 && agent.indexOf("Phone")!=-1 && wp_agent=="LVMM"))){
			if(agent.indexOf("LVMM") == -1){//不是客户端
			str+='<style>' +
				 '.header{width: 100%;height: 45px; font-size:20px; font-weight: normal; background: #fafafa; color:#000; position: relative;text-align: center;line-height: 45px;display:none}' +
				 '.header h1{ margin:0 auto;font-size: 20px; width:80%; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}' +
				 '.header a{color: #d30775;}' +
				'.header .icon-back{font-size: 32px; display: block; position: absolute;top:0px;  width:30px; height:45px;}' +
				'.header .icon-back:before{left:17px; top:50%; margin-top:-7px; content:""; border-top:1px solid #d30775; border-left:1px solid #d30775; width:12px; height:12px; -webkit-transform:rotate(-45deg); -o-transform:rotate(-45deg); -ms-transform:rotate(-45deg); -moz-transform:rotate(-45deg); transform:rotate(-45deg); position:absolute;}' +
				'.header .out_address{position: absolute;right:7px;top:4px;font-size: 14px; height:36px; line-height: 36px;}' +
				'.header .out_address span{ display: inline-block; overflow: hidden; vertical-align: middle; }' +
				'.header .header-icon-home{background-size: 36px; width: 36px; height: 36px; float: right; margin-left: 5px; background-image: url(http://pic.lvmama.com/img/mobile/touch/img/icon/home.png); }' +
				'</style>'
			str += '<header class="header" style=""><span class="icon-back" onclick="window.history.back()"></span><h1>'+title+'</h1><div class="out_address"><a href="http://m.lvmama.com/"><span class="header-icon-home"></span></a></div></header>'
			}else{//是客户端
				str+='<style>' +
				 '.header{width: 100%;height: 45px; font-size:20px; font-weight: normal; background: #fafafa; color:#000; position: relative;text-align: center;line-height: 45px;}' +
				 '.header h1{ margin:0 auto;font-size: 20px; width:80%; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}' +
				 '.header a{color: #d30775;}' +
				'.header .icon-back{font-size: 32px; display: block; position: absolute;top:0px;  width:50px; height:45px;}' +
				'.header .icon-back:before{left:17px; top:50%; margin-top:-7px; content:""; border-top:1px solid #d30775; border-left:1px solid #d30775; width:12px; height:12px; -webkit-transform:rotate(-45deg); -o-transform:rotate(-45deg); -ms-transform:rotate(-45deg); -moz-transform:rotate(-45deg); transform:rotate(-45deg); position:absolute;}' +
				'.header .header-icon-home{background-size: 36px; width: 36px; height: 36px; float: right; margin-left: 5px; background-image: url(http://pic.lvmama.com/img/mobile/touch/img/icon/home.png); }' +
				'</style>'
				if(isIos7>-1 || isIos8>-1 || isIos9>-1 || isIos10>-1){
					str += '<div style="height: 21px;width: 100%;background: #fafafa;margin-bottom:-1px;"></div><header class="header" style=""><span class="icon-back" onclick="window.history.back()"></span><h1>'+title+'</h1></header>'
				}else{
					str += '<header class="header" style=""><span class="icon-back" onclick="window.history.back()"></span><h1>'+title+'</h1></header>'
				}   
			}
			//document.write(str);
			//var _html=$(document.body).html();
			//$(document.body).html(str+_html);
			$(this).before(str);
			$("header").slideDown(500);
			$(this).remove();
			//console.log(str);
		}
		function getUrlParam(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
			var r = window.location.search.substr(1).match(reg); // 匹配目标参数
			if (r != null)
				return unescape(r[2]);
			return null; // 返回参数值
		}
	}
});
