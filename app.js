// declaring variable, then assigning a value of 0
var shoppingCartStatus = 0;

// select element with id of buy, then add event listener on click of that element
$("#buy").on("click", function (event) {

    // don't do the default browser action (refresh)
    event.preventDefault();

    // display alert with id of "buy-message"
    $("#buy-message").css("display", "block");

    shoppingCartStatus = shoppingCartStatus + 1;

    $("#cartItems").text(shoppingCartStatus);

})

$(".recommended-item").on("click", function (event) {
    $(this).toggleClass("fade-out");
});

$(function () {
    $('[data-toggle="popover"]').popover()
})

$("#helpbutton").on("click", function (event) {
    var popoverState = $(this).attr("popover")
    if (popoverState === "closed") {
        $(this).attr("popover", "open")
        $("#chatbox").removeClass("hiden");
    } else {
        $(this).attr("popover", "closed")
        $("#chatbox").addClass("hiden");

    }
});