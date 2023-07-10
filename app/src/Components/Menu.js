import React from 'react'
import Katsudon from './Images/Katsudon.jpeg'
import Lasanya from './Images/Lasanya.jpeg'
import Burger from './Images/Burger.jpeg'
import Pancakes from './Images/Pancackes.jpeg'
import Hotpot from './Images/HotPot.jpeg'
import pasta from './Images/pasta.jpeg'

export default function Menu() {
  return (
    <div>
            <div class="container" style={{marginTop:'1.2rem'}}>
                <div class="row">
                        <div class="col">
                                <div class="card" style={{width:'18rem'}}>
                            <img src={Katsudon} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Katsudon</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorum eveniet, delenibus totam!</p>
                                <a href="/" class="btn btn-primary">₹750</a>
                            </div>
                            </div>
                        </div>
                        <div class="col" >
                                <div class="card" style={{width:'18rem'}}>
                            <img src={Hotpot} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Hotpot</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorum eveniet, delenibus totam!</p>
                                <a href="/" class="btn btn-primary">₹1000</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                            <div class="card" style={{width:'18rem'}}>
                                <img src={Lasanya} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Lasanya</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorum eveniet, delenibus totam!.</p>
                                    <a href="/" class="btn btn-primary">₹800</a>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="container" style={{marginTop:'1.2rem'}}>
            <div class="row">
                    <div class="col">
                            <div class="card" style={{width:'18rem'}}>
                        <img src={Burger} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Burger</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorum eveniet, delenibus totam!</p>
                            <a href="/" class="btn btn-primary">₹500</a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                            <div class="card" style={{width:'18rem'}}>
                        <img src={pasta} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Pasta</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorum eveniet, delenibus totam!</p>
                            <a href="/" class="btn btn-primary">₹250</a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                            <div class="card" style={{width:'18rem'}}>
                        <img src={Pancakes} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Pancakes</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorum eveniet, delenibus totam!</p>
                            <a href="/" class="btn btn-primary">₹500</a>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
