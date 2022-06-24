import React from 'react';

const Footing = ({title, description}) => {


  return (
    <>
      <div
          className="card"
          style={{
            color: 'var(--clr-white)',
            width: '100%',
            minHeight: '10rem',
            background: 'var(--clr-primary-5)',
            border: 'transparent'
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
              background:'#fff',
              paddingBottom:'0'
            }}
          >
            <div className="whiteParagraph" style={{paddingBottom:'0'}}>
              <table className="whiteParagraphTab">
                <thead>
                  <tr>
                    <th></th>
                   
                  </tr>
                </thead>
                <tbody>
                  
                  <tr class='smallText'style={{color:'black', fontWeight:'normal'}}>
                   
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

export default Footing;

 