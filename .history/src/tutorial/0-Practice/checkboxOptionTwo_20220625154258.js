import React, { useState,useEffect, useContext}  from 'react';
import {BookingsContext} from './index.js';
const CheckboxOption = ({title, description, cost}) => {
  let {bookings,checked, itemSelection} = useContext(BookingsContext);
  let [displayVal, setDisplayVal] = useState('hidden');

  useEffect(() => {
   
    if(bookings[idd] === true)
    {
      setDisplayVal('visible');
    }
    else
    {
      setDisplayVal('hidden')
    }
   
  });

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
                    <label class="containersTwo">
                      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                          <tr>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span style={{ marginRight:'7rem' }}>
                                <span >{title}</span>
                              
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <span style={{ color: 'black' }}>$ {cost}</span>
                            </td>
                          </tr>

                          <tr class="smallText" style={{ color: 'black', fontWeight: '500' }}>
                            <td>Duration: {description}</td>
                          </tr>
                        </tbody>
                      </table>
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                </tr>

                {/* <tr class="smallText" style={{ color: 'black', fontWeight: 'normal' }}>
                  <td>Duration: {description}</td>
                </tr> */}
              </tbody>
            </table>
            <p className='secondItem' style={{visibility:displayVal}}><span className='exclamation'><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span> You can select up to 1 item</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckboxOption;

 