$(document).ready(function () {

    var docHeight = $(document).height();
    $(window).resize(function () {
        $("#wrapper").css("height", "" + docHeight + "");
    });

    $(window).scroll(function () {
        $("#wrapper").css("height", "" + docHeight + "");
    });

}); 