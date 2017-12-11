
$(function(){
    var url = window.location.href;
    productid = parseInt(url.split('=')[1]);
    console.log(productid);
    $.get('http://127.0.0.1:9090/api/getproduct',{productid:productid},function(backData){
        console.log(backData);
        // console.log(backData.result[0].bjShop);
        //商品详细全称
        var productName = backData.result[0].productName;
        //截取商品名str[0]
        var str = productName.split(' ');
        var categoryId = backData.result[0].categoryId;
        // console.log(categoryId);
        $.get('http://127.0.0.1:9090/api/getcategorybyid',{categoryid:categoryId},function(backData){
            // console.log(backData);
            var category = backData.result[0].category;
            $('.category').text(category);
            $('.productName').text(str[0]);
        })
        // console.log(template('briefInfoTmp',backData));
        $('.briefInfo').html(template('briefInfoTmp',backData));
        $('#productInfo .otherInfo').html(template('pTmp',backData));
    })
    //商品评论
    $.get('http://127.0.0.1:9090/api/getproductcom',{productid:productid},function(backData){
        console.log(backData);
        // console.log(template('evalueTmp',backData));
        $('.evalueList').html(template('evalueTmp',backData));
    })
})