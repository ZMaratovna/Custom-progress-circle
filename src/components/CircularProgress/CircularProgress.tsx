import { useRef } from 'react';
import './CircularProgress.css';
import { InfoIcon } from './InfoIcon';

interface ICircularProgressProps {
    size?: number;
    value?: number;
    trackWidth?: number;
    indicatorColors?: string[];
    indicatorCap?: 'butt' | 'round' | 'square',
    labelColor?: string;
    spinnerSpeed?: number;
    toggleDetailsVisibility?: () => void;
}

export const CircularProgress = (props: ICircularProgressProps) => {
    const {
        size = 400,
        value = 50,
        indicatorColors = [`#07c`],
        indicatorCap = 'round',
        // labelColor = `#333`,
        trackWidth = 37,
        toggleDetailsVisibility = () => {},
      } = props;
    const svgRef = useRef<SVGSVGElement>(null);
    console.log(svgRef?.current?.style);
    
    const progressSize = size - 2 * trackWidth;
    const center = progressSize / 2,
    radius = center -  trackWidth / 2,
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - value) / 100)
  
    return (
      <>
        <div
          className="progress-wrapper"
          style={{ width: size, height: size  }}
        >
          <svg
            ref={svgRef}
            className="progress" 
            style={{ width: `${progressSize}px`, height: `${progressSize}px` }}
            viewBox={`0 0 ${progressSize} ${progressSize}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor={indicatorColors[0]} />
                <stop offset="100%" stopColor={indicatorColors[1] || indicatorColors[0]} />
              </linearGradient>
            </defs>
            <circle
              id="progressIndicator"
              className='progress-indicator'
              fill="#FFFFFF"
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={`${trackWidth}px`}
              strokeDasharray={`${dashArray}px`}
              strokeDashoffset={`${dashOffset}px`}
              strokeLinecap={indicatorCap}
            />
          </svg>
          <div className="progress-inner-content">
            <div className="progress-inner-content-header">Test 3 of 4</div>
            <div className="progress-inner-content-time-header">Estimated time remaining:</div>
            <div className="progress-inner-content-time-counter">04:35</div>
            <InfoIcon className="progress-inner-content-icon" onClick={toggleDetailsVisibility}/>
          </div>
        </div>
      </>
      )
}
