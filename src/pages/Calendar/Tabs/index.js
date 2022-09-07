import React, { useState, useEffect } from 'react';
import MaterialTabs from 'react-native-material-tabs';
import { getDay } from 'date-fns';
import { formatDayMonth } from '~/utils';

import ClassesList from './ClassesList';

import { TabCustom, TextCustom } from './styles';

const Tabs = ({ classes, onRefresh }) => {
  let todayIs = getDay(new Date());
  if (todayIs > 5 || todayIs === 0) todayIs = 1;
  const [selectedTab, setSelectedTab] = useState(todayIs);
  useEffect(() => {
    setSelectedTab(todayIs);
  }, [todayIs]);

  const label = (day, index) => {
    const date = formatDayMonth(classes?.[day].result[0].date);
    const active = selectedTab === index - 1;
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
          label('seg', 1),
          label('ter', 2),
          label('qua', 3),
          label('qui', 4),
          label('sex', 5),
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
