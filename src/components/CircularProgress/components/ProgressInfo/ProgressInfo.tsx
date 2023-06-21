import { MouseEventHandler, useEffect, useRef } from 'react';
import { tests } from '../../../../mocks/tests';
import './ProgressInfo.css';
import { ProgressCard } from './components';

import './ProgressInfo.css';

interface IProgressInfoProps {
  show: boolean;
}

export const ProgressInfo = ({show = false}: IProgressInfoProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

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
            <p>Workflow name: xxxx</p>
            <p>Status: Test 2 of 4</p>
            <p>Estimated remaining time: 02:30:15</p>
          </div>
          <div className="info-dialog-list-wrapper">
          <div className="info-dialog-list-title">Test</div>
            <div className="info-dialog-list">
              {tests.map((t) => <ProgressCard key={t.id} info={t}/>)}
              </div>
            </div>
          </div>
      </dialog>
    )
}
