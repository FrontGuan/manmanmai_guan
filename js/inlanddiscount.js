
$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    $.get('http://127.0.0.1:9090/api/getinlanddiscount',function(backData){
        console.log(backData);
        // console.log(template('discountTmp',backData));
        $('.gn_content ul').html(template('discountTmp',backData));
    })
})