import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import Navbar from "../navbar/navbar";
import Introduction from "~/introduction/into";
import MoreInfo from "~/moreInfo/more";
import WelcomeInfo from "~/welcomePage/welcome";
import NextOpportunity from "~/nextOpportunity/next";
import Details from "~/details/details";
import ContactForm from "~/contactForm/contactform";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <WelcomeInfo />
      {/* <Welcome /> */}
      <MoreInfo />
      <NextOpportunity />
      <Details />
      <ContactForm />
    </>
  );
}
