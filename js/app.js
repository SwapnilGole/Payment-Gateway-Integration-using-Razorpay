

        // declaring variables
        let userName = document.querySelector("#name").value;
        let userAmount = document.querySelector("#amount").value;
        let errorBox = document.querySelector(".error-box");
        
        
        function MakePayment(){
            let userName = document.querySelector("#name").value;
            let userAmount = document.querySelector("#amount").value;
            if(userName !=="" && userAmount !==""){
                var options = {
                  // "key": "rzp_test_IgZLQQBRAjqrlI", // Enter the Key ID generated from the Dashboard
                  key: "rzp_live_SmwguoXr3VsU84", // Enter the Key ID generated from the Dashboard
                  amount: userAmount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                  currency: "INR",
                  name: userName + " " + "donating ",
                  description: "to - The Sparks Foundation",
                  image: "https://i.ibb.co/nCXVp2D/sparkslogo.png",
                  handler: function (response) {
                    let paymentId = response.razorpay_payment_id;
                    let paymentAmount = userAmount;
                    let payerName = userName;
                    sessionStorage.setItem("payId",paymentId);
                    sessionStorage.setItem("payAmount",paymentAmount);
                    sessionStorage.setItem("payName",payerName);
                    jQuery.ajax({
                      success: function (result) {
                        window.location.href = "success.html";
                      },
                      failure: function (result) {
                        window.location.href = "index.html";
                      },
                    });
                  },
                };
        var rzp1 = new Razorpay(options);
        document.getElementById('donate-btn').onclick = function(){
            rzp1.open();
        }
    }
    else{
        setTimeout(() => {
            errorBox.classList.toggle("show");
        }, 500);
        }
    }
 
