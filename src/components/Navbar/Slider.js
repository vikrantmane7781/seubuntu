import React from 'react'

export default function Slider({...props}) {
	
    return (
        <input
				type="range"
				onChange={props.onChange}
				className={props.className}
				//name={this.props.name}
				min="0"
				max="100"
				value={props.value}
				step="1"
			/>
		
    )
	
}

 
