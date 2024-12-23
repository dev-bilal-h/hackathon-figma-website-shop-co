import Hero from "@/components/layout/Hero"
import NewArrivals from "@/components/product/LatestArrivals-Section"
import TopSeeling from "@/components/product/Trending-Products"
import BrowseByStyle from "@/components/layout/DressStyle"
import Testimonials from "@/components/layout/Testimonials"

export default function Home(){
  return( 
    <div>
      <Hero/>
      <NewArrivals/>
      <TopSeeling/>
      <BrowseByStyle/>
      <Testimonials/>
 
    </div>
  )
}