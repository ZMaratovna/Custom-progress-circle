/* eslint-disable react/react-in-jsx-scope */
export const StopIcon = ({ size = 27 }: { size?: number }): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.001 26C20.1807 26 26.001 20.1797 26.001 13C26.001 5.8203 20.1807 0 13.001 0C5.82127 0 0.000976562 5.8203 0.000976562 13C0.000976562 20.1797 5.82127 26 13.001 26Z"
        fill="white"
      />
      <path
        d="M13.001 25.5C19.9045 25.5 25.501 19.9036 25.501 13C25.501 6.09644 19.9045 0.5 13.001 0.5C6.09742 0.5 0.500977 6.09644 0.500977 13C0.500977 19.9036 6.09742 25.5 13.001 25.5Z"
        stroke="#707070"
      />
      <path d="M8.987 9.039H16.861V16.913H8.987V9.039Z" fill="#5A5A5A" />
    </svg>
  )
}
