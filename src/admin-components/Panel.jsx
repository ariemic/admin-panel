import SideBar from './SideBar.jsx';
import Dashboard from './Dashboard.jsx';
import Footer from './Footer.jsx';

export default function Panel() {
  return (
    <div className="grid h-screen w-screen grid-cols-[280px_1fr] grid-rows-[1fr_64px] bg-stone-100">
      <SideBar />
      <Dashboard />
      <Footer />
    </div>
  );
}
