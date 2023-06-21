import { useEffect, useState } from 'react'
import './App.css'
import { CircularProgress } from './components/CircularProgress'
import { ProcessingStatus, initialProcessingStatus, tests } from './mocks/tests';
import { ProgressInfo } from './components/CircularProgress/components/ProgressInfo';

function App() {
  // const [loading, setLoading] = useState(true)
  // const [progress, setProgress] = useState(0)
  // const loadingDuration = 3000 // 3 seconds

  // useEffect(() => {
  //   const loadingTimeout = setTimeout(() => {
  //     if (progress >= 100) return
  //     setProgress(progress + 1)
  //   }, loadingDuration / 100)
  //   if (progress === 100) {
  //     setLoading(false)
  //   }
  //   return () => {
  //     clearTimeout(loadingTimeout)
  //   }
  // }, [progress, loading])

  const [status, setStatus] = useState<ProcessingStatus>(initialProcessingStatus);
  const [showDetails, setShowDetails] = useState(false);
  const totalSize = tests.reduce((total: number, test) => total + test.size, 0);
  let uploadedSize = 0;
  console.log("show details", showDetails);

  const startProcessingData = () => {
    tests.forEach((test) => {
      const timeStarted = Number(new Date());
      let timeElapsed: number;
      let uploadSpeed: number;

      const interval = setInterval(() => {
        uploadedSize += 100; // Simulating progress increment
        test.processed += 100;
        test.progress = Math.ceil(test.processed / test.size) * 100;
        test.done = test.processed === test.size;
        const totalProgress = (uploadedSize / totalSize) * 100;

        // setStatus(+currentProgress.toFixed(2));

        if (totalProgress === 100) {
          clearInterval(interval);
          clearInterval(timecontroller);
        }
      }, 500); // Simulating progress every 0.5 seconds

      const timecontroller = setInterval(() => {
        timeElapsed = Number((new Date())) - timeStarted; // Assuming that timeStarted is a Date Object
        uploadSpeed = uploadedSize / (timeElapsed / 1000); // Upload speed in second
      
        // `callback` is the function that shows the time to user.
        // The only argument is the number of remaining seconds. 
        test.timeToEnd = (test.size - test.processed) / uploadSpeed; 
      }, 1000)

    });
  }

  useEffect(() => {
    startProcessingData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="App"
        onClick={() => {setShowDetails(false)}}
      >
        <CircularProgress
          size={400}
          // value={status.progress}
          indicatorColors={["#e91e63", "#673ab7"]}
          toggleDetailsVisibility={() => setShowDetails(!showDetails)}
        />
      </div>
      <ProgressInfo show={showDetails}/>
      </>
  )
}

export default App
