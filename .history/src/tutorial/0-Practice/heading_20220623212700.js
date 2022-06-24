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
              alignItems: 'left',
              justifyContent: 'left',
              flexGrow: '1',
              flexDirection: 'column',
            }}
          >
            <div className="whiteParagraph">
              <table className="whiteParagraphTab">
                <thead>
                  <tr>
                    <th></th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>(289) 788-1135</td>
                  </tr>

                  <tr>
                   
                    <td>
                      180 Hamilton Regional Rd 8 #102,<br></br>Stoney Creek, ON L8G 1C3
                    </td>
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

 