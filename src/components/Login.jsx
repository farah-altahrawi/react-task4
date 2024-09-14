import axios from "axios";
import { useFormik } from "formik"

export default function Login() {

 const formik = useFormik({
        initialValues:{
        email:'',
        password:''
        },
        onSubmit:LoginUser,
        validate:values=>{
            let errors = {};
            if(values.email.length<=10){
                errors.email = "Email is required";
            }
            if(values.password.length<6){
                errors.password = "Password is required";
            }
            return errors; 
        }
    });
    console.log(formik);

    async function LoginUser (){
       const {data} = await axios.post('https://ecommerce-node4.onrender.com/auth/signin',formik.values)
       console.log(data);
        
    }

  return (
    <div>
        <h1 className="p-4 text-center">Login</h1>
        <form onSubmit={formik.handleSubmit} className="w-50 m-auto">
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
            <button type='submit' className="btn btn-outline-info">Login</button>
            </div>        
            </form>
    </div>
  )
}


