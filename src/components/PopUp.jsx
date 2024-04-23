export const PopUp = ({ 
  productImg, 
  setIndex, 
  index, 
  icons, 
  handleClickThumbnail, 
  handleClickPopUp, 
  setActive, 
  active 
}) => {

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
        <div onClick={handleClickPopUp} className='layout'>
          <img onClick={(e) => e.stopPropagation()} className='popup-img' src={productImg.img[index]}></img>
          <img className='btn-close' src={icons.iconClose}></img>
          <div onClick={(e) => e.stopPropagation()} className='popup-thumbnails'>
            {productImg.thumbnails.map((thumbnail, index) => {
                return <div className={`border-container${active === index ? ' active' : ''}`}><img data-index={index} key={index} onClick={handleClickThumbnail} className={`images-popup${active === index ? ' active' : ''}`} src={thumbnail}></img></div>
            })}
          </div>
          <img onClick={handlePreviousPopUp} className='popup-btn previous' src={icons.iconPrevious}></img>
          <img onClick={handleNextPopUp} className='popup-btn next' src={icons.iconNext}></img>
        </div>
    )
}
