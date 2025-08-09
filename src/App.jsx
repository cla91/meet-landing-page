import GlobalStyles from "./components/styles/Global.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
const theme = {
  colors: {},
};

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
