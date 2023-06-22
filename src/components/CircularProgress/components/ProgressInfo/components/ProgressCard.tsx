import { useSetRecoilState } from 'recoil';
import { produce } from 'immer';

import { testsListAtom } from '../../../../../recoil/tests';
import { IProcess, Status } from '../../../../../typings';
import { convertToMinsSecs } from '../../../../../utils/convertMsToTime';
import { PauseIcon } from '../../../../icons/PauseIcon';
import { RunIcon } from '../../../../icons/RunIcon';
import { StopIcon } from '../../../../icons/StopIcon';
import { IconButton } from './IconButton';
import { ProgressBar } from './ProgressBar';

import './ProgressCard.css';

export const ProgressCard = ({info, active = false}: {info: IProcess, active: boolean}) => {
  const setTests = useSetRecoilState(testsListAtom);

  const ableToPause = active && info.status === Status.running;
  const ableToStop = active && (info.status === Status.running || info.status === Status.paused);
  const ableToResume = active && (info.status === Status.paused);

  const handlePause = () => {
    setTests(produce((prevTests) => {
      const index = prevTests.findIndex((t) => t.id === info.id);
      prevTests[index].status = Status.paused;
    }))
  }
  const handleStop = () => {
    setTests(produce((prevTests) => {
      const index = prevTests.findIndex((t) => t.id === info.id);
      prevTests[index].status = Status.stoped;
    }))
  }
  const handleRun = () => {
    setTests(produce((prevTests) => {
      const index = prevTests.findIndex((t) => t.id === info.id);
      prevTests[index].status = Status.running;
    }))
  }


  return (
      <div className="progress-card-wrapper">
        <div className="progress-card-content">
        <div className="progress-card-label">{info.name}</div>
        <div className="progress-card-status">
          {`${Math.floor(info.progress * 100)}%`}
          {
            info.completed
            ? <span className="progress-card-status-comment">Completed</span>
            : <span className="progress-card-status-comment">{active ? `${convertToMinsSecs(info.timeElapsed)} minutes remaining` : null}</span>
          }
        </div>
        <div className="progress-card-controls">
            {ableToPause && <IconButton onClick={handlePause}><PauseIcon /></IconButton>}
            {ableToStop && <IconButton onClick={handleStop}><StopIcon /></IconButton>}
            {ableToResume && <IconButton onClick={handleRun}><RunIcon /></IconButton>}
        </div>
        </div>
        <ProgressBar value={Math.floor(info.progress * 100)}/>
      </div>
  )
}
