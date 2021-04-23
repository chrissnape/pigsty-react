import React from 'react';
import './App.css';
import { Accomodation } from './utils/types';
import { PCM } from './utils/constants';

import AccomodationBlock from './components/AccomodationBlock';

const accomodation: Accomodation = {
  id: '123345',
  amenities: [{id: '1', name: 'Furnished'}, { id: '2', name: 'Parking'}],
  address: {
    addressLine1: '19 Bridge House',
    addressLine2: '21 Ducie Street',
    addressLine3: '',
    city: 'Manchester',
    country: 'UK',
    postcode: 'M1 2DQ',
  },
  availability: {
    dateString: '04/06/2021',
    minimumTerm: '1 month',
    maximumTerm: '12 months',
  },
  contact: {
    emailAddress: 'johnsmith@googlemail.com',
    phoneNumber: '07864123456',
  },
  details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  images: [
    {
      id: '123',
      url:'https://ichef.bbci.co.uk/news/320/cpsprodpb/0FCC/production/_118144040_mediaitem118144038.jpg',
    }, {
      id: '456',
      url:'https://ichef.bbci.co.uk/news/976/cpsprodpb/B4BA/production/_118166264_microsoftteams-image.png',
    },
  ],
  title: 'Stylish double in city centre flat',
  price: {amount: 500, time: PCM, billsIncluded: false},
  propertyType: {id: '1', name: 'Flat'},
  roomType: {id: '1', name: 'Double room'},
}

function App() {
  const {
    address: { city, postcode },
    availability: { dateString },
    propertyType,
    roomType,
  } = accomodation;
  return (
    <div className="App">
      <AccomodationBlock
        {...accomodation}
        availabileDateString={dateString}
        city={city}
        onClick={() => console.log('dfghj')}
        postcode={postcode}
        propertyType={propertyType.name}
        roomType={roomType.name}
      />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
