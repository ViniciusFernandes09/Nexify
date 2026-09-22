import type { OrderDTO } from "../models/order";

export function save(cart : OrderDTO) {
    const str = JSON.stringify(cart);
    localStorage.setItem("com.project.nexify/Cart", str);
}

export function get() : OrderDTO {
    const str = localStorage.getItem("com.project.nexify/Cart") || '{items=[]}';
    return JSON.parse(str);
}