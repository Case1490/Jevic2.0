import AnyProducts from "./AnyProducts"
import BannerPrice from "./BannerPrice"
import Benefits from "./Benefits"
import CoverPage from "./CoverPage"
import DetailsShop from "./DetailsShop"
import PopularCategories from "./PopularCategories"
import NewProducts from "./NewProducts"
import Testimonials from "./Testimonials"
import SuscribeNews from "./SuscribeNews"

const MainPage = () => {
  return (
    <>
      <CoverPage />
      <DetailsShop />
      <PopularCategories />
      <Benefits />
      <AnyProducts />
      <BannerPrice />
      <NewProducts />
      <Testimonials />
      <SuscribeNews/>
    </>
  );
}

export default MainPage