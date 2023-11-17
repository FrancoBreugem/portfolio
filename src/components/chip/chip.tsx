import './chip.scss';

type ChipProps = {
  text: string
}

const Chip: React.FC<ChipProps> = ({ text }) => {

  return (
    <span className='chip'>
      {text}
    </span>
  )
}

export default Chip