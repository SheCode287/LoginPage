import { Button, Box, Typography, TextField} from '@mui/material'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useState } from 'react';
import { Formik, Form,Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Height } from '@mui/icons-material';

function Login() {
  const [logins, setLogins]=useState(false);
  const initialValues={
    firstname:'',
    lastname:'',
    email:'',
    confirmemail:'',
    password:''
  }
  
  const validationSchema=Yup.object().shape({
    firstname: Yup.string()
    .required('Please Enter First name'),
    lastname:Yup.string()
    .required('Please Enter Last name'),
    email: Yup.string()
    .email('please enter a valid email ')
    .required('email is required'),
    confirmemail: Yup.string()
    .oneOf([Yup.ref('email'), null], 'Incorrect Email')
    .required('Email Confirmation is required'),
    password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required('Password is required')

  })

 
  const onSubmit =(values) => {
    console.log(values);

 
  }

  const styles ={
    width:'100vw',
    height:'100vh',
    backgroundColor:'light-blue'
  }


  return (
<div style={styles} > 
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    
{(formikProps)=>(
  <Form   >
  
  
  {<Typography  fontSize={'2em'} color='#535bf2' textAlign={'center'} lineHeight={'2'}>
    {logins? "Login" : "SignUp"}
    </Typography>}
  { !logins ? <Box display={'flex'} flexDirection={'column'} maxWidth={'500px'}  minHeight={'600px'} alignItems={'center'} justifyContent={'center'} padding={'7px'} marginTop={'5px'} borderRadius={'7px'} boxShadow={'2px 2px 25px #ccc'} margin={'auto'} >
    
  <Field as={TextField} placeholder='FirstName' type='text' margin='normal' name='firstname' helperText={<ErrorMessage name='firstname'/>} error={formikProps.touched.firstname && Boolean(formikProps.errors.firstname)}
  />
  <Field as={TextField} placeholder='LastName' type='text' margin='normal' name='lastname' helperText={<ErrorMessage name='lastname' />} error={formikProps.touched.lastname && Boolean(formikProps.errors.lastname)}  />
  <Field as={TextField} placeholder='Email' type='email' margin='normal' name='email' helperText={<ErrorMessage name='email' />} error={formikProps.touched.email && Boolean(formikProps.errors.email)}  />
  <Field as={TextField} placeholder='ConfirmEmail' type='email' margin='normal' name='confirmemail' helperText={<ErrorMessage name='confirmemail' />} error={formikProps.touched.confirmemail && Boolean(formikProps.errors.confirmemail)}  />
  <Field as={TextField} placeholder='Password' type='password' margin='normal' name='password' helperText={<ErrorMessage name='password'/>} error={formikProps.touched.password && Yup && Boolean(formikProps.errors.password)}/>
  {<Button 
  variant='contained' 
  color='info' 
  endIcon={<HowToRegIcon/>}
  type='submit'
  onClick={()=>setLogins(!logins)} >
  { logins ? "Login" : 'SignUp'}
  </Button>}
  
  </Box> : <Box display={'flex'} flexDirection={'column'} maxWidth={'500px'}  minHeight={'600px'} alignItems={'center'} justifyContent={'center'} padding={'7px'} marginTop={'5px'} borderRadius={'7px'} boxShadow={'2px 2px 25px #ccc'} margin={'auto'} >
    
   
    <Field as={TextField} placeholder='Email' type='email' margin='normal' name='email' helperText={<ErrorMessage name='email' />} error={formikProps.touched.email && Boolean(formikProps.errors.email)}  />
    <Field as={TextField} placeholder='Password' type='password' margin='normal' name='password' helperText={<ErrorMessage name='password'/>} error={formikProps.touched.password && Boolean(formikProps.errors.password)}/>
    {<Button 
    variant='contained' 
    color='info' 
    endIcon={<HowToRegIcon/>}
    type='submit'
    onClick={()=>setLogins(!logins)} >
    {logins ? "Login" : 'SignUp'}
    </Button>}
    
    </Box>
  }
  </Form>
 )}

    

  </Formik>
        
</div>

      
    
            
               
            
                
                
                
              
                
                
          
)
}

export default Login
