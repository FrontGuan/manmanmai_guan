
$(function(){
    $.get('http://127.0.0.1:9090/api/getmoneyctrl',function(backData){
        console.log(backData);
        // console.log(template('moneyctrlTmp',backData));
        $('#discount-content-common ul').html(template('moneyctrlTmp',backData));
        var pageNum = Math.floor(backData.totalCount/backData.pagesize);
        console.log(pageNum);

        //循环生成上拉框的页数内容
        var ul = document.querySelector('#pagination .dropdown-menu');
        for(var i = 1; i <= pageNum+1; i++){
            var li = document.createElement('li');
            li.innerHTML = '<a href="#">'+ i +'/'+ (pageNum+1) +'</a>';
            ul.appendChild(li);
        }
        //根据上拉框的页数渲染页面
        $('#pagination .dropdown-menu').on('touchstart','li',function(){
            var pageid = parseInt($(this).text().split('/')[0]);//4/15
            // console.log(pageid);
            $('.nowPage').text($(this).text());
            $.get('http://127.0.0.1:9090/api/getmoneyctrl',{pageid:pageid-1},function(backData){
                // console.log(backData);
                $('#discount-content-common ul').html(template('moneyctrlTmp',backData));
            })
        })
        //上一页,下一页功能
        $('.pre-btn').on('touchstart',function(){
            // console.log($(this));
            var nowPage = parseInt($('.nowPage').text().split('/')[0]);
            if(nowPage > 1){
                nowPage--;
                $.get('http://127.0.0.1:9090/api/getmoneyctrl',{pageid:nowPage-1},function(backData){
                    // console.log(backData);
                    $('#discount-content-common ul').html(template('moneyctrlTmp',backData));
                    //再改掉上拉框的页数
                    $('.nowPage').text(nowPage + '/' + (pageNum+1));
                })
            }else {
                return;
            }
        })
        //下一页功能
        $('.next-btn').on('touchstart',function(){
            // console.log($(this));
            var nowPage = parseInt($('.nowPage').text().split('/')[0]);
            if(nowPage != (pageNum+1)){
                nowPage++;
                $.get('http://127.0.0.1:9090/api/getmoneyctrl',{pageid:nowPage-1},function(backData){
                    // console.log(backData);
                    $('#discount-content-common ul').html(template('moneyctrlTmp',backData));
                    //再改掉上拉框的页数
                    $('.nowPage').text(nowPage + '/' + (pageNum+1));
                })
            }else {
                return;
            }
        })
        
        //给折扣商品列表的每个商品添加点击事件,跳转到国内详情页面
        var $lis = $('#discount-content-common ul li');
        // console.log($lis);
        $lis.each(function(){
            $(this).on('touchstart',function(){
                var productid = parseInt($(this).attr('data-productId'));
                console.log(productid);
                window.location.href = 'moneyctrlproduct.html?productid=' + productid;
            })
        })
    })

    
})