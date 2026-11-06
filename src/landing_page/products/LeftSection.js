import React from "react";
function LeftSection({title,description,image,product1Link,product2Link, playStoreLink,appStoreLink,}) {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-1"></div>
        <div className="col-6 p-4">
          <img src={image} style={{width:"90%"}}/>
        </div>
        <div className="col-3 p-5 d-flex flex-column gap-7 ">
          <h1 className="fs-xl fg-4">{title}</h1>
          <p className="px-3 fs-md" style={{lineHeight:"2rem"}}> 
            {description}
          </p>
          <div>
            {product1Link!="" ? <a href={playStoreLink} style={{ textDecoration: "none", color: "#3274b3" ,}} className="fs-lg mx-4">
              {product1Link} <i class="fa-solid fa-arrow-right-long"></i>
            </a>: null}
            {product2Link!="" ? <a href={appStoreLink} style={{ textDecoration: "none", color: "#3274b3"  }} className="fs-lg mx-4">
              {product2Link} <i class="fa-solid fa-arrow-right-long"></i>
            </a> : null}
          </div>
          <div>
            <img src="/media/googlePlayBadge.svg" alt="googlePlayBadge" className="fs-lg mx-4"/>
            <img src="/media/appstoreBadge (2).svg" alt="appstoreBadge" className="fs-lg mx-4"/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LeftSection;
