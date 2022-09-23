import React, { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log("From card-list componenet");
    return (
      <div>
        {" "}
        <ul>
          {monsters.map(monster => (
            <li key={monster.name}>{monster.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CardList;
