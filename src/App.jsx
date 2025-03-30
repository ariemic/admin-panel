import SideBar from "./components/SideBar.jsx";
import Footer from "./components/Footer.jsx";
import Dashboard from "./components/Dashboard.jsx";


function App() {
  return (
      <div className="bg-stone-100 h-screen w-screen grid grid-cols-[280px_1fr] grid-rows-[1fr_64px]">
        <SideBar/>
        <Dashboard/>
        <Footer/>
      </div>
  )

}





export default App


