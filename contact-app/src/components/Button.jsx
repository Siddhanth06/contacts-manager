import './Button.scss';

const Button = () => {
  return (
<div className="container">
    <button type='button'>✅Accept</button>
    <button type='button' className='reject'>❌Reject</button>
</div>
  )
}

export default Button