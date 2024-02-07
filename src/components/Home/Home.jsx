import { counterStore } from "../../stores/ConterExports";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import logo from "../image/Capture d'écran 2023-11-02 162415.png";
import logo2 from "../image/Capture d'écran 2023-11-13 174525.png";
import logo3 from "../image/Capture d'écran 2023-11-01 183425.png";
import logo4 from "../image/Capture d'écran 2023-12-05 154148.png";
import '../../App.css';
import BarreHaut from '../NavigationBarre/BarreHaut';
import BarreBas from "../NavigationBarre/BarreBas";

const Home = observer(() => {
    return (
    <header className="App-header">
<div className= "ImageDeFond"  >
        <BarreHaut />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          S.E.R.
        </h1>

        <h2>
          Security Electonic Recorder
        </h2>

        <div className='ImgTogether'>
          <img src= {logo2} alt= "prout" className='Img2' />
          <img src= {logo3} alt= "prout" className='Img3' />
        </div>

<img src= {logo4} alt= "prout" className='Img3' />
          <br />
          
        <Link1  />
        <br />
        <br />
        <Link2  />
        <br />
        <br />
        <br />

    
        <Link to="/counter">Rajoute</Link>

        <hr/>

        <h2>Nombre de fois: {counterStore.getCounter()}</h2>

        <BarreBas />

</div>
        
    </header>
    )
});



function Link1() {
 

    return (
      <Link to="/Pay" target="_blank"><button className='button'>Achetez tout de suite</button></Link>
    );
  }
  
  function Link2() {
   
  
    return (
      <Link to="../AddImage" target="_blank"><button className='button'>Ajoutez vos photos</button></Link>
    );
  }


export default Home;


