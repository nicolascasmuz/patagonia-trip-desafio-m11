import Mision from "components/mision";
import FeaturedPlaces from "components/features-places";
import Hero from "components/hero";
import TravelersForm from "pages/travelers-form";
import OwnersForm from "pages/owners-form";

export default function Main() {
  return (
    <>
      <Hero />
      <Mision />
      <OwnersForm />
      <TravelersForm />
      <FeaturedPlaces />
    </>
  );
}
