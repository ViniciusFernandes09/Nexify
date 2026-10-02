import './styles.css'
import { useContext, useState } from 'react';
import type { CredentialsDTO } from '../../../models/auth';
import * as authService from '../../../services/auth-service'
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token';

export default function Login() {

    const { setContextTokenPayload } = useContext(ContextToken);
    

    const navigate = useNavigate();

    const [formData, setFormData] = useState<CredentialsDTO>({
        username: '',
        password: ''
    })

    function handleSubmit (event: any) {
        event.preventDefault();
        authService.loginRequest(formData)
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/cart");
            })
            .catch(error => {
                console.log("Erro no login", error);
            })
    }

    function handleInputChange(event: any){
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
    }

    return (
        <main>
            <section id="login-section" className="nxf-container">
                <div className="nxf-login-form-container">
                <form className="nxf-card nxf-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="nxf-form-controls-container">
                    <div>
                        <input 
                            name="username" 
                            value={formData.username}
                            className="nxf-form-control"
                            type="text"
                            placeholder="Email"
                            onChange={handleInputChange}
                        />
                        <div className="nxf-form-error"></div>
                    </div>
                    <div>
                        <input 
                            name="password"
                            value={formData.password}
                            className="nxf-form-control" 
                            type="password" 
                            placeholder="Senha" 
                            onChange={handleInputChange}
                        />
                    </div>
                    </div>

                    <div className="nxf-login-form-buttons nxf-mt20">
                    <button type="submit" className="nxf-btn nxf-btn-blue">Entrar</button>
                    </div>
                </form>
                </div>
            </section>
        </main>
    );
}