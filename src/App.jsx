import './styles_rem.css';
import { Wrapper } from './components/Wrapper';
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';
import { product } from './assets/constants/constants';
import userImg from './assets/images/image-avatar.png';
import logo from './assets/images/logo.svg';
import { sneakers, productImg } from './assets/product/sneakers';
import { useState } from 'react';

export default function App() {
  
  const [checkout, setCheckout] = useState(false);
  const [checkoutAmount, setCheckoutAmount] = useState(0);

  return (
    <Wrapper>
      <Navbar 
        logo={logo} 
        sections={product.sections}
        userImg={userImg} 
        setCheckout={setCheckout} 
        checkout={checkout}
        checkoutAmount={checkoutAmount} 
      />
      <hr className='main-hr'/>
      <Product 
        setCheckoutAmount={setCheckoutAmount} 
        checkoutAmount={checkoutAmount} 
        productImg={productImg}
        product={sneakers} 
        setCheckout={setCheckout} 
        checkout={checkout} 
      /> 
    </Wrapper>
  )
}