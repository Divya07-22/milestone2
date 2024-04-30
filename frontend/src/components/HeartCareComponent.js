import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HeartCareComponent = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        // Fetch patient data from backend when component mounts
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await axios.get('/api/patients');
            setPatients(response.data);
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    return (
        <div>
            <h1>Heart Care Patients</h1>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>
                        <strong>Name:</strong> {patient.name}, <strong>Age:</strong> {patient.age}, <strong>Condition:</strong> {patient.condition}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeartCareComponent;
