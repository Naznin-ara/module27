// deposit part

document.getElementById('deposit_btn').addEventListener('click' , function(){
let newdeposit =  getElementvalue("deposit_input");
let previousdeposit = getElementFromText("deposit_amount");
let totaldeposit = newdeposit + previousdeposit;
let depositAmount = setelement("deposit_amount", totaldeposit);
const previousBalance = getElementFromText("total_amount");
let newBalance = previousBalance + newdeposit;
let newTotal = setelement("total_amount", newBalance);

})


document.getElementById('withdraw_btn').addEventListener('click' , function(){
    let newwithdraw =  getElementvalue("withdraw_input");
    let previouswithdraw = getElementFromText("withdraw_amount");
    let totalwithdraw =  newwithdraw  + previouswithdraw;
    let withdrawAmount = setelement("withdraw_amount", totalwithdraw );
    const previousBalance = getElementFromText("total_amount");
    let newBalance = previousBalance - newwithdraw;
    let newTotal = setelement("total_amount", newBalance);
    
    })