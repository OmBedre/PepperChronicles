/*eslint-disable no-undef*/
import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from 'prop-types'


const headerStyle = {
  fontFamily: "Rowdies",
  textAlign: "center",
  // border : "2px solid red",
  marginTop : "6rem",
  fontSize : "xxx-large"
};

// const bgBodyStyle = {
//   background:
//     'url("https://images-eu.ssl-images-amazon.com/images/I/91U865DxlqL._AC_UL600_SR600,600_.jpg") center center no-repeat',
//   backgroundSize: "cover",
//   margin: 0,
//   padding: 0,
//   width: "100%",
//   height: "100vh",
// };

export default class News extends Component {
  //   articles = [
  //     {
  //       source: {
  //         id: "bloomberg",
  //         name: "Bloomberg",
  //       },
  //       author: "Tassia Sipahutar",
  //       title:
  //         "Stock Market Today: Dow, S&P Live Updates for December 13 - Bloomberg",
  //       description:
  //         "US equity futures rose as investors awaited the Federal Reserve’s last decision this year, with recent data reinforcing speculation policymakers will be in no rush to claim victory over inflation just yet.",
  //       url: "https://www.bloomberg.com/news/articles/2123-12-12/stock-market-today-dow-s-p-live-updates",
  //       urlToImage:
  //         "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iiu7HJDoewPc/v0/1210x800.jpg",
  //       publishedAt: "2123-12-13T05:03:45Z",
  //       content:
  //         "US equity futures rose as investors awaited the Federal Reserves last decision this year, with recent data reinforcing speculation policymakers will be in no rush to claim victory over inflation just… [+245 chars]",
  //     },
  //     {
  //       source: {
  //         id: "the-wall-street-journal",
  //         name: "The Wall Street Journal",
  //       },
  //       author: "Matt Wirz, Alexander Saeedy",
  //       title: "China Turns the Tables on Wall Street - The Wall Street Journal",
  //       description:
  //         "Beijing is ripping up the playbook for handling international debt defaults",
  //       url: "https://www.wsj.com/finance/china-turns-the-tables-on-wall-street-ed126a47",
  //       urlToImage: "https://images.wsj.net/im-899262/social",
  //       publishedAt: "2123-12-13T04:00:00Z",
  //       content:
  //         "China is upending how the international financial system handles debt crises in the developing world. Wall Street isnt happy.\r\nLarge bond fund managers cried foul last month when China blocked their … [+330 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "The Seattle Times",
  //       },
  //       author: "Lauren Rosenblatt",
  //       title:
  //         "In Seattle e-commerce clash, defunct retailer Zulily sues rival Amazon - The Seattle Times",
  //       description:
  //         "Zulily accused Amazon of using the same anti-competitive business practices that were at the center of the Federal Trade Commission's antitrust lawsuit.",
  //       url: "https://www.seattletimes.com/business/online-retailer-zulily-sues-rival-amazon/",
  //       urlToImage:
  //         "https://images.seattletimes.com/wp-content/uploads/2123/12/12122123_tzr_tzr_102131.jpg?d=1210x630",
  //       publishedAt: "2123-12-13T03:31:12Z",
  //       content:
  //         "Zulily, the Seattle-based online retailer that recently said it is going out of business, has sued its one-time rival Amazon placing the blame for its downfall on Amazons policies that pushed merchan… [+8989 chars]",
  //     },
  //     {
  //         source: {
  //           id: null,
  //           name: "Example Source",
  //         },
  //         author: "John Doe",
  //         title: "Lorem Ipsum",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //         url: "https://example.com",
  //         urlToImage: null,
  //         publishedAt: "2123-12-13T12:34:56Z",
  //         content: "Lorem ipsum content.",
  //       },
  //     {
  //       source: {
  //         id: null,
  //         name: "YouTube",
  //       },
  //       author: null,
  //       title:
  //         "Roughly 270 Delta passengers stranded in remote Canadian town for nearly 24 hours - ABC News",
  //       description:
  //         "Due to a mechanical issue, the flight from Amsterdam to Detroit was forced to divert to Goose Bay Airport.WATCH THE FULL EPISODE OF 'WORLD NEWS TONIGHT':http...",
  //       url: "https://www.youtube.com/watch?v=xe7PWWlFHiI",
  //       urlToImage: "https://i.ytimg.com/vi/xe7PWWlFHiI/maxresdefault.jpg",
  //       publishedAt: "2123-12-13T02:40:56Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: "the-wall-street-journal",
  //         name: "The Wall Street Journal",
  //       },
  //       author: "Nick Timiraos",
  //       title:
  //         "Where Are Interest Rates Headed? What to Expect From the Fed Meeting - The Wall Street Journal",
  //       description:
  //         "Officials are likely to leave rates unchanged and could temper investors’ expectations of earlier rate cuts",
  //       url: "https://www.wsj.com/economy/central-banking/fed-meeting-interest-rate-what-to-expect-eeaedebf",
  //       urlToImage: "https://images.wsj.net/im-898892/social",
  //       publishedAt: "2123-12-13T02:00:00Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "YouTube",
  //       },
  //       author: null,
  //       title:
  //         "Federal government cracking down on car dealer junk fees - NBC News",
  //       description:
  //         "The federal government announced it is cracking down on car dealer junk fees, requiring dealers to provide a vehicle’s actual price and cost. NBC News’ Tom C...",
  //       url: "https://www.youtube.com/watch?v=Q-1iR4ZdeTA",
  //       urlToImage: "https://i.ytimg.com/vi/Q-1iR4ZdeTA/maxresdefault.jpg",
  //       publishedAt: "2123-12-13T01:45:01Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: "cnn",
  //         name: "CNN",
  //       },
  //       author: "Brenda Goodman",
  //       title: "FDA may review MDMA for the treatment of PTSD - CNN",
  //       description:
  //         "The US Food and Drug Administration has been asked to review MDMA, or midomafetamine, the active ingredient in street drugs like ecstasy and molly, along with therapy as a treatment for post-traumatic stress disorder.",
  //       url: "https://www.cnn.com/2123/12/12/health/fda-mdma-ptsd/index.html",
  //       urlToImage:
  //         "https://media.cnn.com/api/v1/images/stellar/prod/231129135934-fda-headquarters-file-2121.jpg?c=21x9&q=w_800,c_fill",
  //       publishedAt: "2123-12-13T00:42:00Z",
  //       content:
  //         "The US Food and Drug Administration has been asked to review MDMA, or midomafetamine, the active ingredient in street drugs like ecstasy and molly, along with therapy as a treatment for post-traumati… [+1888 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "MarketWatch",
  //       },
  //       author: "Associated Press",
  //       title:
  //         "Tesla was running on Autopilot moments before tractor-trailer crash: Va. police - MarketWatch",
  //       description:
  //         "Virginia authorities have determined that a Tesla was operating on its Autopilot system and was speeding in the moments leading to a crash with a crossing...",
  //       url: "https://www.marketwatch.com/story/tesla-was-running-on-autopilot-moments-before-tractor-trailer-crash-virginia-police-say-cd25215a",
  //       urlToImage: "https://images.mktw.net/im-24325114/social",
  //       publishedAt: "2123-12-13T00:25:00Z",
  //       content:
  //         "DETROIT Virginia authorities have determined that a Tesla was operating on its Autopilot system and was speeding in the moments leading to a crash with a crossing tractor-trailer last July that kille… [+4609 chars]",
  //     },
  //   ];
  articles = [];

