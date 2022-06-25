import React, { useContext}  from 'react';
import {BookingsContext} from './index.js';
const CheckboxOption = ({title, description, cost, idd}) => {
  let {bookings,checked, itemSelection} = useContext(BookingsContext);

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
            paddingBottom: '0',
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
                      <input
                        type="checkbox"
                        onChange={() => itemSelection(idd)}
                        disabled={bookings[idd]}
                        checked={checked[idd]}
                      />
                      <span class="checkmark"></span>
                    </label>
                  </td>
                </tr>

                {/* <tr class="smallText" style={{ color: 'black', fontWeight: 'normal' }}>
                  <td>Duration: {description}</td>
                </tr> */}
              </tbody>
            </table>
            <p className='secondItem'><span className='exclamation'><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span> You can select up to 1 item</p>
          </div>
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

 