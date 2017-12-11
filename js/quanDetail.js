
$(function(){
    var arr = window.location.href.split('=');
    var couponid = parseInt(arr[1]);
    var couponTitle = decodeURI(arr[2]);
    $('#topBar-small .quanName').text(couponTitle); 
    console.log(couponid , couponTitle);
    $.get('http://127.0.0.1:9090/api/getcouponproduct',{couponid:couponid},function(backData){
        console.log(backData);
        // console.log(template('couponDetailTmp',backData));
        $('#couponProduct .products ul').html(template('couponDetailTmp',backData));
    })
})