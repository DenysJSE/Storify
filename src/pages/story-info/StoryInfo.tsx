import './StoryInfo.css'
import MainImage from 'assets/images/MainImage.jpg'
import AdditionalImage from 'assets/images/AdditinalImage.jpg'
import LikeIcon from 'assets/images/LikeIcon.png'
import LikeActiveIcon from 'assets/images/LikeActiveIcon.png'
import EditButtonIcon from 'assets/images/EditIcon.png'
import DeleteButtonIcon from 'assets/images/DeleteIcon.png'
import UserIcon from 'assets/images/userIcon.jpg'
import {useEffect, useState} from "react";

function StoryInfo() {
  const initialIsActive = localStorage.getItem('isActive') === 'true' || false
  const [isActive, setIsActive] = useState(initialIsActive)

  useEffect(() => {
    localStorage.setItem('isActive', isActive.toString())
  }, [isActive])

  const handleLikeButton = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='story-info-page'>
      <div className='story-info-page-story-wrapper'>
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
          <div className='story-info-page-story-content-user-details'>
            <img src={UserIcon} alt="user-icon" className='story-info-page-story-content-user-icon' />
            <p className='story-info-page-story-content-user-name'>DenysJSE</p>
            <h1 className='story-info-page-story-content-story-title'>My Story</h1>
          </div>
          <div className='story-info-page-description'>
            <p className='story-info-page-description-text'>
              Once upon a time in the small town of Meadowville, there lived a curious and imaginative boy named Oliver.
              He spent his days exploring the lush forests and meadows that surrounded his home, always on the lookout
              for new adventures. One sunny afternoon, while wandering near the old oak tree at the edge of the woods,
              Oliver stumbled upon a peculiar sight. <br/><br/>

              Beneath the shade of the ancient oak stood a small creature with big, round eyes and fluffy fur. Startled
              at first, Oliver soon realized that this was no ordinary creature – it was a tiny, talking fox named Jasper.
              Jasper had a mischievous glint in his eyes and a heart full of playful spirit. <br/><br/>

              As the two got to know each other, they discovered a shared love for exploration and a knack for getting
              into delightful mischief. Oliver and Jasper became inseparable, embarking on countless escapades that took
              them through secret passages in the woods, across babbling brooks, and up the hills that overlooked
              Meadowville. <br/><br/>

              Jasper's infectious laughter echoed through the trees, and Oliver's eyes sparkled with newfound joy. The
              duo faced challenges together, like the time they encountered a mysterious puzzle hidden deep within the
              forest. With clever teamwork, they solved it and unearthed a hidden treasure, forging an unbreakable bond
              in the process. <br/><br/>

              Seasons changed, but their friendship remained steadfast. Oliver and Jasper experienced the magic of winter
              snowflakes, the vibrant colors of autumn leaves, and the warmth of spring blossoms. Meadowville, once a
              quiet town, buzzed with the energy of their adventures, and the townsfolk couldn't help but smile at the
              sight of the boy and his fox friend. <br/><br/>

              As the years passed, Oliver and Jasper's friendship only deepened. They shared dreams, faced fears, and
              supported each other through thick and thin. The town of Meadowville soon learned that the best friend
              Oliver had found under the old oak tree was more than just a playful fox – he was a cherished companion
              who had brought boundless joy to the young boy's life. <br/><br/>

              And so, in the heart of Meadowville, a tale unfolded – a tale of a boy who discovered the true meaning of
              friendship under the watchful branches of an ancient oak tree, with a mischievous fox named Jasper by his
              side.
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
        </div>
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
  );
}

export default StoryInfo