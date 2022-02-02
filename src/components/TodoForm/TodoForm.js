import { Box, Button, TextField } from "@mui/material";
import React from "react";

const TodoForm = ({ handleSubmit }) => (
  <Box
    component="form"
    sx={{
      mt: 1,
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
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
      ADD
    </Button>
  </Box>
);

export default React.memo(TodoForm);
