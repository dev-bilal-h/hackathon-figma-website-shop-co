import Hero from "@/components/HeroSection"
import NewArrivals from "@/components/LatestArrivalsSection"
import TopSeeling from "@/components/TrendingProducts"
import BrowseByStyle from "@/components/DressStyle"




export default function Home(){
  return( 
    <div>
      <Hero/>
      <NewArrivals/>
      <TopSeeling/>
      <BrowseByStyle/>
    </div>
  )
}