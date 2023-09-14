export enum UserType {
  Specialist,
  User,
}

export interface StateSchema {
  type: UserType

  setType: (type: UserType) => void
}

export interface SliderItem {
  title: string
  img: string
  description: string
}
