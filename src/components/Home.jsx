import React, { useState, useCallback, useMemo, Suspense } from 'react';
import './Home.css';
import { Button, Col, Container, Row, Modal } from 'react-bootstrap';
import ImageModal from './ImageModal';
import cobbis from '../images/cobbis.webp';
import matica from '../images/matica.webp';
import narodna from '../images/narodna.webp';
import ministarstvo from '../images/ministarstvo.webp';
import opstina from '../images/opstina.webp';
import biblioteka from '../images/biblioteka.webp';
import konkurs from '../images/konkurs.webp';
import muzej from '../images/muzej.webp';
import kc from '../images/kc.webp';
import turisticka from '../images/turisticka.webp';
import '@react-pdf-viewer/core/lib/styles/index.css';
import beke from '../images/beke.webp';
import Frigo from '../images/Frigo.webp';
import Boss from '../images/Boss.webp';
import trkulja from '../images/trkulja.webp';
import books from '../images/books.webp';
import Panonija from '../images/Panonija.webp';
import karoselSlika from '../images/karoselSlika.webp';
import digitalna from '../images/digitalna.webp';
import 'react-calendar/dist/Calendar.css';
import AnimatedCard from './Department/AnimatedCard'; 

import pokrajina from '../images/pokrajina.webp';
import { Helmet } from "react-helmet";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import poetskoVece from '../images/poetskoVece.webp';
import konkursAtanasije from '../images/konkursAtanasije.webp';


import sanjalica from '../images/sanjalica.webp';
import todor from '../images/todor.webp';
import mirko from '../images/mirko.webp';
import milan from '../images/milan.webp';
 
 

const Calendar = React.lazy(() => import('react-calendar'));
const AnimatedImage = React.lazy(() => import('./Department/AnimatedImage'));


