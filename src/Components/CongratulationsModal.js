import React from 'react';
import '../Styles/CongratulationsModal.css';

const CongratulationsModal = ({ onClose }) => {

    return (
        <div className='congratulations-modal'>
            <div className='modal-content'>
                <h2 className='modal-content_pozdr'>Поздравляем!🎉</h2>
                <p>Поздравляем вы завершили обучение! Давайте закрепим знания итоговым тестированием.</p>
                <div className='modal-actions'>
                    <button onClick={onClose}>Перейти к тестированию</button>
                </div>
            </div>
        </div>
    );
};

export default CongratulationsModal;