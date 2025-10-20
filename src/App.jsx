import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Contact from './components/Contact';
import Home from './components/Home';
import History from './components/AboutAs/History';
import Employees from './components/AboutAs/Employees';
import Services from './components/Services';
import Competition from './components/AboutAs/Competition';
import Recommendations from './components/Books/Recommendations';
import DigitalLibrary from './components/Books/DigitalLibrary';
import BooksSearche from './components/Books/BooksSearche';
import Events from './components/Events';
import OurPublic from './components/Books/OurPublic';
import Kid from './components/Department/Kid';
import Adult from './components/Department/Adult';
import Scientific from './components/Department/Scientific';
import Homeland from './components/Department/Homeland';
import Project from './components/AboutAs/Project';
import Legati from './components/Department/Legati';
import MisionAndVision from './components/AboutAs/MisionAndVision';
import { FaEnvelope } from 'react-icons/fa';
import { HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import AnimatedPage from './components/Department/AnimatedPage';
import ImageModal from './components/ImageModal';
import { AnimatePresence } from 'framer-motion';
import NotFound from './components/NotFound';

function InnerApp() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  
  // State for image modal
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '', title: '' });

  // Function to handle image click (removed as unused)

  const handleCloseImageModal = () => {
    setShowImageModal(false);
    setSelectedImage({ src: '', alt: '', title: '' });
  };

  return (
    <>
     
      <div className="top-bar">
        <div className="bar-content">
   

          <span>Адреса: Главна 114, Рума</span>
          <span> |Радно време: понедељак-петак: 08-20h и суботом: 08-13h </span>
          <span> | <a href="https://youtube.com/@gradskabibliotekaruma" target="_blank" rel="noopener noreferrer" aria-label="YouTube kanal biblioteke" style={{ marginRight: '10px', fontSize: '1em', color: 'inherit' }}><i className="fab fa-youtube"></i> YouTube</a> |
          <a href="https://www.instagram.com/gradska_biblioteka_ruma" target="_blank" rel="noopener noreferrer" aria-label="Instagram biblioteke" style={{ marginRight: '10px', fontSize: '1em', color: 'inherit' }}><i className="fab fa-instagram"></i> Instagram</a> |
          <a href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma" target="_blank" rel="noopener noreferrer" aria-label="Facebook biblioteke" style={{ fontSize: '1em', color: 'inherit' }}><i className="fab fa-facebook"></i> Facebook</a></span> 
        </div>
      </div>

      <header>
        <Navbar expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)} className="sticky-navbar shadow">
          <Container>
            <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
              <Row>
                <Col md={4}>
                  <img 
                    src="/logo.jpg" 
                    alt="Грб Градске библиотеке Рума" 
                    className='logo clickable-image' 
                    style={{ marginLeft: '4.5rem' }} 
                    loading="lazy"
                    title="Кликните за већу слику"
                  />
                </Col>
                <Col md={4} className='mt-3'>
                  <h1 className='container-text fw-bold' style={{ marginLeft: '1.5rem' }}>
                    Градска библиотека „Атанасије Стојковић“ Рума
                  </h1>
                </Col>
              </Row>
            </Navbar.Brand>

            {/* Hamburger meni ili X dugme */}
            {!expanded && (
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            )}
            {expanded && (
              <button
                type="button"
                aria-label="Zatvori meni"
                onClick={() => setExpanded(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '2rem',
                  color: '#343a40',
                  zIndex: 1051,
                  display: 'block',
                }}
                className="d-lg-none"
              >
                &times;
              </button>
            )}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto fs-5 mt-5">

                <NavDropdown title="О БИБЛИОТЕЦИ" id="about-dropdown">
                  <NavDropdown.Item as={Link} to="/историјат-библиотеке" onClick={() => setExpanded(false)}>Историјат библиотеке</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/запослени-библиотеке" onClick={() => setExpanded(false)}>Запослени</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/визија-мисија-библиотеке" onClick={() => setExpanded(false)}>Визија и мисија</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/пројекти-библиотеке" onClick={() => setExpanded(false)}>Пројекат</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/конкурс-библиотеке" onClick={() => setExpanded(false)}>Конкурс</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="ФОНД" id="fund-dropdown">
                 <NavDropdown.Item as={Link} to="/препоруке-библиотекара" onClick={()=>setExpanded(false)}>Препорука библиотекара</NavDropdown.Item> 
                  <NavDropdown.Item as={Link} to="/наша-издања" onClick={() => setExpanded(false)}>Наша издања</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/дигитална-библиотека" onClick={() => setExpanded(false)}>Дигитална библиотека</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/претраживање-фонда" onClick={() => setExpanded(false)}>Претраживање фонда</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/легати-библиотеке" onClick={() => setExpanded(false)}>Легати</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="ОДЕЉЕЊА" id="sections-dropdown">
                  <NavDropdown.Item as={Link} to="/одељење-за-децу" onClick={() => setExpanded(false)}>Одељење за децу</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/одељење-за-одрасле" onClick={() => setExpanded(false)}>Одељење за одрасле</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/одељење-научне-и-стручне-литературе" onClick={() => setExpanded(false)}>Одељење научне и стручне литературе</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/завичајна-збирка" onClick={() => setExpanded(false)} >Завичајна збирка</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/услуге-библиотека-рума" onClick={() => setExpanded(false)}>УСЛУГЕ</Nav.Link>
                <Nav.Link as={Link} to="/манифестације-библиотека-рума" onClick={() => setExpanded(false)}>МАНИФЕСТАЦИЈЕ</Nav.Link>
                <Nav.Link as={Link} to="/контакт-библиотека-рума" onClick={() => setExpanded(false)}>КОНТАКТ</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path='/контакт-библиотека-рума' element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path='/историјат-библиотеке' element={<AnimatedPage><History /></AnimatedPage>} />
          <Route path='/запослени-библиотеке' element={<AnimatedPage><Employees /></AnimatedPage>} />
          <Route path='/услуге-библиотека-рума' element={<AnimatedPage><Services /></AnimatedPage>} />
          <Route path='/манифестације-библиотека-рума' element={<AnimatedPage><Events /></AnimatedPage>} />
          <Route path='/конкурс-библиотеке' element={<AnimatedPage><Competition /></AnimatedPage>} />
          <Route path='/препоруке-библиотекара' element={<AnimatedPage><Recommendations /></AnimatedPage>} />
          <Route path='/наша-издања' element={<AnimatedPage><OurPublic /></AnimatedPage>} />
          <Route path='/дигитална-библиотека' element={<AnimatedPage><DigitalLibrary /></AnimatedPage>} />
          <Route path='/претраживање-фонда' element={<AnimatedPage><BooksSearche /></AnimatedPage>} />
          <Route path='/одељење-за-децу' element={<AnimatedPage><Kid /></AnimatedPage>} />
          <Route path='/одељење-за-одрасле' element={<AnimatedPage><Adult /></AnimatedPage>} />
          <Route path='/одељење-научне-и-стручне-литературе' element={<AnimatedPage><Scientific /></AnimatedPage>} />
          <Route path='/завичајна-збирка' element={<AnimatedPage><Homeland /></AnimatedPage>} />
          <Route path='/пројекти-библиотеке' element={<AnimatedPage><Project /></AnimatedPage>} />
          <Route path='/легати-библиотеке' element={<AnimatedPage><Legati /></AnimatedPage>} />
          <Route path='/визија-мисија-библиотеке' element={<AnimatedPage><MisionAndVision /></AnimatedPage>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <footer className="library-footer">
        <Container>
          <Row>
            <Col md={12}>
              <div>
                <span>АДРЕСА: ГЛАВНА 114, РУМА</span>
                <span> |Радно време: понедељак-петак: 08-20h и суботом: 08-13h </span>
                <span> | <FaEnvelope style={{ fontSize: '20px', color: '#4b301f' }} /> gbasruma@gmail.com</span>
                <span> | <a href="https://youtube.com/@gradskabibliotekaruma" target="_blank" rel="noopener noreferrer">YouTube</a></span>
                <span> | <a href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma" target="_blank" rel="noopener noreferrer">Facebook</a></span>
                <span> | <a href="https://www.instagram.com/gradska_biblioteka_ruma" target="_blank" rel="noopener noreferrer">Instagram</a></span>
              </div>
            </Col>
          </Row>
          <br /><hr />
          <Row>
            <Col md={12}>
              <p className='container-text'>
                <br />&copy; 2025 Библиотека Рума. Задржава сва права.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Image Modal */}
      <ImageModal
        show={showImageModal}
        onHide={handleCloseImageModal}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        title={selectedImage.title}
      />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <InnerApp />
      </Router>
    </HelmetProvider>
  );
}

export default App;
