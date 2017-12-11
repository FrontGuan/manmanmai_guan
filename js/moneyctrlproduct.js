$(function(){
    var url = window.location.href;
    var productid = parseInt(url.split('=')[1]);
    console.log(productid);
    $.get('http://127.0.0.1:9090/api/getmoneyctrlproduct',{productid:productid},function(backData){
        // console.log(backData);
        $('#main-product .product-content >.title').text(backData.result[0].productName);
        //渲染info
        $('#main-product .product-content >.info').html(template('infoTmp',backData));
        //渲染content里的picture
        $('#main-product .content .picture').html(template('pictureTmp',backData));
        //渲染content里的conn
        $('#main-product .product-content >.content .conn').html(template('connTmp',backData));
        //渲染productComment里的html结构到页面
        $('.productComment').html(template('productCommentTmp',backData));
    })
})