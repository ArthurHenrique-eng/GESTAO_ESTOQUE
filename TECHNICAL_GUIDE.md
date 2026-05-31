# Guia Técnico - Gestão de Estoque

Documentação técnica detalhada para desenvolvedores.

---

## 📐 Arquitetura

### Padrão de Arquitetura

```
Frontend Web (HTML/CSS/JS)
        ↓
   localStorage
        ↓
   Session Storage
        ↓
   DOM Manipulation
```

**Tipo**: Client-side MVC (Model-View-Controller)
- **Model**: Dados em localStorage
- **View**: DOM e CSS
- **Controller**: JavaScript event handlers

---

## 🔀 Fluxo de Dados

### Login Flow
```
User Input (index.html)
    ↓
Form Validation (script.js)
    ↓
Password Check (validPasswords object)
    ↓
localStorage.setItem('userRole')
    ↓
Redirect to home.html
```

### Page Load Flow
```
DOM Content Loaded
    ↓
Check localStorage.getItem('userRole')
    ↓
Load page-specific CSS
    ↓
Initialize page-specific JS
    ↓
Render UI Components
```

---

## 📦 Componentes e Modules

### Module: Authentication (script.js)

**Responsabilidades:**
- Validar credenciais
- Gerenciar login/logout
- Persistir sessão

**Principais funções:**
```javascript
handleLogin(e)        // Processa envio de login
showFeedback(msg, type) // Exibe mensagens
```

**Eventos:**
- Click no botão "Entrar"
- Submit do formulário
- Keypress Enter no input de senha

---

### Module: Dashboard (home.js)

**Responsabilidades:**
- Renderizar estatísticas
- Exibir atividades recentes
- Gerenciar navegação

**Funcionalidades principais:**
- Leitura de localStorage para perfil
- Formatação de dados
- Event listeners para navegação

---

### Module: Vendas (vendas.js)

**Responsabilidades:**
- Exibir histórico de vendas
- Calcular métricas
- Gerenciar filtros

**Dados esperados:**
```javascript
{
  id: string,
  vendedor: string,
  produto: string,
  valor: number,
  data: ISO8601,
  cliente: string
}
```

---

### Module: Estoque (estoque.js)

**Responsabilidades:**
- Listar itens em estoque
- Alertar níveis baixos
- Registrar movimentações

**Schema de dados:**
```javascript
{
  id: string,
  nome: string,
  quantidade: number,
  minimo: number,
  validade: ISO8601,
  categoria: string
}
```

---

### Module: Novidades (novidades.js)

**Responsabilidades:**
- Destacar produtos novos
- Mostrar popularidade
- Sugerir reposições

---

### Module: Calendário (calendario.js)

**Responsabilidades:**
- Renderizar calendário
- Mostrar lotes por data
- Alertar vencimentos próximos

**Algoritmo de cores:**
- Verde: Lote distante (>30 dias)
- Amarelo: Próximo vencimento (7-30 dias)
- Vermelho: Crítico (<7 dias)

---

### Module: Administrativo (administrativo.js)

**Responsabilidades:**
- Exibir relatórios
- Gerenciar usuários
- Configurações do sistema

---

## 🎯 Event Handling

### Padrão Global

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Espera carregamento completo do DOM
  // Inicializa event listeners
  // Carrega dados de localStorage
  // Renderiza componentes
});
```

### Tipos de Eventos

| Evento | Elemento | Handler | Resultado |
|--------|----------|---------|-----------|
| click | .primary-button | handleLogin() | Submete login |
| submit | #login-form | handleLogin() | Valida e redireciona |
| keypress | #password-input | handleLogin() | Entra se tecla = Enter |
| click | .section-card | navegação | Vai para página |
| change | select[role] | atualizar validação | Muda perfil |

---

## 💾 Armazenamento de Dados

### localStorage

**Dados armazenados:**
```javascript
localStorage.getItem('userRole')  // 'vendedor' | 'estoquista' | 'administrativo'
localStorage.getItem('sessionId') // (futuro)
localStorage.getItem('userData')  // (futuro)
```

**Exemplo de uso:**
```javascript
// Salvar
localStorage.setItem('userRole', role);

// Recuperar
const role = localStorage.getItem('userRole');

// Remover
localStorage.removeItem('userRole');

// Limpar tudo
localStorage.clear();
```

---

## 🎨 CSS Architecture

### Estrutura de Cascata

```
style.css (Global)
    ↓ (resetear, variáveis, tipografia)
    ↓
page-specific.css
    ↓ (layouts, componentes da página)
    ↓
Inline styles (se necessário)
```

### Seletores Usados

**Classes principais:**
- `.page-*` - Classes de página (aplica em body)
- `.site-header` - Header global
- `.app-main` - Main content
- `.*-card` - Componentes card
- `.primary-button` - Botões principais

**Estrutura BEM (parcial):**
```css
.stat-card { }              /* Bloco */
.stat-card__icon { }        /* Elemento */
.stat-card--active { }      /* Modificador */
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
/* 0px - 767px: Mobile */
body {
  font-size: 14px;
  grid-template-columns: 1fr;
}

/* 768px - 1023px: Tablet */
@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

