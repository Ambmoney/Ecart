if (document.readyState =='loaoding'){
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
   var removeCartItemButtons = document.getElementsByClassName('btn-danger')
   console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++){
     var button = removeCartItemButtons[i]
      button.addEventListener('click',removeCartItem) 
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change, quantityChanged')
    }
    var addToCartButtons = document.getElementsByClassName("shop-item-button")
    for (var i = 0; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
  }


function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imgSrc =  shopItem.getElementsByClassName('shop-item-image')[0].src
  console.log(title, price, imageSrc)
  addItemToCart(title, price, imgSrc)
}

function addItemToCart(title, price, imagesSrc) {
  var cartRow = document.createElement('div')
  cartRow.innerText = title
  var cartItems = document.getElementByClassName('cart-items')[0]
  cartItems.append(cartRow)

}

function updateCartTotal(){
 var cartItemContainer = document.getElementsByClassName('cart-items')[0]
 var cartRows= cartItemContainer.getElementsByClassName('cart-row')
 var total = 0
 for (var i = 0; i <cartRows.length; i++){
  var cartRow = cartRows[i]
  var priceElement = cartRow.getElementByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementByClassName('cart-quantity-input')[0]
  var price = parseFloat(priceElement.innerText.replace('$',''))
  var quantity = quantityElement.value
  total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$'+ total
}
}