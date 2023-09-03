import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function Trends() {
  const [showImage, setShowImage] = useState(null);
  const handleButtonClick = (img) => {
    setShowImage(img); // Toggle the value of showImage
  };
  const chartOptions = {
    chart: {
      id: 'basic-line-chart',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mayy'],
    },
  };

  const chartSeries = [
    {
      name: 'Series 1',
      data: [30, 40, 35, 50, 49],
    },
  ];
  return (
    <><div className='container'>
      <h1>Trends</h1></div>
      <div className='container'>
        </div>
        <div className="container">
        <div className="row align-items-start">
          <div className="col">
          <button onClick={()=>handleButtonClick(1)}>Line Chart</button>
          
          </div>
          <div class="col">
          <button onClick={()=>handleButtonClick(2)}>Bar Chart</button>
          </div>
          <div class="col">
            <button onClick={()=>handleButtonClick(3)}>Area Chart</button>
          </div>
          <div class="col">
            <button onClick={()=>handleButtonClick(4)}>Gauge Chart</button>
          </div>
          <div class="col">
            <button onClick={()=>handleButtonClick(5)}> Speedometer Chart</button>
          </div>
        </div>        
      </div>


      <div className="container">
      
        {/* <img src= {showImage} alt="Image Description" /> */}
        
        {showImage===1 && <div className="line-chart">
      <h2>Line Chart Example</h2>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
    </div>}
        {showImage===2 && <div >
          <ReactApexChart 
            options={co} 
            series={co.series} 
            type="radialBar" height={350} />
           </div>}
        {showImage===3 && <div> 
          <ReactApexChart options={gaugeOptions} series={gaugeSeries} type="radialBar" height={350} />
        </div>
          }
          {showImage===4 && <div> 
          <ReactApexChart options={radial} series={radial.series} type="radialBar" height={350} />
        </div>
          }

        </div>


        
        </>
    
  )
}
const co = {
  chart: {
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%', // Adjust the size of the gauge
      },
      dataLabels: {
        name: {
          show: true,
          fontSize: '22px', // Customize label font size
        },
        value: {
          show: true,
          fontSize: '16px', // Customize value font size
        },
        total: {
          show: true,
          label: 'Total', // Label for the total value
        },
      },
    },
  },
  labels: ['Gauge'],
  colors: ['#FF5733'], // Customize the color of the gauge
  series: [80], // Set the value for the gauge
}

const gaugeOptions = {
  chart: {
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: '70%',
      },
      dataLabels: {
        show: true,
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            return w.globals.seriesTotals.reduce((a, b) => {
              return a + b;
            }, 0);
          },
        },
      },
    },
  },
  labels: ['Progress'],
};

const gaugeSeries = [70];

 const maxLimit=85;
const radial={
chart: {
  height: 280,
  type: "radialBar",
},

series: [85],
colors: ["#20E647"],
plotOptions: {
  radialBar: {
    hollow: {
      margin: 0,
      size: "70%",
      background: "#293450"
    },
    track: {
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        blur: 4,
        opacity: 0.15
      }
    },
    dataLabels: {
      name: {
        offsetY: -10,
        color: "#fff",
        fontSize: "13px"
      },
      value: {
        color: "#fff",
        fontSize: "30px",
        show: true
      }
    }
  }
},
fill: {
  type: "gradient",
  gradient: {
    shade: "dark",
    type: "vertical",
    gradientToColors: ["#87D4F9"],
    stops: [0, 90]
  }
},
stroke: {
  lineCap: "round"
},
labels: ["Flow Meter"]
};

export default Trends
