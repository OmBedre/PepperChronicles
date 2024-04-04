import React, { Component } from "react";
export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date ,source} = this.props;
    // where this.props is an object ,deconstruction
    const cardStyle = {
      position: "relative",
      height: "33rem", // Set your desired fixed height
      overflow: "hidden",
    };
    const imageStyle = {
      minHeight: "12rem",
      maxHeight: "12rem", // Set your desired fixed height for the image
      objectFit: "cover", // Preserve aspect ratio and cover the container
    };
    const buttonStyle = {
      position: "absolute",
      bottom: "14px", // Adjust this value to position the button as needed
      left: "10px", // Adjust this value to position the button as needed
    };

    return (
      <div>
        <div className="card my-3 " style={cardStyle}>
          <img
            src={imageUrl}
            className="card-img-top"
            style={imageStyle}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span style={{fontStyle : "italic"}} className="position-absolute top-0 end-0 badge rounded-pill bg-danger">
   {source.name}
  </span>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author} on {date}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              style={buttonStyle}
              className="btn btn-sm btn-primary "
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
