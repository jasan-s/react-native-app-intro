import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  doneBtnLabel, nextBtnLabel,
  doneFadeOpacity, skipFadeOpacity, nextOpacity
}) => {
  return (
    <View style={styles.btnContainer}>
      <Animated.View style={[styles.full, { height: 0 }, {
        opacity: doneFadeOpacity,
        transform: [{
          translateX: skipFadeOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [5, 20],
          }),
        }],
      }]}>
      <TouchableOpacity
        style={styles.full}
        onPress={isDoneBtnShow ? () => onDoneBtnClick() : null}>
        <Text style={[styles.controllText, { color: rightTextColor }]}>
          {doneBtnLabel}
        </Text>
      </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default DoneButton
