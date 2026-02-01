import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NewFetch from './components'
import Search from './components/search'

function App() {
  return (
		<Router>
      <div>
				<Routes>
          {/* <Route path='/' element={<NewFetch />}></Route> */}
          <Route path='/' element={<Search/>}></Route>
        </Routes>
			</div>
		</Router>
	);
}

export default App
