import React from 'react';
import Card from 'react-bootstrap/Card'
import { MDBContainer } from 'mdbreact'

const Home = () => {
  return (
    <MDBContainer >
    <div className="mh-100">
      
      <h1>Save Bork!</h1>
      <h2>Can you rescue your best friend from a spooky cave?</h2>


      <p>Oh no! Your adorable puppy, Bork, chased a rabbit into a big scary cave. Legends say it’s full of monsters!  You have to save Bork!</p>
      <p>Use your Sword, Shield, or Magic to defeat evil monsters!</p>
      <ul>Sword will beat Magic</ul>
      <ul>Sheild will beat Sword</ul>
      <ul>Magic will beat Shield</ul>
      <ul>Reduce a monster's health to 0 to move on to the next level</ul>
      <p>Hurry! Bork is counting on you!</p>
    
    </div>
    </MDBContainer>
  );
};

export default Home;