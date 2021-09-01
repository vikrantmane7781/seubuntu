import React,{useEffect,useState} from 'react';
import Icons from './Icons';
import Card from './Card';

export default function Navbar({...props}) {
    //
    const[arrowValue,setArrowValue]=useState(false);
    const[focus,setFocus]=useState(false);

   //date day time
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

   //arrow direction value
    

    return (
        <div className="absolute top-0 right-0 w-screen bg-ub-grey bg-opacity-70 shadow-sm flex flex-nowrap justify-between items-center main-navbar-vp text-ubt-grey select-none z-50 " >
           <div tabIndex="0" className={
						'text-sm pl-4 pr-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1'}>
                Activities
            </div>
            <div tabIndex="0" className={
						'text-sm pl-4 pr-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1'}>
            {strTime}
            </div>
             <div tabIndex="0" className={"text-sm pl-4 pr-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1"}
             onFocus={() => {setFocus(true);
             setArrowValue(true)}}>
                <Icons 
                direction={arrowValue}
                arrowUpDown={()=>{
                    setArrowValue(false)
                }}/>

                <Card 
                visible={focus}
                shutDown={props.shutDown}
                lockScreen={props.lockScreen}
                toggleVisible={() => {
                
                    (setFocus(false) );
                }}/>
             </div>
            
        </div>
    )
}


