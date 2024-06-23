import React, { useState } from 'react';
import '../Styles/TaskModal.css';

const TaskModal = ({ task, onClose, onComplete}) => {
    const [answer, setAnswer] = useState('');
    const [file, setFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = () => {
        console.log('Answer:', answer);
        console.log('File:', file);
        setSubmitted(true);
        onComplete(task.id);
    };

    return (
        <div className="task-modal">
            <div className="modal-content">
                {submitted ? (
                    <div className="thank-you-message">
                        <p>Спасибо за ответ! Наши HR его проверят и в скором времени вам откроется доступ к следующему этапу.</p>
                        <button onClick={onClose}>Закрыть</button>
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
                        <div className="modal-actions">
                            <input type="file" onChange={handleFileChange} />
                            <button onClick={handleSubmit}>Отправить ответ</button>
                            <button onClick={onClose}>Закрыть</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default TaskModal;