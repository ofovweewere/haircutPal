import React from 'react';

const CheckboxOption = ({title, description, cost}) => {


  return (
    <>
      <div
        className="card hovering"
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
          <div className="whiteParagraph">
            <table className="whiteParagraphTab" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ color: '#427bd2', fontWeight: 'normal' }}>
                  <td>
                    <label class="containers">
                      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                          <tr>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span style={{ display: 'flex' }}>
                                <span style={{ flexGrow: '1' }}>{title}</span>
                                <span style={{ color: 'black' }}>$ {cost}</span>
                              </span>
                            </td>
                          </tr>
                          <tr class="smallText" style={{ color: 'black', fontWeight: '500' }}>
                            <td>Duration: {description}</td>
                          </tr>
                        </tbody>
                      </table>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
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

export default CheckboxOption;

 