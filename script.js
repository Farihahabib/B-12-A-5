// call alert
console.log(document)
const alertmsg = document.getElementsByClassName("call-btn");
const coinNumber = Number(document.getElementById("coin-number").innerText);
for(const btn of alertmsg){
   function getElement(id){
            const element = document.getElementById(id);
            return element;
          }
   
 btn.addEventListener("click", function(){
    let coinNumber = Number(document.getElementById("coin-number").innerText);
    

    if(coinNumber >= 20){
    
       const serviceName = btn.parentNode.parentNode.childNodes[1].childNodes[2].innerText;
       
           
        const serviceNumber = btn.parentNode.parentNode.childNodes[1].childNodes[6].innerText;
  
         alert("📞Calling " + serviceName +" " + serviceNumber+"......."); 
           const time = new Date();

const currentTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        console
const cartContainer = getElement("cartContainer")
     const newCart = document.createElement('div');
     newCart.innerHTML = `
     <div class ="bg-gray-100 rounded-md p-4 my-3 flex justify-between items-center">
     <div class = "text-left">
     <h2 class = "font-bold">${serviceName}</h2>
     <h2 class = "font-bold">${serviceNumber}</h2>
     </div>
     <div class = "text-right">${currentTime}</div>
</div>
     `;
       cartContainer.append(newCart)
       // clearbtn
     const clearBtn = document.getElementById("clearbtn").addEventListener("click",function(){
 cartContainer.innerHTML = ``;

     })

      

         let newCoinNumber = coinNumber - 20;
      document.getElementById("coin-number").innerText = newCoinNumber;
 return newCoinNumber;}
  
    
  else{
  
          alert(" ❌ You dont have sufficient coin to call. You need atleast 20 coin to make a call.")

 }
}
 )
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
// copybtn section

  const copys = document.getElementsByClassName("copyBtn");

   for(const copy of copys){



      copy.addEventListener("click",function(){

  
 const copyNumber = copy.parentNode.parentNode.childNodes[1].childNodes[6].innerText;
        alert("✅ Number Copied " + copyNumber); 
 const temptextarea = document.createElement("textarea");
temptextarea.value = copyNumber;
document.body.appendChild(temptextarea);
temptextarea.select();
temptextarea.setSelectionRange(0, 99999);
document.execCommand("copy");
document.body.removeChild(temptextarea);

 const copynum = Number (document.getElementById("copyNumber").innerText);
 let  newcopyNumber = copynum + 1;
 document.getElementById("copyNumber").innerText = newcopyNumber;
 return newcopyNumber     
}
)
    }

