import { MouseEventHandler, useEffect, useRef } from 'react';
import './ProgressInfo.css';
import { ProgressCard } from './components';

import './ProgressInfo.css';
import { IPipeline } from '../../../../typings';
import { convertMsToTime } from '../../../../utils/convertMsToTime';

interface IProgressInfoProps {
  show: boolean;
  pipeline: IPipeline;
  currentExecution: number | null;
}

export const ProgressInfo = ({show = false, pipeline, currentExecution}: IProgressInfoProps) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const currentIndex = pipeline.tests.findIndex((t) => t.id === currentExecution) + 1;

  useEffect(() => {
    const panel = dialog.current;
    if (panel) {
      show ? panel.showModal() : panel.close();
    }
  }, [show]);

    const preventClosingOnClick: MouseEventHandler<HTMLDialogElement> = (e) => {
      e.stopPropagation()
    };

    return (
      <dialog
        ref={dialog}
        className="info-dialog"
        onClick={preventClosingOnClick}
        aria-modal
        role="dialog"
      >
        <div className="info-dialog-inner">
        <div className="info-dialog-title">Workflow</div>
          <div className="info-dialog-header">
            <p>Workflow name: {pipeline.name}</p>
            <p>Status: Test {currentIndex} of {pipeline.tests.length}</p>
            <p>Estimated remaining time: {convertMsToTime(pipeline.timeElapsed)}</p>
          </div>
          <div className="info-dialog-list-wrapper">
          <div className="info-dialog-list-title">Test</div>
            <div className="info-dialog-list">
              {pipeline.tests.map((t) => (
                <ProgressCard
                  key={t.id}
                  info={t}
                  active={currentExecution === t.id}
                />))
              }
              </div>
            </div>
          </div>
      </dialog>
    )
}
