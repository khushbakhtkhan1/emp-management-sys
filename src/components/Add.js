import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {
    const [formData,setFormData]=useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            salary:"",
            date:""
        }
    )

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email ||!formData.salary ||!formData.date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            salary: formData.salary,
            date: formData.date

        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${formData.firstName} ${formData.lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add