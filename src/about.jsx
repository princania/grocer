import React from "react";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

export default function About(){
    return(
        <div id="About" className="m-5 p-2 border-8 border-blue-300 rounded-lg About">
        <h1 className="heading-font text-2xl text-blue-500 font-bold pt-2">About us</h1><br />
            <div>
                <h2 className="font-bold text-blue-400 text-lg">How we work?</h2>
                <p>This involves 4 simple steps:-</p>
                <p>Step 1: We receive your order</p>
                <p>Step 2: Delivery Boy goes for shopping</p>
                <p>Step 3: He delivers the order</p>
                <p>Step 4: He receives the order</p>
            </div><br />
            <div>
                <h2 className="font-bold text-blue-400 text-lg">Do we charge extra?</h2>
                <p>Yes, we do charge some extra amount as a delivery charge including the service fee, it's usually anywhere between 15 to 25 Rs depending upon the distance between your home and the nearest shop</p>
            </div><br />
            <div>
                <h2 className="font-bold text-blue-400 text-lg">Where do we buy the items from?</h2>
                <p>We buy it from the shop nearest to your home that has all the  items you ordered.</p>
            </div><br />
            <h2 className="font-bold text-blue-400 text-lg">Who are we?</h2>
            <p>We are some collage student trying out a startup idea, a friendly neighbourhood entrepreneur.<InsertEmoticonIcon /> You can mail us at fulltimeshops@gmail.com or if it's an emergency you can call us at 7488524564</p>
        </div>
    );
}