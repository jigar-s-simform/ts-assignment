export interface CommonColorType {
  themeBluelight: string
  themeCyan: string
  themeBlue: string
  darkBlue: string
  green: string
  yellow: string
  grey: string
  red: string
}
export interface LightColorType {
  black: string
  blackWithOpacity: string
  white: string
  whiteWithOpacity: string
  themeCyan: string
  themeBlueLighter: string
  themeBlueDark: string
}
export interface DarkColorType {
  black: string
  blackWithOpacity: string
  white: string
  whiteWithOpacity: string
  themeBlueDark: string
  themeCyan: string
  themeBlueLighter: string
}
export interface ColorsType {
  commonColors: CommonColorType
  light: LightColorType
  dark: DarkColorType
}
export const commonColors: CommonColorType = {
  themeBluelight: '#38304C',
  themeCyan: '#0CF6E3',
  themeBlue: '#4491DE',
  darkBlue: '#5193F2',
  green: '#008000',
  yellow: '#E7B10A',
  grey: '#767676',
  red: '#FF0000',
};
export const light: LightColorType = {
  black: '#000000',
  blackWithOpacity: '#000000AA',
  white: '#FFFFFF',
  whiteWithOpacity: '#FFFFFFAA',
  themeCyan: '#201A30',
  themeBlueLighter: '#FFFFFF',
  themeBlueDark: '#201A30'
};
export const dark: DarkColorType = {
  black: '#FFFFFF',
  blackWithOpacity: '#FFFFFFAA',
  white: '#201A30',
  whiteWithOpacity: '#000000AA',
  themeBlueDark: '#F5F5F5',
  themeCyan: '#0CF6E3',
  themeBlueLighter: '#38304C'
};
export const Colors: ColorsType = {
  commonColors,
  light,
  dark,
};
export default {
  themeBlueDark: '#201A30',
  themeBluelight: '#38304c',
  themeCyan: '#0CF6E3',
  themeBlue: '#4491DE',
  black: '#000000',
  white: '#ffffff',
  themeColor: '#F5F5F5',
  green: '#008000',
  yellow: '#E7B10A',
  grey: '#767676',
  red: '#FF0000',
  shade: 'aa',
  darkBlue: '#5193F2',
  commonColors: {
    themeBluelight: '#38304C',
    themeCyan: '#0CF6E3',
    themeBlue: '#4491DE',
    darkBlue: '#5193F2',
    green: '#008000',
    yellow: '#E7B10A',
    grey: '#767676',
    red: '#FF0000',
  },
  light: {
    black: '#000000',
    blackWithOpacity: '#000000AA',
    white: '#FFFFFF',
    whiteWithOpacity: '#FFFFFFAA',
    themeCyan: '#0CF6E3',
  },
  dark: {
    black: '#FFFFFF',
    blackWithOpacity: '#FFFFFFAA',
    white: '#201A30',
    whiteWithOpacity: '#000000AA',
    themeBlueDark: '#F5F5F5',
    themeCyan: '#201A30',
  },
};
