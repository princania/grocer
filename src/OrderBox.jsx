import React from "react";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

export default function OrderBox(){
    return (
        <div className="bg-gradient-to-br from-blue-400 to-blue-200 m-5 p-2 rounded-lg shadow-lg ">
            <h2 className="text-white heading-font p-2 text-xl font-bold">Order List <FormatListBulletedIcon /></h2>
            <div className="m-3">
                <textarea name="orderlist" className="resize-y w-full rounded-lg p-4" id="textArea" placeholder="Item - price/quantity&#13;&#10;Example :-&#13;&#10;Aalu - 3kg&#13;&#10;Blue lays - 2p"></textarea>
            </div>
        </div>
    );
}