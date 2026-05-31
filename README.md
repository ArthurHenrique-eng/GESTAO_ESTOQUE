# GESTÃO DE ESTOQUE - SISTEMA WEB

`Desenvolvedor Full Stack | Sistema Integrado de Gestão | HTML • CSS • JavaScript`

Um sistema de gestão de estoque moderno e responsivo para lojas de chás e grãos especiais. Desenvolvido com foco em usabilidade, performance e interfaces intuitivas para diferentes perfis de usuário.

---

## 📌 Sobre o Projeto

Gestão de Estoque é uma aplicação web que oferece **visibilidade completa** sobre operações de vendas, controle de estoque, gerenciamento de lotes e relatórios administrativos. Ideal para pequenas e médias lojas que buscam organizar suas operações em um único lugar.

### ✨ Funcionalidades Principais

- 🔐 **Autenticação por Perfil**: Vendedor, Estoquista, Administrativo
- 📊 **Dashboard em Tempo Real**: Visualização de vendas, alertas e atividades
- 💳 **Gestão de Vendas**: Rastreamento de pedidos e clientes VIP
- 📦 **Mapa de Estoque**: Controle total de entradas, validade e níveis mínimos
- ✨ **Novidades**: Gerenciamento de produtos em destaque
- 📅 **Calendário de Lotes**: Gestão inteligente de prazos de validade
- ⚙️ **Administrativo**: Relatórios, finanças e gerenciamento de equipe

---

## 🚀 Quick Start

### Requisitos
```
✓ Navegador moderno (Chrome, Firefox, Safari, Edge)
✓ Servidor web local (Live Server recomendado)
```

### Instalação em 3 Passos

```bash
# 1️⃣ Clone o repositório
git clone https://github.com/seu-usuario/GESTAO_ESTOQUE.git
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
├── 📄 html/
│   ├── index.html              # Tela de login
│   ├── home.html               # Dashboard principal
│   ├── vendas.html             # Gestão de vendas
│   ├── estoque.html            # Mapa de estoque
│   ├── novidades.html          # Produtos em destaque
│   ├── calendario.html         # Calendário de lotes
│   └── administrativo.html     # Gestão administrativa
│
├── 🎨 css/
│   ├── style.css               # Estilos globais
│   ├── index.css               # Estilos do login
│   ├── home.css                # Estilos do dashboard
│   ├── vendas.css              # Estilos de vendas
│   ├── estoque.css             # Estilos de estoque
│   ├── novidades.css           # Estilos de novidades
│   ├── calendario.css          # Estilos do calendário
│   └── administrativo.css      # Estilos administrativos
│
├── ⚡ js/
│   ├── script.js               # Lógica de autenticação
│   ├── home.js                 # Lógica do dashboard
│   ├── vendas.js               # Lógica de vendas
│   ├── estoque.js              # Lógica de estoque
│   ├── novidades.js            # Lógica de novidades
│   ├── calendario.js           # Lógica do calendário
│   └── administrativo.js       # Lógica administrativa
│
├── 🖼️ img/                      # Imagens e ícones
├── 📚 README.md                # Este arquivo
├── 📖 TECHNICAL_GUIDE.md       # Guia técnico
├── 👤 USER_GUIDES.md           # Manuais por perfil
├── ❓ FAQ.md                    # Perguntas frequentes
└── 🤝 CONTRIBUTING.md          # Guia de contribuição
```

---

## 🎯 Perfis de Usuário

### 👨‍💼 Vendedor
- Visualizar dados de vendas em tempo real
- Consultar disponibilidade de estoque
- Acompanhar histórico de vendas
- Ver produtos em destaque

### 📦 Estoquista  
- Registrar entradas e saídas
- Monitorar níveis mínimos
- Gerenciar prazos de validade
- Processar devolução

### ⚙️ Administrativo
- Gerar relatórios completos
- Gerenciar usuários
- Configurar sistema
- Análise de KPIs
- Exportar dados

---

## 💻 Tecnologias Utilizadas

```
Frontend
├── HTML5          → Semântica e estrutura
├── CSS3           → Design responsivo (Flexbox, Grid)
└── JavaScript ES6 → Lógica e interatividade

Armazenamento
└── localStorage   → Persistência local

Compatibilidade
├── ✅ Chrome 90+
├── ✅ Firefox 88+
├── ✅ Safari 14+
└── ✅ Edge 90+
```

---

## 📖 Documentação

