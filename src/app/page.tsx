import type { Metadata } from "next";
import FundNetHomeScreen from "./screen";

export const metadata: Metadata = {
  title: "Home | FundNet",
  description: "",
};

export default function FundNetHomePage() {
  return <FundNetHomeScreen />;
}
