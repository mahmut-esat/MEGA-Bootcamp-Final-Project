import React from 'react'
import { Link } from 'react-router-dom'

const ItemContainer = ({item}) => {
    return (
        <div className="col-sm-6 col-xl-4 mb-3 mb-sm-0 my-1">
            <div className="card m-1 shadow-sm rounded">
                <Link to={`${item.category_name}`}
                    class="link-offset-2 link-underline link-underline-opacity-0 text-center align-items-center"
                >
                    <img
                        src={item.image}
                        className="card-img-top rounded-top "
                        alt={item.title}
                    />
                    <h5 className="card-title text-secondary fw-bold mt-2">
                        {item.title}
                    </h5>
                </Link>
            </div>
        </div>
    )
}

export default ItemContainer