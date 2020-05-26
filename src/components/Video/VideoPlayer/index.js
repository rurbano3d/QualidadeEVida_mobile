import React from 'react';

import ListSequence from '~/Animation/ListSequence';

import { Container, VideoCustom } from './styles';

const VideoPlayer = ({ uri, width, height }) => {
  return (
    <>
      <Container>
        {uri.length > 0 && (
          <ListSequence>
            <VideoCustom
              source={{
                uri,
              }}
              resizeMode="stretch"
              useNativeControls
            />
          </ListSequence>
        )}
      </Container>
    </>
  );
};

export default VideoPlayer;
