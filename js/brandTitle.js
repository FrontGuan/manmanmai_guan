$(function(){
    $.get('http://127.0.0.1:9090/api/getbrandtitle',function(backData){
        // console.log(backData);
        // console.log(backData.result[3].brandTitle.split('十大品牌')[0]);
        
        // console.log(template('brandTmp',backData));
        $('#main .content').html(template('brandTmp',backData));
        var $lis = $('#main .content li');
        $lis.each(function(){
            $(this).on('touchstart',function(){
                // console.log(parseInt($(this).attr('data-brandTitleId')));
                var brandtitleid = parseInt($(this).attr('data-brandTitleId'));
                var brandCategory = $(this).attr('data-brandTitle').split('十大品牌')[0];
                console.log(brandCategory);
                // window.location.href = 'brandList.html?brandtitleid=' + brandtitleid;
                window.location.href = 'brandList.html?brandtitleid=' + brandtitleid + '&brandCategory=' + brandCategory;
            })
        })
    })
})