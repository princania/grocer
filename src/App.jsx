import React from "react";
import TopHeader from "./Header";
import DeliveryDetails from "./DeliveryDetails";
import OrderBox from "./OrderBox";
import OrderButton from "./OrderButton";
import About from "./about"
import emailjs from 'emailjs-com';

function App(){

    function sendEmail(e) {
        alert("Order Recieved");
        e.preventDefault();
    
        emailjs.sendForm('service_qvtkmie', 'template_swmw39i', e.target, 'user_OVCRDeCxGi5lYUTiwi4fC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <div>
            <TopHeader />
            <div className="relative top-14">
            <form onSubmit={sendEmail}>
                <DeliveryDetails />
                <OrderBox />
                <OrderButton />
            </form>
            <About />
            </div>
        </div>
    );
}

export default App;
