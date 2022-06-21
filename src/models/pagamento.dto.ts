import { isStringLiteral } from "typescript";

export interface PagamentoDTO{
    numeroDeParcelas: number;
    "@type": string;
}