import { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
import loaderStyles from './CustomLoaderStyles';
<<<<<<< HEAD
import { ICustomLoader } from './CustomLoaderTypes';
=======
import ICustomLoader from './CustomLoaderTypes';
>>>>>>> a604e69 (feat: TE7-T1022: Login UI Part-2 complete with validation and Custom Input)
/**
 * CustomLoader Function
 *
 * @param {Object} param0 - An object containing size, animating, and color parameters.
 * @returns {JSX.Element} - The custom loader component.
 *
 * @description This function is used to define a custom loader component. It takes in an object
 * with the following parameters: size (size of the loader), animating (whether the loader is animating), and color (color of the loader).
 * The function returns a JSX element representing the custom loader component.
 */
const CustomLoader: FC<ICustomLoader> = ({ animating, color }): JSX.Element => {
    
  return (
    <View style={loaderStyles.wrapper}>
      <ActivityIndicator
        size={30}
        animating={animating}
        color={color}
        hidesWhenStopped={true}
      />
    </View>
  );
};

export default CustomLoader;
