export enum LoaderSizeType {
  small = 'small',
  large = 'large',
}
export interface ICustomLoader {
  size: LoaderSizeType;
  color: string;
  animating: boolean;
}
