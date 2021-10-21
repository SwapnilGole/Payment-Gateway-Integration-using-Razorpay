let paidAmount = document.querySelector(".user-amount");
let paymentId = document.querySelector(".payment-id");
let donorName = document.querySelector(".donor-name");
let donorAmt = document.querySelector(".donor-amt");
let printBtn = document.querySelector(".print-btn");
let paymentSuccess = document.querySelector(".payment-success");
console.log(paidAmount);
console.log(paymentId);
console.log(donorName);

paidAmount.innerHTML = sessionStorage.getItem("payAmount");
donorAmt.innerHTML = sessionStorage.getItem("payAmount");
paymentId.innerHTML = sessionStorage.getItem("payId");
donorName.innerHTML = sessionStorage.getItem("payName");
printBtn.addEventListener("click",()=>{
            window.print();
})