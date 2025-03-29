import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter, Routes, Route } from "react-router";
import Root from './layouts/Root';
import Detail from './layouts/detail/Detail';
import Home from './layouts/homepage/Home';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Root />}>
				<Route index element={<Home />} />
				<Route path='/service/detail/:id' element={<Detail />} />
			</Route>
		</Routes>
	</BrowserRouter>
)
