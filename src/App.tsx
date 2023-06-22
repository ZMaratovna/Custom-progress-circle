import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {produce} from "immer";

import './App.css';

import { CircularProgress } from './components/CircularProgress';
import { ProgressInfo } from './components/CircularProgress/components/ProgressInfo';
import { pipelineSelector } from './recoil/pipeline';
import { testsListAtom } from './recoil/tests';
import { IPipeline } from './typings';
import { createPipelineStream } from './utils/pipelineCreator';

function App() {
  const [showDetails, setShowDetails] = useState(false); 
  const [tests, setTests] = useRecoilState(testsListAtom);
  const pipeline = useRecoilValue(pipelineSelector);
  const [currentExecutionTest, setCurrentExecutionTest] = useState<number | null>(null);

  async function startRunningPipeline(pipeline: IPipeline) {
    const stream = createPipelineStream(pipeline);
    for await (const value of stream) {
      const testIndex = tests.findIndex((t) => t.id === value.id);
      setTests(produce((prevTests) => {
        prevTests[testIndex] = value;
      }));
      if (currentExecutionTest !== value.id) {
        setCurrentExecutionTest(value.id)
      }
    }
  }
  useEffect(() => {
    if (pipeline?.tests) {
      startRunningPipeline(pipeline);
    }
  }, []);

  return (
    <>
      <div
        className="App"
        onClick={() => {setShowDetails(false)}}
      >
        <CircularProgress
          size={400}
          value={Math.floor(pipeline.progress * 100)}
          indicatorColors={["#e91e63", "#673ab7"]}
          toggleDetailsVisibility={() => setShowDetails(!showDetails)}
          currentExecution={currentExecutionTest}
          pipeline={pipeline}
        />
      </div>
      <ProgressInfo
        show={showDetails}
        pipeline={pipeline}
        currentExecution={currentExecutionTest}/>
    </>
  )
}

export default App
