import '../styles/repositories.scss'
import {useState, useEffect} from 'react'
import {RepositoryItem} from './RepositoryItem'



export function RepositoryList(){

  const [repositories, setRepositories] = useState([])

  useEffect(()=>{
    fetch('https://api.github.com/users/wguilherme/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))

  },[])

  return (
    <section className="repository-list">

      <h1>Lista de repositórios</h1>

      <ul>

        {repositories.map(repository => (
        <RepositoryItem key={repository.name} repository={repository}/>
        ))}
      </ul>
    </section>
  )
}