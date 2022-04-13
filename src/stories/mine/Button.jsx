import React from 'react';

export const Button = ({isHidden = true, title = ''}) => {
  return (
    <div className='btn_wrapper'>
      <p className="btn_text" onClick={() => {console.log('click')}}>This is button component</p>
      <h3>{title}</h3>
      {!isHidden && <span>invisible stuff</span>}
    </div>
  );
};

// export default Button;
