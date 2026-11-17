import HomePage from "./components/pages/HomePage"
import PeaceOfMind from "./components/pages/PeaceOfMind"
import GenuineJoy from "./components/pages/GenuineJoy"
import Articles from "./components/pages/Articles"

const routes = [
  {
    path: "/",
    Component: HomePage
  },
  {
    path: "/Peace",
    Component: PeaceOfMind
  },
  {
    path: "/Joy",
    Component: GenuineJoy
  },
  {
    path: "/Articles",
    Component: Articles
  }

]

export default routes