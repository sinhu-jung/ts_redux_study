import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux';

const NotifyTest = () => {

    const message = useSelector((state:RootState)=> state.notifyReducer.message);
      
    return (
        <div>
            {message}
        </div>
    );
};

export default NotifyTest;