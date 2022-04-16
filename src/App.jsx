import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import logo from './logo.svg';

function App() {

  const limit = useSelector(state => state.limit)
  const page = useSelector(state => state.page)
  const out = useSelector(state => state.out)
  const dispatch = useDispatch()
  console.log(out)

  useEffect(() => {
    document.addEventListener("scroll", handlerScroll)

    dispatch({type: "SLICE"})
    console.log(out)


    return () => {
      document.removeEventListener("scroll", handlerScroll)
    }
  }, [])


  useEffect(() => {
    dispatch({type: "SLICE"})
  }, [page])



  function handlerScroll() {
    let windowHeight = document.documentElement.offsetHeight
    let clientHeight = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollTop


    if (clientHeight + scrollHeight === windowHeight) {
      dispatch({
        type: "PAGE"
      })
      alert("upload...")
    }
  }




  return (
    <div className="App">
      {limit}
      <button onClick={(e) => {
        e.preventDefault()
        let payload = +prompt("Скок?")
        dispatch({
          type: "LIMIT",
          payload: payload        
        })
      }}>change limit</button>
      <ul>
        {out.map(el => {
         return<li>
            {el.id}
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;
