import type { RoleEnum } from "../models/auth";
import { ROLES_KEY, TOKEN_KEY } from "../utils/system";

export function save(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function get(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

export function remove() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ROLES_KEY);
}

export function saveRoles(roles: RoleEnum[]) {
    localStorage.setItem(ROLES_KEY, JSON.stringify(roles));
}

export function getRoles(): RoleEnum[] {
    try {
        const raw = localStorage.getItem(ROLES_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}
