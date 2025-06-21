import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import Navbar from "../navbar/navbar";
import Introduction from "~/introduction/into";
import MoreInfo from "~/moreInfo/more";

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
      <MoreInfo />
      {/* <Welcome /> */}
    </>
  );
}
