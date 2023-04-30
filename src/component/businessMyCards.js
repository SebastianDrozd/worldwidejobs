import React from 'react'
import "../css/businessMyCards.css"
const BusinessMyCards = () => {
    return (
        <>
            <div className='business-cards-container'>
                <h1>My Info</h1>
                <div className='business-cards'>
                    <div className='business-card'>
                    <i class="fa fa-file-text-o" aria-hidden="true"></i>
                        <h2>New Applications</h2>
                        <p>Business Name</p>
                    </div>
                    <div className='business-card'>
                        <h2>New Saved Jobs</h2>
                        <p>Business Name</p>
                    </div>
                    <div className='business-card'>
                        <h2>New Messages</h2>
                        <p>Business Name</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessMyCards