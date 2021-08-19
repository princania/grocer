import React from "react";

export default function OrderButton(){
    return(
        <div className="text-center">
            <button type="submit" value="Order" className="with bg-gradient-to-br from-blue-600 to-blue-300 p-3 text-xl text-white rounded-lg shadow-2xl heading-font">CONFIRM ORDER</button>
        </div>
    );
}