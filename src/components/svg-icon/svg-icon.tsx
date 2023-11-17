import './svg-icon.scss';
import LinkedInIcon from '../../assets/linkedin.svg';
import { SvgIconType } from '../../enums/svg-icon-type';

const iconMapping = {
  [SvgIconType.LinkedIn]: LinkedInIcon,
};

type SvgIconProps = {
  icon: SvgIconType;
  url?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ icon, url }) => {
  const mappedIcon = iconMapping[icon];
  const altText = `Icon - ${SvgIconType[icon]}`;

  return (
    url
    ? 
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={mappedIcon} alt={altText} className="svg-icon" />
    </a>
    : 
    <img src={mappedIcon} alt={altText} className="svg-icon" />
  )
}

export default SvgIcon