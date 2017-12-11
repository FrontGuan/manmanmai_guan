
$(function(){
    console.log(window.location.href.split('='));
    //0&brandCategory 经过parseInt转化成数字类型会自动忽略多余字符串,只将数字字符转化成number类型
    var brandtitleid = parseInt(window.location.href.split('=')[1]);
    //decodeURI 解码函数:将%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%A7%86这样的编码解析成对应的汉字
    var brandCategory = decodeURI(window.location.href.split('=')[2]);
    // console.log(brandtitleid);
    // console.log(brandCategory);
    $('.brandCategory').text(brandCategory);
    $.get('http://127.0.0.1:9090/api/getbrand',{brandtitleid:brandtitleid},function(backData){
        console.log(backData);
        $('.brand-content ul').html(template('brandProductTmp',backData));
        var $lis = $('#main .brand-content ul li');
        console.log($lis);
        $lis.each(function(i,e){
            $(this).click(function(){
                var brandtitleid = $(this).attr('data-brandTitleId');
                $.ajax({
                    url: 'http://127.0.0.1:9090/api/getbrandproductlist',
                    data: {
                        brandtitleid: brandtitleid,
                        pagesize: 4
                    },
                    success:function(backData){
                        console.log(backData);
                    }
                })
            })
        })
    })   
})