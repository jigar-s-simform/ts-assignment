export enum LoaderSizeType {
  small = 'small',
  large = 'large',
}
export default interface ICustomLoader {
  size: LoaderSizeType;
  color: string;
  animating: boolean;
}
