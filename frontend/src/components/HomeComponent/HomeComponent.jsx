import HamburgerMenu from '../hamburgerMenu/hamburgerMenu'
import logoc from '../IMG/LOGOCA.png'
import logos from '../IMG/logosuiza.png'
import style from './HomeComponent.module.css'

const HomeComponent = () => {
  return (
    <div className={style.contenedorprincipal}>
      <HamburgerMenu />
      <div className={style.contenido}>
        <div className={style.logosui}>
          <img src={logos} alt="logo" width="100" />
        </div>
        <div className={style.tituloprincipal}>
          <h1>INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLÓGICO PÚBLICO SUIZA</h1>
          <img
            src={logoc}
            className={style.logoanimado}
            alt="logo"
          />
          <h2>DESARROLLO DE SISTEMAS DE INFORMACIÓN</h2>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent