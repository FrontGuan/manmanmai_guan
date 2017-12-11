
$(function(){
    $.get('http://127.0.0.1:9090/api/getcoupon',function(backData){
        // console.log(backData);
        $('#quan-model .bd ul').html(template('quanTmp',backData));
        // var couponid = 
        $('#quan-model .bd ul').on('touchstart','li',function(){
            var couponid = parseInt($(this).attr('data-couponId'));
            var couponTitle = ($(this).attr('data-couponTitle'));
            window.location.href = 'quanDetail.html?couponid=' + couponid + '&couponTitle=' + couponTitle;
        })
    })
})