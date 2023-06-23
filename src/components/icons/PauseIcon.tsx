/* eslint-disable react/react-in-jsx-scope */
export interface IControlProps {
  size?: number
}

export const PauseIcon = ({ size = 27 }: IControlProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 26C20.9558 26 27 20.1797 27 13C27 5.8203 20.9558 0 13.5 0C6.04416 0 0 5.8203 0 13C0 20.1797 6.04416 26 13.5 26Z"
        fill="white"
      />
      <path
        d="M13.5 25.5C20.6797 25.5 26.5 19.9036 26.5 13C26.5 6.09644 20.6797 0.5 13.5 0.5C6.3203 0.5 0.5 6.09644 0.5 13C0.5 19.9036 6.3203 25.5 13.5 25.5Z"
        stroke="#707070"
      />
      <path
        d="M11.925 17.437H10.025C9.96152 17.4373 9.90052 17.4124 9.85535 17.3678C9.81018 17.3232 9.78453 17.2625 9.784 17.199V8.14601C9.78453 8.08253 9.81018 8.02185 9.85535 7.97724C9.90052 7.93263 9.96152 7.90774 10.025 7.90801H11.925C11.9885 7.90774 12.0495 7.93263 12.0946 7.97724C12.1398 8.02185 12.1655 8.08253 12.166 8.14601V17.198C12.1659 17.2295 12.1595 17.2607 12.1473 17.2898C12.1352 17.3188 12.1174 17.3452 12.095 17.3674C12.0726 17.3896 12.0461 17.4072 12.0169 17.4191C11.9877 17.4311 11.9565 17.4371 11.925 17.437Z"
        fill="#5A5A5A"
      />
      <path
        d="M17.166 17.437H15.266C15.2025 17.4373 15.1415 17.4124 15.0964 17.3678C15.0512 17.3232 15.0256 17.2625 15.025 17.199V8.14601C15.0256 8.08253 15.0512 8.02185 15.0964 7.97724C15.1415 7.93263 15.2025 7.90774 15.266 7.90801H17.166C17.2295 7.90774 17.2905 7.93263 17.3357 7.97724C17.3808 8.02185 17.4065 8.08253 17.407 8.14601V17.198C17.4069 17.2295 17.4006 17.2607 17.3884 17.2898C17.3762 17.3188 17.3584 17.3452 17.336 17.3674C17.3136 17.3896 17.2871 17.4072 17.2579 17.4191C17.2288 17.4311 17.1975 17.4371 17.166 17.437Z"
        fill="#5A5A5A"
      />
    </svg>
  )
}
