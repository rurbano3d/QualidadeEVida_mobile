import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '~/services/api';
import Loading from '~/components/Loading';
import Amount from '~/components/Exercise/Amount';
import ButtonSeries from '~/components/Exercise/ButtonSeries';
import VideoVimeo from '~/components/Video/VideoVimeo';
import VideoBasic from '~/components/Video/VideoBasic';

import {
  Item,
  InfoView,
  ExerciseView,
  SeriesView,
  ExerciseText,
  SeriesText,
} from './styles';

export default function ExercisesRender({
  item,
  category,
  renderButtonSeries,
  hasVideo,
}) {
  const [video, setVideo] = useState([]);
  const [videoBasic, setVideoBasic] = useState([]);
  const [finalized, setFinalizaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getVideos() {
      const [videos, videosBasic] = await Promise.all([
        await api.get('videos', {
          params: { exercise_id: item.id },
        }),
        await api.get('videos', {
          params: { exercise_id: item.id, basic: true },
        }),
      ]);
      if (videos.data.length) setVideo(videos.data[0].url);
      if (videosBasic.data.length) setVideoBasic(videosBasic.data[0].url);
    }
    getVideos();
    setLoading(false);
  }, []);
  function handleCompleted(onCompleted) {
    if (!onCompleted) {
      setFinalizaded(true);
    } else {
      setFinalizaded(false);
    }
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      <Item finalized={finalized}>
        {!!video.length && hasVideo && <VideoVimeo url={video} />}
        {!!videoBasic.length && hasVideo && <VideoBasic url={videoBasic} />}
        <ExerciseView>
          <ExerciseText>{item.title}</ExerciseText>
        </ExerciseView>
        <InfoView>
          <SeriesView>
            <MaterialCommunityIcons
              name="debug-step-over"
              size={20}
              color="#444444"
            />
            <SeriesText> {item.repetitions} séries</SeriesText>
          </SeriesView>
          <Amount item={item} />
        </InfoView>

        {renderButtonSeries && (
          <ButtonSeries
            item={item}
            category={category}
            onCompleted={handleCompleted}
          />
        )}
      </Item>
    </>
  );
}
