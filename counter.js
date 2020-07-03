// 當頁面 準備完成時
$(document).ready(function () {
    // 當視窗 捲動時
    $(window).scroll(function () {
        // var 變數=資料
        var offset = $("#test").offset();  //取得元素位移資料  
        var top = offset.top;    //上方
        var left = offset.left;  //左方

        // console.log("元素上方:"+top);

        var windowTop = $(window).scrollTop();

        // console.log("視窗的上方:"+windowTop);

        // 判斷式
        // 如果...發生，就...
        // if(條件)(程式)
        if (windowTop > top) {
            // console.log("開始執行動畫...");

            // 選取動畫({參數}，{選項})
            $("#test").animate({
                num : 777            //數字
            }, {
                duration:2000,     //時間
                step:(now)=> {      //步驟
                    $("#test").text(Math.floor(now));     //文字(步驟)Math.floor去小數點
                }
            })
        }
    });
});