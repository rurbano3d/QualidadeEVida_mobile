import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { formatDateParse } from '~/utils';
import api from '~/services/api';
import Loading from '~/components/Loading';
import ButtonSeries from '~/components/Running/ButtonSeries';
import VideoVimeo from '~/components/Video/VideoVimeo';
import VideoBasic from '~/components/Video/VideoBasic';
import {
  Item,
  InfoView,
  ExerciseView,
  SeriesView,
  ExerciseText,
  SeriesText,
  DateView,
  Content,
  CongratulationsText,
} from './styles';

export default function RunningRender({
  item,
  category,
  renderButtonSeries,
  hasVideo,
}) {
  const [finalized, setFinalizaded] = useState(false);
  const [video, setVideo] = useState([]);
  const [videoBasic, setVideoBasic] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getVideos() {
      const [videos, videosBasic] = await Promise.all([
        await api.get('videos', {
          params: { running_id: item.id },
        }),
        await api.get('videos', {
          params: { running_id: item.id, basic: true },
        }),
      ]);
      if (videos.data.length) setVideo(videos.data[0].url);
      if (videosBasic.data.length) setVideoBasic(videosBasic.data[0].url);
    }
    getVideos();
    setLoading(false);
  }, []);
  function handleCompleted(value) {
    if (value) {
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
              name="speedometer"
              size={20}
              color="#444444"
            />
            <SeriesText> {item.km} Km</SeriesText>
          </SeriesView>
          <DateView>
            {item.runnings[0].start_date ? (
              <>
                <SeriesView>
                  <MaterialCommunityIcons
                    name="calendar-check"
                    size={20}
                    color="#444444"
                  />
                  <SeriesText>
                    {formatDateParse(item.runnings[0].start_date)}
                  </SeriesText>
                </SeriesView>

                <SeriesView>
                  <MaterialCommunityIcons
                    name="calendar-remove"
                    size={20}
                    color="#444444"
                  />
                  <SeriesText>
                    {formatDateParse(item.runnings[0].end_date)}
                  </SeriesText>
                </SeriesView>
              </>
            ) : (
              <>
                <SeriesView>
                  <MaterialCommunityIcons
                    name="calendar-blank"
                    size={20}
                    color="#444444"
                  />
                  <SeriesText>Livre</SeriesText>
                </SeriesView>
                <SeriesView />
              </>
            )}
          </DateView>
        </InfoView>
        {renderButtonSeries && (
          <Content finalized={finalized}>
            <ButtonSeries
              item={item}
              category={category}
              onCompleted={handleCompleted}
            />
          </Content>
        )}
        {finalized && (
          <>
            <CongratulationsText>
              {`Parabéns!! \nDesafio Completo`}
            </CongratulationsText>
          </>
        )}
      </Item>
    </>
  );
}
