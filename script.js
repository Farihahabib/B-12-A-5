// call alert
console.log(document)
const alertmsg = document.getElementsByClassName("call-btn");
const coinNumber = Number(document.getElementById("coin-number").innerText);
for(const btn of alertmsg){
   
 btn.addEventListener("click", function(){
    let coinNumber = Number(document.getElementById("coin-number").innerText);
    

    if(coinNumber >= 20){
        alert("Calling " + document.getElementsByClassName("sName"))

        let newCoinNumber = coinNumber - 20;
     document.getElementById("coin-number").innerText = newCoinNumber;
return newCoinNumber;}
    
 else{
         alert("You dont have sufficient coin to call. Please buy more coins.")

}
 })

}




//heart number update
//const heart = document.getElementsByClassName("heartIcon")
// function heartnumberUpdate(){
    const heart = document.getElementsByClassName("heartIcon");
    const heartnum =Number (document.getElementById("heartNumber").innerText);
    for(const num of heart){
         
        num.addEventListener("click",function(){
 newheartNumber = heartnum + 1;
return newheartNumber
        })
    }











