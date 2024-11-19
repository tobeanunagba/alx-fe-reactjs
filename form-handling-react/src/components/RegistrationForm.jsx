import React, { useState } from 'react';

const RegistrationForm = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const validate = () => {
    let valid = true;
    const newErrors = { username: '', email: '', password: '' };

    if (!formData.username) {
        newErrors.username = 'Username is required';
        valid = false;
    }
    if (!formData.email) {
        newErrors.email = 'Email is required';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        valid = false;
    }
    if (!formData.password) {
        newErrors.password = 'Password is required';
        valid = false;
    } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
        valid = false;
    }

    setErrors(newErrors);
    return valid;
};


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
              <input type="text" name="username" value={username} onChange={handleChange} />
<input type="email" name="email" value={email} onChange={handleChange} />
<input type="password" name="password" value={password} onChange={handleChange} />
              
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;

};

export default RegistrationForm;


