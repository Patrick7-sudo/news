import Style from "./body.module.css"
import {data} from "../../data.js"
import {useState,useEffect} from "react";
import Favbuttons from "./favButtons/favButtons";
import NewsItem from "./NewsItem/index.js";
import logoImg from "../header/Lightmode Logo.svg"

function Body({ modeSwitch, lightMode,dataNews }) {
  const [dataVar, setDataVar] = useState(data);
  const [img, setImg] = useState("");
  const [des, setDes] = useState("");
  const [article, setArticle] = useState("");
  const [dataHist,setDataHist] = useState("");

  const updateData="hello";



  useEffect(() => {
    setDataVar(dataNews);
   
  }, [dataVar,dataNews]);

   useEffect(() => {

    if (dataVar[0].image_url === null) {
      setImg(logoImg);
    }else{
      setImg(dataVar[0].image_url);
    }
     
     setDes(dataVar[0].title);
     setArticle(dataVar[0].description);


   }, [dataVar,dataNews]);




   useEffect(() => {
     async function fetchNews() {
       const response = await fetch(process.env.REACT_APP_API_NEWS);
       const data = await response.json();
      console.log(data)
       setDataHist(data.articles)
   
     }
     fetchNews();
   }, [updateData]);


  return (
    <>
      {dataVar && dataHist ? (
        <div className={Style.mainContainer} data-testid="mainContainerBody">
          <h3 style={{ color: `${lightMode ? "white" : "black"}` }}>
            Breaking News
          </h3>
          {/* main Story Container */}
          <div
            className={Style.fullStoryContainer}
            data-testid="fullStoryContainerBody"
          >
            {/* Left main Container with picture and title */}
            <div
              className={Style.fullStoryRightContainer}
              data-testid="fullStoryLeftContainerBody"
            >
              <img src={img} alt="news related"></img>
              <p style={{ color: `${lightMode ? "white" : "black"}` }}>{des}</p>
            </div>
            {/* end of Left main Container with picture and title */}

            {/* Right main Container for desc,fav and link to article */}
            <div
              className={Style.fullStoryLeftContainer}
              data-testid="fullStoryRightContainerBody"
            >
              <p style={{ color: `${lightMode ? "white" : "black"}` }}>
                {article}
              </p>
              <div
                className={Style.fullStoryLeftInternalContainer}
                data-testid="fullStoryInnerContainerBody"
              >
                <Favbuttons />
                <a
                  href="/"
                  className={Style.infoContainerlinkStyle}
                  style={{
                    color: `${lightMode ? "white" : "red"}`,
                    textDecorationColor: `${lightMode ? "white" : "black"}`,
                  }}
                >
                  Link to Article
                </a>
              </div>
            </div>
            {/* Right main Container for desc,fav and link to article */}
          </div>
          {/* carousel section */}

          <h3 style={{ color: `${lightMode ? "white" : "black"}` }}>
            Top News
          </h3>
          <div className={Style.Carousel}>
            <div className={Style.CarouselInner}>
              {dataHist.map((news) => {
                return (
                  <div>
                    <NewsItem
                      title={news.title}
                      url={news.image}
                      description={news.description}
                      link={news.url}
                      lightMode={lightMode}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* End of carousel section */}
          <h3 style={{ color: `${lightMode ? "white" : "black"}` }}>
            WorldWide News
          </h3>
          <div className={Style.HistoricalNews}>
            {dataHist.map((news) => {
              return (
                <NewsItem
                  title={news.title}
                  url={news.image}
                  description={news.description}
                  link={news.url}
                  lightMode={lightMode}
                />
              );
            })}
          </div>
          {/* end of main Story Container */}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

export default Body;