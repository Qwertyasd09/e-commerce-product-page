import cartSvgNav from '../assets/images/icon-cart-nav.svg';

export const Navbar = ({ 
  logo, 
  sections, 
  userImg, 
  setCheckout, 
  checkout,
  checkoutAmount
}) => {
  return (
    <nav>
        <div className='left'>
            <a href='' className='title'><img src={ logo }/></a>
            <ul className='sections'>
                {sections.map(section => {
                  return <a href=''>{ section }</a>
                })}
            </ul>
        </div>
        <div className='right'>
          {(checkoutAmount != 0) && <div className='cart-count'>
            {checkoutAmount}
            <div className="semicircle left"></div>
            <div className="semicircle right"></div>
          </div>}
          <img onClick={() => setCheckout(!checkout)} className='cart-icon' src={ cartSvgNav } alt='Cart icon' />
          <img className='profile-icon' src={ userImg } alt='Profile Image'/>
        </div>
    </nav>
  )
}
