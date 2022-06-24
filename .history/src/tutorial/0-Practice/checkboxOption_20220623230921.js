import React from 'react';

const CheckboxOption = ({title, description}) => {


  return (
    <>
      <div
        className="card"
        style={{
          color: 'var(--clr-white)',
          width: '100%',
          minHeight: '10rem',
          background: 'var(--clr-primary-5)',
          border: 'transparent',
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
            background: '#fff',
          }}
        >
          <table className="whiteParagraphTab">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ color: '#427bd2', fontWeight: 'normal' }}>
                <td>
                  
                </td>
              </tr>

              <tr class="smallText" style={{ color: 'black', fontWeight: 'normal' }}>
                <td> Duration: {description}</td>
              </tr>
            </tbody>
          </table>
          {/* <div style={{color:'#427bd2',fontWeight:'normal'}} >
             <label class="containers">
                {title}
            <input type="checkbox" />
            <span class="checkmark"></span>
            </label>
            </div>
            <div class='smallText'style={{color:'black', fontWeight:'normal'}}>
                Duration: {description}
            </div> */}
        </div>
      </div>
    </>
  );
};

export default CheckboxOption;

 