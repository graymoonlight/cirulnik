import React from 'react';
import '../Styles/CongratulationsModal.css';

const CongratulationsModal = ({ onClose }) => {
    const handleGoToTest = () => {
        console.log('Redirecting to test page...');
    };

    return (
        <div className="congratulations-modal">
            <h2>Поздравляем!🎉</h2>
            <p>Поздравляем вы завершили обучение! Давайте закрепим знания итоговым тестированием.</p>
            <div className="modal-actions">
                <button onClick={handleGoToTest}>Перейти к тестированию</button>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default CongratulationsModal;