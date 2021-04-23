export type Accomodation = {
  id: string,
  addressLine1: string,
  addressLine2: string,
  addressLine3: string,
  amenities: Array<Amenity>,
  availability: Availability,
  city: string,
  country: string,
  details: string,
  emailAddress: string,
  images: Array<Image>,
  title: string,
  phoneNumber: string,
  postcode: string,
  price: Price,
  propertyType: PropertyType,
  roomType: RoomType,
}

export type Availability = {
  dateString: string,
  maximumTerm: string,
  minimumTerm: string,
}

export type PropertyType = {
  id: string,
  name: string,
}

export type RoomType = {
  id: string,
  name: string,
}

export type Amenity = {
  id: string,
  name: string,
}

export type Image = {
  id: string,
  url: string,
}

export type PerCalendarMonth = 'pcm';
export type PerWeek = 'pw';

export type Price = {
  amount: number,
  billsIncluded: boolean,
  time: PerCalendarMonth | PerWeek,
}
