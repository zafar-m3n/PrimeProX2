import { Icon as IconifyIcon } from '@iconify/react';

const Icon = ({ icon, className = '', width = 24, height = 24, ...props }) => {
  return (
    <IconifyIcon
      icon={icon}
      className={className}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default Icon;
