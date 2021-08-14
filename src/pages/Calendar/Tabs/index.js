import React, { useState, useEffect } from 'react';
import MaterialTabs from 'react-native-material-tabs';
import { getDay } from 'date-fns';

import ClassesList from './ClassesList';

const Tabs = ({ classes, onRefresh }) => {
  let todayIs = getDay(new Date());
  if (todayIs > 5) todayIs = 0;
  const [selectedTab, setSelectedTab] = useState(todayIs);
  useEffect(() => {
    setSelectedTab(todayIs);
  }, [todayIs]);
  return (
    <>
      <MaterialTabs
        items={['SEG', 'TER', 'QUA', 'QUI', 'SEX']}
        selectedIndex={selectedTab}
        onChange={setSelectedTab}
        barColor="#009fe3"
        indicatorColor="#fff"
        activeTextColor="#fff"
        barHeight="80"
        indicatorHeight="5"
        activeTextStyle={{ fontWeight: 'bold', fontSize: 17 }}
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
