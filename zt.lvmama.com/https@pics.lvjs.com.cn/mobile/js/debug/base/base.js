//定义全局的使用iscoll的插件
var myscroll;

//iscroll初始化状态，目前仅限Php使用
if ($("#wrapperScroll").length != 0) {
    //页面初始化
    function loaded() {

        myscroll = new iScroll("wrapperScroll", {
            useTransition: true,
            vScroll:true,
            hScroll:false,
            lockDirection:true,
            checkDOMChanges: true,
            useTransform:false
        });
        setTimeout(function() {
            document.getElementById('wrapperScroll').style.left = '0';
        }, 100);
    }
    window.addEventListener("DOMContentLoaded", loaded, !1);
}
$(function(){
    var agent = navigator.userAgent;
    if(agent.indexOf("Windows")>0 && agent.indexOf("Phone")>0){
        $(".lv-tab").each(function(){
            //wp系统box-flex兼容
            var obj = $(this);
            var w = 100/obj.find("li").length;
            obj.find("li").css("width",w+"%");
        })
    }
    if($(".bottom-fixed").length){
        //页面底部若有浮动，为主框架增加底部填充以避免遮挡
        if($("#container_shaixuan").length){
            $("#container_shaixuan").css("paddingBottom","50px");
        }else if($(".order-addbottom").length){
            $("#container").css("paddingBottom","114px");
        }else{
            $("#container,#wrapper").css("paddingBottom","50px");
        }
    }
    $(".lv-checkBox-label").each(function(){
        var obj = $(this);
        obj.mClick(function(){
            obj.find(".lv-checkBox").itemSwitch();
        });
    });
    $(".link").each(function(){
        //公共跳转方法，目标跳转页有a标签链接，可能产生点透问题，慎用！
        var obj = $(this),
            url = obj.attr("data-link");
        obj.mClick(function(){
            window.location.href = url;
        })
    })
    /* 弹出框事件 */
    $('body').delegate('ul[_tabBox] li','click',function(){
        $('section[_sliceTab]').addClass('sliceTab');
    });
    /* 弹出框事件 End */
    if ($(".swiper-main").length != 0) {
        //初始化banner
        $(".swiper-slide").css({"display":"block"});
        var swiper = new Swiper('.swiper-banner', {
            pagination: '.pagination',
            autoplay : 2000,
            loop: true,
            grabCursor: true,
            paginationClickable: true,
            calculateHeight: true
        });
        $(".swiper-slide").css({"visibility":"visible"});
    }
});
$.fn.partSwitch = function(option){
    var _this = {
        changeState : undefined,
        crumbsCallback: undefined,
        callback : undefined
    }
    $.extend(_this,option);
    var callback = _this.callback,
        crumbsCallback = _this.crumbsCallback,
        changeState = _this.changeState;

    $(this).each(function(index){
        //展开内容公共方法
        var obj = $(this);
        var triggerId = $(this).attr("btn-id")
        var btn = obj;
        var state = {
            on : false,
            change : "enable"
        }
        var item = $(this).find("article");
        if(triggerId){
            btn = $("#"+triggerId);
        }
        var maxHeight = parseInt(item.css("maxHeight"));
        if(item.height()<maxHeight){
            $(this).find(".ic_ui").css("display","none");
        }else{
            $(this).find(".ic_ui").css("display","block");
            if(!btn.attr("data-visit")){
                btn.mClick(function(){
                    if (typeof(crumbsCallback) != 'undefined') {//生成每秒产生的新字符串
                        crumbsCallback.apply(obj , arguments);
                    }
                    if(!btn.hasClass("disable")){
                        obj.itemSwitch({switchName:"on"});
                    }
                    state.on = obj.hasClass("on");
                    if (typeof(changeState) != 'undefined') {//生成每秒产生的新字符串
                        changeState.apply(state , arguments);
                    }
                });
            }
            btn.attr("data-visit",1);
        }
    });
    if (typeof(callback) != 'undefined') {//生成每秒产生的新字符串
        callback.apply($(this), arguments);
    }
}
$.fn.itemSwitch = function(option){
    //封装状态切换方法
    var _this = {
        switchName : "selected",
        cleanSiblings : false
    }
    $.extend(_this,option);
    var switchName = _this.switchName
        ,cleanSiblings=_this.cleanSiblings;
    $(this).each(function(){
        var obj = $(this);
        if(obj.hasClass(switchName)){
            if(!cleanSiblings){
                obj.removeClass(switchName);
            }
        }else{
            if(!cleanSiblings){
                obj.siblings().removeClass(switchName);
            }
            obj.addClass(switchName);
        }
    })
}
$.fn.countdown = function (option) {//倒计时根据后台给的毫秒数进行倒计时
    var _this = {
        endTag : "data-time",//倒计时终止时间 毫秒
        distance : -1,
        rewrite : undefined ,//倒计时回调/秒 d：天 h：时 m：分 s：秒
        rewriteEnd : undefined ,//倒计时结束回调
        timeEnd : undefined
    };
    $.extend(_this,option);
    var nowtime =  _this.nowtime,
        endTag = _this.endTag;
    $(this).each(function () {
        var obj = $(this);
        var _d,_h,_m,_s;
        var newStr = "";
        var nt = {
            d : 0,
            h : 0,
            m : 0,
            s : 0
        }
        var datetime = obj.attr(endTag);//获取毫秒数
        var leftsecond = datetime/1000;
        if(leftsecond<=0){//时间到 在回调中自定义一套字符串用来显示
            if (typeof(_this.rewriteEnd) != 'undefined') {
                newStr = _this.rewriteEnd.apply(nt, arguments);
            }
            obj.find(".countDown").html(newStr);
        }else{
            var timeNew = setInterval(function(){//开始倒计时
                if(datetime!=obj.attr(endTag)){
                    datetime = obj.attr(endTag);
                    leftsecond = datetime/1000;
                }
                if (leftsecond <= 0) {//时间到 在回调中自定义一套字符串用来显示
                    if (typeof(_this.rewriteEnd) != 'undefined') {
                        newStr = _this.rewriteEnd.apply(nt, arguments);
                    }
                    obj.find(".countDown").html(newStr);
                    clearInterval(timeNew);
                    return;
                }else{
                    leftsecond--;
                }
                _d = parseInt(leftsecond / 3600 / 24);
                _h = parseInt((leftsecond / 3600) % 24);
                _m = parseInt((leftsecond / 60) % 60);
                _s = parseInt(leftsecond % 60);
                nt.d=_d;
                nt.h=_h;
                nt.m=_m;
                nt.s=_s;

                if (typeof(_this.rewrite) != 'undefined') {//生成每秒产生的新字符串
                    newStr = _this.rewrite.apply(nt, arguments);
                }
                obj.find(".countDown").html(newStr);
            }, 1000);
        }
    });
};

