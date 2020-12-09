function viewCart(){

    let groceryDiv =document.getElementById('groceryData');

    groceryItems.forEach(groceryItem => {
        let itemDiv =  document.createElement('div');
        itemDiv.id = 'div'+groceryItem.itemName;
        let rowDiv = document.createElement('div');
        rowDiv.classList.add("row");
        let col1 = document.createElement('div');
        col1.classList.add("col1");
        let col2 = document.createElement('div');
        col2.classList.add("col1");
        let col3 = document.createElement('div');
        col3.classList.add("col2");
        let img = document.createElement('img');
        img.src=groceryItem.src;
        col1.appendChild(img);
        let price =document.createElement('lable');
        price.innerHTML=groceryItem.itemName+' Price : '+groceryItem.itemPrice;
        price.style=" margin: 5px 10px;";
        col2.appendChild(price);  
       
        let qtyText=document.createElement('input');
        qtyText.type="text";
        qtyText.style="width : 50%"
        qtyText.placeholder="Quantity";
        qtyText.id="txt_qtyName";
        col2.appendChild(qtyText);  
        let btn=document.createElement('button');
        btn.innerHTML ="Add to cart";
        btn.onclick= function(){addTocard('shampoo',120,qtyText.value)};
        col3.appendChild(btn);
        rowDiv.appendChild(col1);
        rowDiv.appendChild(col2);
        rowDiv.appendChild(col3);
        itemDiv.appendChild(rowDiv);
        groceryDiv.appendChild(itemDiv);
    });
     
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
function addTocard(iteName,price,qty){

    if((qty ==undefined || qty!=0 ) && isNumber(qty)    ){
        let item = {
            itemName : iteName,
            itemPrice : price,
            itemQty : parseInt(qty)

        }
        if(loggedInUser.cart.length>=5){
            alert('You can add only 5 item in cart');
        }else{
            loggedInUser.cart.push(item);
        }
    }else
        alert('please provide valid quantiy');

}

function displayUserCart(){

    let userCart =document.getElementById('loggedInUserCart');

    loggedInUser.cart.forEach(item=>{

    let rowDiv = document.createElement('div');
    rowDiv.id='cartRow'+item.itemName;
    rowDiv.classList.add("row");
    let col1 = document.createElement('div');
    col1.classList.add("col1");
    let col2 = document.createElement('div');
    col2.classList.add("col2");
    let col3 = document.createElement('div');
    col3.classList.add("col2");

    col1.innerHTML=item.itemName;
    
    col2.innerHTML=item.itemQty;
    
    let btn=document.createElement('button');
    btn.innerHTML ="Remove";
    btn.onclick= function(){removeFromCart(item)};
    col3.appendChild(btn);

    rowDiv.appendChild(col1);
    rowDiv.appendChild(col2);
    rowDiv.appendChild(col3);
    userCart.appendChild(rowDiv);
    });

}
function removeFromCart(item){
    loggedInUser.cart=removeFromUserCart(item);
    let rowDiv = document.getElementById('cartRow'+item.itemName);
  
    let userCart =document.getElementById('loggedInUserCart')
    userCart.removeChild(rowDiv);
}

function removeFromUserCart( item) { 
    
    return loggedInUser.cart.filter(function(ele){ 
        return ele != item; 
    });
}