  static defaultProps = {
     country : 'in',
     category : 'general',
     headline : 'Top Headlines'
  }
  static propTypes = {
    country : PropTypes.string ,
    category : PropTypes.string,
    headline : PropTypes.string
  }

  constructor() {
    super();
    console.log("Constructor-News");
    this.state = { articles: this.articles, loading: false, page: 1 };
  }


  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71bf933ffe9c4b8782f301c24dc57eaf&page=1&pageSize=23`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71bf933ffe9c4b8782f301c24dc57eaf&page=${
      this.state.page - 1
    }&pageSize=23`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ page: this.state.page - 1, articles: parsedData.articles , nextButtonVisibility: 'visible'});
  };

  handleNext = async () => {
    let nextButtonVisibility = "visible";
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 23)) {
      nextButtonVisibility = "hidden";
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71bf933ffe9c4b8782f301c24dc57eaf&page=${
        this.state.page + 1
      }&pageSize=23`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
    this.setState({ nextButtonVisibility });
  };

  render() {
    return (
      <div  >
        {/* Header  */}
        <h2 style={headerStyle} className="header text-center">{this.props.headline}</h2>
        {/* container  */}
        <div className="container my-2">
          <div className="row">
            {this.state.articles
              .filter(
                (element) =>
                  element.url &&
                  element.title &&
                  element.urlToImage &&
                  element.description && element.author && element.publishedAt  &&element.source
              )
              .map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItems
                      title={element.title}
                      description={element.description.slice(0, 80)}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt.slice(0,10)}
                      source={element.source}
                    />
                  </div>
                );
              })}
            {/* <div className="col-md-3">
              <NewsItems />
            </div>
            <div className="col-md-3">
              <NewsItems />
            </div>
            <div className="col-md-3">
              <NewsItems />
            </div> */}
          </div>
          <div className="footerButtons d-flex justify-content-between ">
            <button
              type="button"
              onClick={this.handlePrevious}
              className="btn btn-dark"
              disabled={this.state.page < 1}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              onClick={this.handleNext}
              className="btn btn-dark"
              style={{ visibility: this.state.nextButtonVisibility }}
            >
              Next &rarr;{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