$.fn.tabChange = function (option) {//tab切换
    var _this = {
        initNum: 0,
        tabName: "tabChange",   //详细条目class
        tabSwitch: "li",        //字段html标签
        callback: undefined,    //callback
        crumbsCallback: undefined   //项目点击后的事件
    };
    $.extend(_this, option);
    var _obj = $(this).find(_this.tabSwitch);
    var _item = $("." + _this.tabName);
    var callback = _this.callback;
    var crumbsCallback = _this.crumbsCallback;
    _obj.each(function (index) {
        var _tabBtn = $(this);
        _item.eq(_this.initNum).css("display", "block");
        _obj.eq(_this.initNum).addClass("active");
        if($(_tabBtn).length){
            $(_tabBtn).mClick(function(){
                _obj.removeClass("active").eq(index).addClass("active");
                _item.css("display", "none").eq(index).css("display", "block");
                if (typeof(crumbsCallback) != 'undefined') {
                    crumbsCallback.apply(_tabBtn, arguments);
                }
            });
        }
    });
    if (typeof(callback) != 'undefined') {
        callback.apply(this, arguments);
    }
    return this;
};

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
$.fn.checkBox = function(option){
    var _this = {
        initNum : [-1],                  //初始化已经选中的项目，默认不选择
        type : "",                      //模式选择 lastNoCancelled 剩下一个选项的时候不可取消
        checkName : "checkOption",      //复选的父级class
        checkItemName : "checkBox-child",   //复选元素class
        selectedName : "selected" ,     //复选元素选中状态的class
        selectedVal : undefined  ,      //返回当前点选内容的索引
        callBack : undefined            //回调函数
    };
    $.extend(_this , option);
    var obj = $(this),
        item = obj.find("."+_this.checkName),
        itemChild = item,
        selected = _this.selectedName,
        i = _this.initNum,
        selectedSwitch = 1;
    switch(_this.type){
        case "lastNoCancelled":
            if(i[0]==-1) i = [0];
            break;
    }
    if(!item.hasClass(_this.checkItemName)){
        itemChild = item.find("."+_this.checkItemName);
    }
    item.each(function(index){
        if($.inArray(index ,i)!=-1){
            itemChild.eq(index).addClass(selected);
        }
        $(this).mClick(function(){
            switch(_this.type){
                case "lastNoCancelled":
                    if(item.find(".selected").length<=1){
                        selectedSwitch = 0;
                    }else{
                        selectedSwitch = 1;
                    }
                    break;
                default:
                    break;
            }
            if(selectedSwitch){
                if(itemChild.eq(index).hasClass(selected)){
                    itemChild.eq(index).removeClass(selected);
                }else{
                    itemChild.eq(index).addClass(selected);
                }
            }else{
                itemChild.eq(index).addClass(selected);
            }
            if (typeof(_this.selectedVal) != 'undefined') {
                _this.selectedVal.apply(index, arguments);
            }
        })

    });
    if (typeof(_this.callBack) != 'undefined') {
        _this.callBack.apply(this, arguments);
    }
};
$.fn.radioBox = function(option){//页面内单选事件
    var _this = {
        initNum : "0",
        type : "",
        radioName : "radioOption",
        radioItemName : "radioBox-child",
        selectedName : "selected" ,
        selectedVal : undefined ,
        callBack : undefined
    };
    $.extend(_this , option);
    $(this).each(function(radioIndex){
        var obj = $(this),
            item = obj.find("."+_this.radioName),
            itemChild = item,
            selected = _this.selectedName,
            i = _this.initNum[radioIndex];
        if (typeof(i) != 'number') {
            i = -1;
        }
        if(!item.hasClass(_this.radioItemName)){
            itemChild = item.find("."+_this.radioItemName);
        }
        if(i>=0){
            itemChild.eq(i).addClass(selected);
        }
        item.each(function(index){
            $(this).mClick(function(){
                if(_this.type != "only"){
                    itemChild.removeClass(selected);
                    itemChild.eq(index).addClass(selected);
                }else{
                    itemChild.eq(index).siblings().removeClass(selected);
                    itemChild.eq(index).itemSwitch();
                }
                if (typeof(_this.selectedVal) != 'undefined') {
                    _this.selectedVal.apply(index, arguments);
                }
            })
        });
    })
    if (typeof(_this.callBack) != 'undefined') {
        _this.callBack.apply(this, arguments);
    }
};

