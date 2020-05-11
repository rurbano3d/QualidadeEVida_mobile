import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import api from '~/services/api';
import vimeoApi from '~/services/vimeoApi';

import { challengeRequest } from '~/store/modules/challenges/actions';

import Separator from '~/components/Separator';
import SlideRight from '~/Animation/SlideRight';
import GrowUp from '~/Animation/GrowUp';
import Loading from '~/components/Loading';

import ExercisesFlatlist from '~/pages/ExercisesFlatList';
import VideoVimeo from '~/components/Video/VideoVimeo';

import { Container, ButtonCustom, Title, TitleText } from './styles';

export default function Exercises({ renderButtonSeries, ButtonRender }) {
  const route = useRoute();
  const dispatch = useDispatch();

  const { id, title } = route.params;
  const student = useSelector(state => state.auth.student);

  const [refresh, setRefresh] = useState(false);
  const [items, setItems] = useState([]);
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getExercises() {
      const response = await api.get('exercises', {
        params: { category_id: id },
      });
      const runningsResponse = await api.get('runnings', {
        params: { category_id: id },
      });
      setItems([...response.data, ...runningsResponse.data]);
    }
    async function getVideo() {
      const response = await api.get('videos', {
        params: { category_id: id },
      });
      if (response.data.length > 0) setVideo(response.data[0].url);
    }

    setLoading(false);
    getExercises();
    getVideo();
  }, []);
  function handleSubscription() {
    dispatch(challengeRequest(student.id, id));
    setRefresh(true);
  }
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SlideRight>
            <Title>
              <TitleText>{title}</TitleText>
            </Title>
            {video.length > 0 && <VideoVimeo url={video} />}

            {items.length > 0 && (
              <ExercisesFlatlist
                data={items}
                category={id}
                renderButtonSeries={renderButtonSeries}
              />
            )}
          </SlideRight>
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
