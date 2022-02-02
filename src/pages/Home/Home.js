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

const Home = () => {
  const [list, setList] = React.useState([]);

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    setList((prev = []) => [...prev, form.get("todo__item")]);

    e.target.reset();
  }, []);

  const handleDelete = React.useCallback(
    (index = 0) =>
      () => {
        setList((prev = []) => prev.filter((_, i) => i !== index));
      },
    []
  );

  return (
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
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="todo__item"
            label="TODO item"
            name="todo__item"
            autoFocus
            type="text"
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
            {list?.map((item, index) => {
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
      </Box>
    </Container>
  );
};

export default Home;
