import React, { Component } from "react";
import "./content.css";
import Image from "./Image";
import Spinner from "../spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export class Content extends Component {
  articles = [];
  constructor() {
    super();

    console.log("okkkkkkkkkk");
    this.state = {
      loading: true,
      articles: this.articles,
    };

    // console.log(articles);
  }

  async componentDidMount() {
    console.log("okk");
    let url = "http://127.0.0.1:8000/wallpaper/";
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata.length)
    setTimeout(() => {
      this.setState({
        articles: parseddata,
        loading: false,
        totalLength: parseddata.length,
      });
    }, 2000);
  }

 

  render() {
    return (
      <>
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalLength}
          loader={<Spinner />}
        >
        
        <div className="content">
          {this.state.articles.map((element) => {
            return <Image image={element.image64} />;
          })}
        </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default Content;
