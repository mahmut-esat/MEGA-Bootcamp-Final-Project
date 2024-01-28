import React, { useState, useEffect } from "react";
import { details } from "../data";
import { Link, useNavigate, useParams } from "react-router-dom";

function SubCategoryPage() {
  const [list, setList] = useState(details);

  const { category } = useParams();
  // console.log(category)

  const navigate = useNavigate()

  useEffect(() => {
    const filteredList = details.filter(
      (item) => item.sub_category_name === category
    );

    setList(filteredList)

  }, []);

  return (
    <div className="container my-3">
      <div>
        <h1 className=" text-center fs-2 fw-bold" style={{ color: "#8aca38" }}>
          Meram'da  {list[0].sub_category}
        </h1>
        <div className="d-flex justify-content-center my-2" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-light  btn-sm text-secondary mx-1 weight-bold fw-bold" >
            <a href="https://www.meram.bel.tr/" className="text-secondary link-offset-2 link-underline link-underline-opacity-0">
              Anasayfa
            </a>
          </button>
          <button type="button" className="btn btn-light  btn-sm text-secondary mx-1 weight-bold fw-bold" onClick={() => navigate("/")}>Meramda Gezilecek Yerler</button>
        </div>
      </div>

      <div className="row m-2">
        {list.map((item) => (
          <div className="col-sm-6 col-xl-4 mb-3 mb-sm-0 my-1">
            <div className="card m-1 shadow-sm rounded">
              <Link to={`${item.path}`}
                className="link-offset-2 link-underline link-underline-opacity-0 text-center align-items-center"
              >
                <img
                  src={item.cover_image}
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
    </div>
  );
}

export default SubCategoryPage;
