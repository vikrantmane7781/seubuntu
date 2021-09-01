import React,{useState,useEffect} from 'react';


export default function LockScreen(props) {

    const wallpapers = {
        "wall-1": './images/wallpapers/anime.jpg',
        "wall-2": './images/wallpapers/minified/jaged.jpg',
        "wall-3": './images/wallpapers/minified/ph3.jpg',
        "wall-4": './images/wallpapers/minified/pr2.jpg',
        "wall-5": './images/wallpapers/minified/k1.jpeg',
        "wall-6": './images/wallpapers/minified/pr.jpg',
    };

    if (props.isLocked) {
        window.addEventListener('click', props.unLockScreen);
        window.addEventListener('keypress', props.unLockScreen);
    };
    const [time, setTime] = useState(new Date());
    useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
        clearInterval(interval);
    };
    }, []);
   
   var hours=time.getHours();
   var day=time.getDay();
   var year=time.getFullYear();
   var minutes=time.getMinutes();
   var dat=time.getDate();
   var amOrpm=hours>=12 ? 'PM':'AM';
   hours = hours % 12;
   // 0 hours should 12
   hours = hours ? hours : 12; 
   minutes = minutes < 10 ? '0'+minutes : minutes;
   var mainTimer=hours+':'+minutes+' '+amOrpm;
   var dayName=['Sun','Mon','Tues','Wed','Thur','Fri','Sat']
   var strTime = dayName[day] +' '+dat+','+year+' '+mainTimer;

    return (
        <div id="ubuntu-lock-screen" style={{ backgroundImage: `url(${wallpapers[props.bgImgName]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center", zIndex: "100" }} className={(props.isLocked ? " visible translate-y-0 " : " invisible -translate-y-full ") + " absolute outline-none transform duration-500 select-none top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-opacity-50"}>
            <div className="lock-screen flex flex-col justify-center items-center text-white">
                <div className=" text-7xl">
                    {mainTimer}
                </div>
                <div className="mt-4 text-xl font-medium">
                    {[dayName[day] ," ", dat]}
                </div>
                <div className=" mt-16 text-base">
                    Click or Press a key to unlock
                </div>
            </div>
        </div>
    )
}
