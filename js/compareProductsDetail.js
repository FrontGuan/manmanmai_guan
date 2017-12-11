
$(function(){
    var url = window.location.href;
    console.log(url);
    url = url.split('=');
    console.log(url);
    var categoryid = parseInt(url[1]);
    $.get('http://127.0.0.1:9090/api/getcategorybyid',{categoryid:categoryid},function(backData){
        $('#thirdMenu .category').html(backData.result[0].category);
    })
    //渲染商品列表到页面上
    $.get('http://127.0.0.1:9090/api/getproductlist',{categoryid:categoryid},function(backData){
        // console.log(backData);
        var pageNum = Math.ceil(backData.totalCount/backData.pagesize);
        // console.log(pageNum);
        //渲染商品列表到页面上
        $("#goods .goods-list").html(template('goodsTmp',backData));
        //循环生成上拉框的页数内容
        var ul = document.querySelector('#pagination .dropdown-menu');
        for(var i = 1; i <= pageNum; i++){
            var li = document.createElement('li');
            li.innerHTML = '<a href="#">'+ i +'/'+ pageNum +'</a>';
            ul.appendChild(li);
        }
        //根据上拉框的页数渲染页面
        $('#pagination .dropdown-menu').on('touchstart','li',function(){
            var pageid = parseInt($(this).text().split('/')[0]);
            // console.log(pageid);
            $('.nowPage').text($(this).text());
            $.get('http://127.0.0.1:9090/api/getproductlist',{categoryid:categoryid,pageid:pageid},function(backData){
                // console.log(backData);
                $("#goods .goods-list").html(template('goodsTmp',backData));
            })
        })
        //上一页,下一页功能
        $('.pre-btn').on('touchstart',function(){
            // console.log($(this));
            var nowPage = parseInt($('.nowPage').text().split('/')[0]);
            if(nowPage > 1){
                nowPage--;
                $.get('http://127.0.0.1:9090/api/getproductlist',{categoryid:categoryid,pageid:nowPage},function(backData){
                    // console.log(backData);
                    $("#goods .goods-list").html(template('goodsTmp',backData));
                    //再改掉上拉框的页数
                    $('.nowPage').text(nowPage + '/' + pageNum);
                })
            }else {
                return;
            }
        })
        //下一页功能
        $('.next-btn').on('touchstart',function(){
            // console.log($(this));
            var nowPage = parseInt($('.nowPage').text().split('/')[0]);
            if(nowPage != pageNum){
                nowPage++;
                $.get('http://127.0.0.1:9090/api/getproductlist',{categoryid:categoryid,pageid:nowPage},function(backData){
                    // console.log(backData);
                    $("#goods .goods-list").html(template('goodsTmp',backData));
                    //再改掉上拉框的页数
                    $('.nowPage').text(nowPage + '/' + pageNum);
                })
            }else {
                return;
            }
        })
        //给商品列表的每个商品添加点击事件,跳转页面
        var $items = $('#goods .goods-list .item');
        $items.each(function(){
            $(this).on('touchstart',function(){
                var productid = parseInt($(this).attr('data-productid'));
                window.location.href = 'productsDetail.html?productid=' + productid;
            })
        })
        
    })
})