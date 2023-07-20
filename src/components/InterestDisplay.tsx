export default function InterestDisplay({
  interest,
  id,
}: {
  interest: number;
  id: number;
}) {
  const blocks = [];
  for (let i = 1; i <= 100; i += 1) {
    blocks.push(
      <div
        key={`${id}-interest-block-${i}`}
        className={`display-block ${interest < i ? 'empty' : ''}`}
      />
    );
  }
  return <div className='interest-display'>{blocks}</div>;
}
