import { displayFloat } from "./Product"

export const Checkout = ({ 
  productImg, 
  product, 
  icons, 
  checkout, 
  setCheckoutAmount, 
  checkoutAmount 
}) => {
    
    const handleDelete = () => {
        setCheckoutAmount(0);
    }

    return (
    <div className="cart-popup">
        <h1 className="cart-title">Cart</h1>
        <hr className="secondary-hr"></hr>
        {(checkout && (checkoutAmount != 0)) ? <div className="cart-wrapper">
          <div className="cart-content">
            <img alt='Image of current added product in cart' className="cart-content-img" src={productImg.img[0]}></img>
            <div className="cart-buy-details">
              <p className="cart-product-title">{product.title}</p>
              <p className="cart-product-price">${displayFloat(product.price.currentPrice)} x {checkoutAmount} <span style={{color: "hsl(0, 0%, 0%)", fontWeight: 700}}>${displayFloat(product.price.currentPrice * checkoutAmount)}</span></p>
            </div>
            <img alt='Icon of delete button' onClick={handleDelete} className="btn-icon-delete" src={icons.iconDelete}></img>
          </div>
          <button aria-label='Checkout button' className="btn-checkout">Checkout</button>
        </div> : <div className="empty-car">Your cart is empty.</div>}
    </div>
  )
}
