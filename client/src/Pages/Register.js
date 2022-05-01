import { useEffect } from "react";
import {useFormik} from "formik";
import {useSelector,useDispatch} from "react-redux"; 
import { LockClosedIcon } from '@heroicons/react/solid';
import { NavLink,useNavigate } from 'react-router-dom'
import { registerUserAction } from "../Redux/Slices/userSlices";
import * as Yup from "yup";

//Form Validation
const FormValidation =   Yup.object({
    firstName : Yup.string().required("First Name is required"),
    lastName : Yup.string().required("Last Name is required"),
    email : Yup.string().required("Email is required"),
    password : Yup.string().required("Password is required"),
})



const Register = () => {

    const user = useSelector((state) => state?.users);
    const dispatch = useDispatch();
    const {isRegistered} = user;

    const navigate = useNavigate();

    //Handle Form Data using Formik libery
    const formik = useFormik({
        initialValues:{
            firstName : "",
            lastName : "",
            email : "",
            password : "",
        },
        onSubmit : (values)=>{
            console.table(values);
            dispatch(registerUserAction(values));
        },
        validationSchema : FormValidation
    });

    useEffect(()=>{
        if(isRegistered){
            navigate('/login');
        }
    },[isRegistered])

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
                <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>

            </div>
            <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit} >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="firstName" className="sr-only">
                    First Name
                    </label>
                    <input
                        value={formik?.values?.firstName}
                        onChange={formik?.handleChange("firstName")}
                        onBlur={formik?.handleBlur("firstName")}
                        type="text"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="First Name"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="sr-only"></label>
                    <input
                        value={formik?.values?.lastName}
                        onChange={formik?.handleChange("lastName")}
                        onBlur={formik?.handleBlur("lastName")} 
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        type="text" 
                        placeholder="Last Name"
                    />
                </div>
                <div>
                    <label htmlFor="email-address" className="sr-only">
                    Email address
                    </label>
                    <input
                        value={formik?.values?.email}
                        onChange={formik?.handleChange("email")}
                        onBlur={formik?.handleBlur("email")}
                        type="email"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                    Password
                    </label>
                    <input
                        value={formik?.values?.password}
                        onChange={formik?.handleChange("password")}
                        onBlur={formik?.handleBlur("password")}
                        type="password"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                </div>
                </div>
                <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    Register
                </button>
                </div>
            </form>
            <NavLink to='/login'>Have an account?</NavLink>

        </div>
    </div>
    )
}

export default Register















{/* <div className="flex items-center justify-between">
  <div className="flex items-center">
    <input
      id="remember-me"
      name="remember-me"
      type="checkbox"
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
      Remember me
    </label>
  </div>

  <div className="text-sm">
    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
      Forgot your password?
    </a>
  </div>
</div> */}