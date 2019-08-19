import React from "react";

class SearchBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label>Image Search</label>
          <input type="text" placeholder="Car" className="field" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
