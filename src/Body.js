import React, {useEffect,useState} from 'react'
import axios from 'axios'
import  'bootstrap/dist/css/bootstrap.min.css';
import './Body.css'

function Body(){

    const[items,setitems]=useState([])

    useEffect(()=>{
        axios.get('https://themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res=>{
            console.log(res.data)

            setitems(res.data.meals)

        }).catch(err=>{
            console.log(err)
        })
    },[])


        const itemslist=items.map((obj)=>{
            return <div className='col-md-4' key={obj.idMeal}> 
        <p>{obj.strMeal}</p>
        <img src={obj.strMealThumb} className='img-fluid'/>
        <p>{obj.idMeal}</p>
            </div>
        })



    return (
    <div>

        <div className='row'>
        {itemslist}
        </div>

    </div>
    )
}
export default Body