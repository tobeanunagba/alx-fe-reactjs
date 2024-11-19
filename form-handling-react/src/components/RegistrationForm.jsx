import React, { useState } from 'react';

const RegistrationForm = () => {
    // State for controlled inputs
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, password } = formData;

        if (!username || !email || !password) {
            setError('All fields are required!');
            return;
        }

        setError('');
        console.log('Form submitted:', formData);

        // Reset form after submission
        setFormData({
            username: '',
            email: '',
            password: ''
        });

        alert('User registered successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username} // Correctly mapped value
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email} // Correctly mapped value
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password} // Correctly mapped value
                    onChange={handleChange}
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
