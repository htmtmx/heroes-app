import { useNavigate } from 'react-router';

export const Login = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/', { replace: true });
    };

    return (
        <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>
            <h1>Heroes App</h1>
            <button
                className='btn btn-primary mb-5'
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    );
};
