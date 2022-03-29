import './App.css';
import LineItem from './LineItem.js'
import { useState, useEffect } from 'react'


function App() {
  const [ item, setItem ] = useState([])
  const [thisPage, setThisPage] = useState('users')
  const buttons = document.querySelectorAll('.button')

  const API_URL = `https://jsonplaceholder.typicode.com/${thisPage}`
  

  const checkPage = (id) => {
    let selected = document.querySelector('.selected')
    if(id == selected.id)  {
      setThisPage(selected.id)
    }
  }

useEffect(() => {
  const fetchItems = async () => {
    try{
      const response = await fetch(API_URL)
      if(!response.ok) throw Error('Error')
      const listItems = await response.json()
      setItem(listItems)
    }
    catch(err){
      console.log(err)
    }
}

fetchItems()
}, [thisPage])
 
 
  buttons.forEach(item => {
    item.addEventListener('click', () => {
                buttons.forEach(items => items.classList.remove('selected'))
                item.classList.add('selected')
                checkPage(item.id)
    })})



  return (
    <div className='App'>
      <section className="container">
        <div className='button selected' id="users">users</div>
        <div className='button' id="posts" >posts</div>
        <div className='button' id="comments">comments</div>
      </section>
    
      <ul className='itemsList'>
        {item.length ? 
        <LineItem
        item={item}
        />  : 
        <p style={{ marginTop: '2rem' }}>Empty List</p>
        }
      </ul>
    </div>
  );
}

export default App;
