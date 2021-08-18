import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function DeliveryDetails(){

    const[name, setName]=React.useState("");
    const[arrowDirection, setArrowDirection]=React.useState(false);
    
    //Flipping the arrow when clicked
    function handleClick()
    {
        setArrowDirection(!arrowDirection);
    }

    function handleChange(event){
        const val=event.target.value;
        const value=val.charAt(0).toUpperCase() + val.slice(1)
        setName(value);
    }

    return (
        <div>
        <h1 className="text-3xl m-5 text-blue-500 font-bold heading-font">Hi {name}</h1>
        <div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-200 m-5 p-2 rounded-lg shadow-lg">
                <h2 className="text-white heading-font p-2 text-xl font-bold" onClick={handleClick}>Delivery Details<button className="float-right animate-bounce"><ExpandMoreIcon className={arrowDirection?"transform rotate-180":""} /></button></h2>
                    <div className="p-3">
                        <form className="space-y-1">
                            <div>
                            <label for="name" className="text-base text-white "><h3 className="inline-block ">Name</h3></label>
                            <input id="name" name="name" onChange={handleChange} className="border-blue-400 mb-0 w-52 bg-blue-100 shadow-inner float-right p-px  rounded-lg text-base" value={name} />
                            </div>

                            <div>
                            <label for="number" className="text-base text-white "><h3 className="inline-block">Phone</h3></label>
                            <input id="number" name="number" className="border-blue-400 float-right p-px w-52 bg-blue-100 shadow-inner rounded-lg text-base" />
                            </div>
                            <div>
                            <label for="address" className="text-base text-white "><h3 className="inline-block">Address</h3></label>
                            <input id="address" name="address" className="border-blue-400 float-right p-px w-52 shadow-inner bg-blue-100 rounded-lg text-base" />
                            </div>
                        </form>
                    </div>
            </div>
        </div>
        </div>
    );
}