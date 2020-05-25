import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './Navigator.css'

function Sidebar() {
  return (
      <div className="navigator">
    <List disablePadding dense>
      <ListItem button>
        <ListItemText>Dashboard</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>People</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Relationships</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Families</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Charts</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Events</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Places</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Geography</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Sources</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Citations</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Repositories</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Media</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Notes</ListItemText>
      </ListItem>
    </List>
    </div>
  )
}

export default Sidebar