
$(function(){
    $.get('http://127.0.0.1:9090/api/getsitenav',function(backData){
        // console.log(backData);
        // console.log(template('navsTmp',backData));
        $('#navBox').html(template('navsTmp',backData));
    })
    $.get('http://127.0.0.1:9090/api/getindexmenu',function(backData){
        console.log(backData);
    })
})