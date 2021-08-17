
import logo from '../../img/logo.svg'
import './style.css'



export default function MiniMap(){
  
  return(
    <>
      <div className="leaflet-bottom leaflet-right">
        <div className="leaflet-control leaflet-bar">
          <div className="info">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  )
}
