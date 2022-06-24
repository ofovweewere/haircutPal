import React from 'react';

const Heading = ({title, description}) => {


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
                  <tr style={{color:'#427bd2'}}>
                    
                    <td>{title}</td>
                  </tr>

                  <tr>
                   
                    <td>
                     {description}
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

 