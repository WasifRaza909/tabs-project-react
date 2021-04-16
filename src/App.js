import { useEffect, useState } from 'react';
import ButtonsContainer from './components/ButtonsContainer';
import JobInfo from './components/JobInfo';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const buttonHandler = (index) => {
    console.log(index);
    setValue(index);
  };

  const fetchData = async () => {
    const response = await fetch(url);

    const jsonData = await response.json();

    setJobs(jsonData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='section'>
      {loading ? (
        <h1 className='loading'>Loading...</h1>
      ) : (
        <>
          <div className='title'>
            <h2>experience</h2>
            <div className='underline'></div>
          </div>
          <div className='jobs-center'>
            {/* Buttons Container */}
            <ButtonsContainer
              value={value}
              jobs={jobs}
              buttonHandler={buttonHandler}
            />
            {/* Jobs */}
            <JobInfo job={jobs[value]} />
          </div>
          <button className='btn'>More Info</button>
        </>
      )}
    </section>
  );
}

export default App;
