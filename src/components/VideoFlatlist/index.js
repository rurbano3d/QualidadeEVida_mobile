import React from 'react';

import VideoBasic from '~/components/Video/VideoBasic';
import VideoVimeo from '~/components/Video/VideoVimeo';
import Warning from '~/components/WarningWithoutInfo';

import {
  List,
  Item,
  DateView,
  InfoView,
  Title,
  DateText,
  Top,
  Bottom,
} from './styles';

const VideoFlatlist = ({ videos, type }) => {
  return (
    <List
      data={videos}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <>
          <Item finished={item.finished}>
            <Top>
              <Title>{item.name}</Title>
            </Top>
            <Bottom>
              <DateView>
                <DateText>{item.startDateFormatted}</DateText>
                <DateText>
                  {item.endDateFormatted && item.endDateFormatted}
                </DateText>
              </DateView>
              <InfoView>
                {type === 'videoBasic' && <VideoBasic url={item.url} />}
                {type === 'videoVimeo' && <VideoVimeo url={item.url} />}
              </InfoView>
            </Bottom>
          </Item>
        </>
      )}
    />
  );
};

export default VideoFlatlist;
