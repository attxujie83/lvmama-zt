<!DOCTYPE html>
<html><head>
<meta charset="utf-8" />
<title>公司度假旅游_度假旅游,驴妈妈定制游,春季旅游,特价_公司旅游-驴妈妈旅游网</title>
<meta name="keywords" content="踏青,运动,瑜伽,徒步,滑翔伞,定制游,公司旅游,商旅 "/>
<meta name="description" content="驴妈妈引领自助游先锋，春季度假旅游去哪里好，以运动的名义去旅行，公司商务旅游线路，公司旅游线路推荐.【驴妈妈定制游，驴妈妈商旅，驴妈妈旅游网】"/>
<link rel="stylesheet" href="css/index.css">
<link rel="stylesheet" href="http://pic.lvmama.com/styles/zt/000global/styles/zt_global.css" ><base target="_blank">
</head>

<body>
<!--专题公共头部START-->
<script src="http://pic.lvmama.com/styles/zt/000global/js/ztTopMenu.js" type="text/javascript"></script>
<!--专题公共头部END-->

<div class="wrap">
    <div class="banner"></div>
    <div class="part">
        <div class="main">
            <?php foreach($products[$city.'Menus'] as $k=>$r){?>
            <ul class="product_one <?php if($k==2)echo 'product_one2';?>">
                <li class="one_first">
                    <img src="http://pic.lvmama.com/styles/zt/slwq/images/pic<?=$k+1?>.jpg" width="235" height="300">
                </li>
                <li class="product_two">
                    <a class="two_pic" href="<?=$r['url']?>" title=""><img src="<?=$r['imgUrlMax']?>" width="480" height="300" alt="" /></a>
                    <p class="flag"><?php if($r['bakWord2']) { ?><span><?=$r['bakWord2']?></span><?php }?></p>
                    <p class="two_til_con">
                        <a href="<?=$r['url']?>" title=""><?=$r['title']?></a>
                        <?=$r['remark']?>
                    </p>
                    <div class="two_con">
                        <dl class="con_tj">
                            <dt>热卖推荐</dt>
                            <?php if($r['bakWord3']) { ?><dd><?=$r['bakWord3']?></dd><?php }?>
                            <?php if($r['bakWord4']) { ?><dd><?=$r['bakWord4']?></dd><?php }?>
                            <?php if($r['bakWord5']) { ?><dd><?=$r['bakWord5']?></dd><?php }?>
                            <?php if($r['bakWord6']) { ?><dd><?=$r['bakWord6']?></dd><?php }?>
                        </dl>
                        <span class="pro_price"><?php if($r['bakWord1']) { ?>&yen;<em><?=$r['bakWord1']?></em>起<?php }?></span>
                        <a class="pro_btn" href="<?=$r['url']?>" title="">立即定制</a>
                    </div>
                </li>
                <?php foreach($products['product'.$k] as $key=>$row){?>
                <li>
                    <a class="one_pic" href="<?=$row['url']?>">
                        <img src="<?=$row['imgUrlMax']?>" width="<?php if($k!=2){echo '235';}else{echo '480';}?>" height="<?php if($k!=2){echo '157';}else{echo '240';}?>" alt="" />
                    </a>
                    <p class="flag"><span><?php if($row['bakWord2']) { ?><span><?=$row['bakWord2']?></span><?php }?></span></p>
                    <div class="pro_con">
                        <a class="pro_til" href="<?=$row['url']?>" title=""><?=$row['title']?></a>
                        <span class="pro_price">&yen;<em><?php if($row['bakWord1'] !=null){echo $row['bakWord1'];}else{echo $row['memberPrice'];}?></em>起</span>
                        <a class="pro_btn <?php if($k==2){echo 'pro_btn1';}?>" href="<?=$row['url']?>" title="">立即定制</a>
                    </div>
                </li>
                <?php }?>
            </ul>
            <?php }?>
        </div>
    </div>
</div>


<script src="http://pic.lvmama.com/styles/zt/000global/js/ztFooter.js" type="text/javascript"></script>
<script src="http://pic.lvmama.com/js/jquery-1.7.js"></script>
<script type="text/javascript" src="http://pic.lvmama.com/styles/zt/slwq/js/index.js"></script>
<script type="text/javascript" src="http://pic.lvmama.com/js/common/losc.js"></script>
<script src="http://pic.lvmama.com/styles/zt/000global/js/eventCM.js" type="text/javascript"></script>
</body>
</html>
