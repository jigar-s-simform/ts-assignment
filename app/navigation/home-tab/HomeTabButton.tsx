import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { useEffect, useRef, useState } from 'react';
import { Animated, Image, Text, TouchableOpacity } from 'react-native';
import { verticalScale } from '../../theme';
import styles from './HomeTabStyles';

interface TabButtonProps extends BottomTabBarButtonProps {
  title: string;
  image: number;
}

const TabButton = (props: TabButtonProps): JSX.Element => {
  const {image, onPress, accessibilityState, title} = props;
  const focused: boolean = accessibilityState?.selected ?? false;
  const viewRef = useRef(null);
  const [yOffest] = useState<Animated.Value>(new Animated.Value(0));
  const transform = [{translateY: yOffest}];

  useEffect(() => {
    if (focused) {
      Animated.spring(yOffest, {
        toValue: -verticalScale(20),
        useNativeDriver: true,
      }).start();
    } else {
      yOffest.setValue(0);
    }
  }, [focused]);

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
