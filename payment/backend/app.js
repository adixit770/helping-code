const app =require('express')();
const path = require('path');
const cors = require('cors');
const shortid = require('shortid');
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id:"rzp_test_T8H9kmwlcJF5V1",
    key_secret:"uin3LRpTyeoz1tcD1LrkOHZV",
   
})
app.use(cors());
app.post('/razorpay',async(req,res)=>{
    const payment_capture=1
   const  amount=500
   const  currency="INR"

const options={
    amount:amount*100,
    currency:currency,
    receipt:shortid.generate(),
    payment_capture
}
try{
const response = await razorpay.orders.create(options)
console.log(response);
res.send({
    id:response.id,
    currency:response.currency,
    amount:response.amount,
})
}
catch(err){
    console.log(err)
}
})

app.listen(8888,()=>{
    console.log('server is running')
})