import video from '../images/video.mp4'
const Home = () => {
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <h1>HAPPY TO MEET YOU!</h1>
        </div>
      </div>
      
      <div className="container content" id="content">
        <video src={video} autoPlay loop muted />
        <p>Fragrances designed by independent perfumers, inspired by seasonal focus ingredients and the places they came from.
            Choose your own scent adventure! Fragrances in our DIY Bespoke collection can be worn as is or layered depending on your mood or season; you can mix and match by fragrance style like choosing a scarf, hat or coat.
            What is so fun about this fragrance is that you wear it in the morning and it is such a kick, but by the end of the day it's something completely different: sexy, ethereal, and balanced. It is a fragrance in motion; a changeling.
            In the space between summer and winter, a robust burst of pennyroyal and fresh cut trees start out as an autumnal offertory. As the fragrance develops, it takes the wearer on a fantastical journey through the woods with an exotic bouquet dry-down. It is a time machine, leading its wearer through the season to an unforgettable display of the complex beauty of Earth.</p>
      </div>
    </main>
  )
}

export default Home;