import './svg-icon.scss';
import LinkedInIcon from '../../assets/linkedin.svg';
import { SvgIconType } from '../../enums/svg-icon-type';

const iconMapping = {
  [SvgIconType.LinkedIn]: LinkedInIcon,
};

type SvgIconProps = {
  icon: SvgIconType;
}

const SvgIcon: React.FC<SvgIconProps> = ({ icon }) => {
  const mappedIcon = iconMapping[icon];
  const altText = `Icon - ${SvgIconType[icon]}`;

  return (
    <img src={mappedIcon} alt={altText} className="svg-icon" />
  )
}

export default SvgIcon