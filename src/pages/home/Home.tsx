import './Home.css'
import UserIcon from 'assets/images/userIcon.jpg'

function Home() {
  return (
    <div className='home-page'>
      <div className='home-page-user-info'>
        <div className='home-page-user-info-details'>
          <img src={UserIcon} alt="user-icon" className='home-page-user-info-details-icon-img'/>
          <div className='home-page-user-info-details-user-details'>
            <h1 className='home-page-user-info-details-user-details-name'>Denys</h1>
            <span className='home-page-user-info-details-user-details-age'>19 years</span>
            <p className='home-page-user-info-details-user-details-stories-amount'><strong>10</strong> stories</p>
          </div>
        </div>
        <div className='home-page-user-info-description'>
          <p>
            Hey! My name is Denys and I am here to show you my life and you will see how funny it is. Here you will found
            the most interest stories and I hope you will love it. Wait for your likes and maybe some questions. Also I
            would love to see your funny stories.
          </p>
        </div>
      </div>
      <div className='home-page-user-stories-section'>
        <h1>Here should be a graphic with stories but I don't know how to do this yet</h1>
        <p>test</p>
      </div>
    </div>
  );
}

export default Home