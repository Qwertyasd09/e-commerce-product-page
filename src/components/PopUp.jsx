export const PopUp = ({ 
  productImg, 
  index, 
  icons, 
  handleClickThumbnail, 
  handleClickPopUp, 
  active,
  handleNextPopUp,
  handlePreviousPopUp
}) => {

    return (
        <div onClick={handleClickPopUp} className='layout'>
          <img alt='Popup current image of product' onClick={(e) => e.stopPropagation()} className='popup-img' src={productImg.img[index]}></img>
          <img alt='Close icon' className='btn-close' src={icons.iconClose}></img>
          <div onClick={(e) => e.stopPropagation()} className='popup-thumbnails'>
            {productImg.thumbnails.map((thumbnail, index) => {
                return <div key={crypto.randomUUID()} className={`border-container${active === index ? ' active' : ''}`}><img data-index={index} onClick={handleClickThumbnail} className={`images-popup${active === index ? ' active' : ''}`} src={thumbnail}></img></div>
            })}
          </div>
          <img alt='Previous icon of popup' onClick={handlePreviousPopUp} className='popup-btn previous' src={icons.iconPrevious}></img>
          <img alt='Next icon of popup' onClick={handleNextPopUp} className='popup-btn next' src={icons.iconNext}></img>
        </div>
    )
}
