import icons from '../data/platforms';

interface Platform {
  platform?: { id?: number; slug?: string; name?: string };
}

interface PropTypes {
  platforms: Platform[];
}
export default function PlatformsIcons({ platforms }: PropTypes) {
  const platformsWithSufficientData: Array<{
    platform: { id: number; name: string };
  }> = platforms.filter(
    (item): item is { platform: { id: number; name: string } } =>
      typeof item.platform?.id === 'number' &&
      typeof item.platform?.name === 'string'
  );
  return (
    <div className='platform-icon-container'>
      {platformsWithSufficientData.map((item) => {
        const { id, name } = item.platform;
        const iconData = icons.find((data) => data.id === id);
        let iconSrc;
        if (iconData?.icon) iconSrc = iconData.icon;
        return (
          <div key={id} className='platform-icon'>
            {iconSrc ? <img src={iconSrc} alt={name} /> : name}
          </div>
        );
      })}
    </div>
  );
}
