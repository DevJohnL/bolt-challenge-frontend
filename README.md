# Bolt Frontend

Aplicação Angular que exibe os **Top 5 maiores geradores de energia elétrica do Brasil**, consumindo dados de uma API que sincroniza com os dados abertos da ANEEL.

---

## Sobre o projeto

O frontend consome o endpoint `/api/v1/geradores/top5` do backend, que retorna os cinco empreendimentos de geração com maior potência outorgada. Os dados têm origem no **RALIE** (Relatório de Acompanhamento da Expansão da Oferta de Geração de Energia Elétrica), da Agência Nacional de Energia Elétrica (ANEEL).

**Origem dos dados:**  
A API faz uma **sincronização com os dados da ANEEL a cada uma hora**. O conjunto de dados utilizado é o [RALIE – ralie-usina.csv](https://dadosabertos.aneel.gov.br/dataset/ralie-relatorio-de-acompanhamento-da-expansao-da-oferta-de-geracao-de-energia-eletrica/resource/4a615df8-4c25-48fa-bbea-873a36a79518), disponível em **Dados Abertos - ANEEL**.

---

## Funcionalidades

- Exibição dos **Top 5 maiores geradores** (nome, código CEG, tipo de geração e potência em GW)
- Estados de **carregamento** e **erro** com mensagens ao usuário
- Nota na interface informando a origem dos dados e a periodicidade da sincronização da API

---

## Stack

| Tecnologia | Versão |
|------------|--------|
| Angular   | 19.x   |
| TypeScript| 5.6.x  |
| RxJS      | 7.8.x  |
| Zone.js   | 0.15.x |

---

## Pré-requisitos

- **Node.js** (recomendado LTS, ex.: 20.x ou 22.x)
- **npm** (vem com o Node.js)
- **Backend** da aplicação rodando em `http://localhost:8080`

---

## Instalação e execução

### 1. Instalar dependências

```bash
npm install
```

### 2. Subir o backend

Em outro terminal, inicie a API para que o frontend consiga carregar os geradores:

- Backend deve estar disponível em: **http://localhost:8080**

### 3. Iniciar o frontend

```bash
ng serve
```

A aplicação estará disponível em: **http://localhost:4200**

---

## Scripts disponíveis

| Comando        | Descrição                                      |
|----------------|------------------------------------------------|
| `npm start`    | Sobe o servidor de desenvolvimento (dev server)|
| `npm run build`| Gera o build de produção                       |
| `npm run watch`| Build em modo watch (desenvolvimento)          |
| `npm run ng`   | Acesso ao CLI do Angular                       |

---

## Build de produção

```bash
npm run build
```

Os artefatos são gerados em **`dist/bolt-frontend/`**. O conteúdo dessa pasta pode ser servido por qualquer servidor estático (Nginx, Apache, CDN, etc.).

---

## Estrutura do projeto (espelhando o Backend)

A organização do frontend espelha as camadas do backend:

| Backend    | Frontend                                      |
|------------|-----------------------------------------------|
| DTO        | **Model** (interface) – `src/app/models/gerador.ts` |
| Controller | **Service** – `src/app/services/gerador.service.ts`  |
| Camada de dados | **Component** – `src/app/components/geradores/`     |

### Árvore principal

```
src/
├── app/
│   ├── app.component.ts          # Raiz da aplicação
│   ├── app.config.ts            # Configuração (providers, etc.)
│   ├── components/
│   │   └── geradores/           # Lista Top 5 geradores
│   │       ├── geradores.component.ts
│   │       ├── geradores.component.html
│   │       └── geradores.component.css
│   ├── models/
│   │   └── gerador.ts           # Interface Gerador (espelho do DTO)
│   └── services/
│       └── gerador.service.ts   # Chamadas à API (espelho do Controller)
├── assets/
├── index.html
├── main.ts
└── styles.css
```

---

## API / Backend

- **Base URL:** `http://localhost:8080/api/v1`
- **Endpoint utilizado:** `GET /geradores/top5`
- **Resposta:** array de objetos `Gerador` com `nome`, `codigo`, `tipo` e `potencia` (em kW).

Se a API não estiver rodando, a tela exibirá uma mensagem orientando a verificar se o backend está em `http://localhost:8080`.

---

## Modelo de dados (Gerador)

```ts
interface Gerador {
  nome: string;     // Nome do empreendimento
  codigo: string;   // Código CEG
  tipo: string;     // Tipo de geração (ex.: Eólica, Solar)
  potencia: number; // Potência outorgada em kW
}
```

---

## Licença e dados abertos

Os dados exibidos vêm do portal **Dados Abertos da ANEEL**, sob [Open Database License (ODbL)](http://www.opendefinition.org/licenses/odc-odbl). 
