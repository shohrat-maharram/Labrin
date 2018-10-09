$(document).ready(function () {

    function startAnimation() {
        //Main logo
        $(".ash-logo").stop().delay(1000).animate({
            top: "-470px",
        }, 3000).delay(12000).animate({
            top: "30px"
        }, 1000);

        //Date info
        $(".date").stop().delay(1000).animate({
            top: "-200px",
        }, 3000).delay(12000).animate({
            top: "300px"
        }, 1000);

        //Main big balloon
        $(".airballoon").stop().delay(1000).animate({
            top: "30px",
            width: '250px',
            left: '55px'
        }, 3000).delay(12000).animate({
            top: "-600px",
            width: '200px',
            left: '80px'
        }, 1000);

        //Single Clouds
        $(".cloudS1").stop().delay(3500).animate({
            top: "600px",
        }, 4000);

        $(".cloudS2").stop().delay(4000).animate({
            top: "600px",
        }, 4000);

        $(".cloudS3").stop().delay(4500).animate({
            top: "600px",
        }, 4000);

        $(".cloudS4").stop().delay(6500).animate({
            top: "600px",
        }, 3000);


        //Small balloons
        $(".redballoonBigger").stop().delay(8000).animate({
            top: "186px"
        }, 4000).delay(4000).animate({
            top: "600px"
        }, 1000);

        $(".redballoonSmaller").stop().delay(8000).animate({
            top: "40px",
        }, 4000).delay(4000).animate({
            top: "600px"
        }, 1000);

        $(".yellowballoon").stop().delay(8000).animate({
            top: "134px",
        }, 4000).delay(4000).animate({
            top: "600px"
        }, 1000);

        //Slogan
        $(".keshf").stop().delay(10000).animate({
            top: "87px",
        }, 2000).delay(4000).animate({
            top: "600px"
        }, 1000);

        //Small clouds of cloud array
        $(".cloudA1").stop().delay(9000).animate({
            top: "25px",
        }, 4000).delay(3000).animate({
            top: "600px"
        }, 1000);

        $(".cloudA2").stop().delay(9000).animate({
            top: "10px",
        }, 4000).delay(3000).animate({
            top: "600px"
        }, 1000);

        $(".cloudA3").stop().delay(9000).animate({
            top: "23px",
        }, 4000).delay(3000).animate({
            top: "600px"
        }, 1000);
    }
    startAnimation();
});