import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { format, parseJSON } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '~/services/api';

import VideoFlatlist from '~/components/VideoFlatlist';
import ListSequence from '~/Animation/ListSequence';
import Loading from '~/components/Loading';

import { Container, Content } from './styles';

export default function Trainings() {
  const isFocused = useIsFocused();
  const { id } = useSelector(state => state.auth.student);

  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState([]);
  const [videoBasic, setVideoBasic] = useState([]);

  useEffect(() => {
    async function getTrainings() {
      const [videosResponse, videosBasicResponse] = await Promise.all([
        await api.get('videos', {
          params: { student_id: id },
        }),
        await api.get('videos', {
          params: { student_id: id, basic: true },
        }),
      ]);

      const videoActive = videosResponse?.data.filter(item => item.active);
      if (videosResponse.data.length) setVideo(videoActive);

      const videoBasicActive = videosBasicResponse?.data.filter(
        item => item.active,
      );

      const videosFormatted = videoBasicActive.map(video => {
        const startDateFormatted = format(
          parseJSON(video.start_date),
          'E dd MMM',
          {
            locale: ptBR,
          },
        );
        const endDateFormatted = format(parseJSON(video.end_date), 'E dd MMM', {
          locale: ptBR,
        });

        return {
          ...video,
          startDateFormatted,
          endDateFormatted,
        };
      });

      setVideoBasic(videosFormatted);

      setLoading(false);
    }
    if (isFocused) {
      setLoading(true);
      getTrainings();
    }
  }, [isFocused]);

  return isFocused && loading ? (
    <Loading />
  ) : (
    <Container>
      <>
        <Content>
          <ListSequence>
            <VideoFlatlist videos={videoBasic} type="videoBasic" />
            <VideoFlatlist videos={video} type="videoVimeo" />
          </ListSequence>
        </Content>
      </>
    </Container>
  );
}
