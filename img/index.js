/**
 * Created by tianhao on 17-1-25.
 */

$(document).ready(function() {
    function camera(){
        var bodyBgs = [];    //创建一个数组变量来存储背景图片的路径
        bodyBgs[0] = "img/img1.jpg";
        bodyBgs[1] = "img/img2.jpg";
        bodyBgs[2] = "img/img3.jpg";
        bodyBgs[3] = "img/img4.jpg";
        bodyBgs[4] = "img/img5.jpg";
        bodyBgs[5] = "img/img6.jpg";
        bodyBgs[6] = "img/img7.jpg";
        bodyBgs[7] = "img/img8.jpg";
        bodyBgs[8] = "img/img9.jpg";
        bodyBgs[9] = "img/img10.jpg";
        var randomBgIndex = Math.round( Math.random() * 9 );
        $(".logo-svg").animate({width:400},"slow");
        $(".logo-svg").css("background","url("+bodyBgs[randomBgIndex]+") center no-repeat");
        $(".logo-svg").css("background-size","100%");
    }
    var n=$(".info-avatar");
    n.on("click",camera);
});
function logo(){
    $(".logo-svg").css("background","url(img/weixin.png) center no-repeat");
    $(".logo-svg").css("background-size","50%");
}
