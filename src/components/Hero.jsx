import React from 'react';

export const Hero = () => {
    return (
        <React.Fragment>
            <div className="container-fluid p-5 text-center bg-secondary">
                <h1 className='mt-2'><q>We create projects to inspire youth.</q></h1>
                <p>We believe the youth is the hope of our future!</p>
                <button className='btn btn-primary'>Browse Projects</button>
            </div>
        </React.Fragment>
    )
}