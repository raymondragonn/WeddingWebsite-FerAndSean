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
                {props.confirmation && (
                    <p className="section-confirmation" style={{ 
                        color: '#000', 
                        fontSize: '20px', 
                        fontWeight: '500',
                        marginTop: '10px',
                        fontStyle: 'italic'
                    }}>
                        {props.confirmation}
                    </p>
                )}
            </div>
        </div>
    )
}

export default SectionTitle;