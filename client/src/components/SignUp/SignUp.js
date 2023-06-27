import "./SignUp.css"
import { useState } from 'react'
import shopperlogo from "../../assets/images/shoppers-haven-logo.png"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"


export default function SignUp() {
  const [formData, setFormData] = useState({})
  const { signup } = useContext(AuthContext)
  let uploadedImage = "";
  

  function handleChange(e) {
    setFormData({
      ...formData, 
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    signup(formData)
  }

  const addImage = (e) => {
      const reader = new FileReader();
      const file = e.target.files[0]
      let pictureDiv = document.getElementById("picture")

      reader.onload = () => {
        uploadedImage = reader.result
        pictureDiv.style.backgroundImage = `url(${uploadedImage})`
        setFormData({...formData,
          [e.target.name] : uploadedImage
        })
      }
      if(file){
        reader.readAsDataURL(file)
      }
  }

  return (
      <div className="mt-5 shadow">
        <div className="flex min-h-full items-center justify-center ">
          <div className="flex flex-1 flex-col  bg-slate-100 sign-up-card shadow items-center justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96 ">
              <div>
                <img
                  className="logo w-auto mb-3 shadow rounded-full bg-white"
                  src={shopperlogo}
                  alt="Your Company"
                />
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 text-center">Create your account</h2>
              </div>
              <div className="flex justify-center">
              <Link to={"/login"} className="no-underline text-indigo-700">I already have an account</Link>
              </div>
              <div className="mt-8">
                <div className="mt-6">
                  <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
                    <div>
                      <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="first_name"
                          name="first_name"
                          type="text"
                          placeholder="morris"
                          required
                          onChange={handleChange}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="last_name"
                          name="last_name"
                          type="text"
                          placeholder="waithaka"
                          required
                          onChange={handleChange}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="morris.waithaka42@gmail.com"
                          required
                          onChange={handleChange}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          onChange={handleChange}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password_confirmation"
                          name="password_confirmation"
                          type="password"
                          required
                          onChange={handleChange}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="profile" className="block text-sm font-medium text-gray-700">
                        Choose your Profile Picture
                      </label>
                      <div className="mt-1 flex flex-row-reverse justify-between items-center">
                        <input
                          id="picture-input"
                          name="image_url"
                          type="file"
                          accept="image/jpeg, image/jpg, image/png"
                          onChange={addImage}
                          className="block w-7/12 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      <div id="picture" className="m-1 p-0 w-20 bg-cover border-solid border-black border-2 aspect-square rounded-full"></div>
                      </div> 
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent signup-button py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
  )
}