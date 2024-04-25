import cartSvgNav from '../assets/images/icon-cart-nav.svg';
import iconMenu from '../assets/images/icon-menu.svg';

export const Navbar = ({ 
  logo, 
  sections, 
  userImg, 
  setCheckout, 
  checkout,
  checkoutAmount,
  handleIconMenu
}) => {
  
  return (
    <nav>
        <div className='left'>
            <img onClick={handleIconMenu} className='icon-menu' src={iconMenu}></img>
            <a href='' className='logo'><img src={ logo }/></a>
            <ul className='sections'>
                {sections.map(section => {
                  return <a key={crypto.randomUUID()} href=''>{ section }</a>
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
