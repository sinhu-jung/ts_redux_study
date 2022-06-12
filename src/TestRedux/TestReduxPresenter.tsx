import React, { FunctionComponent } from 'react';

type notify = {
    onError: () => {},
    onSuccess: () => {},
    onWarning: () => {},
    onInfo: () => {}
}

const TestReduxPresenter: FunctionComponent<notify> = 
    ({onError, onSuccess, onWarning, onInfo}) => {
    return (
        <div>
            <button onClick={onSuccess}>success</button>
            <button onClick={onWarning}>warning</button>
            <button onClick={onError}>error</button>
            <button onClick={onInfo}>info</button>
        </div>
    );
};

export default TestReduxPresenter;