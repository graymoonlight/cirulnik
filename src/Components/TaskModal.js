import React, { useState } from 'react';
import '../Styles/TaskModal.css';
import pencilIcon from '../Images/SocialIcons/pencil.svg';

const TaskModal = ({ task, onClose, onComplete }) => {
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
                        <div className="task-header">
                            <div className='container_pencil'><img src={pencilIcon} alt="Pencil Icon" className="pencil-icon" /></div>
                            <h2>{task.title}</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className='second'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt<br /> ut labore et dolore magna aliqua?</p>
                        <p className='answer_title'>Ваш ответ:</p>
                        <textarea
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
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