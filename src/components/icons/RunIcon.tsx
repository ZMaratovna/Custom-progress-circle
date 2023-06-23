/* eslint-disable react/react-in-jsx-scope */
export const RunIcon = ({ size = 27 }: { size?: number }): JSX.Element => {
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
      <path
        d="M14.966 9.13699V12.526L9.33699 9.08899C9.30682 9.07156 9.27262 9.06232 9.23778 9.06218C9.20294 9.06204 9.16867 9.071 9.13836 9.08817C9.10805 9.10535 9.08275 9.13015 9.06497 9.16011C9.04719 9.19007 9.03754 9.22415 9.03699 9.25899V16.689C9.03754 16.7238 9.04719 16.7579 9.06497 16.7879C9.08275 16.8178 9.10805 16.8426 9.13836 16.8598C9.16867 16.877 9.20294 16.8859 9.23778 16.8858C9.27262 16.8857 9.30682 16.8764 9.33699 16.859L14.966 13.423V16.812C14.966 16.8385 14.9765 16.8639 14.9953 16.8827C15.014 16.9015 15.0395 16.912 15.066 16.912H16.812C16.8385 16.912 16.8639 16.9015 16.8827 16.8827C16.9015 16.8639 16.912 16.8385 16.912 16.812V9.13699C16.912 9.11047 16.9015 9.08503 16.8827 9.06628C16.8639 9.04752 16.8385 9.03699 16.812 9.03699H15.064C15.0378 9.03751 15.0129 9.04828 14.9946 9.06697C14.9762 9.08567 14.966 9.11081 14.966 9.13699Z"
        fill="#5A5A5A"
      />
    </svg>
  )
}
