import React, {useState, useEffect} from "react"
import { View } from "./components/View";


//getting values of local sto

export const App = () => {

  //const [animes, setanime]= useState([getDatafromLS()]);

  //input field states
  const [name, setName]= useState('');
  const [description, setDescription]= useState('');
  const [released, setReleased]= useState('');
  const [episode, setEpisode]= useState('');
  const [animes, setanime] = useState([
    {
      name: "onepiece",
      description: "borj",
      released: "Payment",
      episode: "10",
    },
    {
      name: "naruto",
      description: "borj",
      released: "Payment",
      episode: "10",
    },
  ]);


  //form submit event
 
  const addAnime = () => {
    const newanime = {
      name: name,
      description: description,
      released: released,
      episode: episode,
    };

    setanime((prev) => [...prev, newanime]);
   
  };

  //delete from LS
  const deleteAnime=(name)=>{
    const filteredAnime=animes.filter((element,index)=>{
      return element.name !== name
    })
    setanime(filteredAnime);
  }

  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('animes', JSON.stringify(animes));
  },[animes])

  return(
    <div className="wrapper">
      <div className="main">
        <div className="form-container">
          <form autoComplete="off" className="form-group"
          onSubmit={addAnime}>
            <label> Name</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <label>Description</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setDescription(e.target.value)} value={description}></input>
            <label>Released</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setReleased(e.target.value)} value={released}></input>
            <label>Episode</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setEpisode(e.target.value)} value={episode}></input>
            <br></br>
            <button type="submit" className="btn btn-secondary btn-md"
             onSubmit={addAnime}>
              Add Anime
            </button>
          </form>
        </div>

        <div className="view-container">
          {animes.length>0&&<>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Released</th>
                  <th>Episode</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              
                <View animes={animes} deleteAnime={deleteAnime}/>
              </tbody>
            </table>
          </div>
          </>}
        </div>
      </div>
    </div>
  )
}

export default App;