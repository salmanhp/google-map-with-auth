import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <div style={{ width: '1500px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <ul style={{ display: 'flex', listStyle: 'none', columnGap: '30px', fontFamily: 'sans-serif', fontSize: '17px' }}>
                        <li style={{ padding: '3px 5px' }}>Home</li>
                        <li style={{ padding: '3px 5px' }}>Our Products</li>
                        <li style={{ padding: '3px 5px' }}>About Us</li>
                        <li style={{ padding: '3px 5px' }}>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/login">
                        <button style={{ borderRadius: '30px', border: '1px solid red', color: 'red', padding: '15px 30px', backgroundColor: 'transparent', fontFamily: 'sans-serif', fontSize: '17px', cursor: 'pointer' }}>Log in</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar