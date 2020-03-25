
//header
export const MenuItems = [
    {
      title: 'About us', link: '#' ,isActive: true
      
    },
    {
      title:'Career' ,link: '#' ,isActive: true
    },
    {
      title:'Departements',dropdown:[
                                 {title:'Marketign and PR' ,link:'#'},
                                 {title:'Customer Success & Sales' ,link:'#'},
                                 {title:'IT, Product, Design & UX,Data' ,link:'#'},
                                 {title:'Finance & Administration' ,link:'#'},
                                 {title:'HR & more' ,link:'#'}] , 
                                 isActive: true
    }
  ]
//Section1
  export const paragraphe = [
      {
          text:'We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that s why we are always next to them: to help them find the best possible care. Anytime, anywhere.'
      },
      {
          text:'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.'

      }]
//Section2
export const grid = [
  {
    name:'colonne-grid1',
    title1:'Find a doctor, book a visit and solve any health-related doubt',
    title2:'For patients',
    selectOption:[{option:'Argentina'},{option:'Australia'},{option:'Brazil'},{option:'Chile'},{option:'Colombia'},{option:'Czech'},{option:'France'},{option:'Italy'},{option:'Mexico'},{option:'Peru'},{option:'Poland'},{option:'Portugal'},{option:'Spain'},{option:'Turkey'},{option:'UK'}],
    imagename:'img1-section2',
    imagesrc:'https://www.docplanner.com/img/screen-marketplace@2x.png',
    color:'#00ccb1'
      
  },
  {
    name:'colonne-grid2',
    title1:'Save time managing visits and cut no-shows by half',
    title2:'For doctors',
    imagename:'img2-section2',
    imagesrc:'https://www.docplanner.com/img/screen-saas@2x.png',
    color:'#3d83df'

  }]
  //SECTION3
  export const logo = [
    {link: 'http://www.w3.org/2000/svg',width:"200" ,height:"32"},
    {link:'http://www.w3.org/2000/svg' ,width:"167" ,height:"32"},
    {link:'http://www.w3.org/2000/svg' ,width:"182" ,height:"32"},
    {link:'http://www.w3.org/2000/svg' ,width:"220" ,height:"32"},
    {link:'http://www.w3.org/2000/svg' ,width:"195" ,height:"32"}
  ]
  //SECTION6
  export const office = [
    {link: '#',imagesrc:'https://www.docplanner.com/images/warsaw.png' ,srcset:'https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x' ,title:'Warsaw' ,btn:'See opening'},
    {link:'#' ,imagesrc:'https://www.docplanner.com/images/barcelona.png' , srcset:'https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x' ,title:'Barcelona' ,btn:'See opening'},
    {link:'#' ,imagesrc:'https://www.docplanner.com/images/istanbul.png' , srcset:'https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x',title:'Istambul' ,btn:'See opening'},
    {link:'#' ,imagesrc:'https://www.docplanner.com/images/rome.png' ,srcset:'https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x' ,title:'Rome' ,btn:'See opening'},
    {link:'#' ,imagesrc:'https://www.docplanner.com/images/mexico-city.png' ,srcset:'https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x' ,title:'Mexico City' ,btn:'See opening'},
    {link:'#' ,imagesrc:'https://www.docplanner.com/images/curitiba.png' ,srcset:'https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x' ,title:'Curitiba' ,btn:'See opening'}
  ]
//FOOTER
export const footer = [
  {paragraphe: 'We are leaders in 10 countries:' ,link:[{href:'' ,text:' Poland'},
                                                        {href:'' ,text:'Turkey'},
                                                        {href:'' ,text:'Spain'},
                                                        {href:'' ,text:'Italy'},
                                                        {href:'' ,text:'Czech Republic'},
                                                        {href:'' ,text:'Mexico'},
                                                        {href:'' ,text:'Colombia'},
                                                        {href:'' ,text:'Brazil'},
                                                        {href:'' ,text:'Argentina'},
                                                        {href:'' ,text:'Chile'}]},
  {paragraphe:'This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.'},
  {paragraphe:'www.docplanner.com © 2020'}
]
//SECTION4 
export const  stats= [
  {imagesrc: 'https://www.docplanner.com/img/flag.png',title3:'Leader in 10 countries' ,text:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
  {imagesrc:'https://www.docplanner.com/img/patients.png' ,title3:'2 million active doctors' ,text:'visit us every month'},
  {imagesrc:'https://www.docplanner.com/img/visits.png' ,title3:'1.5 million appointments ' ,text:'booked last month'},
  {imagesrc:'https://www.docplanner.com/img/doctors.png' ,title3:'30 million unique patients' ,text:'trust in our solutions'},
]
  
  
