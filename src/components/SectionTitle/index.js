import React from 'react'
import './SectionTitle.css'

const SectionTitle = (props) => {
    return (
        <div className={`wpo-section-title ${props.s2Class}`}>
            <div className="section-header">
                <h2 className="section-title">
                    {props.MainTitle}
                </h2>
                <p className="section-subtitle" style={{ whiteSpace: 'pre-line' }}>
                    {props.subTitle}
                </p>
            </div>
        </div>
    )
}

export default SectionTitle;