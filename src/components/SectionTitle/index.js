import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className={`wpo-section-title ${props.s2Class}`}>
            <span style={{ 
                display: 'block', 
                fontSize: '25px', 
                fontWeight: '400', 
                textAlign: 'center', 
                color: '#333',
                marginBottom: '10px'
            }}>
                {props.subTitle}
            </span>
            <h2 style={{ 
                fontFamily: 'Sail', 
                fontSize: '50px', 
                fontWeight: '400', 
                margin: '0', 
                color: '#333',
                marginTop: '10px'
            }}>
                {props.MainTitle}
            </h2>
        </div>
    )
}

export default SectionTitle;