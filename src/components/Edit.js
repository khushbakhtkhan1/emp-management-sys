import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Edit=({ employees, selectedEmployee, setEmployees, setIsEditing })=>{

    const id = selectedEmployee.id;
    const [formData,setFormData]=useState(
        {
            firstName:selectedEmployee.firstName,
            lastName:selectedEmployee.lastName,
            email:selectedEmployee.email,
            salary:selectedEmployee.salary,
            date:selectedEmployee.date
        }
    )
    

    const handleUpdate = e => {
        e.preventDefault();

        if (!formData) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            salary: formData.salary,
            date: formData.date
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={e => setFormData({...formData,firstName:e.target.value})}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={e => setFormData({...formData,lastName:e.target.value})}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData,email:e.target.value})}
                />
                <label htmlFor="salary">Salary ($)</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={e => setFormData({...formData,salary:e.target.value})}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={e => setFormData({...formData,date:e.target.value})}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit