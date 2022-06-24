import React from 'react';

const BlueButton = ({title, description}) => {


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
            paddingTop: '0',
          }}
        >
          <div className="whiteParagraph" style={{ paddingTop: '0' }}>
            <table className="whiteParagraphTab" style={{ width: '100%', borderCollapse:'collapse'  }}>
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr class="smallTextTwo" style={{ color: 'black', fontWeight: 'normal' }}>
                  <td style={{display:'flex'}}>
                     <button className="btn" style={{ fontSize: '2.8rem', flexGrow: '1', marginTop:'0' }}>
                       {title}
                    </button>
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

export default BlueButton;

 