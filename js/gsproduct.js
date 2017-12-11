$(function(){
    var window_width = $(window).width();
    $('.dropdown ul').width(window_width);
    var dropdown_width = $('.dropdown').width();
    for(var i = 0; i < 3; i++){
        $(".dropdown ul").eq(i).css('left',-(i*dropdown_width + 0.5))
    }
    //渲染商店选择框
    $.get('http://127.0.0.1:9090/api/getgsshop',function(backData){
        $('.dropdown').eq(0).children('ul').html(template('dropDownTmp',backData));
        //根据下拉框的值渲染不同的数据
        $('.dropdown').eq(0).on('touchstart','li',function(){
            var my_shopid = ($(this).data('shopid'));//获取shopid
            var shopName = $(this).text();
            //设置select框的值为对应点击的值
            $('.dropdown').eq(0).children('a').children('.shopName').html(shopName);
            $('.dropdown').eq(0).attr('data-sid',my_shopid);
            var my_areaid = $('.dropdown').eq(1).attr('data-aid');//获取areaid
            $.get('http://127.0.0.1:9090/api/getgsproduct?',{shopid:my_shopid,areaid:my_areaid},function(backData){
                console.log(backData);
                $("#product .product-items").html(template('productItemTmp',backData));
            })
        })
    })
    //渲染地区选择框
    $.get('http://127.0.0.1:9090/api/getgsshoparea',function(backData){
        $('.dropdown').eq(1).children('ul').html(template('shopareaTmp',backData));
        //根据下拉框的值渲染不同的数据
        $('.dropdown').eq(1).on('touchstart','li',function(){
            var my_areaid = ($(this).data('areaid'));//获取areaid
            var areaName = $(this).text();
            //设置select框的值为对应点击的值
            $('.dropdown').eq(1).children('a').children('.shopName').html(areaName);
            $('.dropdown').eq(1).attr('data-aid',my_areaid);
            var my_shopid = $('.dropdown').eq(0).attr('data-sid');//获取shopid
            $.get('http://127.0.0.1:9090/api/getgsproduct?',{shopid:my_shopid,areaid:my_areaid},function(backData){
                console.log(backData);
                $("#product .product-items").html(template('productItemTmp',backData));
            })
        })
    })
    $(".dropdown").on('touchstart',function(){
        var flag = $(this).hasClass('open');
        if(flag){
            $(this).children("a").children("span").css('transform','rotate(0deg)');
        }else {
            $(this).children("a").children("span").css('transform','rotate(180deg)');
        }
    })
    //产品内容渲染
    $.get('http://127.0.0.1:9090/api/getgsproduct?shopid=0&areaid=0',function(backData){
        // console.log(backData);
        // console.log(template('productItemTmp',backData));
        $("#product .product-items").html(template('productItemTmp',backData));
    })
    // console.log($(".dropdown >a").text());

    //点击底部返回顶部按钮返回顶部
    $(".footer-nav .row >div:last-child").on('touchstart',function(){
        $(window).scrollTop(0);
    })
})