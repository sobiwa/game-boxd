import googleIcon from '../assets/icons/google-btn.svg';

export default function GoogleButton() {
  const style = {
    fontFamily: 'Roboto',
    color: '#00000080',
    height: '40px',
    fontSize: '14px',
    borderRadius: '4px',
    backgroundColor: 'white',
    paddingRight: '12px',
    display: 'flex',
    alignItems: 'center',
  };
  return (
    <button className='google-button' type='button' style={style}>
      <img
        src={googleIcon}
        alt='google'
        style={{
          height: '40px',
          width: '40px',
          marginRight: '12px',
        }}
      />
      Sign in with Google
    </button>
  );
}
