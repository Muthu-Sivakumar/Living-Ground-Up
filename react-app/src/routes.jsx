import HomePage from "./components/pages/HomePage"
import PeaceOfMind from "./components/pages/PeaceOfMind"
import GenuineJoy from "./components/pages/GenuineJoy"
import { Component } from "react"

const routes = [
  {
    path: "/",
    Component: HomePage
  },
  {
    path: "Peace",
    Component: PeaceOfMind
  },
  {
    path: "Joy",
    Component: GenuineJoy
  }

]

export default routes