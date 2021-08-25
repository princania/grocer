import React from "react";
import HelpIcon from '@material-ui/icons/Help';
import StoreIcon from '@material-ui/icons/Store';

export default function TopHeader(){

    return (
        <div className="p-3 z-10 text-white font-bold text-2xl bg-blue-500 rounded-b-xl shadow-2xl fixed w-full top-0">
            <h1 className="inline-block heading-font"><StoreIcon /> Rasan</h1>
        <HelpIcon className="float-right" onClick={event => window.location.href='#About'} />
        </div>
    );
}
