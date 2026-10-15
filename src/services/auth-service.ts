import axios from "axios";
import type { AccessTokenPayloadDTO, CredentialsDTO, RoleEnum } from "../models/auth";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "../utils/system";
import { requestBackend } from "../utils/requests";
import * as accessTokenrepository from '../localstorage/access-token-repository'
import jwtDecode from "jwt-decode";

export async function loginRequest(loginData: CredentialsDTO) {

    const response = await axios({
        method: "POST",
        url: SUPABASE_URL + "/auth/v1/token",
        params: { grant_type: "password" },
        headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_PUBLISHABLE_KEY
        },
        data: { email: loginData.username, password: loginData.password }
    });

    const me = await requestBackend({
        url: "/users/me",
        headers: { Authorization: "Bearer " + response.data.access_token }
    });
    accessTokenrepository.saveRoles(me.data.roles);

    return response;
}

export function logout() {
    accessTokenrepository.remove();
}

export function saveAccessToken(token: string) {
    accessTokenrepository.save(token);
}

export function getAccessToken() {
    return accessTokenrepository.get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
    try {
        const token = accessTokenrepository.get();
        if (token == null) {
            return undefined;
        }
        const jwt = jwtDecode(token) as { exp: number, email?: string };
        return {
            exp: jwt.exp,
            username: jwt.email ?? "",
            authorities: accessTokenrepository.getRoles()
        };
    } catch (error) {
        return undefined;
    }
}

export function isAuthenticated(): boolean {
    let tokenPayload = getAccessTokenPayload();
    if (tokenPayload && tokenPayload.exp * 1000 > Date.now()) {
        return true;
    }
    return false;
}

export function hasAnyRoles(roles: RoleEnum[]): boolean {
    if (roles.length === 0) {
        return true;
    }
    const tokenPayload = getAccessTokenPayload();

    if (tokenPayload !== undefined) {
        for (var i = 0; i < roles.length; i++) {
            if (tokenPayload.authorities.includes(roles[i])) {
                return true;
            }
        }
    }
    return false;
}
