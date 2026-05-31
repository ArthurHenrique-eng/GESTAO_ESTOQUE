# Gestão de Estoque - Sistema Web

Um sistema integrado de gestão de estoque para lojas de chás e grãos especiais, com controle de vendas, estoque, produtos e calendário de lotes.

## 📋 Visão Geral

O **Gestão de Estoque** é uma aplicação web responsiva que oferece visibilidade completa sobre operações de vendas e estoque, com interfaces específicas para diferentes perfis de usuário: vendedores, estoquistas e administrativo.

### Principais Funcionalidades

- ✅ **Autenticação por perfil**: Acesso diferenciado para vendedor, estoquista e administrativo
- 📊 **Dashboard em tempo real**: Visualização de vendas, alertas e atividades
- 💳 **Gestão de Vendas**: Rastreamento de pedidos e clientes VIP
- 📦 **Mapa de Estoque**: Controle de entradas, validade e níveis mínimos
- ✨ **Novidades**: Gerenciamento de produtos recém-chegados
- 📅 **Calendário de Lotes**: Gestão de prazos de validade e reservas
- ⚙️ **Administrativo**: Relatórios, finanças e gerenciamento de equipe

---

## 🚀 Como Começar

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (recomendado: Live Server no VS Code)

### Instalação

1. **Clone o repositório**
```bash
git clone <seu-repositório>
cd GESTAO_ESTOQUE
```

2. **Execute um servidor local**

Opção 1 - Usando Live Server no VS Code:
- Instale a extensão "Live Server"
- Clique com botão direito em `index.html`
- Selecione "Open with Live Server"

Opção 2 - Usando Python:
```bash
python -m http.server 8000
# Acesse http://localhost:8000
```

### Acesso ao Sistema

**Tela de Login** (`index.html`)

| Perfil | Senha |
|--------|-------|
| Vendedor | vendedor123 |
| Estoquista | estoque123 |
| Administrativo | admin123 |

---

## 📁 Estrutura do Projeto

```
GESTAO_ESTOQUE/
├── html/                      # Páginas HTML
│   ├── index.html            # Tela de login
│   ├── home.html             # Dashboard principal
│   ├── vendas.html           # Gestão de vendas
│   ├── estoque.html          # Mapa de estoque
│   ├── novidades.html        # Produtos em destaque
│   ├── calendario.html       # Calendário de lotes
│   └── administrativo.html   # Gestão administrativa
├── css/                       # Estilos CSS
│   ├── style.css             # Estilos globais
│   ├── index.css             # Estilos da tela de login
│   ├── home.css              # Estilos do dashboard
│   ├── vendas.css            # Estilos de vendas
│   ├── estoque.css           # Estilos de estoque
│   ├── novidades.css         # Estilos de novidades
│   ├── calendario.css        # Estilos do calendário
│   └── administrativo.css    # Estilos administrativos
├── js/                        # Scripts JavaScript
│   ├── script.js             # Lógica de autenticação
│   ├── home.js               # Lógica do dashboard
│   ├── vendas.js             # Lógica de vendas
│   ├── estoque.js            # Lógica de estoque
│   ├── novidades.js          # Lógica de novidades
│   ├── calendario.js         # Lógica do calendário
│   └── administrativo.js     # Lógica administrativa
├── img/                       # Imagens e ícones
├── README.md                  # Este arquivo
└── .vscode/                   # Configurações VS Code
```

---

## 🔐 Autenticação

### Sistema de Login

O sistema utiliza autenticação local com armazenamento em `localStorage`:

- **Tela**: `index.html`
- **Script**: `js/script.js`
- **Fluxo**: 
  1. Usuário seleciona perfil
  2. Digita senha
  3. Sistema valida credenciais
  4. Armazena role em `localStorage` se correto
  5. Redireciona para `home.html`

```javascript
// Exemplo de validação
const validPasswords = {
  vendedor: 'vendedor123',
  estoquista: 'estoque123',
  administrativo: 'admin123'
};
```

---

## 📄 Páginas da Aplicação

### 1. **Tela de Login** (`index.html`)
- Seleção de perfil de usuário
- Entrada de senha
- Cards informativos de vendas e alertas
- Feedback visual de erros/sucesso

**Script associado**: `js/script.js`

---

