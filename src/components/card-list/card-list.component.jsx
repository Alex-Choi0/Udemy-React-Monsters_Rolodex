import { Component } from "react"
import CardComponent from "../card/card.component"
import "./card-list.style.css"

class CardListComponent extends Component {
  render() {
    const { monsters } = this.props
    return (
      <div className="card-list">
        {monsters.map((ele) => {
          return (
            <CardComponent
              id={ele.id}
              name={ele.name}
              email={ele.email}
              key={ele.id}
            />
          )
        })}
      </div>
    )
  }
}

export default CardListComponent
