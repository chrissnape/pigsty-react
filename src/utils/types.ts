export type Accomodation = {
  id: string,
  address: {
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    city: string,
    country: string,
    postcode: string,
  },
  amenities: Array<Amenity>,
  availability: {
    dateString: string,
    maximumTerm: string,
    minimumTerm: string,
  },
  contact: {
    emailAddress: string,
    phoneNumber: string,
  },
  details: string,
  images: Array<Image>,
  title: string,
  price: Price,
  propertyType: PropertyType,
  roomType: RoomType,
}

export type Amenity = {
  id: string,
  name: string,
}

export type Image = {
  id: string,
  url: string,
}

export type PropertyType = {
  id: string,
  name: string,
}

export type RoomType = {
  id: string,
  name: string,
}

export type PerCalendarMonth = 'pcm';
export type PerWeek = 'pw';

export type Price = {
  amount: number,
  billsIncluded: boolean,
  time: PerCalendarMonth | PerWeek,
}
