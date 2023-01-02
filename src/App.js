import logo from './logo.svg';
import './App.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//............1..................
// import Hello from './helloworld';
// import './App.css';
// function App()
// {
//     return(
//         <Hello/>
//     );
// }
// export default App;

//..........2.............
// import Congratscard from './congratscard';
// export default function App(){
//     return(<>
    
//       <Congratscard/> 
    
//     </>





//     );
// }


//............3............
// import Superleague from './superleague';
// export default function App(){
//     return(<>
    
//       <Superleague/> 
    
//     </>





//     );
// }

//...............4.............
// import Button from './button';
// export default function App(){
//     return(<>
    
//       <Button/> 
    
//     </>





//     );
// }


//...............5...........

// import Notification from './notification';
// export default function App(){
//     return(<>
    
//       <Notification/> 
    
//     </>





//     );
// }

//.........6...............
// import Tech from './technology';
// export default function App(){
//     return(<>
    
//       <Tech/> 
    
//     </>





//     );
// }

//...........7...............
// import Memberlogin from './memberlogin';
// export default function App(){
//     return(<>
    
//       <Memberlogin/> 
    
//     </>





//     );
// }

//...........8.............
// import Reusable from './reusable';
// import Congratscard from './congratscard';
// import Memberlogin from './memberlogin';

// import Notification from './notification';

// import Button from './button';
// import Superleague from './superleague';



// import Card from './card';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Tech from './technology';
// export default function App(){
//     return(<>
//     <BrowserRouter>
//     <Routes>

//     <Route path='/'element={<Reusable/>}/>
//     <Route path='/congratscard' element={[<Reusable/>,<Congratscard/>]}/>
//     <Route path='/memberlogin' element={[<Reusable/>,<Memberlogin/>]}/>
//     <Route path='/notification' element={[<Reusable/>,<Notification/>]}/>
//     <Route path='/button' element={[<Reusable/>,<Button/>]}/>
//     <Route path='/superleague' element={[<Reusable/>,<Superleague/>]}/>
//     <Route path='/technologycards' element={[<Reusable/>,<Tech/>]}/>
//     <Route path='/card' element={[<Reusable/>,<Card/>]}/>


//     </Routes>
    
    
    
//     </BrowserRouter>
    
    
//     </>





//     );
// }

import Home from './Task1/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Task1/main';
import Works from './Task1/works';
import Organic from './Task1/organic';
import Ourfarm from './Task1/ourfarm';
import About from './Task1/about';
import Prod from './Task1/product';
import Testmoni from './Task1/testmonial';
// import Reusable from './reusable';


export default function App(){
    return(
     <>
     <BrowserRouter>
     <Routes>
     {/* <Route path='/'element={<Reusable/>}/> */}
     <Route path='/' element={[<Main/>]}/>
     <Route path='/home' element={[<Main/>,<Home/>]}/>
     <Route path='/works' element={[<Main/>,<Works/>]}/>
     <Route path='/organic' element={[<Main/>,<Organic/>]}/>
     <Route path='/ourfarm' element={[<Main/>,<Ourfarm/>]}/>
     <Route path='/about' element={[<Main/>,<About/>]}/>
     <Route path='/product' element={[<Main/>,<Prod/>]}/>
     <Route path='/testmonial' element={[<Main/>,<Testmoni/>]}/>






     </Routes>
     
     
     
     
     </BrowserRouter>

     
     
     
     
     
     
     </>





    );
}


