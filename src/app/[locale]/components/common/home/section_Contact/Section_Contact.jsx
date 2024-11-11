import React from 'react'
import Spline from "@splinetool/react-spline";

export default function Section_Contact() {
  return (
    <div className='main'>
      <div className='wrapper'>
        <div className='copy'>
          <h1>The eye</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            reprehenderit, quaerat minima veritatis modi quod eius similique
            atque, adipisci aliquid recusandae illo, cupiditate accusamus animi
            velit laudantium porro ad. Sint rem facilis magni natus voluptate
            necessitatibus reiciendis? Deleniti possimus sequi dignissimos
            mollitia vel accusamus sapiente, nobis placeat, cumque alias
            ratione.
          </p>
        </div>
      </div>
      <div className='eye'>
        <Spline scene='https://prod.spline.design/RJ8tnxhq2RN-q9PM/scene.splinecode' />
      </div>
    </div>
  );
}
