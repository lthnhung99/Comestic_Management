let btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
    button.addEventListener('click',function(event){
        let btnItem = event.target 
        let product = btnItem.parentElement
        let productPhoto = product.querySelector('img').src
        let productName = product.querySelector('.name').innerHTML
        let productPrice = product.querySelector('.price').innerHTML
        let productRating = product.querySelector('.rating').innerHTML
    addcart(productPhoto,productName,productPrice,productRating)
    })
})
function addcart(productPhoto,productName,productPrice,productRating) {
    let addtr = document.createElement("tr")
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i =0;i<cartItem.length;i++) {
        let productT = document.querySelectorAll('.title')
        if (productT[i].innerHTML==productName) {
            alert('Sản phẩm của bạn đã có trong giỏ hàng')
            return
        }
    }
    let trcontent = ` <tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="${productPhoto}" alt=""><span class="title">${productName}</span></td><td>${productPrice}</td><td><input style="width: 30px; outline: none" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>`
    addtr.innerHTML = trcontent
    let cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    deleteCart()
}

function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++) {
        let productT=document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            let cartDelete = event.target
            let cartItem1 = cartDelete.parentElement.parentElement
            cartItem1.remove();
          
        })
    }
}