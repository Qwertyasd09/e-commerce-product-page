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
  checkout 
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
      
      {modal && <PopUp 
                  productImg={productImg} 
                  setIndex={setIndex}
                  index={index} 
                  icons={icons}
                  handleClickThumbnail={handleClickThumbnail}
                  handleClickPopUp={handleClickPopUp}
                  setActive={setActive}
                  active={active}
                />}

      <div className='left'>
        <img onClick={() => setModal(true)} className='current-img' src={productImg.img[index]}></img>
        <div className='thumbnails'>
          {productImg.thumbnails.map((thumbnail, index) => {
            return <div className={`border-container${active === index ? ' active' : ''}`}><img data-index={index} key={index} onClick={handleClickThumbnail} className={`images${active === index ? ' active' : ''}`} src={thumbnail}></img></div>
          })}
        </div>
      </div>
      <div className='right'>
        <h3 className='company'>{ product.name }</h3>
        <h2 className='title'>{ product.title }</h2>
        <p className='description'>{ product.description }</p>
        <p className='current-price'>${ displayFloat(product.price.currentPrice) } <span className='discount'>{ product.price.discount }%</span></p>
        <p className='old-price'>${ calculateOriginalPrice(product.price.currentPrice, product.price.discount) }</p>
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
