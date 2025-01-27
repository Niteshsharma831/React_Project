import { useState } from 'react';

function StudFrom() {
  const [values, setValues] = useState({
    userName: '',
    pwd: '',
    Fname: '',
    address: '',
    dob: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});

  function handleInput(e) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function validateForm() {
    const newErrors = {};
    if (!values.userName) newErrors.userName = 'Username is required.';
    if (!values.pwd) newErrors.pwd = 'Password is required.';
    if (!values.Fname) newErrors.Fname = 'Full Name is required.';
    if (!values.gender) newErrors.gender = 'Gender is required.';
    if (!values.dob) newErrors.dob = 'Date of Birth is required.';
    if (!values.address) newErrors.address = 'Address is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully', values);
    }
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      id="MainCon"
    >
      <div className="container max-w-lg p-6 bg-white border rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-center under-line">
          Student Registration Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="userName"
                className="block mb-2 text-lg font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter your username"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInput}
              />
              {errors.userName && (
                <p className="mt-1 text-sm text-red-500">{errors.userName}</p>
              )}
            </div>
            <div>
              <label htmlFor="pwd" className="block mb-2 text-lg font-medium">
                Password
              </label>
              <input
                type="password"
                id="pwd"
                name="pwd"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInput}
              />
              {errors.pwd && (
                <p className="mt-1 text-sm text-red-500">{errors.pwd}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <label htmlFor="Fname" className="block mb-2 text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="Fname"
                name="Fname"
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInput}
              />
              {errors.Fname && (
                <p className="mt-1 text-sm text-red-500">{errors.Fname}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block mb-2 text-lg font-medium"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInput}
              >
                <option value="">Choose Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="dob" className="text-lg font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleInput}
            />
            {errors.dob && (
              <p className="mt-1 text-sm text-red-500">{errors.dob}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="text-lg font-medium">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleInput}
            ></textarea>
            {errors.address && (
              <p className="mt-1 text-sm text-red-500">{errors.address}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudFrom;
