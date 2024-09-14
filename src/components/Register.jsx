import axios from "axios";
import { useFormik } from "formik"

export default function Register() {
    const formik = useFormik({
        initialValues:{
        userName:'',
        email:'',
        password:''
        },
        onSubmit:RegisterUser,
        validate:values=>{
            let errors = {};
            if(values.userName.length<2){
                errors.userName = "username is required";
            }
            if(values.email.length<=10){
                errors.email = "Email is required";
            }
            if(values.password.length<6){
                errors.password = "Password is required";
            }
            return errors; 
        }
    });

    async function RegisterUser (){
       const {data} = await axios.post('https://ecommerce-node4.onrender.com/auth/signup',formik.values)
       console.log(data);
        
    }

  return (
    <div>
        <h1 className="text-center p-4">Register</h1>
        <form onSubmit={formik.handleSubmit} className="m-auto w-50">
            <div className="form-floating mb-3">
            <input type="text" className="form-control" onChange={formik.handleChange} name="userName" id="name" value={formik.userName} onBlur={formik.handleBlur} placeholder="" />
            <label htmlFor="name">User Name</label>
            {formik.touched.userName && formik.errors.userName?<div className="text text-danger">{formik.errors.userName}</div> :null}
            </div>
            <div className="form-floating mb-3">
            <input type="email" className="form-control" onChange={formik.handleChange} name="email" id="email" value={formik.email} onBlur={formik.handleBlur} placeholder="" />
            <label htmlFor="email">Email</label>
            {formik.touched.email && formik.errors.email?<div className="text text-danger">{formik.errors.email}</div> :null}
            </div>
            <div className="form-floating mb-3">
            <input type="password" className="form-control" onChange={formik.handleChange} name="password" id="pass" value={formik.password} onBlur={formik.handleBlur} placeholder="" />
            <label htmlFor="pass">Password</label>
            {formik.touched.password && formik.errors.password?<div className="text text-danger">{formik.errors.password}</div> :null}
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
            <button type='submit' className="btn btn-outline-info">Register</button>
            </div>
        </form>
    </div>
  )
}
