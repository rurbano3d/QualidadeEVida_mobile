import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import vimeoApi from '~/services/vimeoApi';
import VideoPlayer from '~/components/Video/VideoPlayer';

// import { Container } from './styles';

const VideoVimeo = ({ url }) => {
  const { vimeoAuth } = useSelector(state => state.auth);
  const [uri, setUri] = useState('');
  useEffect(() => {
    async function getVideoVimeo() {
      const response = await vimeoApi.get(`/users/114109058${url}`, {
        headers: {
          Authorization: vimeoAuth,
          Accept: 'application/vnd.vimeo.*+json;version=3.4',
        },
      });

      setUri(response.data.files[0].link);
    }
    getVideoVimeo();
  }, []);
  return <VideoPlayer uri={uri} />;
};

export default VideoVimeo;
