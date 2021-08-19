import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/header";
import Home from './components/home';
import Bollywood from './components/Bollywood';
function App(){
    return(
        <>
       <BrowserRouter>
       <Switch>
           <>
           <Header />
           <Route path="/Bollywood" component={Bollywood} exact></Route>

           <Route path="/" component={Home} exact></Route>
           </>
       </Switch>
       </BrowserRouter>
       </>
    )
}
export default App;