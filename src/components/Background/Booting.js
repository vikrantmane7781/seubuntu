import React from 'react'

export default function BootingScreen(props) {

    return (
        <div style={(props.visible || props.isShutDown ? { zIndex: "100" } : { zIndex: "-20" })} className={(props.visible || props.isShutDown ? " visible opacity-100" : " invisible opacity-0 ") + " absolute duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-white"}>
            <img className="md:w-1/4 w-1/2" src="./themes/Yaru/status/cof_orange_hex.svg" alt="Ubuntu Logo" />
            <div className="w-10 h-10 flex justify-center items-center rounded-full outline-none cursor-pointer" onClick={props.turnOn} >
                {(props.isShutDown
                    ? <div className="bg-white rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300"><img className="w-8" src="./themes/Yaru/status/power-button.svg" alt="Power Button" /></div>
                    : <img className={" w-10 " + (props.visible ? " animate-spin " : "")} src="./themes/Yaru/status/black_load.svg" alt="Ubuntu Process Symbol" />)}
            </div>
            <img className="md:w-1/5 w-1/2 " src="./themes/Yaru/status/ubuntu_black_hex.svg" alt="Ubuntu Name" />
            <div className="text-black mb-20 flex flex-row justify-between space-x-3">
                <a className="underline" href="https://github.com/vikrantmane7781" rel="noreferrer noopener" target="_blank"><img class="object-contain h-7 " src="./themes/Yaru/status/git.svg"/></a>
                
                <a href="https://www.linkedin.com/in/nishant-mane-588648204/" rel="noreferrer noopener" target="_blank" className="underline"><img class="object-contain h-7 " src="./themes/Yaru/status/link2.png"/></a>
            </div>
        </div>
    )
}


