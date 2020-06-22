import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import api from '~/services/api';

import { challengeRequest } from '~/store/modules/challenges/actions';

import Separator from '~/components/Separator';
import SlideBottom from '~/Animation/SlideBottom';

import GrowUp from '~/Animation/GrowUp';
import Loading from '~/components/Loading';

import ExercisesFlatlist from '~/pages/ExercisesFlatList';
import VideoVimeo from '~/components/Video/VideoVimeo';
import VideoBasic from '~/components/Video/VideoBasic';

import {
  Container,
  ButtonCustom,
  Info,
  Title,
  TitleText,
  VideoContainer,
  Content,
} from './styles';

export default function Exercises({ renderButtonSeries, ButtonRender }) {
  const route = useRoute();
  const dispatch = useDispatch();

  const { id, title } = route.params;
  const student = useSelector(state => state.auth.student);

  const [refresh, setRefresh] = useState(false);
  const [items, setItems] = useState([]);
  const [video, setVideo] = useState([]);
  const [videoBasic, setVideoBasic] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const [exercises, runnings, videos, videosBasic] = await Promise.all([
        await api.get('exercises', {
          params: { category_id: id },
        }),
        await api.get('runnings', {
          params: { category_id: id },
        }),
        await api.get('videos', {
          params: { category_id: id },
        }),
        await api.get('videos', {
          params: { category_id: id, basic: true },
        }),
      ]);
      setItems([...exercises.data, ...runnings.data]);
      if (videos.data.length) setVideo(videos.data[0].url);
      if (videosBasic.data.length) setVideoBasic(videosBasic.data[0].url);
    }
    setLoading(false);
    getData();
  }, []);
  function handleSubscription() {
    dispatch(challengeRequest(student.id, id));
    setRefresh(true);
  }
  return (
    <Container hasVideo={!!video.length || !!videoBasic.length}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Content>
            <Title>
              <TitleText>{title}</TitleText>
            </Title>
            {!!video.length && (
              <VideoContainer>
                <VideoVimeo url={video} />
              </VideoContainer>
            )}
            {!!videoBasic.length && (
              <VideoContainer>
                <VideoBasic url={videoBasic} />
              </VideoContainer>
            )}
          </Content>
          <Info>
            {!!items.length && (
              <SlideBottom>
                <ExercisesFlatlist
                  data={items}
                  category={id}
                  renderButtonSeries={renderButtonSeries}
                  hasVideo={!!video.length || !!videoBasic}
                />
              </SlideBottom>
            )}
          </Info>
          {ButtonRender && (
            <>
              <Separator />

              <GrowUp>
                {!refresh && (
                  <ButtonCustom
                    color="#42CB59"
                    onPress={() => handleSubscription(id)}
                  >
                    Inscrever-se
                  </ButtonCustom>
                )}
              </GrowUp>
            </>
          )}
        </>
      )}
    </Container>
  );
}
