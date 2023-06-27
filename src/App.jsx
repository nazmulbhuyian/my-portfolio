import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import fullBg from './assets/fullBg.png';


function App() {

  return (
    <div className='bg-slate-800 scroll-smooth' style={{ backgroundImage: `url(${fullBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  )
}

export default App
