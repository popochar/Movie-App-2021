import React from 'react';

function Food({ name, picture }) {
  //console.log(props);
  return (
    <div>
       <h2>I like {name}</h2>
       <img src={picture}></img> 
    </div>
  
  );
}

const foodLike = [
  {
    name : 'Apple',
    image : 'https://lh3.googleusercontent.com/proxy/A_EOBWcRjEr_oe7PFiBOJs1aqs5ag1-oB_ev3zD5_tO1gfpQ8U6AZ_NO1s6KLohvoUEnd7JuZ-bXn-Gs4mx1aBYTxG_M-LWZKx04DEbDLI1lzOOo'
  },
  {
    name : 'banana',
    image : 'https://lh3.googleusercontent.com/proxy/x7GxUxM9-BacgviEtL31Wk-f8h36eO7-pBrqrZ4nPTSXDuvh3QWTazGXQRmqhGNIAZ1AklV0X4OfA2XlI2dbnfXrvzmBXXm4UK1RfBaUaomxuev5QjHQb1wsoyZ33mk12jQN6IDQFoa9SGZsI1LgY3pPWs0'
  },
  {
    name : 'lemon',
    image : 'https://lh3.googleusercontent.com/proxy/CSmhW2CxxAY9naU_avf_T1VJ1ud7KnlhH8atSox13VX8SpZbrCoF7EANbJuMzsKhkWw5sM20FHrQ-qjdjf8uzRQMi23givAprGlVVtLgihjcCG18O-Z_fz8Cr45jgZGs_f0Ky4JGlzeN'
  }
];


function App() {
  return (
    <div>
      <h1>Hello</h1>
      {
        foodLike.map(dish =>
          (
            <Food name={dish.name} picture={dish.image}></Food>
          )


        )


      }
    </div>   
  );
}

export default App;
