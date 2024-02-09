import { useEffect, useState } from "react"
import "./App.css"
import CardListComponent from "./components/card-list/card-list.component"
import SearchBoxComponent from "./components/search-box/search-box.component"

const App = () => {
  const [searchFiled, setSearchFiled] = useState("")
  const [monsters, setMonsters] = useState([])

  console.log("render")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (data) => {
          setMonsters(data)
        },
        () => console.log("update monsters data")
      )
      .finally(() => console.log("fetch finish"))
  }, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchFiled(searchFieldString)
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchFiled)
  })

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBoxComponent onSearchChange={onSearchChange} />
      <CardListComponent monsters={filteredMonsters} />
    </div>
  )
}

/*
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchFiled: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log("fatch data : ", data)
        this.setState(
          (state) => {
            return {
              ...state,
              monsters: data,
            }
          },
          () => console.log("update monsters data")
        )
      })
      .finally(() => console.log("getUsers finish"))
  }

  onSearchChange = (event) => {
    const searchFiled = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchFiled }
    })
  }

  filterMonsters = () => {
    const { monsters, searchFiled } = this.state
    return monsters.filter((ele) => {
      const checkName = ele.name.toLowerCase()
      return checkName.includes(searchFiled)
    })
  }

  render() {
    const filterMonsters = this.filterMonsters()
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBoxComponent onSearchChange={this.onSearchChange} />
        <CardListComponent monsters={filterMonsters} />
      </div>
    )
  }
}
*/

export default App
