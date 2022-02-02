import React from "react";

export const useHome = () => {
  const [list, setList] = React.useState([]);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      const form = new FormData(e.target);
      setList((prev = []) => [...prev, form.get("todo__item")]);

      e.target.reset();
    },
    [setList]
  );

  const handleDelete = React.useCallback(
    (index = 0) =>
      () => {
        setList((prev = []) => prev.filter((_, i) => i !== index));
      },
    [setList]
  );

  return {
    list,
    handleSubmit,
    handleDelete,
  };
};
