/* eslint-disable react/react-in-jsx-scope */
import { useRef } from 'react'

import { InfoIcon } from '../icons/InfoIcon'
import { IPipeline } from '../../typings'
import { convertMsToTime } from '../../utils/convertMsToTime'

import './CircularProgress.css'

interface ICircularProgressProps {
  pipeline: IPipeline
  size?: number
  value?: number
  trackWidth?: number
  indicatorColors?: string[]
  indicatorCap?: 'butt' | 'round' | 'square'
  labelColor?: string
  spinnerSpeed?: number
  currentExecution?: number | null
  toggleDetailsVisibility?: () => void
}

export const CircularProgress = (
  props: ICircularProgressProps,
): JSX.Element => {
  const {
    pipeline,
    size = 400,
    value = 0,
    indicatorColors = [`#07c`],
    indicatorCap = 'round',
    currentExecution = null,
    trackWidth = 37,
    toggleDetailsVisibility = () => {
      return
    },
  } = props
  const svgRef = useRef<SVGSVGElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)

  const progressSize = size - 2 * trackWidth
  const center = progressSize / 2
  const radius = center - trackWidth / 2
  const dashArray = 2 * Math.PI * radius
  const dashOffset = dashArray * ((100 - value) / 100)
  const currentIndex =
    pipeline?.tests.findIndex((t) => t.id === currentExecution) + 1

  return (
    <>
      <div className="progress-wrapper" style={{ width: size, height: size }}>
        <div
          ref={handleRef}
          className="progress-dot"
          style={{ transform: `rotate(${3.6 * value}deg)` }}
        ></div>
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
              <stop
                offset="100%"
                stopColor={indicatorColors[1] || indicatorColors[0]}
              />
            </linearGradient>
          </defs>
          <circle
            id="progressIndicator"
            className="progress-indicator"
            fill="#EBEBEB"
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
          <div className="progress-inner-content-header">
            Test {currentIndex} of {pipeline.tests.length}
          </div>
          <div className="progress-inner-content-time-header">
            Estimated time remaining:
          </div>
          <div className="progress-inner-content-time-counter">
            {convertMsToTime(pipeline.timeElapsed)}
          </div>
          <InfoIcon
            className="progress-inner-content-icon"
            onClick={toggleDetailsVisibility}
          />
        </div>
      </div>
    </>
  )
}
