import { Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { TodoForm } from "../../components/TodoForm";
import { TodoList } from "../../components/TodoList";
import { useHome } from "./useHome";

const Home = () => {
  const { list, handleSubmit, handleDelete } = useHome();

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          TODO List
        </Typography>
        <TodoForm handleSubmit={handleSubmit} />

        <Divider />
        <TodoList list={list} handleDelete={handleDelete} />
      </Box>
    </Container>
  );
};

export default Home;
