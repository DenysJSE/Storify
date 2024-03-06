import './StoryInfo.css'
import MainImage from 'assets/images/MainImage.jpg'
import AdditionalImage from 'assets/images/AdditinalImage.jpg'
import LikeIcon from 'assets/images/LikeIcon.png'
import LikeActiveIcon from 'assets/images/LikeActiveIcon.png'
import EditButtonIcon from 'assets/images/EditIcon.png'
import DeleteButtonIcon from 'assets/images/DeleteIcon.png'
import {useState} from "react";

function StoryInfo() {
  const [isActive, setIsActive] = useState(false)

  const handleLikeButton = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='story-info-page'>
      <div className='story-info-page-images-section'>
        <div className='story-info-page-images-section-main-image'>
          <img src={MainImage} alt="main-img" className='story-info-page-images-section-main-image-img'/>
        </div>
        <div className='story-info-page-images-section-additional-image'>
          <img src={AdditionalImage} alt="additional-img" className='story-info-page-images-section-additional-image-img'/>
          <img src={AdditionalImage} alt="additional-img" className='story-info-page-images-section-additional-image-img'/>
          <img src={AdditionalImage} alt="additional-img" className='story-info-page-images-section-additional-image-img'/>
          <img src={AdditionalImage} alt="additional-img" className='story-info-page-images-section-additional-image-img'/>
        </div>
      </div>
      <div className='story-info-page-story-content'>
        <div className='story-info-page-description'>
          <p className='story-info-page-description-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor metus, varius ut mauris eu, gravida
            porttitor lacus. Cras nec risus nec nisl vestibulum tristique. Ut faucibus eleifend arcu, nec fringilla dui
            convallis vel. In hac habitasse platea dictumst. Suspendisse id metus sapien. Sed leo metus, lacinia in massa
            eget, molestie lobortis nisl. Vestibulum mattis sapien nec elit hendrerit dapibus. Proin a viverra ex, quis
            porta lectus.
            Integer congue varius augue, ut tincidunt libero iaculis cursus. Pellentesque suscipit nulla a eleifend
            sagittis. Nullam iaculis turpis et ligula molestie, scelerisque porttitor neque fringilla. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin condimentum ligula
            felis, eu vehicula justo efficitur consequat. Vestibulum a mollis ex. Aliquam erat volutpat. Mauris in tempus
            justo, sed mattis urna. Suspendisse potenti. Nam vel congue massa. Cras maximus venenatis dui eget cursus.
            Aliquam egestas laoreet purus, vel tincidunt libero sollicitudin vitae. Vestibulum eu dolor eget tellus
            consequat condimentum. Integer at urna consectetur, varius eros varius, congue diam.
            Integer condimentum lorem quis semper ultricies. In hac habitasse platea dictumst. Phasellus lobortis lacus
            vel rhoncus dignissim. Sed vel fringilla libero. Ut feugiat purus sit amet turpis pretium, sollicitudin luctus
            justo convallis. Suspendisse et ipsum ullamcorper, egestas justo sed, tristique magna. Suspendisse aliquet
            purus eu quam feugiat scelerisque. Integer semper eget enim id eleifend. Aliquam erat volutpat. Nunc volutpat
            quis quam sed iaculis. Nunc sit amet finibus nibh, nec porttitor turpis. Aenean at sapien quis risus fringilla
            posuere et nec elit. Proin consectetur enim nunc, ac elementum ipsum mollis nec. Maecenas vulputate velit sed
            mi pulvinar gravida.
          </p>
        </div>
        <div className='story-info-page-likes'>
          <img
            src={isActive ? LikeActiveIcon : LikeIcon}
            alt="like-icon"
            className='story-info-page-likes-img'
            onClick={handleLikeButton}
          />
          <span className='story-info-page-likes-amount'>2500</span>
        </div>
        <div className='story-info-page-buttons'>
          <button className='story-info-page-button edit'>
            <img src={EditButtonIcon} alt="edit-button-icon" className='story-info-page-button-img'/>
            Edit Story
          </button>
          <button className='story-info-page-button delete'>
            <img src={DeleteButtonIcon} alt="edit-button-icon" className='story-info-page-button-img'/>
            Delete Story
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoryInfo