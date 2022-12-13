import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Searchbar = () => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.tags.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
        <Button className="search__button" variant="contained">
          FILTER
        </Button>
      </form>
    </header>
  );
};

export default Searchbar;
