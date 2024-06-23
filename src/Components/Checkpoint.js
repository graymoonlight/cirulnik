import React from 'react';
import '../Styles/Checkpoint.css';

const Checkpoint = ({ checkpoint, openTask }) => {
    return (
        <div
            className={`checkpoint ${checkpoint.completed ? 'completed' : ''}`}
            onClick={() => openTask(checkpoint)}
        >
            <div>
                <h2>{checkpoint.title}</h2>
                {checkpoint.completedText && <p>{checkpoint.completedText}</p>}
            </div>
            <button onClick={(e) => { e.stopPropagation(); openTask(checkpoint); }}>
                {checkpoint.completed && checkpoint.inReview ? 'Задание проверяется' : 'Посмотреть задание'}
            </button>
        </div>
    );
};

export default Checkpoint;