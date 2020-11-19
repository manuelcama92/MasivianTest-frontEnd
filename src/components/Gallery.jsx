import axios from "axios";
import React, {Component} from 'react'
import Swal from "sweetalert2";
import './Gallery.scss';
class Gallery extends Component { 
  constructor(props){
    super(props)
    this.state = {
      comic: {},
      loading: false,
      error: null,
      rating: 0,
      maxRating: 5
        }    
  this.componentRating = this.componentRating.bind(this);   
    }
    
    
  componentDidMount(){ 
    this.fetchComicxkcd();
  }

  fetchComicxkcd = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url1 = "https://xkcd.com"; // site that doesn’t send Access-Control-*

    const random = Math.floor(Math.random() * 100) + 1;
    const url = `${url1}/${random}/info.0.json`;
    this.setState({ loading: true });
    const data = await axios(proxyurl+url)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        this.setState({ loading: false, error: error });
      });
    this.setState({ comic: data, loading: false });
  };

  handleRating = e => {
    e.preventDefault();
    if (e.target.control === undefined) return;
    const value = e.target.control.value;
    this.setState({ rating: parseInt(value) });
    const stars = this.renderStars(value);
    Swal.fire({
      icon: "success",
      title: "Thanks for voting!",
      html: `<div>${stars}</div>`
    });
  };

  renderStars = num => {
    let i = 0;
    let value = "";
    while (i < num) {
      value = value.concat("&#x2B50;");
      i++;
    }
    return value;
  };

  componentRating = indice => (
    <React.Fragment key={indice}>
      <input
        type="checkbox"
        id={`star${indice}`}
        name="rate"
        value={indice}
        className={this.state.rating >= indice ? "checked" : ""}
      />
      <label htmlFor={`star${indice}`} title="text">
        {indice} 
      </label>
    </React.Fragment>
  );

  renderRating = () => {
    const { maxRating } = this.state;
    const array = [];
    let i = 1;
    while (i <= maxRating) {
      array.push(this.componentRating(i));
      i++;
    }
    return array.reverse();
  };

  render() {
    const { comic } = this.state;
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 mx-auto">
            <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
              <h1 className="mb-2">{comic.title}</h1>
              <figure>
                <img src={comic.img} alt={comic.alt} />
              </figure>
              <div className="d-flex  flex-column justify-content-center align-items-center">
                <h4>Votes here for this comic</h4>
                <div className="rate" onClick={this.handleRating}>
                  {this.renderRating()}
                </div>
                <p>(click on a star)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;