### 2. **Dashboard Principal** (`home.html`)
Central de controle com acesso rápido a todas as funcionalidades.

**Componentes**:
- Estatísticas rápidas (Vendas, Estoque, Alertas, Lotes)
- Seções de acesso rápido com atalhos
- Feed de atividade recente
- Navegação principal

**Script associado**: `js/home.js`

---

### 3. **Gestão de Vendas** (`vendas.html`)
Acompanhamento de pedidos e desempenho comercial.

**Funcionalidades**:
- Histórico de vendas
- Clientes VIP
- Performance por período
- Relatórios de receita

**Script associado**: `js/vendas.js`

---

### 4. **Mapa de Estoque** (`estoque.html`)
Controle detalhado dos itens em estoque.

**Funcionalidades**:
- Lista de produtos com quantidades
- Alertas de validade
- Níveis mínimos configuráveis
- Registro de entradas/saídas

**Script associado**: `js/estoque.js`

---

### 5. **Novidades em Destaque** (`novidades.html`)
Gerenciamento de produtos recém-chegados.

**Funcionalidades**:
- Produtos em promoção
- Itens de reposição rápida
- Destaques por categoria
- Indicadores de popularidade

**Script associado**: `js/novidades.js`

---

### 6. **Calendário de Lotes** (`calendario.html`)
Gestão de prazos de validade e reservas.

**Funcionalidades**:
- Visualização de lotes por período
- Alertas de proximidade de vencimento
- Reservas programadas
- Timeline de lotes

**Script associado**: `js/calendario.js`

---

### 7. **Gestão Administrativa** (`administrativo.html`)
Ferramentas de gestão e relatórios.

**Funcionalidades**:
- Relatórios financeiros
- Gerenciamento de usuários
- Configurações de sistema
- Exportação de dados

**Script associado**: `js/administrativo.js`

---

## 🎨 Design e Estilos

### Sistema de Cores
- **Primário**: Tons de verde (referência a produtos naturais)
- **Secundário**: Tons neutros (cinza, branco)
- **Acentos**: Vermelho para alertas, azul para informações

### Tipografia
- **Fonte principal**: System fonts para melhor performance
- **Hierarquia**: H1, H2, H3 para estrutura clara
- **Legibilidade**: Contraste adequado em todas as seções

### Componentes Reutilizáveis

#### Buttons
```html
<!-- Primary -->
<button class="primary-button">Ação Principal</button>

<!-- Ghost -->
<button class="ghost-button">Ação Secundária</button>

<!-- Outline -->
<button class="outline-button">Ação Terciária</button>
```

#### Cards
```html
<!-- Card simples -->
<article class="mini-card">
  <p class="mini-title">Título</p>
  <p class="mini-value">Valor</p>
  <p class="mini-note">Nota</p>
</article>

<!-- Stat Card -->
<article class="stat-card">
  <div class="stat-icon">📊</div>
  <h3>Título</h3>
  <p class="stat-number">Número</p>
  <p class="stat-label">Label</p>
</article>
```

---

## 💻 Desenvolvimento

### Tecnologias Utilizadas
- **HTML5**: Marcação semântica
- **CSS3**: Estilos responsivos (Grid, Flexbox)
- **JavaScript**: Lógica e interatividade
- **localStorage**: Persistência local de dados

### Boas Práticas Implementadas
- ✅ Semântica HTML apropriada
- ✅ CSS organizado e modular
- ✅ JavaScript com event listeners claros
- ✅ Design responsivo mobile-first
- ✅ Acessibilidade (aria-labels, navegação clara)

### Estrutura de Arquivo CSS

Cada página possui seu próprio arquivo CSS:
- `style.css` - Estilos globais e base
- `[página].css` - Estilos específicos da página

Isso facilita:
- Manutenção individual
- Carregamento otimizado
- Organização clara de responsabilidades

---

## 🔧 Configuração e Personalização

### Alterar Credenciais de Login

Edite `js/script.js`:
```javascript
const validPasswords = {
  vendedor: 'sua_senha_aqui',
  estoquista: 'sua_senha_aqui',
  administrativo: 'sua_senha_aqui'
};
```

### Personalizar Cores

Edite `css/style.css` e procure pelas variáveis CSS ou cores hardcoded. Exemplo de paleta:

