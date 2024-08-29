import {useEffect, useState} from "react";

function Card(){
    const [list,setList] = useState([])
    const [isClick,setIsClick] = useState(false)
    // function handleCLick(){
    //     setIsClick(!isClick)
    // }
    useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>  setList(json))
    }, []);
    console.log(list)
    return(
        <div className='list-product'>
            {list.map((el) => {
                return(
                    <div key={el.id} className='list-item'>
                        <img src={el.image} alt=""/>
                        <p className='title'>{el.title}</p>
                        <p className='price'>${el.price}</p>
                        <button className='btn'>
                            {isClick ? 'cancel' : 'buy now'}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Card