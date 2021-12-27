import { useEffect, useState } from "react"

let useFetch = url =>{
let [state, setstate] = useState(null)
useEffect(()=>{window.fetch(url).then(data=> data.json().then(value=>{
    setstate(value)
})).catch(err=>console.log(err))},[url])

}
export default useFetch