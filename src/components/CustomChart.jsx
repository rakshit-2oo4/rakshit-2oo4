import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define X and Y axis
const xLabels = Array.from({ length: 16 }, (_, i) => i * 2); // 0 to 18 by 2
const yLabels = ['C++/Java', 'HTML/CSS', 'JavaScript', 'SQL', 'MERN', 'TypeScript/Next.JS', 'AI/ML'];

// Map Y labels to numeric values for Chart.js
const yMap = { " ": 0, "C++/Java": 1, "HTML/CSS": 2, "JavaScript": 3, "SQL": 4, "MERN": 5, "TypeScript/Next.JS": 6, };

// Create a slope (not linear) — like a curve increasing in both X and Y
const dataPoints = [
  { x: 0, y: yMap[' '] },
  { x: 6, y: yMap['C++/Java'] + 0.3 },
  { x: 8, y: yMap['HTML/CSS'] },
  { x: 10, y: yMap['JavaScript'] + 0.5 },
  { x: 12, y: yMap['SQL'] },
  { x: 18, y: yMap['MERN'] + 0.6 },
  { x: 20, y: yMap['TypeScript/Next.JS'] },
];

const data = {
  labels: xLabels,
  datasets: [
    {
      label: 'Slope',
      data: dataPoints,
      fill: false,
      borderColor: 'white',
      backgroundColor: 'white',
      tension: 0.6, // for curved line
      showLine: true,
    },
  ],
};

// Function to get responsive options based on screen size
const getResponsiveOptions = () => {
  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth < 1024;

  return {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: isMobile ? 1 : isTablet ? 1.5 : 2,
    hover: {
      mode: 'nearest',
      intersect: false,
    },
    elements: {
      point: {
        radius: isMobile ? 3 : 5,
        hoverRadius: isMobile ? 6 : 10,
        backgroundColor: 'white',
        hoverBackgroundColor: '#b0b0b0',
        borderColor: 'white',
        hoverBorderColor: '#000',
      },
      line: {
        borderWidth: isMobile ? 1.5 : 2,
      },
    },
    plugins: {
      legend: {
        display: !isMobile,
      },
      tooltip: {
        callbacks: {
          title: () => 'Skill Progress',
          label: function (context) {
            const yValue = context.parsed.y;
            const xValue = context.parsed.x;

            // Find skill name from yMap
            const label = Object.entries(yMap).find(([, num]) => Math.floor(yValue) === num)?.[0] ?? yValue;

            return `Skill: ${label}\nTime: ${xValue} months`;
          },
        },
        backgroundColor: '#222',
        titleColor: '#fff',
        bodyColor: '#eee',
        borderColor: 'white',
        borderWidth: 1,
        cornerRadius: 8,
        padding: isMobile ? 6 : 10,
        titleFont: {
          size: isMobile ? 12 : 14,
        },
        bodyFont: {
          size: isMobile ? 10 : 12,
        },
      },
    },
    scales: {
      x: {
        type: 'linear',
        min: 0,
        max: 20,
        title: {
          display: !isMobile,
          text: 'X Axis (0 to 24) months',
          font: {
            size: isTablet ? 12 : 14,
          },
        },
        ticks: {
          stepSize: 2,
          callback: (value) => `${value}`,
          font: {
            size: isMobile ? 10 : 12,
          },
        },
        grid: {
          display: !isMobile,
        },
      },
      y: {
        type: 'linear',
        min: 0,
        max: 7,
        ticks: {
          stepSize: 1,
          callback: (value) => {
            const label = Object.entries(yMap).find(([, num]) => num === value)?.[0] ?? '';
            return isMobile && label.length > 8 ? label.substring(0, 8) + '...' : label;
          },
          font: {
            size: isMobile ? 9 : 11,
          },
        },
        title: {
          display: !isMobile,
          text: 'Y Axis (C++/Java to Ai)',
          font: {
            size: isTablet ? 12 : 14,
          },
        },
        grid: {
          display: !isMobile,
        },
      },
    },
    layout: {
      padding: {
        top: isMobile ? 10 : 20,
        right: isMobile ? 10 : 20,
        bottom: isMobile ? 10 : 20,
        left: isMobile ? 10 : 20,
      },
    },
  };
};

export default function CustomChart() {
  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] p-2 sm:p-4">
      <Line data={data} options={getResponsiveOptions()} />
    </div>
  );
}