// 當頁面 準備完成時
$(document).ready(function () {
    // 當視窗 捲動時
    $(selector).scroll(function () {
        // var 變數=資料
        var offset = $("#test").offset();
        //取得元素位移資料  
        var top = offset.top;
        var left = offset.left;

        // console.log("元素上方:"+top);

        var windowTop = $(window).scrollTop();

        // console.log("視窗的上方:"+windowTop);

        // 判斷式
        // 如果...發生，就...
        // if(條件)(程式)
        if (windowTop > top) {
            console.log("開始執行動畫...");
        }
    });


});