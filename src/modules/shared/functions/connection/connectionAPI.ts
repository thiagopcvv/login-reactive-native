import axios, { AxiosRequestConfig } from "axios";
import { MetheodEnum } from "../../../../enums/metheods";
import { getAuthorizationToken } from "./auth";

export type MetheodType = 'get' | 'delete' | 'post' | 'put' | 'patch';

export default class ConnectionAPI {

    static async call<T>(url: string, metheod: MetheodType, body?: unknown): Promise<T>{
       const token = await getAuthorizationToken()
       
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: token,
                'Conntent-Type': 'application/json',
            }
        }
        switch (metheod) {
            case MetheodEnum.DELETE:
            case MetheodEnum.GET:
                return (await axios[metheod]<T>(url)).data;
            case MetheodEnum.POST:
            case MetheodEnum.PUT:
            case MetheodEnum.PATCH:
            default:
                return (await axios[metheod]<T>(url, body)).data;
        }

    }

    static async connect<T>(url: string, metheod: MetheodType, body?: unknown): Promise<T>{
        return this.call<T>(url, metheod, body).catch((error) => {
            if(error.response){
                switch (error.response.status) {
                    case 401:
                        case 403:
                    throw new Error('Sem permissão')
                    default:
                        throw new Error('Sem conexão')
                }
            }
            throw new Error('Sem permissão')
        })
    }
}
export const connectionAPIget = async <T>(url: string): Promise<T> => {
    return ConnectionAPI.connect(url, MetheodEnum.GET);
}

export const connectionAPIdelete = async <T>(url: string): Promise<T> => {
    return ConnectionAPI.connect(url, MetheodEnum.DELETE);
}

export const connectionAPIpost = async <T>(url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(url, MetheodEnum.POST, body);
}

export const connectionAPIput = async <T>(url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(url, MetheodEnum.PUT, body);
}

export const connectionAPIpatch = async <T>(url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(url, MetheodEnum.PATCH, body);
}


