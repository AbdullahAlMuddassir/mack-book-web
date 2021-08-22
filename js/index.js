
const firstMemoryCost=document.getElementById("first-memory-cost");
const secondMemoryCost=document.getElementById("second-memory-cost");
const storageButton1=document.getElementById("storage-button1")
const storageButton2=document.getElementById("storage-button2")
const storageButton3=document.getElementById("storage-button3")
const deliveryButton1=document.getElementById("delivery-button1");
const deliveryButton2=document.getElementById("delivery-button2");
const bestPrice=document.getElementById("best-price");
const extraMemoryCost=document.getElementById("extra-memory-cost");
const extraStorageCost=document.getElementById("extra-storage-cost");
const deliveryCharge=document.getElementById("delivery-charge")
const totalPrice=document.getElementById("total");
// updateTotal
function updateTotal(){
    const memory=parseInt(extraMemoryCost.innerText);
    const storage=parseInt(extraStorageCost.innerText);
    const charge=parseInt(deliveryCharge.innerText);
    const price=parseInt(bestPrice.innerText);
    const total=memory+storage+charge+price;
    totalPrice.innerText=total;
}
firstMemoryCost.addEventListener("click",function(){
    extraMemoryCost.innerText="0";
    bestPrice.innerText="1299";
    updateTotal()
})
secondMemoryCost.addEventListener('click',function(){
    extraMemoryCost.innerText="180";
    bestPrice.innerText="1299";
    updateTotal();
})
storageButton1.addEventListener("click",function(){
    extraStorageCost.innerText="0";
    bestPrice.innerText="1299";
    updateTotal();
})
storageButton2.addEventListener("click",function(){
    extraStorageCost.innerText="100";
    bestPrice.innerText="1299";
    updateTotal();
})
storageButton3.addEventListener("click",function(){
    extraStorageCost.innerText="180";
    bestPrice.innerText="1299";
    updateTotal();
})
deliveryButton1.addEventListener("click",function(){
    deliveryCharge.innerText="0";
    bestPrice.innerText="1299";
    updateTotal();
})
deliveryButton2.addEventListener("click",function(){
    deliveryCharge.innerText="20";
    bestPrice.innerText="1299";
    updateTotal();
})

