import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ShowTodoList from '../showlist';
import ShowCompletedList from '../complelet';
import ShowAllList from '../showlist'
export default function TabClick({changeTab,active}) {
  

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={active}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={changeTab} aria-label="lab API tabs example">
            <Tab label="TODOLIST" onClick={()=>changeTab(1)}/>
            <Tab label="Completed List" onClick={()=>changeTab(2)}/>
            <Tab label="All List" onClick={()=>changeTab(3)} />
          </TabList>
        </Box>
        <TabPanel value="1"><ShowTodoList/></TabPanel>
        <TabPanel value="2"><ShowCompletedList/></TabPanel>
        <TabPanel value="3"><ShowAllList/></TabPanel>
      </TabContext>
    </Box>
  );
}
