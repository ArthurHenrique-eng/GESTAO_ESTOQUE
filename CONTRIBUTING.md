# CONTRIBUTING.md - Guia de Contribuição

Como contribuir com o projeto Gestão de Estoque.

---

## 🤝 Bem-vindo, Contribuidor!

Obrigado por considerar contribuir com o **Gestão de Estoque**. Este documento fornece diretrizes e instruções.

### Tipos de Contribuição

Você pode contribuir de várias formas:

- 🐛 **Reportar bugs**
- 💡 **Sugerir features**
- 📚 **Melhorar documentação**
- 🎨 **Melhorar design/UI**
- ⚡ **Otimizar performance**
- 🧪 **Adicionar testes**
- 🌐 **Traduzir para outro idioma**

---

## 📋 Código de Conduta

Todos os contribuidores devem:

- ✅ Ser respeitosos e inclusivos
- ✅ Fornecer feedback construtivo
- ✅ Focar no código, não na pessoa
- ✅ Respeitar opiniões diferentes
- ✅ Reportar comportamentos inapropriados

**Intolerância com**: Discriminação, assédio, abuso de qualquer tipo.

---

## 🚀 Como Começar

### 1. Fork o Repositório

```bash
# Abra o repositório no GitHub
# Clique "Fork" no canto superior direito
# Você terá sua cópia do projeto
```

### 2. Clone Localmente

```bash
# Clone seu fork
git clone https://github.com/seu-usuario/GESTAO_ESTOQUE.git

# Entre no diretório
cd GESTAO_ESTOQUE

# Configure upstream
git remote add upstream https://github.com/original-usuario/GESTAO_ESTOQUE.git
```

### 3. Crie uma Branch

```bash
# Atualize main
git fetch upstream
git checkout main
git merge upstream/main

# Crie branch com nome descritivo
git checkout -b fix/login-form-validation
# ou
git checkout -b feature/dark-mode
# ou
git checkout -b docs/api-documentation
```

**Convenção de nomes:**
- `fix/...` - Correção de bug
- `feature/...` - Nova feature
- `docs/...` - Documentação
- `refactor/...` - Refatoração
- `test/...` - Testes
- `chore/...` - Manutenção

---

## 🐛 Reportar Bugs

### Antes de Abrir Issue

