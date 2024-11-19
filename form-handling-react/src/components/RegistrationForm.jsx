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

        if (!username || !email || !password) {
    setError('All fields are required!');
    return;
}
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


