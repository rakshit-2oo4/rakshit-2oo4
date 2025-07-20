import './App.css'
import Header from './components/Header'
import Aurora from './components/Aurora';
import CustomChart from './components/CustomChart';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Tech from './components/Tech';
import Footer from './components/Footer';
function App() {

  return (
    <div className='m-0 h-100vh w-full overflow-hidden bg-black'>
      <div className='bg-black text-white flex flex-col items-center justify-center h-full w-full'>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.7}
        />
        <div>
          <Header />
        </div>
        <div className="p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto md:">
          <CustomChart />
        </div>
        <div className='m-4 p-2'>
          <Projects />
        </div>
        <div className='m-4 p-2'>
          <Tech />
        </div>
        <div className='m-4 p-2'>
          <Tools />
        </div>
        <div className='m-4 p-2'>
          <Footer />
        </div>
        <p className='mb-2'>Copyright &copy; 2025 Portfolio</p>
      </div>
    </div>
  )
}

export default App
