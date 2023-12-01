import "./styles/querys/Headers/HeadersQueryDesktop.css";
import "./styles/querys/Headers/HeadersQueryTablet.css";
import "./styles/querys/Headers/HeadersQueryiPhone.css";


const Header = () => {
  return (
    <main>
      
        <nav>
          <h2 className="h2__Steven">Steven</h2>
          <a className="h2__linkedin" target="blank" href="https://www.linkedin.com/in/bramdon-stiven-blanco-contreras-7182331b5/"><h2 >LN</h2></a>
         <a className="h2__whats" href="https://w.app/BUHZlO" target="blank"><h2 >WH</h2></a> 
        <a className="h2__github" href="https://github.com/Sendith" target="blank"><h2>GT</h2></a>  
          <img className="line" src=".\img\img__header\Line 3.png" alt="" />
          <h2 className="_dos">©/2023</h2>
        </nav>

        <div className="Apres">
          <div className="flex__liquid">
          <img className="liquid" src="\img\img__header\liquid.png" alt="" />
          </div>
         <div className="Contenedor__hello">
          <h1 className="Hello">Hello.</h1>
          </div> 
          <h3 className="h3__StevenBlanco">STEVEN BLANCO</h3><img className="git__header" src="\img\img__header\GitHub.png" alt="" />
          <h4 className="h4__Looking">Looking for a job </h4>
          <div className="circulo"></div>
          <h4 className="Product">Product Designer / Webflow Developer / Framer Developer and Partner.</h4>
          <h4 className="Current">Currently working full-time as a Senior Product Designer at <span className="Detail" >Detail Technologies</span> </h4> 

        <img className="star1" src="\img\stars\black_star.png" alt="" />
        <img className="star2" src="\img\stars\black_star.png" alt="" />
        <img className="star3" src="\img\stars\black_star.png" alt="" />
        <img className="star4" src="\img\stars\black_star.png" alt="" />
        <img className="star5" src="\img\stars\black_star.png" alt="" />
        <img className="star6" src="\img\stars\black_star.png" alt="" />
        <img className="star7" src="\img\stars\black_star.png" alt="" />
        <img className="star8" src="\img\stars\black_star.png" alt="" />
        <img className="star9" src="\img\stars\black_star.png" alt="" />
        <img className="star10" src="\img\stars\black_star.png" alt="" />

    <div className="divsArrow">
    <img className="arrowUno" src="\img\img__header\arrows.png" alt="" />
        <img className="arrowDos" src="\img\img__header\arrows.png" alt="" />
        <img className="arrowTres" src="\img\img__header\arrows.png" alt="" />
    </div>
       


        </div>
      
    </main>
  )
}

export default Header