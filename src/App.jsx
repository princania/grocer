import React from "react";
import TopHeader from "./Header";
import DeliveryDetails from "./DeliveryDetails";

function App(){
    return (
        <div>
            <TopHeader />
            <div className="relative top-14">
                <DeliveryDetails />
            </div>
        </div>
    );
}

export default App;