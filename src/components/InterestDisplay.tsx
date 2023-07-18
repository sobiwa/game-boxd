export default function InterestDisplay({ interest }: { interest: number }) {
  const blocks = [];
  for (let i = 1; i <= 100; i += 1) {
    blocks.push(
      <div className={`display-block ${interest < i ? 'empty' : ''}`} />
    );
  }
  return <div className='interest-display'>{blocks}</div>;
}
