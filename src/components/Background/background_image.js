import React from 'react'

export default function BackgroundImage(props) {
    const bg_images = {
        "wall-1": './images/wallpapers/anime.jpg',
        "wall-2": './images/wallpapers/minified/jaged.jpg',
        "wall-3": './images/wallpapers/minified/ph3.jpg',
        "wall-4": './images/wallpapers/minified/pr2.jpg',
        "wall-5": './images/wallpapers/minified/k1.jpeg',
        "wall-6": './images/wallpapers/minified/pr.jpg',
    };
    return (
        <div style={{ backgroundImage: `url(${bg_images[props.img]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">
        </div>
    )
}
