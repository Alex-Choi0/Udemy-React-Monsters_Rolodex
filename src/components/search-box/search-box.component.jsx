import { Component } from "react"
import "./search-box.style.css"

class SearchBoxComponent extends Component {
  render() {
    const { onSearchChange } = this.props
    return (
      <input
        className="search-box"
        type="search"
        placeholder="search monster"
        onChange={onSearchChange}
      />
    )
  }
}

export default SearchBoxComponent