/* 1024px+: Desktop */
@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
}
```

---

## 🔄 Estado de Aplicação

### Variáveis de Estado (localStorage)

```javascript
// Estado de Sessão
{
  userRole: 'vendedor' | 'estoquista' | 'administrativo',
  loginTime: timestamp,
  sessionToken: string (futuro)
}
```

### Estado Local de Página

```javascript
// Exemplo: home.js
let currentPage = 'home';
let visibleSections = ['welcome', 'stats', 'quick-access'];
let selectedFilter = null;
```

---

## 🔐 Segurança - Implementação Atual vs Produção

### Status Atual (Protótipo)
- ✅ Validação básica no cliente
- ✅ localStorage para sessão
- ⚠️ Senhas em código-fonte
- ⚠️ Sem criptografia
- ⚠️ Sem rate limiting

### Recomendações para Produção

#### 1. Autenticação
```javascript
// ATUAL (INSEGURO)
const validPasswords = {
  vendedor: 'vendedor123'
};

// RECOMENDADO
POST /api/auth/login
Headers: Content-Type: application/json
Body: {
  username: string,
  password: string (hashed com bcrypt no servidor)
}
Response: {
  token: JWT,
  expiresIn: 3600,
  refreshToken: JWT
}
```

#### 2. Token Storage
```javascript
// ATUAL: localStorage (vulnerável a XSS)
localStorage.setItem('userRole', role);

// RECOMENDADO: HttpOnly Cookies
Set-Cookie: sessionId=xyz; HttpOnly; Secure; SameSite=Strict
```

#### 3. Validação
```javascript
// ATUAL: Apenas cliente
if (password === validPasswords[role]) { }

// RECOMENDADO: Servidor + Cliente
// Cliente: validação básica (UX)
// Servidor: validação completa (segurança)
```

---

## 🧪 Testing Strategy

### Testes Sugeridos

#### 1. Unit Tests (JavaScript)
```javascript
describe('Authentication', () => {
  test('should validate correct password', () => {
    expect(validatePassword('vendedor', 'vendedor123')).toBe(true);
  });

  test('should reject incorrect password', () => {
    expect(validatePassword('vendedor', 'wrong')).toBe(false);
  });
});
```

#### 2. Integration Tests
```javascript
describe('Login Flow', () => {
  test('should redirect to home after successful login', () => {
    // Simulação de login
    // Verificação de redirect
  });
});
```

#### 3. E2E Tests (Cypress/Selenium)
```javascript
describe('User Journey', () => {
  it('should login and view dashboard', () => {
    cy.visit('index.html');
    cy.select('role', 'vendedor');
    cy.type('password', 'vendedor123');
    cy.click('button[type="submit"]');
    cy.url().should('include', 'home.html');
  });
});
```

---

## 📊 Performance

### Métricas Atuais

| Métrica | Valor | Status |
|---------|-------|--------|
| First Contentful Paint | < 1s | ✅ Bom |
| Load Time | 1-2s | ✅ Bom |
| Lighthouse Score | ~85 | ✅ Bom |

### Otimizações Implementadas

1. **CSS Inline**: Critical CSS inline em `<head>`
2. **Imagens**: Uso de emojis (0 requisições)
3. **JS Modular**: Carregamento seletivo por página
4. **Cache**: Suporte a service workers (futuro)

### Melhorias Futuras

```javascript
// 1. Lazy Loading
const image = new Image();
image.src = 'large-image.jpg';

// 2. Code Splitting
import { vendas } from './vendas.js'; // Apenas quando necessário

// 3. Compression
// gzip assets em servidor

// 4. Service Workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
```

---

## 🔗 API Design (Futuro)

### Endpoints Propostos

```
POST   /api/auth/login
GET    /api/auth/logout
POST   /api/auth/refresh

GET    /api/vendas
POST   /api/vendas
GET    /api/vendas/:id
PUT    /api/vendas/:id

GET    /api/estoque
POST   /api/estoque
PUT    /api/estoque/:id
DELETE /api/estoque/:id

GET    /api/lotes
GET    /api/lotes/vencimento

GET    /api/relatorios
GET    /api/relatorios/:tipo
```

---

## 🚀 Deployment Checklist

- [ ] Remover console.log() do código
- [ ] Minificar CSS e JS
- [ ] Testar em múltiplos navegadores
- [ ] Validar links (broken links)
- [ ] Otimizar imagens
- [ ] Verificar HTTPS
- [ ] Configurar headers de segurança
- [ ] Testar em mobile
- [ ] Verificar performance
- [ ] Documentar ambiente de produção

---

## 🛠️ Stack Técnico Recomendado (Futuro)

### Frontend
- **Framework**: React / Vue.js / Angular
- **State Management**: Redux / Vuex / Context API
- **UI Components**: Material-UI / Bootstrap Vue
- **Build Tool**: Webpack / Vite

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js / NestJS
- **Database**: PostgreSQL / MongoDB
- **ORM**: Prisma / Sequelize
- **Auth**: Passport.js / Auth0

### DevOps
- **VCS**: Git / GitHub
- **CI/CD**: GitHub Actions / GitLab CI
- **Containerization**: Docker
- **Orchestration**: Kubernetes (opcional)
- **Monitoring**: Sentry / DataDog

---

## 📖 Referências

- [MDN Web Docs](https://developer.mozilla.org)
- [HTML5 Spec](https://html.spec.whatwg.org)
- [CSS-Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

---

## 🤝 Contribuindo

### Padrões de Código

**JavaScript:**
```javascript
// Use const por padrão
const value = 'example';

// Use arrow functions
const handleClick = () => { };

// Use template literals
const message = `Hello, ${name}`;

// Use destructuring
const { role, password } = form;
```

**CSS:**
```css
/* Use variáveis CSS */
:root {
  --primary-color: #2ecc71;
}

/* Use classes, não IDs */
.component { }

/* Mobile first */
.component { }
@media (min-width: 768px) { }
```

---

**Última atualização:** 2026-05-31  
**Versão:** 1.0.0
