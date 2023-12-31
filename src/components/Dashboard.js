import React, {useState} from 'react'
import { employeesData } from '../employeesData';
import Swal from 'sweetalert2';
import Add from './Add';
import Edit from './Edit';
import List from './List';
import Header from './Header';

const Dashboard = () => {
    const[isAdding,setIsAdding]=useState(false);
    const[isEditing,setIsEditing]=useState(false);
    const[employees,setEmployees]=useState(employeesData);
    const[selectedEmployee,setSelectedEmployee]=useState(null);

    const handleEdit=(id)=>{
        const [employee]=employees.filter(employee=>employee.id===id)
        setSelectedEmployee(employee)
        setIsEditing(true);
    }
    const handleDelete=(id)=>{
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }

  return (
    <div className='container'>
        {!isAdding && !isEditing &&(
            <>
                <Header
                setIsAdding={setIsAdding}
                />
                <List 
                employees={employees}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                />
            </>
        )}
        {isAdding &&(
            <Add 
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
            />
        )}
        {isEditing &&(
            <Edit 
            employees={employees}
            selectedEmployee={selectedEmployee}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
            />
        )}
    </div>
  )
}

export default Dashboard;