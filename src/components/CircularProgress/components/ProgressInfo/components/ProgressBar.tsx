import { useEffect, useRef } from 'react';
import './ProgressBar.css';

export const ProgressBar = ({value}: {value: number}) => {
  const progressTrack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressTrack.current) {
      const { size } = progressTrack.current.dataset;
      progressTrack.current.style.width = `${size}%`;
    }
  }, [value]);

  return (
    <div className="progress-bar">
      <div data-size={value} className="progress-bar-inner" ref={progressTrack}></div>
    </div>
  );
}
