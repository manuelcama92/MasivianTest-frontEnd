import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../components/StartPage.scss';
 
function StartPage() {
  return (
<section className="StartPage">
    <section className="StartPage_container">
    
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <form>
  <p class="clasificacion">
    <input id="radio1" type="radio" name="estrellas" value="5">
        </input><label for="radio1">★</label>
    <input id="radio2" type="radio" name="estrellas" value="4"/>
        <label for="radio2">★</label>
    <input id="radio3" type="radio" name="estrellas" value="3"/>
        <label for="radio3">★</label>
    <input id="radio4" type="radio" name="estrellas" value="2"/>
        <label for="radio4">★</label>
    <input id="radio5" type="radio" name="estrellas" value="1"/>
        <label for="radio5">★</label>
  </p>
</form>
        
        <div className="col-md-5 p-lg-1 mx-auto ">
            <h1 className="display-12 font-weight-normal">Cual te gusta más</h1>
            <p className="lead font-weight-normal">Dale una puntuacion con estrellas, y dinos cual es el mejor</p>
            <a className="btn btn-outline-secondary" href="./Gallery">Puntuación</a>
        </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    </section>  
</section>      
  );
}

export default StartPage;
