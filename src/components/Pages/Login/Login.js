import React from 'react';
import logo from './../../../Images/logo-large.png';
//import { gql } from 'graphql-request';

//const LOGIN_URL = 'https://regalafelicidad.com/rfs/graphql';

// const LOGIN_MUTATION = gql`
//   mutation LoginUser($username: String!, $password: String!) {
//     login(input: { username: $username, password: $password }) {
//       authToken
//       user {
//         id
//         name
//       }
//     }
//   }
// `;

const Login = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const variables = { username, password };
    //         const response = await request(LOGIN_URL, LOGIN_MUTATION, variables);
    //         const { authToken, user } = response.login;
    //         localStorage.setItem('token', authToken);
    //         setError(null);
    //     } catch (error) {
    //         setError('Login failed. Please check your credentials.');
    //     }
    // };


    return (
        <form >
            {/* onSubmit={handleLogin} */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={logo}
                        alt="Your Company"
                    />

                    <ul className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900 bg-orange-500 login-head">
                        <li> Ingresa usuario y contraseña</li>
                    </ul>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm leading-6 text-gray-900">
                                correo electrónico
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    // onChange={(e) => setUsername(e.target.value)}
                                    placeholder=' Nombre de usuario o correo electrónico'
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm leading-6 text-gray-900">
                                    Contraseña
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="text-orange-600 hover:text-green-500">
                                        ¿Has olvidado la contraseña?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    // onChange={(e) => setPassword(e.target.value)}
                                    placeholder=' Contraseña'

                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        ¿Eres cliente nuevo?{' '}
                        <a href="#" className=" leading-6 text-orange-600 hover:text-green-500">
                            Regístrate aquí
                        </a>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default Login;
