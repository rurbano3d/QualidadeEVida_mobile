import React from 'react';

import VideoBasic from '~/components/Video/VideoBasic';
import VideoVimeo from '~/components/Video/VideoVimeo';
import Warning from '~/components/WarningWithoutInfo';

import { List, Item, DateView, InfoView, Title, DateText } from './styles';

const VideoFlatlist = ({ videos, type }) => {
  return (
    <List
      data={videos}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <>
          <Title>{item.name}</Title>
          <Item finished={item.finished}>
            <DateView>
              <DateText>{item.startDateFormatted}</DateText>
              <DateText>
                {item.endDateFormatted && `     ${item.endDateFormatted}`}
              </DateText>
            </DateView>
            <InfoView>
              {type === 'videoBasic' && (
                <VideoBasic url={item.url} width="240px" height="180px" />
              )}
              {type === 'videoVimeo' && (
                <VideoVimeo url={item.url} width="240px" height="180px" />
              )}
            </InfoView>
          </Item>
        </>
      )}
    />
  );
};

export default VideoFlatlist;
