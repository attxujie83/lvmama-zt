/*!  //  // v1.0.0 // 2017-07 */
~function(){function a(){NativeUtil.lvCommon("lvJSShowNativeNavigationBar",{animate:"0"}),NativeUtil.lvCommon("lvJSSetNativeNavigationBar",{right:["share"],left:["back"]}),c&&NativeUtil.lvCommon("lvJSSetTitle",{title:c})}function b(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),c=window.location.search.substr(1).match(b);return null!=c?unescape(c[2]):null}var c=(document.referrer,document.title),d=navigator.userAgent,e=(b("wpversion"),b("wpagent")),f=b("headerSign"),g=d.indexOf("iPhone OS 7"),h=d.indexOf("iPhone OS 8"),i=d.indexOf("iPhone OS 9"),j=d.indexOf("iPhone OS 10"),k=-1!=d.indexOf("LVMM"),l=-1!=d.indexOf("MicroMessenger")||-1!=d.indexOf("innerBrower")||-1!=d.indexOf("Windows")&&-1!=d.indexOf("Phone")&&"LVMM"==e,m="";if(k||l)if(f&&"show"==f)m+="<style>.header{width: 100%;height: 45px;}.iosHeader{ height: 66px;}.header .headFixed{ width: 100%; position:fixed; top:0; left:0; font-size:20px; font-weight: normal; background: #ffffff; color:#000; text-align: center;line-height: 45px; z-index:1000}.header .headFixed>div{ position: relative; width:100%; height:45px;}.header .iosFixed{ top:21px;}.header h1{ margin:0 auto;font-size: 20px; width:80%; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}.header a{color: #d30775;}.header .icon-back{font-size: 32px; display: block; position: absolute;top:0px;  width:35px; height:45px; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAlCAYAAABCr8kFAAAA1ElEQVRIx63WPQoCMRAF4IigJ7aws5WtV3vdG3kBSwUb8QA6AQMh5Gdm3iveNgsfYTeZvHDb7gKYlWSSPCUHBnaSfP/5MLGYMxO7StZULL6nYlZwiFlAFaYF1ZgGNGEj0Iz1QBfWAt1YDYSwEoSxHKxhFyuWQBqWwImFJfCVYXfJBhm68XEsVrigK4zfcGah+V+moOU+hNHaSYHQ1ll2o71p40JH89CMaia2CdXeKWrUcuupUOu9PEQ9zaGLertNE0XaVxVF++HM6oct9B2IHfsh2f8A1nheXWnsJKYAAAAASUVORK5CYII=) no-repeat 50%;background-size: 10px;}.header .out_address{position: absolute;right:7px;top:4px;font-size: 14px; height:36px; line-height: 36px;}.header .out_address span{ display: inline-block; overflow: hidden; vertical-align: middle; }.header .headerIconHome{background-size: 36px; width: 36px; height: 36px; float: right; margin-left: 5px; background-image: url(//pics.lvjs.com.cn/mobile/img/weiyou/icon/share.png); }</style>",m+=g>-1||h>-1||i>-1||j>-1?'<div style="height: 21px;width: 100%;background: #ffffff;margin-bottom:-1px; position:fixed; top:0; left:0; z-index:1000"></div><header class="header zt iosHeader" style=""><div class="headFixed iosFixed"><div><span class="icon-back" onclick="window.history.back()"></span><h1>'+c+'</h1><div class="out_address"><a href="//m.lvmama.com/?method=popShareLayer"><span class="headerIconHome"></span></a></div></div></div></header>':'<header class="header zt" style=""><div class="headFixed"><div><span class="icon-back" onclick="window.history.back()"></span><h1>'+c+'</h1><div class="out_address"><a href="//m.lvmama.com/?method=popShareLayer"><span class="headerIconHome"></span></a></div></div></div></header>',document.write(m);else if(window.NativeUtil)a();else{var n=document.createElement("script");n.type="text/javascript",n.src="//pics.lvjs.com.cn/mobile/lib/plugins/nativeUtil/1.0/nativeUtil-1.1.min.js",n.onload=function(){a()},document.body.appendChild(n)}else m+="<style>.header{width: 100%;height: 45px;}.header .headFixed{ width: 100%;top:0; left:0; font-size:20px; font-weight: normal; background: #ffffff; color:#000; text-align: center;line-height: 45px; z-index:1000}.header .headFixed>div{ position: relative; width:100%; height:45px;}.header h1{ margin:0 auto;font-size: 20px; width:80%; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}.header a{color: #d30775;}.header .icon-back{font-size: 32px; display: block; position: absolute;top:0px;  width:35px; height:45px; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAlCAYAAABCr8kFAAAA1ElEQVRIx63WPQoCMRAF4IigJ7aws5WtV3vdG3kBSwUb8QA6AQMh5Gdm3iveNgsfYTeZvHDb7gKYlWSSPCUHBnaSfP/5MLGYMxO7StZULL6nYlZwiFlAFaYF1ZgGNGEj0Iz1QBfWAt1YDYSwEoSxHKxhFyuWQBqWwImFJfCVYXfJBhm68XEsVrigK4zfcGah+V+moOU+hNHaSYHQ1ll2o71p40JH89CMaia2CdXeKWrUcuupUOu9PEQ9zaGLertNE0XaVxVF++HM6oct9B2IHfsh2f8A1nheXWnsJKYAAAAASUVORK5CYII=) no-repeat 50%;background-size: 10px;}.header .out_address{position: absolute;right:7px;top:4px;font-size: 14px; height:36px; line-height: 36px;}.header .out_address span{ display: inline-block; overflow: hidden; vertical-align: middle; }.header .header-icon-home{background-size: 36px; width: 36px; height: 36px; float: right; margin-left: 5px; background-image: url(//pics.lvjs.com.cn/mobile/img/visa/home.png); }</style>",m+='<header class="header zt" style=""><div class="headFixed"><div><span class="icon-back" onclick="window.history.back()"></span><h1>'+c+'</h1><div class="out_address"><a href="//m.lvmama.com/"><span class="header-icon-home"></span></a></div></div></div></header>',document.write(m)}();