```css
:root {
  --primary: #2ecc71;    /* Verde */
  --secondary: #3498db;  /* Azul */
  --danger: #e74c3c;     /* Vermelho */
  --warning: #f39c12;    /* Laranja */
}
```

### Adicionar Nova Página

1. Crie `html/nova-pagina.html`
2. Crie `css/nova-pagina.css`
3. Crie `js/nova-pagina.js`
4. Adicione link na navegação em `style.css`

---

## 📱 Responsividade

O sistema é totalmente responsivo:

- **Mobile**: Até 768px
  - Layout em coluna única
  - Menu colapsável
  - Tamanho de toque adequado (44x44px)

- **Tablet**: 768px a 1024px
  - 2 colunas em grid
  - Navegação horizontal

- **Desktop**: Acima de 1024px
  - 3+ colunas
  - Máximo conforto visual

---

## 🔒 Segurança

**⚠️ Importante**: Este é um sistema de demonstração/protótipo.

### Considerações para Produção:
- ❌ **NÃO** use localStorage para senhas reais
- ✅ Implemente autenticação no servidor (JWT, Sessions)
- ✅ Use HTTPS/TLS para todas as comunicações
- ✅ Valide entrada no servidor (não apenas cliente)
- ✅ Implemente rate limiting para login
- ✅ Use hash bcrypt para senhas
- ✅ Adicione CSRF tokens em formulários
- ✅ Considere autenticação de dois fatores (2FA)

---

## 🌍 Deploy

### Opções de Deploy

#### 1. **GitHub Pages**
```bash
# Empurre para o repositório
git push origin main

# GitHub Pages servirá automaticamente
```

#### 2. **Netlify**
```bash
# Via CLI
npm install -g netlify-cli
netlify deploy --dir=.

# Ou arraste a pasta no painel
```

#### 3. **Vercel**
```bash
# Via CLI
npm i -g vercel
vercel
```

#### 4. **Servidor próprio**
- Copie arquivos para `/var/www/html` (Apache)
- Ou use Node.js com Express para mais controle

---

## 🐛 Troubleshooting

### Problema: Login não funciona
**Solução**: 
- Verifique se JavaScript está habilitado
- Abra DevTools (F12) para verificar erros
- Confirme a senha correta na tabela de credenciais

### Problema: Página não carrega corretamente
**Solução**:
- Limpe cache do navegador (Ctrl+Shift+Delete)
- Verifique conexão do servidor local
- Inspecione console para erros 404

### Problema: Estilos não aparecem
**Solução**:
- Verifique se arquivos CSS estão em `css/`
- Confirme caminhos relativos estão corretos
- Recarregue com Ctrl+Shift+R (hard refresh)

---

## 📞 Suporte e Contribuições

### Reportar Bugs
Crie uma issue descrevendo:
- Comportamento esperado
- Comportamento obtido
- Passos para reproduzir
- Screenshots (se aplicável)

### Contribuir
1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona minha feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

---

## 📊 Roadmap Futuro

- [ ] Backend com Node.js/Express
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Autenticação real com JWT
- [ ] API RESTful
- [ ] Sincronização em tempo real (WebSocket)
- [ ] Aplicativo mobile (React Native)
- [ ] Sistema de notificações
- [ ] Relatórios avançados com gráficos
- [ ] Integração com sistemas POS
- [ ] Multi-idioma (i18n)

---

## 📄 Licença

Este projeto está sob licença MIT. Consulte arquivo LICENSE para mais informações.

---

## 👤 Autor

**Desenvolvido em**: 2026  
**Versão**: 1.0.0  
**Status**: Ativo

---

## 📝 Changelog

### v1.0.0 (2026-05-30)
- ✅ Versão inicial com 7 páginas principais
- ✅ Sistema de autenticação por perfil
- ✅ Dashboard com estatísticas
- ✅ Calendário de lotes
- ✅ Design responsivo completo

---

## 💡 Dicas Úteis

### Para Desenvolvedores
- Use `console.log()` para debug
- DevTools (F12) mostra erros e warnings
- Inspecione elementos para ajustar CSS

### Para Usuários
- Use Enter no login para submeter
- Explore todas as seções do dashboard
- Role a página para ver mais conteúdo

---

**Obrigado por usar o Gestão de Estoque!** 🎉

Para mais informações ou dúvidas, consulte o desenvolvedor.
