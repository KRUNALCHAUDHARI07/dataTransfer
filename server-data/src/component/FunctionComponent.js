/* eslint-disable no-undef */
import React from 'react'

function FunctionComponent() {
    // eslint-disable-next-line no-undef
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://192.168.0.108:5000/api/members')
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result)
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div> Error : {error.message}</div>
    }
    else if (!isLoaded) {
        return <div>Loading....</div>
    }else{
        return (
            <div>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default FunctionComponent
