import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Post = () => {

    const params = useParams();

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/posts/" + params.id)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return ( data ?
        <>
            <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    {/* Post id: {params.id} */}
                                    <h3>{data.title}</h3>
                                </div>
                                <div className="card-body">
                                    {data.body}
                                </div>
                            </div>
            </div>
        </>
    :<></>

    )
    
};

export default Post;

