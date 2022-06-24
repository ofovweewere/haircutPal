import React from 'react';
import tools from '../../assets/tools4.jpg';
const About = () => {
  return (
    <>
      <div
        className="card"
        style={{
          color: 'var(--clr-white)',
          width: '100%',
          minHeight: '30rem',
          background: '#1e1e1e',
        }}
      >
        <div
          class="card-body about"
          style={{ alignItems: 'center', justifyContent: 'center', flexGrow: '1' }}
        >
          <div>
            <img
              src={tools}
              alt="tools"
              loading='lazy'
              style={{
                padding: '1.5rem',
                width: '100%',
                minHeight: '10rem',
                borderRadius: '10%',
              }}
            />
          </div>
          <div style={{ flexGrow: '1' }}>
            <h2> WELCOME TO OUR BARBERSHOP</h2>
            <p class="card-text" style={{ fontSize: '1.8rem', color: 'var(--clr-white)' }}>
              We are a modern barbershop with our young and talented barbers offering all kinds of
              haircuts, shaves, and fades. Taking appointments for 6 days a week and walk-ins
              whenever we can. Located in Stoney Creek on Highway 8 near Grays road. Visit us and
              experience true haircutting proficiency.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
