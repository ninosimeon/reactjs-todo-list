import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";

const TodoList = ({ list = [], handleDelete }) => {
  return (
    <Box
      sx={{
        mt: 1,
      }}
    >
      <List>
        {list.map((item, index) => {
          if (!!index)
            return (
              <React.Fragment key={index}>
                <Divider variant="inset" component="li" />
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={handleDelete(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={item} />
                </ListItem>
              </React.Fragment>
            );

          return (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={handleDelete(index)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={item} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default React.memo(TodoList);
