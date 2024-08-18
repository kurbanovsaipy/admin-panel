import React, { useEffect } from 'react';
import Store from '../../Store';

const Magazine = () => {

    useEffect(() => {
        Store.setListener('title', 'Магазин')
    }, [])

    return (
        <div className='store container'>
            
        </div>
    );
};

export default Magazine;