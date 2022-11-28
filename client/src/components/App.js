import React, { useEffect, useState } from "react"
import Header from "./Header"
import GodsPage from "./GodsPage"
import CreateGod from "./CreateGod"
import Home from "./Home"
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"

function App(){
  
  const [godsList, setGodsList] = useState([])
  const [search, setSearch] = useState("")

  function searchChange(newSearch){
      setSearch(newSearch)
  }

  const filteredGods = godsList.filter((god) => god.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch("/gods")
      .then(res => res.json())
      .then(godsList => setGodsList(godsList))
  }, [])


  function handleAddGod(newGod){
    const updatedGods= [...godsList, newGod]
    setGodsList(updatedGods)
  }

  function handleDelete(deletedGod){
    const updatedGods = godsList.filter((god) => god.id !== deletedGod.id)
    setGodsList(updatedGods)
}

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gods/new">
          <CreateGod handleAddGod={handleAddGod} />
        </Route>
        <Route path="/godslist">
          <Header search={search} searchChange={searchChange} />
          <GodsPage handleDelete={handleDelete} filteredGods={filteredGods} />  
        </Route>
      </Switch>
    </div>
  )

}




export default App; 