
$(function(){
    $.get('http://127.0.0.1:9090/api/getbaicaijiatitle',function(backData){
        $('#wrapper ul').html(template('wrapperTmp',backData));
        // 初始化IScroll插件  
        var myScroll = new IScroll("#wrapper", {
            /*支持横向滚动条*/
            scrollX: true,
        });
        //默认渲染titleid=0的数据到页面
        $.get('http://127.0.0.1:9090/api/getbaicaijiaproduct',{titleid:0},function(backData){
            $('#baicaijia-product ul').html(template('baicaijiaTmp',backData));
        })
        //根据导航渲染不同的数据到页面
        $('#wrapper ul').on('click','li',function(){
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            var titleid = $(this).data('titleid');
            // console.log(titleid);
            $.get('http://127.0.0.1:9090/api/getbaicaijiaproduct',{titleid:titleid},function(backData){
                $('#baicaijia-product ul').html(template('baicaijiaTmp',backData));
            })
        })
    })  
})