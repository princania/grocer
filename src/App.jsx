import React from "react";
import TopHeader from "./Header";
import DeliveryDetails from "./DeliveryDetails";
import OrderBox from "./OrderBox";
import OrderButton from "./OrderButton";

function App(){
    return (
        <div>
            <TopHeader />
            <div className="relative top-14">
                <DeliveryDetails />
                <OrderBox />
                <OrderButton />
            </div>
        </div>
    );
}

export default App;