import React from 'react'
import { categories } from '../data';
import { Link } from 'react-router-dom';

const CategoryPage = () => {

    return (
        <div className="container my-3">
            <div>
                <h1 className=" text-center fs-2 fw-bold" style={{ color: "#8aca38" }}>
                    Meram'da Gezilecek Yerler
                </h1>
            </div>

            <div className="row m-2">
                {categories.map((item) => (
                    <div className="col-sm-6 col-xl-4 mb-3 mb-sm-0 my-1" key={item.id}>
                        <div className="card m-1 shadow-sm rounded">
                            <Link to={`${item.category_name}`}
                                className="link-offset-2 link-underline link-underline-opacity-0 text-center align-items-center"
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

                ))}
            </div>
            <div>

            </div>
        </div>
    );
};

export default CategoryPage