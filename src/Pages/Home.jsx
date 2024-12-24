import { ImageSlider } from "../Components/ImageSlider"
import './pages.css'

export function Home() {
  
    return (
      <body className="body">
        <div className="main">
          <h1>Welcome to Stonebridge Windows and Doors</h1>
          <p>a trusted partner for professional window and door installation services. With years of experience in the industry, we specialize in providing high-quality, energy-efficient windows and doors that enhance the beauty, security, and energy performance of your home or business.</p>
        </div>
        <div className="slider">
            <ImageSlider />
        </div>
        <div className="boxes">
          <div className="box">
            <h1>Professional Installation:</h1>
            <p>Our team of certified, experienced installers ensures that every window and door is fitted with the highest standards of craftsmanship and attention to detail.</p>
          </div>
          <div className="box">
            <h1>Customer-Focused Approach:</h1>
            <p>At Stonebridge, customer satisfaction is our top priority. We work closely with you to understand your needs and provide personalized solutions that fit your budget and style preferences.</p>
          </div>
        </div>
      </body>
    )
  }
  