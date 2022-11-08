import { Box, Switch } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AccountBox, AddHomeWork, AddModerator, Home, ModeNight, Person, Settings } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box flex={1} p={1} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed">

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                  <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
            
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                  <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                  <AddModerator />
              </ListItemIcon>
              <ListItemText primary="Moderator" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                  <AddHomeWork />
              </ListItemIcon>
              <ListItemText primary="HomeWork" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                  <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                  <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                  <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
            
          </ListItem>
          </List>
    
              </Box>
    </Box>
  )
}

export default Sidebar