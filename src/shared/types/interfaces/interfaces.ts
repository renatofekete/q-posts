export interface IAuthor {
  id: number
  name: string
  username: string
  email: string
  address: IAddress
  phone: string
  website: string
  company: ICompany
}

export interface IPost {
  id: number
  title: string
  body: string
  userId: number
}

export interface IComments {
  id: number
  name: string
  body: string
  email: string
  postId: number
}

interface IAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IGeo
}

interface IGeo {
  lat: string
  lng: string
}

interface ICompany {
  name: string
  catchPhrase: string
  bs: string
}