import "/src/components/styles/querys/Skills/SkillsQueryDesktop.css"
import "/src/components/styles/querys/Skills/SkillsQueryTablet.css"
import "/src/components/styles/querys/Skills/SkillsQueryIphone.css"
const Skills = () => {
  return (
    <div className="Contenedor__Skills">
        <div className="Orientador__celular">
        <div className="Contenedor__celular">
            <img className="Marco__iphone" src="public\img\maquet__iphone14\phone_14.png" alt="" />
            <img className="Marco__fond" src="public\img\maquet__iphone14\fond__iphone\font.jpg" alt="" />
            <img className="Marco__cloud" src="public\img\maquet__iphone14\fond__iphone\stat.png" alt="" />
        </div>
        </div>
            <button id="Boton__cv">My CV</button>
    </div>
  )
}

export default Skills