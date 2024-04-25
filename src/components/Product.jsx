import { useState } from 'react';
import { icons } from '../assets/constants/constants';
import { PopUp } from './PopUp';
import { Checkout } from './Checkout';

export function displayFloat(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export function calculateOriginalPrice(discountedPrice, discount) {
  if (discount < 0 || discount > 100) {
      throw new Error('Discount must be between 0 and 100');
  }

  const originalPrice = (discountedPrice * 100) / (100 - discount);
  return displayFloat(originalPrice);
}

export const Product = ({ 
  setCheckoutAmount, 
  checkoutAmount, 
  productImg, 
  product, 
  setCheckout, 
  checkout,
  sections,
  modalMobile,
  setModalMobile
}) => {

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(0);

  const handleMinusProduct = () => {
    if (count != 0) {
      setCount(prevCount => prevCount - 1)
    }
  }

  const handleClickThumbnail = (e) => {
    let currentIndex = Number(e.target.getAttribute('data-index'));
    setActive(currentIndex);
    setIndex(currentIndex);
  }

  const handleClickPopUp = (e) => {
    setModal(!modal);
  }

  const handleCheckout = () => {
    if (count != 0) {
      setCheckoutAmount(prevCount => prevCount + count);
      setCheckout(true);
      setCount(0);
    }
  }

  const handleNextPopUp = (e) => {
    e.stopPropagation();
    if (index === 3) return setIndex(0), setActive(0);
    return setIndex(prevIndex => prevIndex + 1), setActive(prevActive => prevActive + 1);
  }

  const handlePreviousPopUp = (e) => {
    e.stopPropagation();
    if (index === 0) return setIndex(3), setActive(3);
    return setIndex(prevIndex => prevIndex - 1), setActive(prevActive => prevActive - 1);
  }

  return (
    <main>
      {checkout && <Checkout
        productImg={productImg}
        product={product}
        icons={icons}
        checkout={checkout}
        setCheckoutAmount={setCheckoutAmount}
        checkoutAmount={checkoutAmount}
      />}
      
      {modalMobile && <div className="layout">
        <div className="sidebar-mobile">
          <ul className='sections-mobile'>
            <img onClick={() => setModalMobile(false)} className='btn-close-mobile' src={icons.iconCloseMobile}></img>
            {sections.map(section => {
              return <a key={crypto.randomUUID()} href=''>{ section }</a>
            })}
          </ul>
        </div>
      </div>}

      {modal && <PopUp 
                  productImg={productImg} 
                  setIndex={setIndex}
                  index={index} 
                  icons={icons}
                  handleClickThumbnail={handleClickThumbnail}
                  handleClickPopUp={handleClickPopUp}
                  setActive={setActive}
                  active={active}
                  handleNextPopUp={handleNextPopUp}
                  handlePreviousPopUp={handlePreviousPopUp}
                />}

      <div className='left'>
        <img onClick={handlePreviousPopUp} className='mobile popup-btn previous' src={icons.iconPrevious}></img>
        <img onClick={handleNextPopUp} className='mobile popup-btn next' src={icons.iconNext}></img>
        <img onClick={() => setModal(true)} className='current-img' src={productImg.img[index]}></img>
        <div className='thumbnails'>
          {productImg.thumbnails.map((thumbnail, index) => {
            return <div key={crypto.randomUUID()} className={`border-container${active === index ? ' active' : ''}`}><img data-index={index} onClick={handleClickThumbnail} className={`images${active === index ? ' active' : ''}`} src={thumbnail}></img></div>
          })}
        </div>
      </div>
      <div className='right'>
        <h3 className='company'>{ product.name }</h3>
        <h2 className='title'>{ product.title }</h2>
        <p className='description'>{ product.description }</p>
        <div className="price">
          <p className='current-price'>${ displayFloat(product.price.currentPrice) } <span className='discount'>{ product.price.discount }%</span></p>
          <p className='old-price'>${ calculateOriginalPrice(product.price.currentPrice, product.price.discount) }</p>
        </div>
        
        <div className='payment-info'>
          <div className='amount'>
            <button onClick={handleMinusProduct} className='btn-minus'><img style={{backgroundColor: 'red'}} src={icons.iconMinus}></img></button>
            <p className='number-items'>{count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)} className='btn-plus'><img src={icons.iconPlus}></img></button>
          </div>
          <button onClick={handleCheckout} className='add-to-car'><img className='icon-cart' src={icons.iconCart}></img>Add to cart</button>
        </div>
      </div>
    </main>
  )
}
