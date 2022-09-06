import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";

function App() {
  const useStyles = makeStyles(() => {
    App: {
    }
  });
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={HomePage} exact />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
