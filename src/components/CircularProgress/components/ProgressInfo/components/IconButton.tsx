/* eslint-disable react/react-in-jsx-scope */
import './IconButton.css'

interface IIconButtonProps extends React.PropsWithChildren {
  size?: number
  onClick: React.MouseEventHandler
}

export const IconButton = ({
  size = 27,
  onClick,
  children,
}: IIconButtonProps): JSX.Element => {
  return (
    <button
      className="icon-button"
      style={{ width: `${size}px`, height: `${size}px` }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