const Home =()=> { 
  const [date, setDate] = useState(new Date());
  const markedDates = useMemo(() => [
    
    new Date(new Date().getFullYear(), 7, 22), // 22. avgust
    new Date(new Date().getFullYear(), 7, 25), // 25. avgust
    new Date(new Date().getFullYear(), 9, 29), // 29. oktobar
    new Date(new Date().getFullYear(), 9, 15), // 15. oktobar
  ], []);

  const [showFriends, setShowFriends] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [imageSetIndex, setImageSetIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  
  // State for image modal
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '', title: '' });

  // Ensure carousel is properly initialized
  React.useEffect(() => {
    // Force carousel initialization for all screen sizes
    const carouselElement = document.getElementById('demo');
    if (carouselElement && window.bootstrap) {
      // Destroy existing carousel instance if it exists
      const existingCarousel = window.bootstrap.Carousel.getInstance(carouselElement);
      if (existingCarousel) {
        existingCarousel.dispose();
      }
      
      // Initialize new carousel instance
      new window.bootstrap.Carousel(carouselElement, {
        interval: 12000,
        pause: false,
        ride: 'carousel'
      });
    }
  }, []);


  const tileClassName = useCallback(({ date, view }) => {

    if (markedDates.some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear())) {
      return 'marked-date';
    }
  }, [markedDates]);


  const onChange = useCallback(date =>{
    setDate(date);
  
    if (
      date instanceof Date &&
      date.getDate() === 30 &&
      date.getMonth() === 6 && // jul je 6 (0-indeksiran)
      date.getFullYear() === new Date().getFullYear()
    ) {
 
    
      setModalImage(poetskoVece);
      setShowImage(true);
    } else if (
      date instanceof Date &&
      date.getDate() === 22 &&
      date.getMonth() === 7 &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      setModalImage(todor);
      setShowImage(true);
    } else if (
      date instanceof Date &&
      date.getDate() === 25 &&
      date.getMonth() === 7 &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      setModalImage(sanjalica);
      setShowImage(true);
    } else if (
      date instanceof Date &&
      date.getDate() === 29 &&
      date.getMonth() === 9 && // oktobar je 9
      date.getFullYear() === new Date().getFullYear()
    ) {
      setModalImage(milan);
      setShowImage(true);
       } else if (
      date instanceof Date &&
      date.getDate() === 15 &&
      date.getMonth() === 9 &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      setModalImage(mirko);
      setShowImage(true);
    } else {
      setShowImage(false);
    }
  }, []);

  const imageSets = useMemo(() => [
    [milan, mirko],
    [sanjalica, todor]
   
  ], []);
  
  const toggleImageSet = () => {
    setImageSetIndex((prevIndex) => {
      const lastIndex = imageSets.length - 1;
      let nextIndex = prevIndex + (isForward ? 1 : -1);
      if (nextIndex > lastIndex) {
        setIsForward(false);
        nextIndex = prevIndex - 1;
      } else if (nextIndex < 0) {
        setIsForward(true);
        nextIndex = prevIndex + 1;
      }
      return nextIndex;
    });
  };

  // Function to handle image click
  const handleImageClick = (imageSrc, imageAlt, imageTitle) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt, title: imageTitle });
    setShowImageModal(true);
  };

  const handleCloseImageModal = () => {
    setShowImageModal(false);
    setSelectedImage({ src: '', alt: '', title: '' });
  };
  
  return (
    <>
  <Helmet>
  <title>Градска библиотека Рума – књиге, догађаји, дигитална библиотека</title>
  <meta name="description" content="Званични сајт Градске библиотеке у Руми – сазнајте више о фонду књига, догађајима, културним манифестацијама, радном времену и приступу дигиталној библиотеци." />
  <meta name="keywords" content="библиотека, Рума, књиге, догађаји, препоруке, Атанасије Стојковић" />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.bibliotekaruma.rs/",
        "name": "Почетна - Библиотека Рума",
        "description": "Званична почетна страница Градске библиотеке Атанасије Стојковић у Руми. Овде можете пронаћи најновије вести, препоруке романа, догађаје и више.",
        "publisher": {
          "@type": "Organization",
          "name": "Градска библиотека Атанасије Стојковић Рума",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bibliotekaruma.rs/logo.jpg"
          }
        }
      }
    `}
  </script>
</Helmet>

  <Row><Col md={12}>
   <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="12000" data-bs-pause="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-label="Пређи на прву слику карусела"></button>  
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Пређи на другу слику карусела"></button> 
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Пређи на трећу слику карусела"></button> 
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3" aria-label="Пређи на четврту слику карусела"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4" aria-label="Пређи на пету слику карусела"></button>

  </div>
 
  <div className="carousel-inner"> 
      <div className="carousel-item active">
        <img 
          src={konkursAtanasije} 
          alt="Књижевни конкурс Атанасије Стојковић" 
          className="d-block w-100 image-carousel img-thumbnail img-fluid" 
          loading="lazy"
          width="1200"
          height="765"
        />
        <div className="carousel-caption">
     
          <Button
            href="https://www.instagram.com/p/DMQRMyhI5wg/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light container-button"
            aria-label="Сазнајте више о књижевном конкурсу Атанасије Стојковић"
            style={{
              textShadow: 'none',
              backgroundColor: '#f3f2ee',
              color: '#3f2c11',
              border: 'none',
              marginTop: '1rem',
              fontWeight: 'bold'
            }}
          >
            ДЕТАЉНИЈЕ
          </Button>
      </div>
      </div>
      <div className="carousel-item">
        <img 
          src={biblioteka}  
          alt="библиотека у Руми"  
          className="d-block w-100 image-carousel img-thumbnail img-fluid" 
          loading="lazy"
          width="1200"
          height="675"
        />
<div  className="carousel-caption ">
        <p className="carousel-caption-text" style={{padding:'2.5%'}}> Зграда Градске библиотеке „Атанасије Стојковић" представља пример јединственог архитектонског стваралаштва.
        <Button
     href="https://www.gradnja.rs/rekonstrukcija-dom-vojske-jna-ruma/ "
      target="_blank"
      rel="noopener noreferrer"
 className="btn btn-light container-button"
      aria-label="Сазнајте више о згради библиотеке"
      style={{textShadow: 'none'}}
  >
 ДЕТАЉНИЈЕ
  </Button>
        </p>
      </div>
    </div> 
          <div className="carousel-item">
      <img 
        src={digitalna}  
        alt="Атансије Стојковић"  
        className="d-block w-100 image-carousel img-thumbnail img-fluid clickable-image" 
        loading="lazy"
        onClick={() => handleImageClick(digitalna, 'Атансије Стојковић', 'Атансије Стојковић')}
      />
      <div  className="carousel-caption ">
        <p className="carousel-caption-text" style={{padding:'1.5%'}} >  Румљанин Атанасије Стојковић био је најобразованији Србин<br/> прве трећине 19. века.
         <Button
    href="https://www.facebook.com/watch/?v=1235424304400303" 
      target="_blank"
      rel="noopener noreferrer"
 className="btn btn-light container-button btn-lg"
      aria-label="Сазнајте више о Атанасију Стојковићу"
      style={{textShadow: 'none'}}
  >
 ДЕТАЉНИЈЕ
  </Button> </p>
      </div>  
    </div>
    <div className="carousel-item">
      <img 
        src={karoselSlika} 
        alt="Култура за све"   
        className="d-block w-100 image-carousel img-thumbnail img-fluid clickable-image" 
        loading="lazy"
        onClick={() => handleImageClick(karoselSlika, 'Култура за све', 'Култура за све')}
      />
      <div  className="carousel-caption ">
        <p className="carousel-caption-text" style={{padding:'2.5%'}}>Пројекат "КУЛТУРА ЗА СВЕ" представља јачање техничких капацитета наше установе.
        <Button
    href="https://sremskevesti.rs/sva-odeljenja-rumske-gradske-biblioteke-atanasije-stojkovic-dostupna-ljudima-ostecenog-sluha-slepim-i-slabovidim-osobama/" 
      target="_blank"
      rel="noopener noreferrer"
 className="btn btn-light container-button"
      aria-label="Сазнајте више о пројекту Култура за све"
      style={{textShadow: 'none'}}
  >
 ДЕТАЉНИЈЕ
  </Button>
        </p>
      </div>
    </div> 
    <div className="carousel-item">
      <img 
        src={books} 
        alt="ОМИЉЕНЕ КЊИГЕ НАШИХ КОРИСНИКА" 
        className="d-block w-100 image-carousel img-thumbnail img-fluid clickable-image" 
        loading="lazy"
        onClick={() => handleImageClick(books, 'ОМИЉЕНЕ КЊИГЕ НАШИХ КОРИСНИКА', 'ОМИЉЕНЕ КЊИГЕ НАШИХ КОРИСНИКА')}
      />
      <div className="carousel-caption ">
        <p className="carousel-caption-text" style={{padding:'1.5%'}}>ОМИЉЕНЕ КЊИГЕ НАШИХ КОРИСНИКА
        <Button
    href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma/videos/967554408223187?locale=sr_RS" 
      target="_blank"
      rel="noopener noreferrer"
 className="btn btn-light container-button"
      aria-label="Сазнајте више о омиљеним књигама корисника"
      style={{textShadow: 'none', backgroundColor: 'gray', color: 'white', border: 'none'}}
  >
 ДЕТАЉНИЈЕ
  </Button>
        </p>
      </div>
    </div>       
</div>
  </div>
  </Col>

</Row>

<Container  className=" container-library ms-auto mt-4 mb-4 ">
 
<h2 className= "container-title"  >ОГЛАСНА ТАБЛА</h2>
<hr style={{margin: '0 auto', width: '50%' ,border: '1px solid' }} /> <Row>
    <Col md={4} className='mt-3 mb-3 text-center '>
    
        <Suspense fallback={<div>Loading Calendar...</div>}>
          <Calendar  onChange={onChange} value={date}  tileClassName={tileClassName}  />
        </Suspense>
      {/* Modal za prikaz slike */}
              <Modal show={showImage} onHide={() => setShowImage(false)} centered size="md">
        <Modal.Header closeButton style={{backgroundColor: '#f3f2ee'}}>
          <Modal.Title>Догађај</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center" style={{backgroundColor: '#f3f2ee'}}>
          {modalImage && (
            <img src={modalImage} alt="Слика за изабрани датум" style={{width: '100%', height: 'auto'}} loading="lazy" />
          )}
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: '#f3f2ee'}}>
          <Button variant="secondary" onClick={() => setShowImage(false)} aria-label="Затвори модал са сликом">
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>  

    <Col md={8} className='mt-3 mb-3 text-center'>
      <div className="carousel-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        <div className="carousel-images" style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Suspense fallback={<div>Loading AnimatedImage...</div>}>
            <AnimatedImage
              src={imageSets[imageSetIndex][0]}
              alt="Прва слика"
              className="container-image"
              style={{ 
                height: 'auto',
                width: '100%',
                maxWidth: window.innerWidth < 768 ? '280px' : '400px'
              }}
            />
          </Suspense>
          
          <Suspense fallback={<div>Loading AnimatedImage...</div>}>
            <AnimatedImage
              src={imageSets[imageSetIndex][1]}
              alt="Друга слика"
              className="container-image"
              style={{ 
                height: 'auto',
                width: '100%',
                maxWidth: window.innerWidth < 768 ? '280px' : '400px'
              }}
            />
          </Suspense>
        </div>
        
        <Button 
          variant="secondary" 
          onClick={toggleImageSet}
          style={{ 
            borderRadius: '50%',
            width: window.innerWidth < 768 ? '35px' : '40px',
            height: window.innerWidth < 768 ? '35px' : '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: window.innerWidth < 768 ? '16px' : '18px',
            padding: '0',
            fontWeight: 'bold',
            marginLeft: '10px',
            marginTop: window.innerWidth < 768 ? '10px' : '0'
          }}
          aria-label="Пребаци скуп слика"
          title={isForward ? "Пребаци на следећи скуп" : "Врати на претходни скуп"}
        >
          {isForward ? '→' : '←'}
        </Button>
      </div>
    </Col>
  </Row>
</Container>

  <Container className='container-library ms-auto mt-4 mb-4'>
    <Row>
      <Col md={12}>
        <h2 className='container-title'> Трећи Дани Атанасија Стојковића</h2><hr/>
        <p className='container-text'>
          У Градској библиотеци „Атанасије Стојковић” обележавају се Дани Атанасија Стојковића, трећу годину заредом,
          као омаж великом научнику, филозофу и писцу чије име библиотека с поносом носи. Окосница овог обележавања
          јесте датум његовог рођења – 20. септембар 1773. године, од кога је протекло 252 године.
          <br/><br/>
          <strong >Предавања одржана ове године:</strong>
          <br/>
         - Проф. др Исидора Бјелаковић: „Представљање фототипског издања Новог завета по преводу Атанасија Стојковића“.
          <br/>
         - Проф. др Растислав Стојсављевић: „Географске тајне у делима Атанасија Стојковића“.
          <br/>
         - Проф. др Радослав Ераковић: „Биографија као роман: живот и прикљученија Атанасија Стојковића“.
          <br/>
         - Михајло Морача: „Преводи Новог завета - Атанасије Стојковић“.
        </p>    
        <hr/><br/>
            <p className='container-text' style={{marginTop: '1rem'}}>
          Завршницу овогодишњих, трећих Дана Атанасија Стојковића, обележила је пројекција документарног филма
          „У чије име говориш Вуче: сукоб Атанасија Стојковића и Вука Стефановића Караџића“, ауторке Јелене Видаковић.
        </p>
        <div className='container-iframe'>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/J-f1BCsa3SM"
            title="Дани Атанасија Стојковића"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

      </Col>
    </Row>
  </Container>

 <Container className='container-library mt-2 mb-2'>
   <h2 className="container-title mb-3">Препорука месеца</h2>
   <p className="container-text">Погледајте актуелну препоруку и остале предлоге библиотекара.</p>
   <Button
     variant="secondary"
     href="/preporuke-bibliotekara"
     aria-label="Погледај све препоруке библиотекара"
   >
     Препоруке библиотекара
   </Button>
 </Container>
  
  
        <Container className='container-library ms-auto mt-4 mb-4'>
         <Row className='text-center'>
         <Col md={4} className='mt-4'>     
         <AnimatedCard>
        <a href="https://plus.cobiss.net/cobiss/sr/sr/bib/search?db=gbru" target="_blank" rel="noopener noreferrer">
        <p className='container-title'>Претражите<br/> наш фонд  </p> </a><img 
      src={cobbis}
      alt="COBISS" 
      className='container-image'
      style={{border:'none', width: "85%"}}
      width="400"
      height="150"
      loading="lazy"
      />
  </AnimatedCard> 
     </Col>
           <Col md={4} className='mt-4'>
               <AnimatedCard>
                <a href="https://www.digitalna.bibliotekaruma.rs/" target='_blank' rel="noopener noreferrer">  <p className='container-title'>  
               Наш дигитални<br/> фонд </p></a>
                <br/><img 
      src="/logo.jpg"
       alt="Грб Градске библиотеке Рума" 
       className='container-image digital-logo'
       style={{border:'none', width:'33%'}}
       width="200"
       height="200"
       loading="lazy"
       /> </AnimatedCard>
       </Col> 
                   <Col  md={4}  className='mt-4'>
                  <AnimatedCard>
             <a href="https://www.facebook.com/photo/?fbid=1326535312805422&set=a.512519967540298" target="_blank" rel="noopener noreferrer" className="konkurs-link">
               <p className="container-title mb-0">
                 Књижевни <br/>конкурс
               </p>
             </a>
             <img 
       src={konkurs}
       alt="Конкурс" 
       className='container-image konkurs-logo'
       style={{border:'none', width:'48%'}}
               width="300"
               height="200"
               loading="lazy"
             />
           </AnimatedCard>
         </Col></Row>
     <hr/>
           <Row>   
            <Col md={12}>
            <AnimatedCard className='container-iframe'>
            <iframe 
  width="560" 
  height="315" 
  src="https://www.youtube-nocookie.com/embed/0Ay8XmhQHSI" 
  title="Филм: Година иза нас" 
  frameBorder="0" 
  allowFullScreen>
</iframe>
    </AnimatedCard>
       </Col></Row>
       </Container>

        <br/><hr/>
   <AnimatedCard>
      <Container className='container-library ms-auto mt-4 mb-4' >
        <Row>
    
    <Row>

  <Col md={12}>
        <h2 className='container-title'>Званични документи</h2><br/>
        <p className='container-text'>Правилник о условима и начину коришћења библиотечке грађе</p>
        <Button
  onClick={() => window.open('/Pravilnik.pdf', '_blank')}
className='btn btn-secondary'
aria-label="Преузми правилник о условима и начину коришћења библиотечке грађе"
>
ДЕТАЉНИЈЕ
</Button><hr/>
<p className='container-text'>Статут установе Градске библиотеке „Атанасије Стојковић“ Рума </p>
        <Button
  onClick={() => window.open('/Statut.pdf', '_blank')}
className='btn btn-secondary'
aria-label="Преузми статут установе Градске библиотеке Атанасије Стојковић Рума"
>
ДЕТАЉНИЈЕ
</Button><br/><hr/> </Col>
</Row>
    </Row>
      </Container>
</AnimatedCard>
    <br/><hr/>

<h2 className='container-title'>Пријатељи и сарадници </h2>
<Row className='image-background '>
    <div className="carousel-item active">
      <div  style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}} >
     < Row>
          <Col md={12} className='text-center' > 
        <img style={{width:'13%' }} src={ministarstvo} alt='Министарство културе Србије' loading="lazy" />
<img style={{width:'18%'}}  src={opstina} alt='Општина Рума' loading="lazy"/>     
<img src={pokrajina} style={{width:'10%'}} alt='Покрајински секретаријат за културу' loading="lazy" />
    </Col></Row>
      
          <hr/> 
          <Col md={12} className='text-center'>
          <img style={{width:'15%'}}  src={matica} alt='Матица српска' loading="lazy" />  
<img style={{width:'10%'}}  alt='Народна библиотека Србије' src={narodna} loading="lazy"/> 
       <img style={{width:'25%', marginTop:'1em', marginLeft:'1rem'}} src={muzej} alt='Музеј у Руми' loading="lazy"/>
          <img style={{width:'15%',marginLeft:'1rem' }} src={turisticka} alt='Туристичка организација Рума' loading="lazy"/>
          <img  style={{width:'10%', marginLeft:'1rem'}}  src={kc} alt="Културни центар Рума"  loading="lazy"/>
         </Col>
          </div>
      </div>     
</Row>

<div
  style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%' }}
  className="container mt-3"
>
  <h2 style={{marginLeft:'26rem'}}>Пријатељи библиотеке</h2>
  {!showFriends && (
  <button
    type="button"
    className="btn btn-secondary"
      onClick={() => setShowFriends(true)}
      aria-label="Прикажи пријатеље библиотеке"
  >
    Пријатељи библиотеке
  </button>
  )}
  {showFriends && (
    <div className="text-center" style={{position: 'relative'}}>
      <button
        type="button"
        className="btn mb-3"
        style={{ backgroundColor: '#343a40', color: 'white', border: 'none', position: 'absolute', top: '-1.5rem', left: '0.5rem', zIndex: 2 }}
        onClick={() => setShowFriends(false)}
        aria-label="Затвори пријатеље библиотеке"
      >
        Затвори
      </button>
      <div className="d-flex justify-content-center align-items-center flex-wrap" style={{marginTop: '2.5rem'}}>
    <img
      style={{ width: '12%', marginRight:'1rem', objectFit: 'contain' }}
      src={Panonija}
      alt="Панонија књижара у Руми"
      width="144"
      height="72"
      loading="lazy"
    />
    <img
      style={{ width: '12%', objectFit: 'contain' }}
      src={Boss}
      alt="Босс компанија Рума"
      width="144"
      height="72"
      loading="lazy"
    />
    <img
      style={{ width: '15%', objectFit: 'contain' }}
      src={trkulja}
      alt="Тркуља керамика Рума"
      width="180"
      height="90"
      loading="lazy"
    />
    <img
      style={{ width: '10%', objectFit: 'contain' }}
      src={Frigo}
      alt="Фриго Жика Рума"
      width="120"
      height="60"
      loading="lazy"
    />
    <img
      style={{ width: '12%', marginLeft:'1rem', objectFit: 'contain' }}
      src={beke}
      alt="Беке компанија Рума"
      width="144"
      height="72"
      loading="lazy"
    />
  </div>
    </div>
    )}
</div><hr/>

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

export default Home;