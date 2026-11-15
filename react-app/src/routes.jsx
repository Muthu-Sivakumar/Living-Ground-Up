import HomePage from "./components/pages/HomePage"
import PeaceOfMind from "./components/pages/PeaceOfMind"
import GenuineJoy from "./components/pages/GenuineJoy"
import Posts from "./components/pages/Posts"

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
    path: "/Posts",
    Component: Posts
  }

]

export default routes