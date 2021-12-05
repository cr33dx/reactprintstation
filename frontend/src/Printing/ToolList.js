import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import './ToolList.css';
import Checkbox from '@mui/material/Checkbox';
import { Card } from '@mui/material';

export default function ToolList({
  handleDoubleClick,
  handleSingleClick,
  handleColourClick,
  handleSpiralClick,
  handleBlackClick
}) {


  return (
    <Card className="card-content">
      <List className="customise-list" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Card className="checkbox-content" onClick={handleDoubleClick} >
          <Checkbox
            color="primary"
          />
          <ListItemText>Double Side Print</ListItemText>
        </Card>
        <Card alignItems="flex-start" className="checkbox-content" onClick={handleSingleClick}>
          <Checkbox
            color="primary"
          />
          <ListItemText
            primary="Single Side Print"
          />
        </Card>
        <Card alignItems="flex-start" className="checkbox-content" onClick={handleBlackClick}>
          <Checkbox
            color="primary"
          />
          <ListItemText
            primary="Black and White Print"
          />
        </Card>
        <Card alignItems="flex-start" className="checkbox-content" onClick={handleColourClick}>
          <Checkbox
            color="primary"
          />
          <ListItemText
            primary="Color Print"
          />
        </Card>
        <Card alignItems="flex-start" className="checkbox-content" onClick={handleSpiralClick}>
          <Checkbox
            color="primary"
          />
          <ListItemText
            primary="Spiral Bind or Not"
          />
        </Card>
      </List>
    </Card>

  );
}
