export default {
  themeBlueDark: '#201A30',
  themeBluelight: '#38304C',
  themeCyan: '#0CF6E3',
  themeBlue: '#4491DE',
  black: '#000000',
  white: '#FFFFFF',
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
  },
  dark: {
    black: '#FFFFFF',
    blackWithOpacity: '#FFFFFFAA',
    white: '#201A30',
    whiteWithOpacity: '#000000AA',
    themeBlueDark: '#F5F5F5',
  },
};
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
};
export const dark: DarkColorType = {
  black: '#FFFFFF',
  blackWithOpacity: '#FFFFFFAA',
  white: '#201A30',
  whiteWithOpacity: '#000000AA',
  themeBlueDark: '#F5F5F5',
};

export const Colors: ColorsType = {
  commonColors,
  light,
  dark,
};

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
}

export interface DarkColorType {
  black: string
  blackWithOpacity: string
  white: string
  whiteWithOpacity: string
  themeBlueDark: string
}

export interface ColorsType {
  commonColors: CommonColorType
  light: LightColorType
  dark: DarkColorType
}
