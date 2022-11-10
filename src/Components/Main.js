import React from 'react'
import { useState, useEffect } from 'react'
import Slider from "react-slick";
import Card from './Card';
import "./main.css";


const Main = ({ data }) => {
  //declare state
  const [op, setOp] = useState("");
  
  
  //Nxt arrwBtn
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: '450px', right: '60px' }}
        onClick={onClick}
      />
    );
  }


  //Prev arrwBtn
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: '450px', left: '1300px' }}
        onClick={onClick}
      />
    );
  }


  //Carsoual settings
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: '',
          prevArrow: '',
          dots: true
        }
      }
    ]
  };

  return (
    <>
      <div className='main'>

{/* filtering */}
        <div className='options'>

          <button onClick={(e) => setOp(e.target.innerText)} className='myButton'  >SUV</button>
          <button onClick={(e) => setOp(e.target.innerText)} className='myButton' >ESTATE</button>
          <button onClick={(e) => setOp(e.target.innerText)} className='myButton'  >SEDAN</button>
          <button onClick={(e) => setOp(e.target.innerText)} className='myButton' >ALL</button>


        </div>

{/* Displying Carsoual */}
        <Slider {...settings}>
      
          {
            data.filter((val) => {
              if (op === "ALL") {
                return val;
              } else if (val.bodyType.toLowerCase().includes(op.toLowerCase())) {
                return val;
              }
            })

              .map((ele) => {
              
                return <Card key={ele.id} data={ele} />
              
              })
          }

        </Slider>
      
      </div>

    </>
  )
}

export default Main 