| Documento | Descrição |
|-----------|-----------|
| **README.md** | Você está aqui! Visão geral e início rápido |
| **TECHNICAL_GUIDE.md** | Arquitetura, padrões e stack técnico |
| **USER_GUIDES.md** | Manuais específicos para cada perfil |
| **FAQ.md** | Perguntas frequentes e troubleshooting |
| **CONTRIBUTING.md** | Como contribuir com o projeto |

---

## 🔐 Segurança

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

### 🛡️ Recomendações para Produção

```
✓ Implementar backend com Node.js/Express
✓ Usar autenticação JWT
✓ Criptografar senhas com bcrypt
✓ HTTPS/TLS obrigatório
✓ Validação no servidor (não apenas cliente)
✓ Rate limiting no login
✓ Suporte a 2FA
✓ Auditoria de acessos
```

Consulte [`TECHNICAL_GUIDE.md`](./TECHNICAL_GUIDE.md) para detalhes completos.

---

## 📱 Responsividade

Totalmente otimizado para todos os dispositivos:

```
📱 Mobile     (< 768px)   → Layout em coluna única
📊 Tablet     (768-1024px) → 2 colunas
🖥️ Desktop    (> 1024px)  → 3+ colunas
```

Teste em:
- iPhone/iPad
- Android
- Tablets
- Notebooks

---

## 🎨 Design & Componentes

### Paleta de Cores
```css
--primary:   #2ecc71  /* Verde */
--secondary: #3498db  /* Azul */
--danger:    #e74c3c  /* Vermelho */
--warning:   #f39c12  /* Laranja */
```

### Componentes Reutilizáveis
```html
<!-- Buttons -->
<button class="primary-button">Ação Principal</button>
<button class="ghost-button">Ação Secundária</button>

<!-- Cards -->
<article class="stat-card">...</article>
<article class="mini-card">...</article>
```

---

## 🚀 Deploy

### GitHub Pages
```bash
git push origin main
# Disponível automaticamente em github.com/seu-usuario/GESTAO_ESTOQUE
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --dir=.
```

### Servidor Próprio
```bash
# Copiar para /var/www/html (Apache)
cp -r * /var/www/html/

# Ou usar Node.js + Express para mais controle
```

---

## 🤝 Contribuindo

Quer contribuir? Ótimo! Veja [`CONTRIBUTING.md`](./CONTRIBUTING.md).

```bash
# 1. Faça um fork
# 2. Crie uma branch (git checkout -b feature/sua-feature)
# 3. Commit (git commit -am 'Adiciona feature')
# 4. Push (git push origin feature/sua-feature)
# 5. Abra um Pull Request
```

---

## ❓ Dúvidas Frequentes

**P: Como resetar a senha?**  
R: Veja [`FAQ.md`](./FAQ.md) para soluções de autenticação.

**P: Como criar um novo usuário?**  
R: Consulte [`USER_GUIDES.md`](./USER_GUIDES.md) - seção Administrativo.

**P: O site está lento, o que fazer?**  
R: Limpe cache (Ctrl+Shift+Delete) e tente em outro navegador.

---

## 🐛 Reportar Bugs

Encontrou um bug? [Abra uma issue](https://github.com/seu-usuario/GESTAO_ESTOQUE/issues)

**Inclua:**
- Navegador e versão
- O que você estava fazendo
- O comportamento esperado
- O comportamento obtido
- Screenshots (se possível)

---

## 📊 Roadmap

- [ ] Backend com Node.js/Express
- [ ] Banco de dados (PostgreSQL)
- [ ] Autenticação real com JWT
- [ ] API RESTful
- [ ] WebSockets para tempo real
- [ ] App mobile (React Native)
- [ ] Notificações push
- [ ] Relatórios avançados
- [ ] Integração com POS
- [ ] Suporte multi-idioma

---

## 📞 Contato & Suporte

```
📧 Email: seu-email@example.com
🐙 GitHub: github.com/seu-usuario
💼 LinkedIn: linkedin.com/in/seu-perfil
```

### Tempo de Resposta
- 🚨 Bug crítico: < 1 hora
- 🐛 Bug menor: < 4 horas  
- 💬 Dúvida: < 24 horas

---

## 📄 Licença

Este projeto está sob licença **MIT**. Veja [`LICENSE`](./LICENSE) para detalhes.

---

## ✨ Agradecimentos

- Inspirado em sistemas de gestão profissionais
- Desenvolvido com foco em UX/UI
- Comunidade open-source por ferramentas e recursos

---

<div align="center">

### Desenvolvido com ❤️ em 2026

**Status:** Ativo | **Versão:** 1.0.0 | **Última atualização:** 31/05/2026

[⭐ Deixe uma estrela se este projeto foi útil!](https://github.com/seu-usuario/GESTAO_ESTOQUE)

</div>
