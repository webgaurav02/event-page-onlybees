import Image from "next/image";
import Navbar from "../Components/Navbar";
import EventDetails from "../Components/EventDetails";
import Footer from "../Components/Footer";


export default function Event() {
  return (
    <>
      <Navbar mode="dark"/>
      <EventDetails />
      <Footer mode="dark"/>
    </> 
  );
}
