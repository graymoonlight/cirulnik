import React from 'react';
import '../Styles/Checkpoint.css';
import timeIcon from '../Images/SocialIcons/time.svg';

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
            <button className='check_btn' onClick={(e) => { e.stopPropagation(); openTask(checkpoint); }}>
                {checkpoint.completed && checkpoint.inReview
                    ? (
                        <>
                            Задание проверяется
                            <img src={timeIcon} alt="time icon" style={{ position: 'absolute', marginLeft: '5px' }} />
                        </>
                    )
                    : 'Посмотреть задание'}
            </button>
        </div>
    );
};

export default Checkpoint;