- [ ] Verifique [Issues Existentes](https://github.com/usuario/GESTAO_ESTOQUE/issues)
- [ ] Pesquise documentação
- [ ] Teste em navegador diferente
- [ ] Limpe cache/localStorage

### Abrindo Issue de Bug

**Título claro e descritivo:**
```
❌ RUIM: "Algo não funciona"
✅ BOM: "Login falha quando role=null em localStorage"
```

**Descrição deve incluir:**

```markdown
## Descrição do Bug
[Descrição clara do problema]

## Passos para Reproduzir
1. Faça isso
2. Depois isso
3. Então isso

## Comportamento Esperado
[O que deveria acontecer]

## Comportamento Atual
[O que realmente acontece]

## Informações do Sistema
- Navegador: Chrome 120.0.0
- SO: Windows 11
- Versão do Sistema: 1.0.0

## Screenshots/Videos
[Anexe se relevante]

## Contexto Adicional
[Qualquer outro contexto importante]
```

---

## 💡 Sugerir Features

### Template de Feature

```markdown
## Descrição da Feature
[Descrição clara do que você quer adicionar]

## Caso de Uso
[Por que essa feature seria útil?]
[Para quem seria útil?]

## Solução Proposta
[Como você imaginaria a implementação?]

## Alternativas Consideradas
[Outras formas de resolver o problema]

## Dependências/Bloqueadores
[Existe algo que dependa disso?]

## Prototipo/Mockup
[Design, wireframe, etc, se houver]
```

---

## 🛠️ Desenvolvimento

### Configurar Ambiente

```bash
# Ter Node.js instalado (recomendado)
node --version  # >= 14.0.0

# Abrir projeto em editor
code .  # VS Code
```

### Estrutura do Projeto

```
GESTAO_ESTOQUE/
├── html/             # Arquivos HTML
├── css/              # Estilos
├── js/               # Scripts JavaScript
├── img/              # Imagens
├── README.md         # Documentação principal
├── TECHNICAL_GUIDE.md
├── USER_GUIDES.md
├── FAQ.md
└── CONTRIBUTING.md   # Este arquivo
```

### Padrões de Código

#### JavaScript

```javascript
// ✅ Use const por padrão
const value = 'example';

// ✅ Use arrow functions para callbacks
element.addEventListener('click', () => {
  handleClick();
});

// ✅ Use template literals
const message = `Hello, ${name}`;

// ✅ Use destructuring
const { role, password } = formData;

// ✅ Use nomes descritivos
const getUserRole = () => {
  return localStorage.getItem('userRole');
};

// ❌ Evite var
var oldStyle = 'deprecated';

// ❌ Evite nomes genéricos
const data = getData();

// ❌ Evite nesting profundo
if (a) { if (b) { if (c) { } } }
// Melhor: if (a && b && c) { }
```

#### CSS

```css
/* ✅ Use variáveis CSS */
:root {
  --primary-color: #2ecc71;
  --spacing: 1rem;
}

.component {
  color: var(--primary-color);
}

/* ✅ Mobile first */
.component {
  font-size: 14px;
  column: 1;
}

@media (min-width: 768px) {
  .component {
    font-size: 16px;
    column: 2;
  }
}

/* ✅ Use classes, não IDs */
.component { }

/* ❌ Evite !important */
.component {
  color: red !important; /* Ruim */
}

/* ❌ Evite cores hardcoded */
.component {
  color: #2ecc71; /* Se possível, use var() */
}

/* ❌ Evite margem/padding negativos */
margin: -10px; /* Use flexbox/grid em vez disso */
```

#### HTML

```html
<!-- ✅ Use tags semânticas -->
<header>Logo</header>
<main>Conteúdo principal</main>
<footer>Rodapé</footer>

<!-- ✅ Use aria-labels para acessibilidade -->
<button aria-label="Menu">☰</button>

<!-- ✅ Use alt text em imagens -->
<img src="logo.png" alt="Logo do Gestão de Estoque">

<!-- ❌ Evite tags genéricas -->
<div class="header"><!-- Use <header> --></div>
<div class="button"><!-- Use <button> --></div>

<!-- ❌ Evite atributos obsoletos -->
<font color="red"><!-- Use CSS --></font>
```

---

## 🧪 Testando Mudanças

### Teste Local

```bash
# Usar Live Server (VS Code)
# Clique direito em HTML → Open with Live Server

# Ou use Python
python -m http.server 8000
# Visite http://localhost:8000
```

### Checklist de Teste

Para cada mudança, teste:

- [ ] Funciona no Chrome
- [ ] Funciona no Firefox
- [ ] Funciona no Safari
- [ ] Funciona no Edge
- [ ] Layout responsivo (mobile)
- [ ] Layout responsivo (tablet)
- [ ] Layout responsivo (desktop)
- [ ] Não quebra outras páginas
- [ ] Console sem erros (F12)
- [ ] Performance aceitável
- [ ] Acessibilidade (Tab, Screen Reader)

### Testar Cada Perfil

```
Login com:
- Vendedor (vendedor123)
- Estoquista (estoque123)
- Administrativo (admin123)
```

Verifique se funcionalidades específicas do perfil funcionam.

---

## 📝 Commits

### Mensagens de Commit

**Formato:**
```
[tipo] descrição breve

Descrição mais detalhada se necessário.

Fixes #123  # Referencia issue
```

**Tipos:**
- `fix:` Correção de bug
- `feat:` Nova feature
- `docs:` Documentação
- `style:` Formatação, sem mudanças lógicas
- `refactor:` Refatoração sem mudanças externas
- `test:` Testes
- `chore:` Dependências, build, etc

**Exemplos:**

```
fix: corrigir validação de senha no login

Estoquista não conseguia fazer login com @ na senha.
Problema era escape incorreto de caracteres especiais.

Fixes #142
```

```
feat: adicionar filtro de data no relatório de vendas

Permite aos administradores filtrar vendas por período.
Adiciona input de data início/fim ao formulário de filtros.
```

```
docs: melhorar documentação de autenticação

Detalha fluxo de login e como estender para novos perfis.
Adiciona exemplos de código.
```

---

## 🔄 Fazendo Pull Request

### Antes de Abrir PR

- [ ] Sincronize com upstream
- [ ] Rebase commits (squash commits relacionados)
- [ ] Teste localmente
- [ ] Sem conflitos de merge
- [ ] Build passa sem erros
- [ ] Documentação atualizada

### Sincronizar com Upstream

```bash
git fetch upstream
git rebase upstream/main
# Se houver conflitos, resolva e continue
git rebase --continue
```

### Rebase Interativo (Squash)

```bash
# Ver últimos 3 commits
git log --oneline -3

# Rebase interativo
git rebase -i HEAD~3

# Editor abrirá, mude 'pick' para 'squash' para mesclar
# Salve e feche
```

### Push para seu Fork

```bash
git push origin fix/login-form-validation
```

### Abrir Pull Request

**No GitHub:**
1. Clique "Compare & Pull Request"
2. Verifique se está comparando branches corretos
3. Preencha template abaixo
4. Clique "Create Pull Request"

**Template PR:**

```markdown
## Descrição
[Descrição clara do que mudou]

## Tipo de Mudança
- [ ] Bug fix (mudança que corrige um issue)
- [ ] New feature (mudança que adiciona funcionalidade)
- [ ] Breaking change (mudança que quebra funcionalidade existente)
- [ ] Documentation update

## Como foi Testado?
[Descreva testes realizados]

- [ ] Testei em Chrome
- [ ] Testei em Firefox
- [ ] Testei responsividade mobile
- [ ] Testei com múltiplos perfis

## Checklist
- [ ] Meu código segue o estilo do projeto
- [ ] Revisei minhas próprias mudanças
- [ ] Comentei código complexo
- [ ] Atualizei documentação relevante
- [ ] Minhas mudanças não geram novos warnings

## Issues Relacionados
Fixes #123
Related to #456

## Screenshots (se aplicável)
[Cole imagens aqui]
```

---

## 🔍 Revisão de Código

### O que Esperar

- Feedback construtivo e respeitoso
- Discussão sobre abordagem
- Sugestões de melhoria
- Pode demorar alguns dias

### Respondendo a Reviews

```bash
# Faça as mudanças sugeridas
git add .
git commit -m "fix: address review comments"

# Push para mesma branch (atualiza PR automaticamente)
git push origin seu-branch
```

### Aprovação e Merge

Quando aprovado por maintainer:
```bash
# Merge via GitHub (botão verde)
# Ou via CLI
git push origin seu-branch
```

---

## 📚 Documentação

### Atualizar Documentação

Se sua mudança afeta funcionalidade:

1. Atualize `README.md` se necessário
2. Atualize `TECHNICAL_GUIDE.md` se técnica
3. Atualize `USER_GUIDES.md` se afeta usuários
4. Atualize `FAQ.md` se responde dúvida comum

### Sintaxe Markdown

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold** e *itálico*

- Lista item
- Outro item

1. Numerado
2. Próximo

[Link](https://exemplo.com)

```codigo```

![Imagem](url)

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

---

## 🎯 Áreas Prioritárias

Contribuições especialmente bem-vindas em:

### Bugs Conhecidos
- [ ] localStorage não sincroniza entre abas
- [ ] Calendário não renderiza em Edge antigo
- [ ] Performance em lista grande de estoque

### Features Solicitadas
- [ ] Autenticação com email
- [ ] Temas claro/escuro
- [ ] Suporte offline avançado
- [ ] Exportação em Excel
- [ ] Notificações em tempo real

### Documentação
- [ ] Guias de deployment
- [ ] Vídeos tutoriais
- [ ] Tradução para espanhol
- [ ] Exemplos de API (futuro)

---

## 💻 Desenvolvimento Avançado

### Adicionar Nova Página

1. **Crie HTML**
```bash
cp html/home.html html/minha-pagina.html
# Edite o conteúdo
```

2. **Crie CSS**
```bash
cp css/home.css css/minha-pagina.css
# Customize os estilos
```

3. **Crie JS**
```bash
cp js/home.js js/minha-pagina.js
# Adicione lógica
```

4. **Atualize Navegação**
```html
<!-- Em style.css ou header comum -->
<a href="minha-pagina.html">Minha Página</a>
```

5. **Teste e Commit**
```bash
git add .
git commit -m "feat: adicionar página minha-pagina"
git push origin feature/minha-pagina
```

---

## 📞 Comunicação

### Discussões
- [Abra Discussion](https://github.com/usuario/GESTAO_ESTOQUE/discussions)
- Para ideias, questões, etc.

### Issues
- Para bugs reportados
- Features solicitadas
- Documentação errada

### Email
- Para assuntos sensíveis
- Email do projeto: gestao.estoque@example.com

---

## 📖 Recursos para Aprender

### Desenvolvimento Web
- [MDN Web Docs](https://developer.mozilla.org)
- [JavaScript.info](https://javascript.info)
- [CSS-Tricks](https://css-tricks.com)

### Git
- [Git Book](https://git-scm.com/book)
- [GitHub Docs](https://docs.github.com)

### Boas Práticas
- [Clean Code](https://cleancode.org)
- [OWASP Top 10](https://owasp.org)

---

## 🎁 Reconhecimento

Contributors são reconhecidos em:
- README.md - Seção "Contributors"
- Release notes
- Página de créditos

---

## 📋 Licença

Ao contribuir, você concorda que suas contribuições são licenciadas sob MIT License.

---

## ❓ Dúvidas?

- Abra issue com tag `question`
- Comente em discussion relacionada
- Email: gestao.estoque@example.com

---

**Obrigado por contribuir! Sua ajuda torna este projeto melhor.** 🎉

---

**Últimas mudanças:** 2026-05-31  
**Versão:** 1.0.0
