import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter, Routes, Route } from "react-router";
import Root from './layouts/Root';
import Detail from './layouts/detail/Detail';
import Home from './layouts/homepage/Home';
import UserLogin from './layouts/userAuth/UserLogin';
import NotFound from './layouts/NotFound';
import Login from './layouts/userAuth/Login';
import SignUp from './layouts/userAuth/SignUp';
import AuthProvider from './context_providers/AuthProvider';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Root />}>
					<Route index element={<Home />} />
					<Route path='/service/detail/:id' element={<Detail />} />
					<Route path='*' element={<NotFound />} />
					<Route path='/login' element={<UserLogin />} >
						<Route index element={<Login />} />
						<Route path='signup' element={<SignUp />} />
					</Route>
				</Route>
			</Routes>
		</AuthProvider>
	</BrowserRouter >
)
