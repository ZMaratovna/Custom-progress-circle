import './IconButton.css';

interface IIconButtonProps extends React.PropsWithChildren {
  size?: number;
  onClick: React.MouseEventHandler
}

export const IconButton = ({size = 27, onClick, children}: IIconButtonProps) => {
  return (
    <button
      className="icon-button"
      style={{width: `${size}px`, height: `${size}px`}}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
