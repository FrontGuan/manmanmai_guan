
$(function(){
    $.get('http://127.0.0.1:9090/api/getindexmenu',function(backData){
        console.log(backData);
        $("#navMenu .container-fluid .row").html(template('navMenuTmp',backData));
        // console.log(template('navMenuTmp',backData));
    })
    $.get('http://127.0.0.1:9090/api/getmoneyctrl',function(backData){
        // console.log(backData);
        $("#discount-content ul").html(template('discountTmp',backData));
        // console.log(template('discountTmp',backData));
    })
    //点击底部返回顶部按钮返回顶部
    $(".footer-nav .row >div:last-child").on('touchstart',function(){
        $(window).scrollTop(0);
    })
    //点击更多显示或隐藏最后一行导航栏
    $('#navMenu .row').on('click','>div:eq(7)',function(){
        $('#navMenu .container-fluid').toggleClass('open');
    })
    //
})