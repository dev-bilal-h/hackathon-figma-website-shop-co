import HeroSection from "@/components/HeroSection"
import LatestArrival from "@/components/LatestArrivalsSection"
import TrendingProducts from "@/components/TrendingProducts"
import DressStyle from "@/components/DressStyle"
import Testimonials from "@/components/Testimonials"



export default function Home(){
  return( 
    <div>
      <HeroSection/>
      <LatestArrival/>
      <TrendingProducts/>
      <DressStyle/>
      <Testimonials/>
 
    </div>
  )
}