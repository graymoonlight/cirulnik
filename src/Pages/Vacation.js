import React, { useState } from 'react';
import Checkpoint from '../Components/Checkpoint';
import TaskModal from '../Components/TaskModal';
import CongratulationsModal from '../Components/CongratulationsModal';
import '../Styles/Vacation.css';

const Vacation = () => {
    const [checkpoints, setCheckpoints] = useState([
        { id: 1, title: 'НАЗВАНИЕ ЗАДАНИЯ', completed: false, completedText: '', inReview: false },
        { id: 2, title: 'НАЗВАНИЕ ЗАДАНИЯ', completed: false, completedText: '', inReview: false },
        { id: 3, title: 'НАЗВАНИЕ ЗАДАНИЯ', completed: false, completedText: '', inReview: false },
        { id: 4, title: 'НАЗВАНИЕ ЗАДАНИЯ', completed: false, completedText: '', inReview: false },
    ]);
    const [currentTask, setCurrentTask] = useState(null);
    const [showCongratulations, setShowCongratulations] = useState(false);

    const openTask = (checkpoint) => {
        setCurrentTask(checkpoint);
    };

    const completeCheckpoint = (id) => {
        setCheckpoints(prevCheckpoints =>
            prevCheckpoints.map((cp, index) => 
                cp.id === id 
                    ? { ...cp, completed: true, completedText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', inReview: true } 
                    : index === id - 2 
                        ? { ...cp, completedText: 'Задание выполнено', completed: false, inReview: false }
                        : cp
            )
        );
    };

    const handleCloseTaskModal = () => {
        const isLastCheckpoint = currentTask && currentTask.id === checkpoints[checkpoints.length - 1].id;
        setCurrentTask(null);
        if (isLastCheckpoint) {
            setShowCongratulations(true);
        }
    };

    const handleCloseCongratulationsModal = () => {
        setShowCongratulations(false);
    };

    return (
        <div className="job-page">
            <h1>Вакансии</h1>
            <div className="map">
                {checkpoints.map((checkpoint) => (
                    <Checkpoint
                        key={checkpoint.id}
                        checkpoint={checkpoint}
                        openTask={openTask}
                    />
                ))}
            </div>
            {currentTask && (
                <TaskModal
                    task={currentTask}
                    onClose={handleCloseTaskModal}
                    onComplete={completeCheckpoint}
                    isLastCheckpoint={currentTask.id === checkpoints[checkpoints.length - 1].id}
                />
            )}
            {showCongratulations && (
                <CongratulationsModal onClose={handleCloseCongratulationsModal} />
            )}
        </div>
    );
};
export default Vacation;