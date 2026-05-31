# GESTÃO DE ESTOQUE - SISTEMA WEB - PROTÓTIPO

Um sistema de gestão de estoque moderno e responsivo para lojas de chás e grãos especiais. Desenvolvido com foco em usabilidade, performance e interfaces intuitivas para diferentes perfis de usuário.

---

## Sobre o Projeto

Gestão de Estoque é uma aplicação web que oferece **visibilidade completa** sobre operações de vendas, controle de estoque, gerenciamento de lotes e relatórios administrativos. Ideal para pequenas e médias lojas que buscam organizar suas operações em um único lugar.

### Funcionalidades Principais

- 🔐 **Autenticação por Perfil**: Vendedor, Estoquista, Administrativo
- 📊 **Dashboard em Tempo Real**: Visualização de vendas, alertas e atividades
- 💳 **Gestão de Vendas**: Rastreamento de pedidos e clientes VIP
- 📦 **Mapa de Estoque**: Controle total de entradas, validade e níveis mínimos
- ✨ **Novidades**: Gerenciamento de produtos em destaque
- 📅 **Calendário de Lotes**: Gestão inteligente de prazos de validade
- ⚙️ **Administrativo**: Relatórios, finanças e gerenciamento de equipe

---
### Instalação

```bash
# 1️⃣ Clone o repositório
git clone https://github.com/ArthurHenrique-eng/GESTAO_ESTOQUE.git
cd GESTAO_ESTOQUE

# 2️⃣ Execute com Live Server
# Clique direito em index.html → "Open with Live Server"

# 3️⃣ Ou use Python
python -m http.server 8000
# Acesse: http://localhost:8000
```

### Login Padrão

| Perfil | Senha |
|--------|-------|
| 👨‍💼 Vendedor | `vendedor123` |
| 📦 Estoquista | `estoque123` |
| ⚙️ Administrativo | `admin123` |

---

## 📁 Estrutura do Projeto

```
GESTAO_ESTOQUE/
│
├── html/
│   ├── index.html              # Tela de login
│   ├── home.html               # Dashboard principal
│   ├── vendas.html             # Gestão de vendas
│   ├── estoque.html            # Mapa de estoque
│   ├── novidades.html          # Produtos em destaque
│   ├── calendario.html         # Calendário de lotes
│   └── administrativo.html     # Gestão administrativa
│
├── css/
│   ├── style.css               # Estilos globais
│   ├── index.css               # Estilos do login
│   ├── home.css                # Estilos do dashboard
│   ├── vendas.css              # Estilos de vendas
│   ├── estoque.css             # Estilos de estoque
│   ├── novidades.css           # Estilos de novidades
│   ├── calendario.css          # Estilos do calendário
│   └── administrativo.css      # Estilos administrativos
│
├── js/
│   ├── script.js               # Lógica de autenticação
│   ├── home.js                 # Lógica do dashboard
│   ├── vendas.js               # Lógica de vendas
│   ├── estoque.js              # Lógica de estoque
│   ├── novidades.js            # Lógica de novidades
│   ├── calendario.js           # Lógica do calendário
│   └── administrativo.js       # Lógica administrativa
│
├── img/                      # Imagens e ícones
├── README.md                # Este arquivo
```

---

## Perfis

### Vendedor
- Visualizar dados de vendas em tempo real
- Consultar disponibilidade de estoque
- Acompanhar histórico de vendas
- Ver produtos em destaque

### Estoquista  
- Registrar entradas e saídas
- Monitorar níveis mínimos
- Gerenciar prazos de validade
- Processar devolução

### Administrativo
- Gerar relatórios completos
- Gerenciar usuários
- Configurar sistema
- Análise de KPIs
- Exportar dados

---

<h3 align="center"> Linguagens e Tecnologias </h3>
<p align="center">
  <a href="https://github.com/ArthurHenrique-eng?tab=repositories">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  </a>
  <a href="https://github.com/ArthurHenrique-eng?tab=repositories">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  </a>
  <a href="https://github.com/ArthurHenrique-eng?tab=repositories">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  </a>

---
## Segurança
### ⚠️ Status Atual
Este é um **sistema de demonstração/protótipo**. 

```javascript
// Senhas hardcoded para teste
const validPasswords = {
  vendedor: 'vendedor123',
  estoquista: 'estoque123',
  administrativo: 'admin123'
};
```
---

## Autor

```
📧 Email: arthurhpb7@gmail.com
🐙 GitHub: github.com/ArthurHenrique-eng
💼 LinkedIn: linkedin.com/in/seu-perfil
```
---
