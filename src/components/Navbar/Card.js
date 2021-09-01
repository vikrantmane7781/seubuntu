import React, { useState } from 'react'
import onClickOutside from 'react-onclickoutside';
import Slider from './Slider';


 function Card({...props}) {

    var arrowDiv=<><div className="arrow-custom-right"></div></>
 
  Card.handleClickOutside = () => {
      props.toggleVisible();
  }
  //brightness
  //const brightness_level=localStorage.getItem('brightness-level') 
  const[defaultBrigth,setDefaultBrightness]=useState(100);
  
  const handleBrightness=(e)=>{
	setDefaultBrightness(e.target.value);
	localStorage.setItem('brightness-level', e.target.value);
	document.getElementById('main-wall').style.filter = `brightness(${3 / 400 * e.target.value + 0.25})`;
  }
    return (
        <div
        className={
            'absolute bg-ub-cool-grey rounded-md py-4 top-9 right-3 shadow border-black border border-opacity-20 status-card'+(props.visible ? ' visible animateShow' : ' invisible')}>
            
            <div className="absolute w-0 h-0 -top-1 right-6 top-arrow-up" />
				<div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
					<div className="w-8">
						<img src='./themes/Yaru/status/audio-headphones-symbolic.svg' alt="ubuntu headphone" />
					</div>
					<Slider
						//onChange={}
                        className="ubuntu-slider w-2/3"
						//value={}
						name="headphone_range"
					/>
				</div>

            {/**  brightness */}

            <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
					<div className="w-8">
						<img src='./themes/Yaru/status/display-brightness-symbolic.svg' alt="ubuntu brightness" />
					</div>
					<Slider
						onChange={e=>{handleBrightness(e)}}
						className="ubuntu-slider w-2/3"
						name="brightness_range"
						value={defaultBrigth}
					/>
				</div>

                {/*  */}

                <div className="w-64 flex content-center justify-center">
					<div className="w-2/4 border-black border-opacity-50 border-b my-2 border-solid" />
				</div>
				<div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
					<div className="w-8">
						<img src="./themes/Yaru/status/network-wireless-signal-good-symbolic.svg" alt="ubuntu wifi" />
					</div>
					<div className="w-2/3 flex items-center justify-between text-gray-400">
						<span>Home Network</span>
						{arrowDiv}
					</div>
				</div>

                {/* */}
                <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
					<div className="w-8">
						<img src="./themes/Yaru/status/bluetooth-symbolic.svg" alt="ubuntu bluetooth" />
					</div>
					<div className="w-2/3 flex items-center justify-between text-gray-400">
						<span>Bluetooth: Off</span>
						{arrowDiv}
					</div>
				</div>
				<div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
					<div className="w-8">
						<img src="./themes/Yaru/status/battery-good-symbolic.svg" alt="ubuntu battery" />
					</div>
					<div className="w-2/3 flex items-center justify-between text-gray-400">
						<span>Remaining (55%)</span>
						{arrowDiv}
					</div>
				</div>
				<div className="w-64 flex content-center justify-center">
					<div className="w-2/4 border-black border-opacity-50 border-b my-2 border-solid" />
				</div>

                {/*-------------------------------*/}
                <div
					id="open-settings"
					className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20"
				>
					<div className="w-8">
						<img src="./themes/Yaru/status/emblem-system-symbolic.svg" alt="ubuntu settings" />
					</div>
					<div className="w-2/3 flex items-center justify-between">
						<span>Settings</span>
					</div>
				</div>
                {/*-------------------------------*/}
                <div
					onClick={props.lockScreen}
					className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20"
				>
					<div className="w-8">
						<img src="./themes/Yaru/status/changes-prevent-symbolic.svg" alt="ubuntu lock" />
					</div>
					<div className="w-2/3 flex items-center justify-between">
						<span>Lock</span>
					</div>
				</div>
				<div
					onClick={props.shutDown}
					className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20"
				>
					<div className="w-8">
						<img src="./themes/Yaru/status/system-shutdown-symbolic.svg" alt="ubuntu power" />
					</div>
					<div className="w-2/3 flex items-center justify-between">
						<span>Power Off / Log Out</span>
						{arrowDiv}
					</div>
				</div>
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => Card.handleClickOutside
  };
export default onClickOutside(Card,clickOutsideConfig);