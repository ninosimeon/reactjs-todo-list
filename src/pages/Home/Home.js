import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Home = () => (
  <Container component="main" maxWidth="lg">
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">TODO List</Typography>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1, display: "flex", flexDirection: "column", width: "100%" }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="todo-item"
          label="TODO item"
          name="todo-item"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2 }}
        >
          ADD
        </Button>
        <Divider />
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary="Single-line item" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </Box>
    </Box>
  </Container>
);

export default Home;
