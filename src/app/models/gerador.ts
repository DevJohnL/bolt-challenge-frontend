/**
 * Model que espelha o DTO do Backend.
 * Idêntico ao JSON que a API devolve.
 */
export interface Gerador {
  nome: string;
  codigo: string;
  tipo: string;
  potencia: number; // No JSON vem como number (BigDecimal vira number no JS)
}
