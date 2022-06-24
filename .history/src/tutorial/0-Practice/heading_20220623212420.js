import React from 'react';

const Heading = ({title}) => {


  return (
    <>
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
    </>
  );
};

export default Heading;

 