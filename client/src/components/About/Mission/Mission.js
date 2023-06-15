import './Mission.css'
import Contact from '../Contact/Contact'

export default function Mission() {
  return (
    <>
    <div className="relative mission-div " >
      <div className="absolute px-7 bottom-20 h-80 w-full xl:inset-0 xl:h-full">
         <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <div className="green-rectangle"></div>
            <img
              
              className="opacity-2 xl:absolute xl:inset-0 about-image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3832684%2Fpexels-photo-3832684.jpeg%3Fcs%3Dsrgb%26dl%3Dperson-holding-a-compass-3832684.jpg%26fm%3Djpg&f=1&nofb=1&ipt=dbf6ddbb3d580d7f2a93d0daae535bb13491b7376ba4b6d654cd8ef0393aea5c&ipo=images"
              alt="compass"
            />
            {/* <div
              aria-hidden="true"
              className="relative inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            /> */}
          </div>
        </div>
      </div> 
      <div className="max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          {/* <h1 className="text-base font-bold text-indigo-900">Our Mission</h1> */}
          <p className="mt-3 text-5xl font-bold tracking-tight">
          Our Mission
          </p>
          <p className="mt-5 text-lg text-gray-900">
          Our mission is to provide a comprehensive and personalized shopping experience for online consumers,
           by leveraging technology to extract, analyze and rank product data from multiple e-commerce sites.
          </p>
          <p className="text-base mt-3 text-4xl font-bold">
          Our Vision
          </p>
          <p className="mt-5 text-lg text-gray-900">
          Our vision is to become the go-to platform for online shoppers worldwide, 
          providing real-time access to accurate and reliable product data, personalized recommendations, 
          and a seamless shopping experience. We strive to empower consumers to make informed purchase decisions, 
          save time, and money while promoting fair competition among e-commerce sites.
          </p>
          
        </div>
      </div>
    </div>
    <Contact/>
    </>
  )
}