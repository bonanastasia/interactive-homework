
var shoppingCartStatus=0;
$("#buy").on("click",function(event){
event.preventDefault();
$("#buy-message").css("display", "block");
shoppingCartStatus=shoppingCartStatus+1;
$("#cartItems") .text(shoppingCartStatus)
})

// Jquery methods to review 
// on 
// text
// append
// val
// css