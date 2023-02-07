export default async function displayPay() {
 const data = await fetch("http://localhost:8888/razorpay",{
    method:"POST",
 }).then((t)=>t.json())
 console.log(data);
 //options
    const options={
        key:"rzp_test_T8H9kmwlcJF5V1",
        currency:data.currency,
        amount:data.amount,
        description:'transaction id ',
        order_id:data.id,
        handler:function(res){
            alert("payment Id:"+res.razorpay_payment_id)
            alert("order Id:"+res.razorpay_order_id)
        },
        // prefill:{
        //     name:"aman",
        //     email:"adixit770@gmail.com",
        //     phone:"9039826882",
        // }
    }
    const payment = new window.Razorpay(options);
    payment.open();
}