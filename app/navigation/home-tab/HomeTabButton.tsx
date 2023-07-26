import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Animated, Image, Text, TouchableOpacity } from 'react-native';
import { NavigationRoutes } from '../../constants';
import { setRoute, useAppDispatch } from '../../redux';
import { moderateScale } from '../../theme';
import styles from './HomeTabStyles';

interface TabButtonProps extends BottomTabBarButtonProps {
  title: string;
  image: number;
}

const TabButton = (props: TabButtonProps): JSX.Element => {
  const { image, onPress, accessibilityState, title } = props;
  const focused: boolean = accessibilityState?.selected ?? false;
  const viewRef = useRef(null);
  const [yOffest] = useState<Animated.Value>(new Animated.Value(0));
  const transform = [{translateY: yOffest}];
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (focused) {
      Animated.spring(yOffest, {
        toValue: -moderateScale(10),
        useNativeDriver: true,
      }).start();
    } else {
      yOffest.setValue(0);
    }
  }, [focused]);

  useFocusEffect(() => {
    if (props.to?.toLowerCase().includes(NavigationRoutes.HomeStack.toLowerCase())) 
      dispatch(setRoute(NavigationRoutes.HomeScreen));
    if (props.to?.toLowerCase().includes(NavigationRoutes.ProfileScreen.toLowerCase())) 
      dispatch(setRoute(NavigationRoutes.ProfileScreen));
  });

  return (
    <TouchableOpacity style={styles.buttonContainerMain} onPress={onPress}>
      <Animated.View
        ref={viewRef}
        style={[styles.buttonAnimationStyle, {transform}]}>
        <Image
          source={image}
          style={focused ? styles.buttonImg : styles.buttonImgInactive}
          resizeMode="cover"
        />
        <Text
          style={focused ? styles.titleTextActive : styles.titleTextInActive}>
          {title}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default TabButton;
