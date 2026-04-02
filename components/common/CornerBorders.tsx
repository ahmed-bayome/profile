export const CornerBorder = ({
  children,
  cornerSize = 4,
}: {
  children: React.ReactNode;
  cornerSize?: number;
}) => {
  const size = `${cornerSize * 4}px`;
  const corner = `absolute z-10 border-green`;

  return (
    <div className='relative p-1 hover:scale-103 transition-all opacity-70 hover:opacity-100'>
      <span className={`${corner} top-0 left-0 border-t border-l`} style={{ width: size, height: size }} />
      {/* <span className={`${corner} top-0 right-0 border-t border-r`} style={{ width: size, height: size }} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} style={{ width: size, height: size }} /> */}
      <span className={`${corner} bottom-0 right-0 border-b border-r`} style={{ width: size, height: size }} />
      {children}
    </div>
  );
};
