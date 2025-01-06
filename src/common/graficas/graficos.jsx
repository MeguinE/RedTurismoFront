import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const Graficos = () => {
    const [dataApi, setDataApi] = useState(null); // Estado para almacenar los datos de la API

    useEffect(() => {
        // Obtener el token almacenado en localStorage
        const token = localStorage.getItem('token');
        
        // Si no hay token, redirigir al login
        if (!token) {
            window.location.href = '/';  // Redirigir a la página de login si no hay token
            return;
        }

        // Función para obtener los datos desde la API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/dashboard', {
                    headers: {
                        Authorization: `Bearer ${token}`  // Incluir el token en los headers de la solicitud
                    }
                });
                setDataApi(response.data);  // Guardar los datos en el estado
            } catch (error) {
                console.error("Error al obtener los datos: ", error);
            }
        };

        fetchData();  // Llamar a la función para obtener los datos cuando el componente se monta
    }, []);

    if (!dataApi) {
        return <div>Loading...</div>; // Cargar los datos antes de renderizar el gráfico
    }

    // Si hay ingresos mensuales, configurar los datos para el gráfico
    const data = {
        labels: dataApi.labels,  // Esto debe tener los meses, por ejemplo ['Enero', 'Febrero', 'Marzo', ...]
        datasets: [
            {
                label: 'Ingresos por Membresías',
                data: dataApi.ingresosMensuales,  // Esto debe tener los ingresos correspondientes de cada mes
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
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
            <Line data={data} options={options} />
        </div>
    );
};

export default Graficos;
