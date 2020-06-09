import React from 'react';
import PropTypes from 'prop-types';

import { Container, VideoCustom } from './styles';

export default function VideoPlayer({ uri, width, height }) {
  return (
    <>
      <Container>
        {uri.length > 0 && (
          <VideoCustom
            source={{
              uri,
            }}
            width={width}
            height={height}
            resizeMode="stretch"
            useNativeControls
          />
        )}
      </Container>
    </>
  );
}

VideoPlayer.propTypes = {
  uri: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
VideoPlayer.defaultProps = {
  width: '350px',
  height: '200px',
};
