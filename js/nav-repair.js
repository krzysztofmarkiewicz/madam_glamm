document.addEventListener('DOMContentLoaded', function () {


    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".main-nav").hasClass("is-open");
        if (_opened === true && !clickover.hasClass("burger")) {
            $(".burger").click();
        }
    });


});
// document.addEventListener('DOMContentLoaded', function () {


//     $(document).click(function (event) {
//         var clickover = $(event.target);
//         var _opened = $(".navbar-collapse").hasClass("show");
//         if (_opened === true && !clickover.hasClass("navbar-toggler")) {
//             $(".navbar-toggler").click();
//         }
//     });


// });