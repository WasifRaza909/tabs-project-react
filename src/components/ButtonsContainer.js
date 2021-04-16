import React from 'react';

const ButtonsContainer = ({ value, jobs, buttonHandler }) => {
  return (
    <div className='btn-container'>
      {jobs.map((job, index) => (
        <button
          className={`job-btn ${index === value && 'active-btn'}`}
          key={job.id}
          onClick={() => buttonHandler(index)}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
