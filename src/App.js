// import logo from './logo.svg';
import './App.css';
import Blog from './components/blog';
// import Head from './components/head';
import Post from './components/post';
import Side from './components/side';
import Single from './components/single';
import Write from './write';
import Setting from './setting';
import Login from './login';
import Register from './register';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './components/home'

import Raj from './components/raj';
import Singlepost from './singlepost';
import Jsx from './components/jsx';
import Complan from './components/complan';
import Tional from './components/tional';
import Lock from './components/lock';
import Mapfunction from './components/mapfunction';
import Rendering from './components/rendering';
import Styleto from './components/styleto'
import Reactrouter from './components/reactrouter';
import Apireact from './components/apireact';
import Asynchronous from './components/asynchronous'
import Async from './components/async'
import Hooksreact from './components/hooksreact';
import Useeffect from './components/useeffect';
function App() {
  
  return (
  
    
    <div className="App">
    
      

       <BrowserRouter>
      
       <Home/>
        <Routes>
        
        <Route  path='/home' element={<Home />} /> 
         <Route exact path='/blog' element={<Blog />} /> 
          <Route  path='/side' element={<Side />} /> 
          <Route  path='/singlepost' element={<Singlepost />} /> 
          <Route path='/raj' element={<Raj />} /> 
          <Route exact path='/setting' element={<Setting />} />
           <Route  path='/login'  element={<Login />} /> 
          <Route  path='/register' element={<Register />} /> 
          <Route  path='/post' element={<Post />} />
          <Route  path='/jsx' element={<Jsx />} /> 
          <Route  path='/complan' element={<Complan />} /> 
          <Route  path='/tional' element={<Tional />} /> 
          <Route  path='/lock' element={<Lock/>} /> 
          <Route  path='/mapfunction' element={<Mapfunction/>} /> 
          <Route  path='/rendering' element={<Rendering/>} /> 
          <Route  path='/styleto' element={<Styleto/>} /> 
          <Route  path='/reactrouter' element={<Reactrouter/>} /> 
          <Route  path='/apireact' element={<Apireact/>} /> 
          <Route  path='/Asynchronous' element={<Asynchronous/>} /> 
          <Route  path='/Async' element={<Async/>} /> 
          <Route  path='/hooksreact' element={<Hooksreact/>} /> 
          <Route  path='/useeffect' element={<Useeffect/>} /> 


         </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;
