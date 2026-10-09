import './styles.css'
import { useContext, useState } from 'react';
import * as forms from '../../../utils/forms'
import * as authService from '../../../services/auth-service'
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token';
import FormInput from '../../../components/FormImput';

export default function Login() {

    const { setContextTokenPayload } = useContext(ContextToken);
    

    const navigate = useNavigate();

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email váli do",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    function handleSubmit (event: any) {
        event.preventDefault();
        authService.loginRequest(forms.toValues(formData))
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
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }

    return (
        <main>
            <section id="login-section" className="nxf-container">
                <div className="nxf-login-form-container">
                <form className="nxf-card nxf-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="nxf-form-controls-container">
                    <div>
                        <FormInput
                        {...formData.username}
                            className="nxf-form-control"
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange}
                        />
                        <div className="nxf-form-error"></div>
                    </div>
                    <div>
                        <FormInput
                        {...formData.password}
                            className="nxf-form-control" 
                            onTurnDirty={handleTurnDirty}
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