/*
 popup
 isSuccess-----(true, false)
 callBack ------function a(){}
 time is num
 toastText is string
 buttonBoole is button boole
 */
function popupModal(isSuccess, toastText, callBack, time, buttonBoole){
    var _popupBox = $('div[_popup]');
    var _modal = $('div[_modal]');
    var _modalHeight = $(document).height();
    if(typeof(callBack) === 'function'){
        callBack();
    }
    if(isSuccess){
        setTimeout(function() {
            _popupBox.fadeIn();
            _modal.css({
                'height': _modalHeight
            }).fadeIn();
            _popupBox.find('article p').html(toastText);
        }, time);
    }
    if(!isSuccess){
        setTimeout(function() {
            _popupBox.fadeOut();
            _modal.fadeOut();
        }, time);
    }
    /*button defult is show and false*/
    if(buttonBoole){
        _popupBox.find('.ic_yellow').hide();
    }else{
        _popupBox.find('.ic_yellow').show();
    }
    $('body').delegate('div[_modal]', 'click', function(){
//		  _popupBox.fadeOut();
//		  _modal.fadeOut();
    });
}
function popupModalItem(obj, isSuccess, toastText, callBack, time, buttonBoole){
    var _popupBox = obj;
    var _modal = $('div[_modal]');
    var _top = $(document).scrollTop()+180;
    var _modalHeight = $(document).height();
    if(typeof(callBack) === 'function'){
        callBack();
    }
    if(isSuccess){
        setTimeout(function() {
            _popupBox.css({
                top: _top
            }).fadeIn();
            _modal.css({
                'height': _modalHeight
            }).fadeIn();
            _popupBox.find('article p').html(toastText);
        }, time);
    }
    if(!isSuccess){
        setTimeout(function() {
            _popupBox.fadeOut();
            _modal.fadeOut();
        }, time);
    }
    /*button defult is show and false*/
    if(buttonBoole){
        _popupBox.find('.ic_yellow').hide();
    }else{
        _popupBox.find('.ic_yellow').show();
    }
    $('body').delegate('div[_modal]', 'click', function(){});
}

function isEmpty(o) {//补充isEmpty函数
    var i, v; if (typeof(o) === 'object') {
        for (i in o) {
            v = o[i]; if (v !== undefined && typeof(v) !== 'function') {
                return false;
            }
        }
    } return true;
}

