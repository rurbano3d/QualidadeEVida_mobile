import React, { useState, useEffect } from 'react';
import MaterialTabs from 'react-native-material-tabs';
import { getDay } from 'date-fns';
import { formatDayMonth } from '~/utils';

import ClassesList from './ClassesList';

import { TabCustom, TextCustom } from './styles';

const Tabs = ({ classes, onRefresh }) => {
  let todayIs = getDay(new Date());
  if (todayIs > 5) todayIs = 0;
  const [selectedTab, setSelectedTab] = useState(todayIs);
  useEffect(() => {
    setSelectedTab(todayIs);
  }, [todayIs]);

  const label = (day, index) => {
    const date = formatDayMonth(classes?.[day].result[0].date);
    const active = selectedTab === index;
    return (
      <TabCustom active={active}>
        <TextCustom active={active}>{day}</TextCustom>
        <TextCustom active={active}>{date}</TextCustom>
      </TabCustom>
    );
  };

  return (
    <>
      <MaterialTabs
        items={[
          label('seg', 0),
          label('ter', 1),
          label('qua', 2),
          label('qui', 3),
          label('sex', 4),
        ]}
        selectedIndex={selectedTab}
        onChange={setSelectedTab}
        barColor="#fff"
        indicatorColor="#fff"
        activeTextColor="#fff"
        barHeight="80"
        indicatorHeight="0"
      />
      <ClassesList
        selectedTab={selectedTab}
        classes={classes}
        onRefresh={onRefresh}
      />
    </>
  );
};

export { Tabs };
