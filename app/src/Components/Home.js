import React from 'react'
import welcome from './welcome.jpeg'
import Hotpot from './Images/HotPot.jpeg'
import Lasanya from './Images/Lasanya.jpeg'

export default function Home() {
  return (
    <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={welcome} class="d-block w-100 h-full" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5 style={{fontSize: '5rem' ,color:'black'}}>Welcome...!</h5>
                      <p>Welcome To our grand restaurant</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={Hotpot} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5 style={{fontSize: '5rem' ,color:'black'}}>Hotpot</h5>
                      <p>One of the most tried dishes in our restaurant.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={Lasanya} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5 style={{fontSize: '5rem' ,color:'black'}}>Lasanya</h5>
                      <p>Must try when hot served when you visit us.</p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
             </div>
             {/*Footer*/}

          <div className="footer" style={{display:'flex',justifyContent:'center',alignItems:'center', background:'Black', color:'white', height:'50px'}}>
            Made By TejasNayak42©
          </div>
    </div>
  )
}
