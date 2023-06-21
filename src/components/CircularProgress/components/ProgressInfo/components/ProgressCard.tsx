import { Test } from '../../../../../mocks/tests';
import { ProgressBar } from './ProgressBar';

import './ProgressCard.css';

export const ProgressCard = ({info}: {info: Test}) => {
    return (
        <div className="progress-card-wrapper">
          <div className="progress-element-label">{info.name}</div>
          <div className="progress-element-status">{`${info.progress}% completed`}</div>
          <ProgressBar value={50}/>
          {/* <ProgressBar value={info.progress}/> */}
        </div>
    )
}
