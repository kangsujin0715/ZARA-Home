import Icon from 'src/components/Icon/Icon';

const IconRound = ({
  name,
  width,
  height,
  alt,
  style,
  innerPadding = 0,
  bgColor = 'transparent',
  bottomSpacing = 0,
}) => {
  return (
    <div
      className={`flex justify-center items-center rounded-full bg-[${bgColor}] p-[${innerPadding}px] mb-[${bottomSpacing}px]`}
    >
      <Icon name={name} width={width} height={height} alt={alt} style={style} />
    </div>
  );
};

export default IconRound;
