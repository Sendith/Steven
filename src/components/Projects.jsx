import "/src/components/styles/querys/Projects/ProjectQueryDesktop.css"
import $ from "./utils/jquery"
const Projects = () => {
  return (
    <div className="Contenedor__Projects">
      <div className="Container__Waves">
      <img id="waveUne" src="public\img\waves__up\wave__100.png" alt="" />
      <img id="waveDous" src="public\img\waves__up\wave__50.png" alt="" />
      <img id="waveTreize" src="public\img\waves__up\wave__20.png" alt="" />
      </div>

     <div className="Projects__body">
        <div className="Projects__header">
        <div className="Projects__title">
          <p>Work</p>
        </div>
        <div className="Projects__description">
          <p>This is a showcase of my best work in a variety of fields including Graphic and Web Design, No-Code Development, Product Design and Product Management
            <br />
            <br />
          The world of dijital design and development is constantly evolving and so has my role over the last 15 years, im still learning and gaining new skills every day</p>
        </div>
        </div>
        <div className="Projects__name">
    
      <ul>
      <li id="pro1">
          Project One
        </li>
      </ul>
      </div>
    
      <div className="escondido">
      <header className="Escondido__header">
        <span className="Click">Click</span>
        <p className="Okalph">Okalph</p>
      </header>
      <div className="contenedor__wavess">
        <img id="waveP" src="public\img\img__project_1\wave.png" alt="" />
      </div>
      <div className="Escondido__body__header">
      <p id="Escondido__title">A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.</p>
      </div>
      <div id="Escondido__body__body">
  
        <div className="Role">
          <p>ROLE</p>
          <hr />
          <div className="Role__body">
          <p>Web Development</p>
          </div>
        </div>
        <div className="Respo">
          <p>RESPONSABILITIES</p>
          <hr />
          <div className="Respo__body">
          <p>Consultation, Webflow Setup, Image Saving & Optimisation, Webflow Development, Custom CSS, Animation, SEO, Launch</p>
          </div>
        </div>
        <div className="url">
          <p>URL</p>
          <hr />
          <div className="url__body">
          <p>http://okalpha.co</p>
          </div>
        </div>
      </div>
      <div id="Division__enbody">
        <div className="Division__enbodyUno">
        <p>The decision to use Webflow ended up being a great choice not just for the CMS and animations, but for discoverability. After featuring it on the Webflow Showcase it was tweeted by the CEO of Webflow and featured on Typewolf, Muzli and many other web design inspiration platforms.
        <br />
        <br />
        <br />
        <br />


        I learned a lot about Webflow while building this site. I love HTML and CSS, but I find Javascript rather difficult and your animation possibilities would normally be very limited without this skill. With Webflow, you don’t need to know Javascript, hallelujah! And you can do some really beautiful things. I had a lot of fun with these animations.
        </p>
        </div>

        <div className="Division__enbodyDos">
        <img src="public\img\img__project_1\img__project.png" alt="" />
        </div>

      </div>
      </div>
     </div>
     
    </div>
  )
}

export default Projects