import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '~/services/api';

import Amount from '~/components/Exercise/Amount';
import ButtonSeries from '~/components/Exercise/ButtonSeries';
import VideoVimeo from '~/components/Video/VideoVimeo';

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
}) {
  const [video, setVideo] = useState('');
  const [finalized, setFinalizaded] = useState(false);
  useEffect(() => {
    async function getVideo() {
      const response = await api.get('videos', {
        params: { exercise_id: item.id },
      });

      if (response.data.length > 0) setVideo(response.data[0].url);
    }
    getVideo();
  }, []);
  function handleCompleted(onCompleted) {
    if (!onCompleted) {
      setFinalizaded(true);
    } else {
      setFinalizaded(false);
    }
  }

  return (
    <>
      {video.length > 0 && <VideoVimeo url={video} />}
      <Item finalized={finalized}>
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
