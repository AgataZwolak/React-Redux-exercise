export interface User {
  id: string,
  name: string,
  username: string,
  email: string,
  address: {
    geo: {
      lat: number,
      lng: number
    }
  }
}