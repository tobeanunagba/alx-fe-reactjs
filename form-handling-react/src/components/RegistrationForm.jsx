import React, { useState } from 'react';

const RegistrationForm = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target; // Get name and value from the event
        setFormData({
            ...formData, // Spread existing state
            [name]: value, // Update the specific field
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        const { username, email, password } = formData;

        // Basic validation
        if (!username || !email || !password) {
            setError('All fields are required!');
            return;
        }

        setError(''); // Clear any previous errors

        console.log('Form submitted:', formData);

        // Reset form after submission
        setFormData({
            username: '',
            email: '',
            password: '',
        });

        alert('Registration successful!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username} // Controlled input
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email} // Controlled input
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password} // Controlled input
                    onChange={handleChange}
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;

