
        // let donateBtn = document.querySelector(".sub-btn");
        // donateBtn.addEventListner("click",MakePayment)
        // let donateBtn = document.querySelector(".sub-btn");
        // donateBtn.addEventListener("click",()=>{

        // })
        let userName = document.querySelector("#name").value;
        let userAmount = document.querySelector("#amount").value;
        function MakePayment(){
            let userName = document.querySelector("#name").value;
            let userAmount = document.querySelector("#amount").value;
            // if(userName !=="" && userAmount !==""){
                console.log(userName)
                console.log(userAmount)
                var options = {
                  "key": "rzp_test_IgZLQQBRAjqrlI", // Enter the Key ID generated from the Dashboard
                //   key: "rzp_live_SmwguoXr3VsU84", // Enter the Key ID generated from the Dashboard
                  amount: userAmount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                  currency: "INR",
                  name: userName,
                  description: "The Sparks Foundation",
                  image: "https://i.ibb.co/nCXVp2D/sparkslogo.png",
                  // "order_id": "order_Ef80WJDPBmAeNt", //Pass the `id` obtained in the previous step
                  // "account_id": "acc_Ef7ArAsdU5t0XL",
                  handler: function (response) {
                    // alert(response.razorpay_payment_id);
                    // alert(response.razorpay_order_id);
                    // alert(response.razorpay_signature)
                    jQuery.ajax({
                      // type:"POST",
                      // url:"payment.php",
                      // data:"pay_id="+response.razorpay_payment_id+"&amount="+amount+"&name="+name,
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
            // e.preventDefault();
        }
                // var options = {
                //     "key": "rzp_test_IgZLQQBRAjqrlI", // Enter the Key ID generated from the Dashboard
                //     "amount": userAmount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                //     "currency": "INR",
                //     "name": userName,
                //     "description": "Test Transaction",
                //     "image": "https://i.ibb.co/nCXVp2D/sparkslogo.png",
                //     "handler": function (response){
                //         alert(response.razorpay_payment_id);
                //         alert(response.razorpay_order_id);
                //         alert(response.razorpay_signature)
                //     }
                // };
                // var rzp1 = new Razorpay(options);
                //     rzp1.open();
                // }
            // }
        // }
        // else{
        //     console.log("error")
        // }
    }
 