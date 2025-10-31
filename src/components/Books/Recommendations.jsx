import React, { useState } from 'react';
import {  Row, Col,  Container, Button, Nav } from 'react-bootstrap';
import AnimatedImage from "../Department/AnimatedImage"; 
import razum from '../../images/razum.webp';
import smrtniIshod from '../../images/smrtniIshod.webp';
import psihijatri from '../../images/psihijatri.webp';
import karizi from '../../images/karizi.webp';
import muso from '../../images/muso.webp';
import pesmaOTriSveta from '../../images/pesmaOTriSveta.webp';
import { Helmet } from 'react-helmet';
import './Recommendations.css';
const Recommendations =()=>{

  const [activeKey, setActiveKey] = useState('novembar');
  const [genreKey, setGenreKey] = useState('ljubavni');


    // const knjigeZaOdrasle = [
    //   {
    //         slika: "https://delfi.rs/_img/artikli/2022/02/soba_leptira_vv.jpg",
    //         naslov: "Соба лептира",
    //         opis:"Pouzi Montegju se bliži sedamdesetom rođendanu. Mada i dalje živi u svom lepom porodičnom domu Admiral hausu, u prekrasnom seoskom predelu Safoka, gde je provela idilično detinjstvo hvatajući leptire sa voljenim ocem, a kasnije sama podizala decu, Ali sada mora da donese mučnu odluku. Iako je sentimentalno vezana za kuću koja uveliko propada, a ima i izuzetan vrt koji je stvarala i negovala dvadeset pet godina, Pouzi je svesna da je došlo vreme da je proda.",
    //         link:'https://www.knjizare-vulkan.rs/roman/109472-soba-leptira',
          
    //     },
    // {
    //     slika:"https://www.laguna.rs/_img/korice/5854/sazvezdje_svitaca_v.jpg",
    //     naslov: "Сазвежђе свитаца",
    //     opis: "НАЈЧИТАНИЈИ СРПСКИ РОМАН У НАШОЈ БИБЛИОТЕЦИ. Прича о искупљењу и људима које може спасти једино љубав. Чим га је угледала на вратима, и кад је секунд касније схватила да је он не препознаје, била је поражена. Али и трачак победе нашла је управо у томе што није морала да уступи.",
    //     link: 'https://www.knjizare-vulkan.rs/domaci-ljubavni-roman/159189-sazvezde-svitaca',
    //     },

    //     {
    //         slika: "https://delfi.rs/_img/artikli/2023/06/leto_kad_je_mama_imala_zelene_oci_vv.jpg",
    //         naslov: "Лето када је мама имала зелене очи",
    //         opis: "Ово је прича о лету помирења и прихватања, о три месеца током којих су мајка на самрти и психотични тинејџер коначно одложили оружје, подстакнути доласком неизбежног и потребом да се помире једно са другим и са собом. Написан поетичним стилом који одише снагом, страшћу, емоцијом, али и сиоровошћу, роман Лето када је мама имала зелене очи преплиће живот и смрт у позиву на љубав и праштање. Једно од великих открића савремене европске књижевности.",
    //         link:'https://delfi.rs/knjige/200802-leto-kad-je-mama-imala-zelene-oci-knjiga-delfi-knjizare.html',
          
    //     },
    //     {
    //         slika: "https://www.laguna.rs/_img/korice/6212/kuca_noci-ju_nesbe_v.jpg",
    //         naslov: "Кућа ноћи",
    //         opis: " Након што му родитељи страдају у пожару, четрнаестогодишњи Ричард Еловед одлази да живи код тетке и теће у забаченој и изолованој варошици Балантајн. Ричард брзо стиче статус отпадника, а кад нестане његов друг из одељења Том, сви за то криваве новог, гневног ђака у школи. Нико не верује Ричарду кад каже да је слушалица у телефонској говорници, попут каквог чудовишта из хорор филмова, прождрла Тома од главе до пете.  ",
    //         link: 'https://www.knjizare-vulkan.rs/trileri-misterije/211926-kuca-noci',
    //     },
       
    //   {
    //         slika: "https://delfi.rs/_img/artikli/2023/03/nataste_vv.jpg",
    //         naslov: "Наште",
    //         opis: " Приповест о једној породици и једној приколици. О животном кругу, од присуства до одсуства. О неминовној пролазности, о успоменама које се подстичу чулима. О љубави која прожетa све односе. О путовањима, о укусима. О дому, докле год је једне тачке у којој се сусрећемо. ",
    //           link: 'https://www.knjizare-vulkan.rs/domaci-roman/156954-nataste',
    //     },
    //     {
    //         slika: "https://delfi.rs/_img/artikli/2022/04/u_kasno_ljeto_vv.jpg",
    //         naslov: "У касно љето",
    //         opis: " У касно љето је моћан роман о бесмисленом рату и бесмисленим смртима. О убијеној девојчици и њеној пријатељици, о безбрижним играма и невиним маштаријама од којих неће остати ништа, о сиромашном а ипак топлом и нежном сеоском животу, о живописној и уједно сабласној природи босанског краја, о детињству и недоживљеној будућности. О јаким емоцијама и стањима која заувек обележе човека Магдалена Блажевић пише гласом мртве девојчице, стварајући причу која надилази Жепче и околна села и време у које је роман смештен, и постаје универзална химна против ратовања.",
    //           link: 'https://www.knjizare-vulkan.rs/domaci-roman/113392-u-kasno-ljeto',
    //     },  
    //     {
    //         slika: "https://www.beopolis.rs/wp-content/uploads/2023/06/Norveska-suma-Haruki-Murakami.jpg",
    //         naslov: "Норвешка шума",
    //         opis: "И данас је међу младима у Јапану најчитанија Муракамијева књига, још од објављивања 1987, управо Норвешка шума. Она је свог аутора учинила суперзвездом у домовини и обезбедила му широку популарност у читавом свету. Радња романа смештена је у Токио касних шездесетих, у време кад су јапански студенти, као и њихове колеге многих других нација у својим земљама, протестовали против сопствених режима. Ова помало носталгична позадина, осим што одсликава атмосферу светског бунта, представља кулисе за једну обичну љубавну причу.",
    //         link:'https://geopoetika.com/o-knjizi/1419/norveska-suma'
       
    //     },
     

    //     {
    //         slika: "https://akademskaknjiga.com/wp-content/uploads/2023/06/Mlekadzija.jpg",
    //         naslov: "Млекаџија",
    //         opis: "У граду без имена, јер имена су из овог романа прогнана као непожељне издајице личног и колективног идентитета, ова осамнаестогодишњакиња суочава се са оним што се у њеној средини зове политичким проблемима, а што је у новијој историји подједнако еуфемистички названо невољама, док је заправо реч о крвавим сукобима везаним за борбу за отцепљење Северне Ирске од Велике Британије.",
    //         link:'https://delfi.rs/knjige/201557-mlekadzija-knjiga-delfi-knjizare.html'
       
    //     },
    
    // ];
    // const naucneKnjige = [
    //     {
    //         slika: "https://www.laguna.rs/_img/korice/5424/ovladaj_svojim_emocijama-tibo_meris_v.jpg",
    //         naslov: "Овладај својим емоцијама",
    //         opis: "Практичан водич за превазилажење негативног размишљања и боље овладавање осећањима. Аутор ове књиге био је изразито повучен, а стидљивост му је често представљала препреку у постизању животних циљева. Од тренутка када је одлучио да свој живот посвети личном усавршавању, све се променило. Ово је његова прича о томе како је пронашао радост и изградио пут ка успеху. Овај водич може постати твој алат за преображај. Програм који се у њему налази осмишљен је тако да ти помогне да овладаш својим емоцијама, нарочито ако си склона негативном размишљању. Кроз конкретне кораке и практичне савете, научићеш како да пронађеш унутрашњи мир и постигнеш жељени успех.",
    //         link: "https://www.knjizare-vulkan.rs/komunikacija-emocije-odnosi-sa-drugima/110285-ovladaj-svojim-emocijama"
      
    //     },
    //     {
    //         slika: "https://delfi.rs/_img/artikli/2023/05/mit_o_normalnom_vv.jpg",
    //         naslov: "Мит о нормалном",
    //         opis: "У Миту о нормалном, Габор Мате истражује како западна медицина занемарује утицај траума и друштвених норми на здравље. Кроз конкретне податке и примере, аутор повезује обољења са стресовима савременог друштва. Књига пружа дубоко разумевање здравствених проблема са циљем едукације и подизања свести о кључним променама које воде ка исцељењу.",
    //         link:'https://www.knjizare-vulkan.rs/asertivnost-motivacija-samopostovanje/161327-mit-o-normalnom'
       
    //     },

    //     {
    //         slika: "https://www.laguna.rs/_img/korice/5812/katarina_velika_i_potemkin_carska_ljubavna_afera-sajmon_sibag_montefjore_v.jpg",
    //         naslov: "Катарина Велика",
    //         opis: "Било је то најуспешније политичко партнерство у историји – сензуално и ватрено колико и стваралачко и визионарско. Катарина Велика била је позната по страствености и царским амбицијама. Кнез Потемкин, крајње самоуверен и изузетно даровит, био је љубав њеног живота и њен сувладар. Заједно су освојили Украјину и Крим и дефинисали Руско царство. Њихова љубав била је толико бурна да су се договорили да деле власт и оставе слободу Потемкину да воли своје лепе сестричине, а Катарини да узима младе милијенике. Но ове душе близнакиње до краја су волеле једна другу.",
    //         link:'https://www.knjizare-vulkan.rs/biografije-memoari-dnevnici-pisma/155607-katarina-velika-i-potemkin'
       
    //     },
    //     {
    //         slika: "https://delfi.rs/_img/artikli/2021/09/grad_psihobiografija_cara_dusana_vv.jpg",
    //         naslov: "Град: психобиографија цара Душана",
    //         opis: "Град, психобиографија Стефана Уроша IV Душана Немањића, представља неку врсту подвижништа, управо напор потраге за Духом историје, који се крије међу тумиласима и апсидама некропола, међу записима на белинама књига, повеља и стенописима. То је нека врста невидљивог, али несумњиво постојећег паралелног света у коме живе и умиру стварни људи са својим породицама, пријатељима и непријатељима, са својим љубавима и мржњама, страховима, опсесијама, осујећењима и остварењима, дубоким потиштеностима, усхићењима и егзалтацијама.",
    //         link:'https://delfi.rs/knjige/178047-grad-psihobiografija-cara-dusana-knjiga-delfi-knjizare.html'
       
    //     },
    //     {
    //         slika: "https://delfi.rs/_img/artikli/2019/06/atomske_navike_vv.jpg",
    //         naslov: "Атомске навике",
    //         opis: "Књига Атомске навике Џејмса Клира припада жанру психологије успеха и од свог првог објављивања, пре мање од годину дана, постала је бестселер у тој области. Ове године ће се наћи на полицама чак у 40 земаља широм света! Џејмс Клир, један од водећих светских стручњака за формирање навика, открива практичне стратегије које нас уче како да формирамо добре навике, разбијемо лоше и овладамо ситним корацима који воде до изванредних резултата. ",
    //         link:'https://www.knjizare-vulkan.rs/saveti-za-karijeru-postizanje-uspeha/47595-atomske-navike'
       
    //     },


    // ];

    // const knjigeZaDecu = [
    //     {
    //         slika: "https://www.laguna.rs/_img/korice/4662/hajdi-johana_spiri_v.jpg",
    //         naslov: "Хајди",
    //         opis: "Девојчица Хајди долази да живи код деде, на чистом ваздуху и под дивним сунцем швајцарских Алпа. Међутим, тетка одлучује да девојчица треба да се образује уместо да по цео дан трчи за козама, па је одводи у Франкфурт, велики град, да прави друштво мало старијој девојчици Клари, која је прикована за инвалиdска колица. Између две девојчице развија се дубоко пријатељство. Ипак, Хајди чезне за планином, јединим местом где је заиста била срећна. Роман Хајди одише искреном племенитошћу и неукротивим духом главне јунакиње.",
    //         link:"https://laguna.rs/n4662_knjiga_hajdi_laguna.html"
      
    //     },
    //     {
    //         slika: "https://www.laguna.rs/_img/korice/3313/agi_i_ema-igor_kolarov_v.jpg",
    //         naslov: "Аги и Ема",
    //         opis: "Кратки роман Аги и Ема доноси дирљиву причу о пријатељству усамљеног деветогодишњег дечака Агија и луцкасте старице Еме, као и о њиховом заједничком бунту против свирепог и отуђеног света. По овом поетском и духовитом роману (овенчаном Наградом Политикиног Забавника за најбољу дечју књигу) снимљен је први српски филм за децу након двадесет пет година паузе, у режији Милутина Петровића. Роман је до сада преведен на енглески, руски, француски и италијански језик, а у Русији је за кратко време доживео два издања.",
    //         link:"https://laguna.rs/n3313_knjiga_agi_i_ema_laguna.html"
    //     },

    //     {
    //         slika: "https://kreativnicentar.rs/data/v/B255.jpg",
    //         naslov: "Мали истраживач: Свемир",
    //         opis: "Серија  намењена је деци у узрасту од четири до седам година. Из ове књиге најмлађи читаоци ће научити различите занимљивости о васиони ‒ о звездама, галаксијама и невероватној величини универзума.",
    //         link:"https://kreativnicentar.rs/p/knjiga/svemir-mali-istrazivaci/"
    //     },
    //     {
    //         slika: "https://provens.edu.rs/wp-content/uploads/2023/10/Discovering-our-Wonderful-World-768x702.jpg",
    //         naslov: "Откривамо чудесни свет",
    //         opis: "ОТКРИВАМО ЧУДЕСНИ СВЕТ – интерактивна књига са 93 QR линка и матрицом намењена је деци узраста од 5 до 8+ година и припада едицији Књиге са којима се расте, написаних по методу др Драгане Малешевић. Интеракција детета и књиге остварује се преко текста, слике, QR кодова и матрице за самоконтролу. ",
    //         link:"https://www.knjizare-vulkan.rs/interaktivne-knjige-za-decu-6-8/144952-otkrivamo-cudesni-svet-interaktivna-knjiga-sa-93-qr-linkova-i-matricom"
    //     },
    //     {
    //         slika: "https://datastatus.rs/wp-content/uploads/2021/12/upload202112172048359207.png",
    //         naslov: "Зец Петар",
    //         opis: "Најлепша и најмириснија авантура зеца Петра до сада! Загреби и помириши шта то мами несташка Петра да скакућe кроз ову фантастичну књигу пуну мириса. Буду га мирис лаванде, привлачи мирис црног лука у башти, мами мирис јагоде и печуркице у шуми, не може да одоли мирису бомбона у продавници, све до мириса пите од купина која га код куће чека.  ",
    //         link:"https://datastatus.rs/knjige/zec-petar-sta-je-petar-nanjusio-zagrebi-i-pomirisi/"
    //     },

    //     {
    //         slika: "https://www.knjizaraimperativ.rs/__public/upload/2022/12/05/isidora-mun-ide-na-vencanje-harijet-mankaster.webp",
    //         naslov: "Исидора Мун",
    //         opis: "Њена мама је вила, њен тата је вампир, а она је и једно и друго. Исидора ће бити деверуша на венчању своје тетке Кристалине и ВЕОМА је узбуђена због тога. Али, са несташном старијом рођаком Миребел, која се поиграва магијом кад год стигне, тај дан на крају неће бити тако савршен као што би требало да буде.",
    //         link:"https://www.vulkani.rs/decje-knjige/4021-isidora-mun-ide-na-vencanje"
    //     },



    // ];
   
 
    return (

            <><Helmet>
  <title>Препоруке библиотекара - Библиотека Рума</title>
  <meta name="description" content="Издвојене препоруке библиотекара Градске библиотеке 'Атанасије Стојковић' у Руми. Препоручујемо најзанимљивија и најчитанија дела за све узрасте." />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/preporuke-bibliotekara" />
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Препоруке библиотекара - Библиотека Рума",
      "url": "https://www.bibliotekaruma.rs/preporuke-bibliotekara",
      "description": "Издвојене препоруке библиотекара Градске библиотеке 'Атанасије Стојковић' у Руми. Препоручујемо најзанимљивија и најчитанија дела за све узрасте.",
      "publisher": {
        "@type": "Organization",
        "name": "Градска библиотека 'Атанасије Стојковић'",
        "url": "https://www.bibliotekaruma.rs/#organization",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.bibliotekaruma.rs/logo.png"
        }
      }
    }
    `}
  </script>
</Helmet>
          <Container className='container-library mb-4 mt-4 ms-auto' style={{ padding: '2.5rem' }}>
            <h2 className='container-title mb-2'>Препорука романа за месец</h2><hr/>
            <Row>
              <Col md={3}>
                <Nav variant="pills" className="flex-column" activeKey={activeKey} onSelect={setActiveKey}>
                  <Nav.Item>
                    <Nav.Link eventKey="jun" className="container-text">Јун</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="jul" className="container-text">Јул</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="avgust" className="container-text">Август</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="septembar" className="container-text">Септембар</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="oktobar" className="container-text">Октобар</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="novembar" className="container-text">Новембар</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={9}>
                {activeKey === 'novembar' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" text-center mt-4">
                      <AnimatedImage style={{width:'105%'}} noContainerClass  alt='Разум и осећајност' src={razum} />
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
                      <p className="container-text">📖 Препорука за новембар: „Разум и осећајност“ – роман који прати емоционални живот две сестре. Код једне преовлађује осјећајност, код друге разум. Обе су драге и миле, а кроз њихове приче добијамо увид у једно време и његове обичаје. Топла и духовита приповест савршена је за хладне новембарске вечери, уз шољу топлог напитка и миран кутак за читање.</p>
                      <Button
                        variant="secondary"
                        href="https://plus.cobiss.net/cobiss/sr/sr/bib/gbru/59516681"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Прегледај остала дела Милице Вучковић"
                        style={{marginTop: '0.5rem'}}
                      >
                        Oстала дела ове ауторке
                      </Button> </Col>
                   
                  </Row>
                )}
                {activeKey === 'jun' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" text-center mt-4">
                      <AnimatedImage className="container-image" alt='Смртни исход атлетских повреда' src={smrtniIshod} />
                      <br/><br/>
                      <Button
                        variant="secondary"
                        href="https://plus.cobiss.net/cobiss/sr/sr/bib/gbru/59516681"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Прегледај остала дела Милице Вучковић"
                        style={{marginTop: '0.5rem'}}
                      >
                        Oстала дела ове ауторке
                      </Button>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
                      <p className="container-text">Ако сте у потрази за књигом која ће вам оставити дубок траг и натерати вас на разматрање људских односа, бола и патње, овог месеца вам препоручујемо <em>„Смртни исход атлетских повреда“</em> Милице Вучковић.</p>
                      <hr/>  <a href="https://booka.rs/knjige/savremena-knjizevnost/smrtni-ishod-atletskih-povreda/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        Детаљније о роману
                      </a>
                    </Col>
                  </Row>
                )}
                {activeKey === 'jul' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" text-center mt-4"> 
                      <AnimatedImage className="container-image" alt='књиге' src={psihijatri} />
                      <br/><br/>
                      <Button
                        variant="secondary" 
                        href="https://plus.cobiss.net/cobiss/sr/sr/bib/search?q=munjos+avia*&db=gbru&mat=allmaterials" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Прегледај остала дела Родрига Муњоса Авие"
                      >
                        Oстала дела овог аутора 
                      </Button>
                    </Col>    
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
                      <p className="container-text">
                        Роман „Психијатри, психолози и други болесници“ Родрига Муњоса Авие је духовита и иронична прича која ће вас у исто време насмејати и растужити. Кроз занимљив, једноставан, али снажан наратив провлачи се лајтмотив овог романа, а то је страх од смрти – универзално осећање које не познаје разлике у занимању, образовању, ни у друштвеном статусу.
                      </p>
                      <hr/>
                      „Онда, не знам зашто, али тако ми је дошло — почео сам ненормално да се смејем, тако дубоко и дуго да је тај смех одзвањао све до краја нашег насеља... Потапшао сам психијатра по леђима и вратио се у нашу кућу не престајући да се смејем.“
                    </Col>
                  </Row>
                )}
                {activeKey === 'avgust' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" text-center mt-4">
                      <AnimatedImage className="container-image" alt='Жена са цветом од папира' src={karizi} />
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
                      <p className="container-text">„Жена са цветом од папира“, кратки али веома слојевити роман Доната Каризија, једног од најпознатијих савремених италијанских писаца, представља интроспективно и мистично дело смештено у оквир Првог светског рата. Ово није ратна прича у класичном смислу — нема фронта, крви и битки, већ дубока, готово интимна исповест о људским душама које су повезане у времену.<br/><br/>Ово је први роман који је написао чувени Каризи, после њега он пише психолошке трилере који су му донели светску славу.</p>
                      <Button
                        variant="secondary"
                        href="https://plus.cobiss.net/cobiss/sr/sr/bib/search?q=donato+karizi*&db=gbru&mat=allmaterials"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Прегледај остала дела Доната Каризија"
                        style={{marginTop: '0.5rem'}}
                      >
                        Oстала дела овог аутора
                      </Button>
                    </Col>
                  </Row>
                )}
                {activeKey === 'oktobar' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" text-center mt-4">
                      <AnimatedImage style={{width:'100%'}} noContainerClass alt='Октобарска препорука' src={muso} />
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
                      <p className="container-text">Препорука за октобар:<br/>
                        Ако тражите узбудљиво и незаборавно читање за овај месец, препоручујемо роман Гијома Мусоа. Ово је љубавни роман са елементима трилера и детективске приче, прожет фантастиком, који оставља дубок траг у души читаоца. Књига показује да је, у животу као и у причи, све могуће.
                      </p>
                      <Button
                        variant="secondary"
                        href="https://plus.cobiss.net/cobiss/sr/sr/bib/search?q=guillaume+musso*&db=gbru&mat=allmaterials"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Прегледај остала дела овог аутора у нашој библиотеци"
                        style={{marginTop: '0.5rem'}}
                      >
                        Остала дела овог аутора
                      </Button>
                    </Col>
                  </Row>
                )}
                {activeKey === 'septembar' && (
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" text-center mt-4">
                      <AnimatedImage className="container-image" alt='Песма о три света' src={pesmaOTriSveta} />
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
                      <p className="container-text">
                        Владимир Пиштало у роману „Песма о три света“ оживљава једну од оних заборављених, али дубоко узбудљивих прича из прошлости Боке Которске. Радња романа прати судбину девојке из Пераста, коју су 1624. године отели гусари. Овај догађај постаје полазиште за приповест која премашује обичан историјски запис – Пиштало у њој гради симболичку причу о три света који се сударају: медитерански, оријентални и хришћански.
                        <br/>
                      </p>
                      <Button
                        variant="secondary"
                        href="https://plus.cobiss.net/cobiss/sr/sr/bib/search?q=vladimir+pistalo*&db=gbru&mat=allmaterials"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Прегледај остала дела Владимира Пиштала"
                        style={{marginTop: '0.5rem'}}
                      >
                        Oстала дела овог аутора
                      </Button>
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
            <br/>
            {/* <h2 className='container-title mb-2'>Жанровске препоруке</h2><hr/>
            <Nav variant="pills" activeKey={genreKey} onSelect={setGenreKey} className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="ljubavni" className="container-text">љубавни</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="triler" className="container-text">трилер</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="istorijski" className="container-text">историјски</Nav.Link>
              </Nav.Item>
            </Nav>
            {genreKey === 'ljubavni' && (
              <p className='container-text'>Издвајамо топ љубавне романе из нашег фонда — потражите их на шалтеру или у каталогу.</p>
            )}
            {genreKey === 'triler' && (
              <p className='container-text'>Напети трилери који се читају у једном даху — препоручујемо Несбеа, Финчера и домаће ауторе.</p>
            )}
            {genreKey === 'istorijski' && (
              <p className='container-text'>Историјски романи — приче које нас враћају у прошла времена и велике догађаје.</p>
            )} */}
         
        </Container>
        </>
    );
};

export default Recommendations;



