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
            <img alt='Icon menu in mobile design' onClick={handleIconMenu} className='icon-menu' src={iconMenu}></img>
            <a aria-label='Logo of page' href='' className='logo'><img alt='Logo of page' src={ logo }/></a>
            <ul className='sections'>
                {sections.map(section => {
                  return <li key={crypto.randomUUID()}><a aria-label={section} href=''>{ section }</a></li>
                })}
            </ul>
        </div>
        <div className='right'>
          {(checkoutAmount != 0) && <div className='cart-count'>
            {checkoutAmount}
            <div className="semicircle left"></div>
            <div className="semicircle right"></div>
          </div>}
          <img alt='Cart icon' onClick={() => setCheckout(!checkout)} className='cart-icon' src={ cartSvgNav } />
          <img alt='Profile Image' className='profile-icon' src={ userImg } />
        </div>
    </nav>
  )
}
