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
            <table className="whiteParagraphTab" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr class="smallText" style={{ color: 'black', fontWeight: 'normal' }}>
                  <td>
                    <span style={{ display: 'flex' }}>
                      <span style={{ flexGrow: '1' }}>{title}</span>
                      <span style={{ color: 'black' }}>$ {description}</span>
                    </span>
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

 