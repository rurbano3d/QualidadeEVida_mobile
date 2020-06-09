import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import vimeoBasic from '~/services/vimeoBasic';
import VideoPlayer from '~/components/Video/VideoPlayer';
import Loading from '~/components/Loading';

const VideoVimeo = ({ url, width, height }) => {
  const [uri, setUri] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getVideoVimeo() {
      const response = await vimeoBasic.get(`/${url}/config`);
      setUri(response.data.request.files.hls.cdns.akfire_interconnect_quic.url);

      // setUri(
      //   response.request.files.hls.cdns[response.request.files.hls.default_cnd]
      //     .url,
      // );
      setLoading(false);
    }
    getVideoVimeo();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <VideoPlayer uri={uri} width={width} height={height} />
  );
};

export default VideoVimeo;
