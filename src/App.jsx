import KeyFeature from "./components/keFeature/KeyFeature";
import KeyFeatureCard from "./components/keyFeatureCard/KeyFeatureCard";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Showcase from "./components/showcase/Showcase";
import { BrowserRouter } from "react-router-dom";
import Ui from "./components/Ui/Ui";
import UiCard from "./components/uiCard/UiCard";
import Design from "./components/design/Design";
import Number from "./components/numbers/Number";
import Notification from "./components/notification/Notification";
import Footer from "./components/footer/Footer";
import FooterEnd from "./components/footerEnd/FooterEnd";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Showcase />
      <Login />
      <KeyFeature />
      <Ui />
      <Design />
      <Number />
      <Notification />
      <Footer />
      <FooterEnd />
    </BrowserRouter>
  );
};

export default App;
