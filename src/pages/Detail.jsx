import React, { useState, useEffect } from "react";
import { details } from "../data";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const [list, setList] = useState(details);
  const { detail } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    const filteredList = details.filter(
      (item) => item.path === detail
    );

    setList(filteredList)
    console.log("detay", list)
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">

      <div className="container row d-flex justify-content-center align-items-center">
        <h1 className=" text-center fs-2 fw-bold" style={{ color: "#8aca38" }}>
          {list[0].title}
        </h1>
        <div className="d-flex justify-content-center my-2" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-light  btn-sm text-secondary mx-1 weight-bold fw-bold" >
            <a href="https://www.meram.bel.tr/" className="text-secondary link-offset-2 link-underline link-underline-opacity-0">
              Anasayfa
            </a>
          </button>
          <button type="button" className="btn btn-light  btn-sm text-secondary mx-1 weight-bold fw-bold" onClick={() => navigate("/")}>Meramda Gezilecek Yerler</button>
          <button type="button" className="btn btn-light  btn-sm text-secondary mx-1 weight-bold fw-bold" onClick={() => navigate(`/${list[0].sub_category_name}`)}>{list[0].sub_category}</button>
        </div>

        <div
          id="carouselExampleAutoplaying"
          className="carousel slide w-75"
          data-bs-ride="carousel"
        >


          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner carousel-fade " style={{ height: "24em", objectFit: "contain" }}>


              {list.map((item, index) =>
                <div className="h-100" >
                  <div className="carousel-item active">
                    <img src={item.image1} className="d-block w-100 " alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={item.image2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={item.image3} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={item.image4} className="d-block w-100" alt="..." />
                  </div>
                </div>
              )}

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
        <blockquote className="blockquote mt-3 mb-5">
          <p className=" " style={{ textAlign: "justify", color: "#999999" }}>{list[0].description}</p>
        </blockquote>
      </div>
    </div>
  );
}

export default Detail;
