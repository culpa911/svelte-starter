import Home from "./components/Home.svelte";
import Article from "./components/Article.svelte";
import About from "./components/About.svelte";
import NotFound from "./components/NotFound.svelte";
import SignIn from './components/SignIn.svelte'
import ForgotPassword from "./components/ForgotPassword.svelte";
import Carousel from "./components/Carousel.svelte";
import Products from "./components/Products.svelte";


export const routes = {
  // Exact path
  "/": Home,
  "/carousel":Carousel,
  "/about": About,
  "/forgot-password": ForgotPassword,
  // Exact path + parameter
  "/article/:title": Article,
  "/product/:title": Products,
  "/auth/login": SignIn,
  // Wildcard
  "*": NotFound
};