
$(function(){
    //获取手风琴每个选项的标题
    $.get('http://127.0.0.1:9090/api/getcategorytitle',function(backData){
        // console.log(backData);
        // console.log(template('collapseTmp',backData));
        $('#mui-content .mui-card .mui-table-view').html(template('collapseTmp',backData));
        //点击标题弹出手风琴的内容
        $(".mui-table-view").on('touchstart','>li',function(){
            var my_titleid = parseInt($(this).attr('data-titleId'));
            var $that = $(this);
            // $('this').children('mui-collapse-content').children('container-fulid').children('row').html();
            $.get('http://127.0.0.1:9090/api/getcategory',{titleid:my_titleid},function(backData){
                // console.log(backData);
                $that.children('.mui-collapse-content').children('.container-fulid').children('.row').html(template('contentTmp',backData));
                // console.log(template('contentTmp',backData));
                var $row = $that.children('.mui-collapse-content').children('.container-fulid').children('.row');
                var $cols = $row.children('div');
                $cols.each(function(i,e){
                    $(this).click(function(){
                        var categoryid = parseInt($(this).attr('data-categoryid'));
                        var categoryName = $(this).text();
                        console.log(categoryName);
                        // window.location.href = 'compareProductsDetail.html?categoryid=' + categoryid + '&categoryName=' + categoryName;
                        window.location.href = 'compareProductsDetail.html?categoryid=' + categoryid;
                    })
                })
            })
        })
    })
})