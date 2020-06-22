import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useIsFocused } from '@react-navigation/native';

import { Container, VideoCustom } from './styles';

export default function VideoPlayer({ uri }) {
  const isFocused = useIsFocused();
  return (
    isFocused && (
      <Container>
        {uri.length > 0 && (
          <VideoCustom
            source={{
              uri,
            }}
            resizeMode="contain"
            useNativeControls
            onFullscreenUpdate={async () => {
              await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.ALL,
              );
            }}
          />
        )}
      </Container>
    )
  );
}

VideoPlayer.propTypes = {
  uri: PropTypes.string.isRequired,
};
