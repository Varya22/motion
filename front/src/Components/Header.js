// import React from 'react'
// import '../App.css';
// import './Header.css';

// import { Navbar, Nav, Container } from 'react-bootstrap'
// import { Button } from 'reactstrap';
// import AuthService from '../services/Auth.service';

// const Header = () => {
// 	console.log(localStorage.getItem('user'))
// 	return (<header> <Navbar bg='white' variant='black' expand="lg" collapseOnSelect>
// 		<Container>
// 			<Navbar.Brand className='logo' href="/"><img src={require('./img/loqotip.jpg')} alt="logo" style={{marginRight: 190}} width={110}/></Navbar.Brand>

// 			<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 				<Navbar.Collapse id="basic-navbar-nav ms-auto">
// 					<Nav className="mr-auto" >

// 						<Navbar.Brand href='/AboutUs'>О нас</Navbar.Brand>
// 						<Navbar.Brand href='/Brands'>Бренды</Navbar.Brand>
// 						<Navbar.Brand href='/Trends'>Тренды</Navbar.Brand>
// 						<Navbar.Brand href='/Dictionary'>Словарь терминов</Navbar.Brand>
// 						<Navbar.Brand href='/Outfit'>Провинциальные аутфиты</Navbar.Brand>
// 						{/* <Navbar.Brand href='/ValidatedLoginForm'>О fd</Navbar.Brand> */}
// 					</Nav>



// 			{/* <Nav className="ms-auto" ><Button href="/">Зарегистрироваться</Button>

// 				<div style={{ color: 'white' }}>....</div>
// 				<Button href="/">Войти</Button>
// 			</Nav> */}
// 		</Navbar.Collapse>
// 	</Container>
// 	</Navbar> </header >);

// }
// export default Header

import React from 'react'
import '../App.css';
import './Header.css';

import { Navbar, Nav, Container } from 'react-bootstrap'
import { Button } from 'reactstrap';
import AuthService from '../services/Auth.service';

const Header = () => {
	console.log(localStorage.getItem('user'))
	return (<header> <Navbar bg='white' variant='black' expand="lg" collapseOnSelect>
		<Container>


			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav ms-auto">
				<Nav className="mr-auto" >

					<Navbar.Brand href='/Price'>Прайс</Navbar.Brand>
					<Navbar.Brand href='/Services'>Услуги</Navbar.Brand>
					<Navbar.Brand href='/Stocks'>Акции</Navbar.Brand>
					<Navbar.Brand href='/About'>О нас</Navbar.Brand>
					{/* <Navbar.Brand href='/ValidatedLoginForm'>О fd</Navbar.Brand> */}
				</Nav>
				<Navbar.Brand className='logo' href="/"><img src={require('./img/log.png')} alt="logo" width={190}
				/>
				</Navbar.Brand>
				<Nav className="ms-auto" >
					{!localStorage.getItem('user') ? (
						<>
							<Button color='dark' outline href="/Login" style={{ marginRight: 5 }}>Войти</Button>
							<Button color='dark' outline href="/RegForm">Зарегистрироваться</Button>
						</>
					) : (

						<>
							<Button color='dark' outline href="/" style={{ marginRight: 5 }}>Профиль</Button>
							<Button color='dark' outline href="/" onClick={(e) => AuthService.logout()}>Выход</Button>
						</>
					)

					}



				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar> </header >);

}
export default Header


