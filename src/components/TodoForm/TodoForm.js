import { Box, Button, TextField } from "@mui/material";
import React from "react";

const TodoForm = ({ handleSubmit }) => (
  <Box
    component="form"
    sx={{
      mt: 1,
    }}
    onSubmit={handleSubmit}
    data-testid="todo__form"
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
      inputProps={{
        "data-testid": "todo__item",
      }}
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 1, mb: 2 }}
      data-testid="todo__add"
    >
      ADD
    </Button>
  </Box>
);

export default React.memo(TodoForm);
