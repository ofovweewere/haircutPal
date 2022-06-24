import React, { useState, useEffect } from 'react';
import tools from '../../assets/tools4.jpg';
import Header from './header.js';
import Footer from './footer.js';
import BookCutOne from './bookCut.js';
const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <body className="Site">
      <Header />
      <main
        class="Site-content"
        
      >
       

        <BookCutOne/>
        <div className="card breakSection">
          <div
            class="card-body"
            style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}
          >
            <h2>ABOUT</h2>
          </div>
        </div>

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

        <div className="card breakSection">
          <div
            class="card-body"
            style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}
          >
            <h2>SERVICES & PRODUCTS</h2>
          </div>
        </div>

        <div
          className="card"
          style={{
            color: 'var(--clr-white)',
            width: '100%',
            minHeight: '30rem',
            background: '#ffffff',
          }}
        >
          <div
            class="card-body "
            style={{ alignItems: 'center', justifyContent: 'center', flexGrow: '1' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: '1',
              }}
            >
              <p
                className="under"
                style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#427bd2' }}
              >
                HAIRCUTS
              </p>
            </div>

            <div className="haircuts">
              <p>
                <div className="title">Regular Haircut</div>

                <p className="titleDescription">$25</p>
              </p>

              <p>
                <div className="title">Beard Trim</div>

                <p className="titleDescription">$15</p>
              </p>

              <p>
                <div className="title">Hot Towel Shave</div>

                <p className="titleDescription">$18</p>
              </p>

              <p>
                <div className="title">Kids Haircut</div>

                <p className="titleDescription">$20</p>
              </p>

              <p>
                <div className="title">Buzz Cut</div>

                <p className="titleDescription">$18</p>
              </p>

              <p>
                <div className="title">Sides and Back Haircut</div>

                <p className="titleDescription">$18</p>
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: '1',
              }}
            >
              <p
                className="under"
                style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#427bd2' }}
              >
                COMBOS
              </p>
            </div>

            <div className="haircutsCombo">
              <p>
                <div className="title">Haircut, Beard Trim & Style</div>

                <p className="titleDescription">$35</p>
              </p>

              <p>
                <div className="title">Haircut, Hot Towel Shave & Style</div>

                <p className="titleDescription">$18</p>
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: '1',
              }}
            >
              <p
                className="under"
                style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#427bd2' }}
              >
                PRODUCTS
              </p>
            </div>

            <div className="haircutsCombo">
              <p>
                <div className="title">Gel</div>

                <p className="titleDescription">$10</p>
              </p>

              <p>
                <div className="title">Wax</div>

                <p className="titleDescription">$15</p>
              </p>
            </div>
          </div>
        </div>

        <div className="card breakSection">
          <div
            class="card-body"
            style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}
          >
            <h2>CONTACT US</h2>
          </div>
        </div>

        <div
          className="card"
          style={{
            color: 'var(--clr-white)',
            width: '100%',
            minHeight: '30rem',
            background: 'var(--clr-primary-5)',
          }}
        >
          <div
            class="card-body contact "
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: '1',
              flexDirection: 'column',
            }}
          >
            <div className="whiteParagraph">
              <table className="whiteParagraphTab">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i class="fa fa-phone fa-lg table"></i>
                    </td>
                    <td>(289) 788-1135</td>
                  </tr>

                  <tr>
                    <td>
                      <i class="fa fa-map-marker fa-lg table"></i>
                    </td>
                    <td>
                      180 Hamilton Regional Rd 8 #102,<br></br>Stoney Creek, ON L8G 1C3
                    </td>
                  </tr>

             
                  <tr>
                    <td>
                      <i class="fa fa-clock-o fa-lg table"></i>
                    </td>
                    <td>Tuesday – Thursday: 12:00pm – 8:00pm</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>Friday – Saturday: 11:00am – 8:00pm</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>Sunday: 11:00am – 6:00pm</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>Monday: Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </body>
  );
};

export default UseEffectFetchData;
