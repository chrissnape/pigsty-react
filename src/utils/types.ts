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
    dateTimestamp: number,
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
  propertyType: string,
  roomType: string,
}

export type Amenity = {
  id: string,
  name: string,
}

export type Image = {
  id: string,
  url: string,
}

export type PaymentType = {
  id: string,
  name: PerCalendarMonth | PerWeek,
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
  paymentType: PerCalendarMonth | PerWeek,
}

export type Query = {
  city: string | null,
  maxPrice: number,
  minPrice: number,
  paymentType: string | null,
  roomType: string | null,
}
