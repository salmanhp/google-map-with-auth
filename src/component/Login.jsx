import { Link } from 'react-router-dom';
import Google from '../assets/google.png';
import facebook from '../assets/facebook.png';


const Login = () => {
    return (
        <div style={{ width: '360px', fontFamily: 'sans-serif', marginLeft: '100px', marginTop: '50px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', padding: '15px 30px' }}>
            <p style={{ fontSize: '20px' }}>Welcome to Login/Signup</p>
            <p>Please Enter Details</p>
            <input style={{ width: '95%', marginBottom: '12px', padding: '8px 0px 8px 15px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }} type="text" placeholder="10 digit phone number" /><br />
            <button style={{ fontSize: '16px', width: '100%', marginBottom: '30px', padding: '8px 0px 8px 15px', backgroundColor: '#0042fa', cursor: 'pointer', color: 'white', borderRadius: '5px', borderColor: 'transparent' }}>Continue</button>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Link style={{ textDecoration: 'none', width: '45%' }} to="/lat-long"><button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '5px', fontSize: '16px', width: '100%', padding: '8px 0px 8px 15px', cursor: 'pointer', borderRadius: '5px', borderColor: 'transparent', backgroundColor: '#e60000', color: 'white' }}>
                    <img src={Google} alt="Google" />
                    Google
                </button></Link>
                <Link style={{ textDecoration: 'none', width: '45%' }}><button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '5px', fontSize: '16px', width: '100%', padding: '8px 0px 8px 15px', cursor: 'pointer', borderRadius: '5px', borderColor: 'transparent', backgroundColor: '#3360ff', color: 'white' }}>
                    <img src={facebook} alt="facebook" />
                    Facebook
                </button></Link>
            </div>
            <p style={{ color: 'gray' }}><span style={{ fontWeight: 'bold', color: 'black' }}>Note:</span> if you have entered an Email id/Phone no. Which is not registered on Sigma Value, the app will automatically go for signup.</p>
            <p style={{ color: 'red', textAlign: 'right' }}>Admin Login</p>
        </div>
    )
}

export default Login;