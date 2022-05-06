import { useEffect } from "react";
import {useFormik} from "formik";
import {useSelector,useDispatch} from "react-redux"; 
import { LockClosedIcon } from '@heroicons/react/solid';
import { NavLink,useNavigate } from 'react-router-dom';

import * as Yup from "yup";
import { createExpAction } from "../Redux/Slices/expenseSlices";

//Form Validation
const FormValidation =   Yup.object({
    title : Yup.string().required("Title is required"),
    description : Yup.string().required("Last Name is required"),
    amount : Yup.number().required("Amount is required"),
})



const Expense = () => {

    const expense = useSelector((state) => state?.expense);
    const dispatch = useDispatch();
    const {isCreated} = expense;

    const navigate = useNavigate();

    //Handle Form Data using Formik libery
    const formik = useFormik({
        initialValues:{
            title : "",
            description : "",
            amount : "",
        },
        onSubmit : (values)=>{
            
            dispatch(createExpAction(values));
        },
        validationSchema : FormValidation
    });

    useEffect(()=>{
        if(isCreated){
            navigate('/profile');
        }
    },[isCreated])
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
                <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Expense</h2>

            </div>
            <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit} >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="title" className="sr-only">
                    Title
                    </label>
                    <input
                        value={formik?.values?.title}
                        onChange={formik?.handleChange("title")}
                        onBlur={formik?.handleBlur("title")}
                        type="text"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Title"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="sr-only"></label>
                    <input
                        value={formik?.values?.description}
                        onChange={formik?.handleChange("description")}
                        onBlur={formik?.handleBlur("description")} 
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        type="text" 
                        placeholder="Description"
                    />
                </div>
                <div>
                    <label htmlFor="amount" className="sr-only">
                    Amount
                    </label>
                    <input
                        value={formik?.values?.amount}
                        onChange={formik?.handleChange("amount")}
                        onBlur={formik?.handleBlur("amount")}
                        type="number"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Amount"
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
                    Add Expense
                </button>
                </div>
            </form>
        </div>
        <NavLink to="/profile">Back</NavLink>
    </div>
    )
}

export default Expense






