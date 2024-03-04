interface Props {
  size: 'sm' | 'md' | 'lg' | 'xl';
}

export const Loading = ({ size = 'md' }: Props) => {
  return (
    <div className="flex content-center items-center">
      <span className={`loading loading-spinner loading-${size}`} />
    </div>
  );
};
