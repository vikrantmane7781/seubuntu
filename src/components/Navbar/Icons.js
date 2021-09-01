import React from 'react'
import onClickOutside from 'react-onclickoutside';

function Icons({...props}) {
  Icons.handleClickOutside = () => {
    props.arrowUpDown();
}

    var arrowDiv=<><div className={"arrow-custom-"+(props.direction?'down':'up')}></div></>
    return (
        <div className="flex items-center justify-center">
            <span className="mx-1.5">
            <img
          src='./themes/Yaru/status/network-wireless-signal-good-symbolic.svg'
          alt="wifi"
          className="inline status-symbol"
             />
            </span>
            <span className="mx-1.5">
            <img
          src='./themes/Yaru/status/audio-volume-medium-symbolic.svg'
          alt="sound"
          className="inline status-symbol"
             />
            </span>
            <span className="mx-1.5">
            <img
          src= './themes/Yaru/status/battery-good-symbolic.svg'
          alt="bet"
          className="inline status-symbol"
             />
            </span>
            <span className="mx-1.5">
            {arrowDiv}
            </span>
        </div>
    )
}
const clickOutsideConfig = {
  handleClickOutside: () => Icons.handleClickOutside
};
export default onClickOutside(Icons,clickOutsideConfig);