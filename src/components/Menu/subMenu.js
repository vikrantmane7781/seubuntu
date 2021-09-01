import React from 'react'

function DefaultMenu(props) {

    let devider = () => {
        return (
            <div className="flex justify-center w-full">
                <div className=" border-t border-gray-900 py-1 w-2/5"></div>
            </div>
        );
    }

    return (
        <div id="default-menu" className={(props.active ? " block " : " hidden ") + " w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm"}>
            
            {devider()}
            <div onClick={() => { localStorage.clear(); window.location.reload() }} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🟢</span> <span className="ml-2">Reset Ubuntu</span>
            </div>
        </div>
    )
}

export default DefaultMenu
