document.getElementById("deposit-button").addEventListener("click", function(){   
    // input new amount
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;

    // previus deposite amount
    const depositAmount = document.getElementById('deposit-total');
    const previusDepositAmount = depositAmount.innerText;
    
    const newDepositTotal = parseFloat(newDepositAmount) + parseFloat(previusDepositAmount);
    // set the amount to deposite
    depositAmount.innerText = newDepositTotal;
    
    // set  the new deposite to balance
    const balanceAmount = document.getElementById('balance-total');
    const previousBalanceAmount = balanceAmount.innerText;

    const newBalanceTotal = parseFloat(newDepositAmount) + parseFloat(previousBalanceAmount);
    balanceAmount.innerText = newBalanceTotal;

    depositInput.value = '';
})


// withdraw balance get handler

document.getElementById('withdraw-button').addEventListener('click', function(){
    // input withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    const withdrawAmount = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawAmount.innerText;

    const newWithdrawTotal = parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawAmount);
    withdrawAmount.innerText = newWithdrawTotal

    // decrease balance 
    const balanceAmount = document.getElementById('balance-total');
    const previousBalanceAmount = balanceAmount.innerText;

    const newBalanceTotal = parseFloat(previousBalanceAmount) - parseFloat(newWithdrawAmount) ;
    balanceAmount.innerText = newBalanceTotal;

    withdrawInput.value = '';


})