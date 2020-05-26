import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import vimeoApi from '~/services/vimeoApi';
import VideoPlayer from '~/components/Video/VideoPlayer';
import Loading from '~/components/Loading';

const VideoVimeo = ({ url }) => {
  const { vimeoAuth } = useSelector(state => state.auth);
  const [uri, setUri] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getVideoVimeo() {
      const response = await vimeoApi.get(`/users/114109058${url}`, {
        headers: {
          Authorization: vimeoAuth,
          Accept: 'application/vnd.vimeo.*+json;version=3.4',
        },
      });

      setUri(response.data.files[0].link);
      setLoading(false);
    }
    getVideoVimeo();
  }, []);
  return loading ? <Loading /> : <VideoPlayer uri={uri} />;
};

export default VideoVimeo;
