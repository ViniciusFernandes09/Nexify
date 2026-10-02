import { Link } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import { useContext } from 'react';
import { ContextToken } from '../../utils/context-token';

export default function LoggedUser() {
    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);


    const tokenPayload = contextTokenPayload || (authService.isAuthenticated() ? authService.getAccessTokenPayload() : undefined);

    function handleLogoutClick() {
        authService.logout();
        setContextTokenPayload(undefined);
    }

    return tokenPayload && authService.isAuthenticated() ? (
        <div className="nxf-logged-user">
            <p>{tokenPayload.username}</p>
            <span onClick={handleLogoutClick}>Sair</span>
        </div>
    ) : (
        <div className="nxf-logged-user">
            <Link to="/login">Entrar</Link>
        </div>
    );
}