import './App.css';
import {HashRouter as Router,Routes,Route } from 'react-router-dom'
import {Home} from './components/Home'
import {About} from './components/About'
import {Events} from './components/Events'
import {Contact} from './components/Contact'
import { Layout } from './Layout'
import { Footer } from './components/Footer'
import { Stylesheet } from './components/Stylesheet'

function App() {
  return (
      <Router>
        <Routes>
          <Route element ={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          </Route>
        </Routes>
        <Stylesheet/>
        <Footer/>
      </Router>
  );
}

export default App;
