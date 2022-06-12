import React from 'react';
import { useDispatch } from 'react-redux';
import { notifyError, notifyInfo, notifySuccess, notifyWarning } from '../redux/reducer/snackbar';
import TestReduxPresenter from './TestReduxPresenter';


const TestReduxContainer = () => {
    const dispatch = useDispatch();
    const onError = () => dispatch(notifyError("에러", 4000));
    const onSuccess = () => dispatch(notifySuccess("성공", 4000));
    const onWarning = () => dispatch(notifyWarning("경고", 4000));
    const onInfo = () => dispatch(notifyInfo("정보", 4000));


    return (
        <div>
            <TestReduxPresenter
                onError={onError}
                onSuccess={onSuccess}
                onWarning={onWarning}
                onInfo={onInfo}
            />
        </div>
    );
};

export default TestReduxContainer;