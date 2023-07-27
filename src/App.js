import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import IndexPage from './pages/IndexPage';
import PostPage from './pages/PostPage';
import { UserContextProvider } from './UserContext';
import Layout from './common/Layout';
import NavBar from './common/NavBar';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/post/:id' element={<PostPage />}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} >

          </Route>

        </Route>
      </Routes>
    </UserContextProvider>


  )
}

export default App;
