import React from 'react';

const Services = () => {


  return (
    <>
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
      
    </>
  );
};

export default Services;

 