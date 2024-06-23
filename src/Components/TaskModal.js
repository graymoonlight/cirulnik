import React, { useState } from 'react';
import '../Styles/TaskModal.css';

const TaskModal = ({ task, onClose, onComplete}) => {
    const [answer, setAnswer] = useState('');
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = () => {
        console.log('Answer:', answer);
        setSubmitted(true);
        onComplete(task.id);
    };

    return (
        <div className='task-modal'>
            <div className='modal-content'>
                {submitted ? (
                    <div className='thank-you-message'>
                        <h2>Спасибо за ответ!</h2>
                        <p>Наши HR его проверят и в скором времени вам откроется доступ к следующему этапу.</p>
                        <button onClick={onClose}>Продолжить</button>
                    </div>
                ) : (
                    <>
                        <h2>{task.title}</h2>
                        <p>Задание: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <textarea
                            placeholder="Введите ваш ответ здесь..."
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        ></textarea>
                        <div className='modal-actions'>
                            <button onClick={handleSubmit}>Отправить</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default TaskModal;