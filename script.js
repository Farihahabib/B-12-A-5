// call alert
console.log(document)
const alertmsg = document.getElementsByClassName("call-btn");
const coinNumber = Number(document.getElementById("coin-number").innerText);
for(const btn of alertmsg){
   
 btn.addEventListener("click", function(){
    let coinNumber = Number(document.getElementById("coin-number").innerText);
    

    if(coinNumber >= 20){
        alert("Calling ");//+ document.getElementByClassName("sName").innerText + "...");

        let newCoinNumber = coinNumber - 20;
     document.getElementById("coin-number").innerText = newCoinNumber;
return newCoinNumber;}
    
 else{
         alert("You dont have sufficient coin to call. Please buy more coins.")

}
 })



}

//heart number update
    const heart = document.getElementsByClassName("heartIcon");
   for(const num of heart){
        
     num.addEventListener("click",function(){
        const heartnum =Number (document.getElementById("heartNumber").innerText);
let  newheartNumber = heartnum + 1;
document.getElementById("heartNumber").innerText = newheartNumber;
return newheartNumber
        })
    }

    //history section.....
    const history = document.getElementsByClassName("call-btn");
    for(const his of history){
          function getElement(id){
            const element = document.getElementById(id);
            return element;
          }
      his.addEventListener("click",function(){
        const serviceName = his.parentNode.parentNode.childNodes[1].childNodes[2].innerText;
       const serviceNumber = his.parentNode.parentNode.childNodes[1].childNodes[6].innerText;
  
const cartContainer = getElement("cartContainer")
     const newCart = document.createElement('div');
     newCart.innerHTML = `
     <div class ="bg-gray-200 rounded-md p-4 mt-3">
     <h2 class = "font-bold">${serviceName}</h2>
     <h2 class = "font-bold">${serviceNumber}</h2>
</div>
     `;
       cartContainer.append(newCart)
      })
    
    }
// clearbutton section
  //const clear = document.getElementById("cartContainer")
const clearBtn = document.getElementById("clearbtn").addEventListener("click",function(){
  const clear = document.getElementById("cartContainer")

  if(clear){
   clear.remove()
  }
  else{
    alert("Nothing to clear")
  }
 
    
    
})






