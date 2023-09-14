export enum AuthScreens {
  Registration,
  Login,
}

export interface StateSchema {
  screen: AuthScreens
  setScreen: (screen: AuthScreens) => void
}
