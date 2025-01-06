import { Pie } from 'react-chartjs-2';
const GraficaPie = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Total',
        data: [65, 59, 80, 81, 56,40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  return (
    <div className="mt-4">
      <Pie data={data} options={options} />
    </div>
  );
};
export default GraficaPie;
