import './svg-icon.scss';
import LinkedInIcon from '../../assets/linkedin.svg';
import GitHubIcon from '../../assets/github.svg';
import { SvgIconEnum } from '../../enums/svg-icon-enum';

const iconMapping = {
  [SvgIconEnum.LinkedIn]: LinkedInIcon,
  [SvgIconEnum.GitHub]: GitHubIcon,
};

type SvgIconProps = {
  icon: SvgIconEnum;
  url?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ icon, url }) => {
  const mappedIcon = iconMapping[icon];
  const altText = `Icon - ${SvgIconEnum[icon]}`;

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