import React from 'react';

import { Video } from 'expo-av';

// import { Container } from './styles';

const VideoPlayer = ({ uri }) => {
  return (
    <Video
      source={{
        uri,
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      isLooping
      useNativeControls
      style={{ width: 300, height: 300 }}
    />
  );
};

export default VideoPlayer;
