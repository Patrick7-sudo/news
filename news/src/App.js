
import Header from './components/header/Header.js';
import style from './App.module.css';
import {useState,useEffect} from "react";
import Body from './components/Body/body.js';
import logo from '../src/components/header/Lightmode Logo.svg'

function App() {
  const[width,setWidth]=useState("");
  const[height, setHeight] = useState("")
  const [lightMode, setLightMode] = useState(false);
  const [data,setData] =useState("")
// console.log(data)
  function modeSwitch() {
    if (lightMode) {
      setLightMode(false);
    } else {
      setLightMode(true);
    }
  }

  useEffect(()=>{
    function widthDynamic(){
      setWidth(window.innerWidth);
      window.addEventListener("resize",widthDynamic);
    }

    widthDynamic()

  },[width])

   useEffect(() => {
     function heightDynamic() {
       setHeight(window.innerHeight);
       window.addEventListener("resize", heightDynamic);
     }

     heightDynamic();
   }, [height]);

   useEffect(() => {
     async function fetchNews() {
       const response = await fetch(process.env.REACT_APP_API_URL);
       const data = await response.json();

       // console.log(data.results);
       const dataArray = data.results;
       const Filtered = dataArray.filter((input) => {
         if (input.image_url !== null) {
           return input;
         }
         return input
       });

       setData(Filtered)
     }
     fetchNews();
   }, []);
   console.log(data)
  return (
    <div
      className="App"
      style={{
        width: `${width}px`,
        backgroundColor: `${lightMode ? "#3F4E4F" : "white"}`,
      }}
      data-testid="AppMainContainer"
    >
      <header className={style.headerContianer}>
        {data ? (
          <>
            <Header modeSwitch={modeSwitch} lightMode={lightMode} />
            <Body modeSwitch={modeSwitch} lightMode={lightMode} dataNews={data}/>
          </>
        ) : (
          <div className={style.loadingPage} style={{height:`${height}px`}}>
          
            <img src={logo} alt="newsRelated"></img>
            <h1>Loading ...</h1>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
