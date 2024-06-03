import Sketch from 'react-p5'
import { useEffect , useState, useRef} from 'react';
import { motion } from "framer-motion"




export default function P5sketch() {



// let spaceData;
let offset = 0;
let offset2 = 10000;
let offset3 = 20000;
let offset4 = 30000;
let offset5 = 40000;
let offset6 = 50000;
let offset7 = 60000;
let offset8 = 70000;
let inc = 0.005;
// let start = 0;  
// let weatherData;
// let exp = 0;
let posY = 50;
// let city = 'Abuja';
let input;

let canvas;

const [city, setCity ] = useState('Abuja')


const [weatherData, setWeatherData] = useState('') 

const [cityName, setCityName] = useState('')
const [canvasWidth, setCanvasWidth] = useState('')
const [canvasHieght, setcanvasHieght] = useState('')



// const currentCity = useRef(city)

// let canvasWidth
// let canvsHieght




useEffect(() => {



  // currentCity.current = city
  getWeather();

},[])




// useEffect(() => {
//   // getWeather()
// ,[]})

// let weatherData;



 


const handleSubmit = () =>{

  fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
    {
      method: 'GET',
      // params: {q:'53.1,-0.13'},
      headers: {
        'X-RapidAPI-Key': '38d887750fmsh783ef2f106d2ff3p16921djsne89b91a66431',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    }
  ).then(response => response.json())
  .then(response => setWeatherData(response));

  setCityName(city)
  

  // getWeather(city)



}




const handleChange = (e) =>{

  e.preventDefault()

  setCity(e.target.value)

}


// const handleChange = (e) =>{
//   e.preventDefault()
//   setCity(e.target.value)
//   // console.log(city)
// }

const getWeather = async() => {

  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
    {
      method: 'GET',
      // params: {q:'53.1,-0.13'},
      headers: {
        'X-RapidAPI-Key': '38d887750fmsh783ef2f106d2ff3p16921djsne89b91a66431',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    }
  )

 const data = await response.json()

 setWeatherData(data)

  //  weatherData = data

  //  console.log(data)

  //  return weatherData

}



const submitRef = useRef()

function setup(p5) {

    const p5Cointainer = document.getElementById('p5-container')


    canvas = p5.createCanvas(p5Cointainer.offsetWidth, p5Cointainer.offsetHeight);
    // canvas.position(0, 500);
    canvas.style('z-index', '1');
    // canvas.style('position', '');
    canvas.style('border', '4px bold')
    canvas.style('border-radius', '20px')

    canvas.parent(p5Cointainer)

    



    // const changeColor = () =>{
    p5.fill(31,113,69);
        
    // }

 

    // let input = p5.select('#default-search');

    // console.log(input)


    // let button = p5.select('#submit');
    // button.mousePressed(getWeather);

  


   

      
   


}


// function windowResized(p5) {
//   console.log('resized')
//   p5.resizeCanvas()
// }





// use

//fetch data from the API
// const data = fetch('http://api.open-notify.org/astros.json');
// data.then(res => res.json())  
// .then(data => console.log(data));




function draw(p5) {


  // p5.background(0, 1);

  
  p5.background(0);
  if (weatherData) {
    // randomSeed(2);s
    // console.log(weatherData);

     let x1 = p5.map(p5.noise(offset),0,1,0,p5.width);
     let y1 = p5.map(p5.noise(offset2),0,1,0,p5.height);
      let x2 = p5.map(p5.noise(offset3),0,1,0,p5.width);
      let y2 = p5.map(p5.noise(offset4),0,1,0,p5.height);
      let x3 = p5.map(p5.noise(offset5),0,1,0,p5.width);
      let y3 = p5.map(p5.noise(offset6),0,1,0,p5.height);
      let x4 = p5.map(p5.noise(offset7),0,1,0,p5.width);
      let y4 = p5.map(p5.noise(offset8),0,1,0,p5.height);

   

    // x1 = noise(0, width);
    // y1 = noise(0, height);
    // x2 = noise(0, width);
    // y2 = noise(0, height);
    // x3 = noise(0, width);
    // y3 = noise(0, height);

    const temp = weatherData.current.temp_c;
    const humidity = weatherData.current.humidity;
    const feelsLike = weatherData.current.feelslike_c;
    const wind = weatherData.current.wind_kph;

    offset += inc * temp * 0.01;
    offset2 += inc * temp * 0.01;
    offset3 += inc * humidity * 0.01;
    offset4 += inc * humidity * 0.01;
    offset5 += inc * feelsLike * 0.0;
    offset6 += inc * feelsLike * 0.01;
    offset7 += inc * wind * 0.01;
    offset8 += inc * wind * 0.01;

    p5.textSize(20);
    p5.text(city, 10, 30);

    // let posX = 50;
  

    

      // fill(random(255), random(255), random(255));
      p5.ellipse(x1, y1, temp * 2, temp * 2);
      p5.text(`temperature [${[temp]}C]`, x1, y1 - 50);


      // fill(random(255), random(255), random(255));
      p5.ellipse(x2, y2, humidity* 2, humidity * 2);
      p5.text(`humidity [${humidity}]`, x2, y2 - posY);


      // fill(random(255), random(255), random(255));
      p5.ellipse(x3, y3, feelsLike * 2, feelsLike * 2);
      p5.text(`feels Like [${[feelsLike]}C]`, x3, y3 - 50);

      p5.ellipse(x4, y4, wind * 2, wind * 2);
      p5.text(`wind [${[wind]}kph]`, x4, y4 - 30);
    }

    // exp += sin(Math.PI);
  }

  return (

    <motion.div className="p-5 journalCard flex flex-col justify-left w-[50%] h-[50vh] text-white hover:cursor-pointer border-4 border-black rounded-lg bg-secondary mt-5"  >
   
   {/* <div className=' '> */}
             
             <div className="max-w-md mx-auto w-[100%] ml-0 m-5 text-white top-0" >   
                 <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">City</label>
                 <div className="relative">
                     <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                         </svg>
                     </div>
                     <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-black border-4 border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abuja, Lagos..." required  onChange={handleChange} />
                     <button type="submit"  className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit} >Search</button>
                 </div>
             </div>
     
             <div  id="p5-container"  className="w-[100%] h-[100%]">
                 <Sketch setup={setup} draw={draw} />
     
             </div>
     
             {/* </div> */}
  
    </motion.div>)

       
 
}



