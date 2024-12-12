import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import EditForm from '../components/EditForm';
import StudentForm from '../components/StudentForm';
import StudentService from '../services/StudentService';
import Counter from '../components/Counter';

const Main = () => {
    const [students, setStudents] = useState([]);
    const [refresh, setRefresh] = useState(true);

    const updateList = () => {
        setRefresh(!refresh);
    };

    useEffect(() => {
        // http://localhost:8080/api/students
        StudentService.getStudents()
            .then(res => {
                setStudents(res.data);
            })
            .catch(err => console.log(err.response));
        // Alternative:
        /*
        axios.get("http://localhost:8080/api/students",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        */
    }, [refresh]);


    const filterList = (id) => {
        const filterStudent = students.filter((eachStu, i) => eachStu.id != id);
        setStudents(filterStudent);
    };

    return (
        <div className='container mt-5'>
            <Counter />
            <Dashboard students={students} onUpdate={updateList} />
            <StudentForm onCreate={updateList} />
        </div>
    );
};

export default Main;