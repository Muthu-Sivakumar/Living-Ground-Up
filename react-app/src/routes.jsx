import HomePage from "./components/pages/HomePage"
import PeaceOfMind from "./components/pages/PeaceOfMind"
import GenuineJoy from "./components/pages/GenuineJoy"

const routes = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "Peace",
    element: <PeaceOfMind />
  },
  {
    path: "Joy",
    element: <GenuineJoy />
  }

]

export default routes