$(function(){
    $(".rule-btn").on("click",function(){
        $(".rule-box").show();
    });
    $(".close-btn").on("click",function(){
        $(this).parent().hide();
    })
    var timeOut = function(){  //超时函数
        $("#lotteryBtn").rotate({
            angle:0,
            duration: 10000,
             animateTo: 2160, //这里是设置请求超时后返回的角度，所以应该还是回到最原始的位置，2160是因为我要让它转6圈，就是360*6得来的
             callback:function(){
             	alert('网络超时')
             	$(".tanBox").show();
             }
        });
    };
    var rotateFunc = function(awards,angle,text){  //awards:奖项，angle:奖项对应的角度
        $('#lotteryBtn').stopRotate();
        $("#lotteryBtn").rotate({
            angle:180,
            duration: 5000,
            animateTo: angle+1440, //angle是图片上各奖项对应的角度，1440是我要让指针旋转4圈。所以最后的结束的角度就是这样子^^
            callback:function(){
                $(".tanBox").find('.tanchu').html(text);
                $(".tanBox").show();
            }
        });
    };

    $("#lotteryBtn").rotate({
        bind:
        {
            click: function(){
                if(typeof($("#lotteryBtn").attr('disabled'))=="undefined"){
                    $("#lotteryBtn").attr('disabled',true);

                    $.ajax({
                        type: "POST",
                        dataType:"json",
                        url: siteurl,
                        data:{'action':'ajaxDrawPrize'},
                        success: function(data){
                            if (data.code==200){
                                rotateFunc(data.data.prizeid,data.data.prizeid*60,'<li>'+data.data.prizename+'</li>')
                            }
                            if (data.code==301) showLogin();
                            if (data.code==302) alert("活动未开始或者已经结束!");
                            if (data.code==303) {
                                $(".tanBox").find('.tanchu').html('<li>您已抽过</li>');
                                $(".tanBox").show();
                            }
                            $("#lotteryBtn").removeAttr('disabled');
                        }
                    });
                }
            }
        }

    });

    $(".guanbi").on("click",function(){
        $(this).parent().hide();
    })
})