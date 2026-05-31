# FAQ & Troubleshooting - Gestão de Estoque

Perguntas frequentes e soluções de problemas comuns.

---

## ❓ Perguntas Frequentes

### Acesso e Login

#### P1: Esqueci minha senha, o que faço?
**R:** Como este é um sistema de demonstração, as senhas são fixas:
- Vendedor: `vendedor123`
- Estoquista: `estoque123`
- Administrativo: `admin123`

Em produção, contate seu administrador para reset de senha.

---

#### P2: Posso trocar minha senha?
**R:** No sistema atual, não. Senhas são armazenadas no código.

Para a versão de produção, essa funcionalidade será adicionada no perfil do usuário.

---

#### P3: O que significa cada perfil de usuário?
**R:** 
- **Vendedor**: Registra vendas e consulta estoque
- **Estoquista**: Gerencia movimentações de estoque
- **Administrativo**: Acesso total e relatórios

Veja `USER_GUIDES.md` para detalhes completos.

---

#### P4: Como faço logout?
**R:** 
1. Localize o link **"Sair"** no header
2. Clique nele
3. Você será redirecionado para a tela de login
4. Sua sessão será encerrada

---

### Funcionalidades

#### P5: Posso desfazer uma ação?
**R:** Depende da ação:
- **Venda registrada**: Sim, clique no histórico → "Cancelar"
- **Entrada de estoque**: Sim, clique em "Desfazer" ou registre saída
- **Configurações**: Sim, volte à página anterior

⚠️ Ações de exclusão são irreversíveis.

---

#### P6: Os dados são salvos automaticamente?
**R:** Sim! 
- Dados são salvos em `localStorage` imediatamente
- Não precisa clicar em "Salvar"
- Funciona offline (dados permanecem)

---

#### P7: Posso acessar de outro computador?
**R:** **Não**, porque dados estão em `localStorage` local.

Para acessar de múltiplos computadores, será necessário sincronizar com servidor (futuro).

---

#### P8: Quantos usuários podem estar online simultaneamente?
**R:** Ilimitado, pois não há servidor centralizando.

Em produção, será limitado pela capacidade do servidor.

---

### Relatórios e Dados

#### P9: Como exportar dados?
**R:** (Para versão com backend)

1. Vá para **"Gestão Administrativa"**
2. Clique em **"Exportar"**
3. Selecione dados e formato (Excel/PDF/CSV)
4. Download será iniciado

---

#### P10: Os relatórios refletem dados em tempo real?
**R:** Sim e não:
- ✅ Dados carregados são atuais
- ⏱️ Mas atualizam cada vez que você entra na página
- 🔄 Não há sincronização automática em tempo real

---

#### P11: Posso customizar relatórios?
**R:** Parcialmente. Você pode:
- Selecionar período
- Filtrar por vendedor/produto
- Escolher formato de export

Relatórios mais complexos requerem backend.

---

### Suporte Técnico

#### P12: O site não carrega, o que faço?
**R:** Tente nessa ordem:

1. **Limpe o cache**
   ```
   Ctrl + Shift + Delete
   Selecione "Arquivos de Imagem e Arquivos em Cache"
   Clique "Limpar Dados"
   ```

2. **Recarregue a página**
   ```
   Ctrl + Shift + R (hard refresh)
   ```

3. **Feche o navegador**
   ```
   Feche completamente
   Reabra
   Visite o site novamente
   ```

4. **Limpe localStorage**
   ```
   F12 (DevTools)
   Console
   localStorage.clear()
   Recarregue
   ```

---

#### P13: Recebo erro "localStorage is null"
**R:** Isso significa:
- localStorage está desabilitado
- Ou você está em modo privado/incógnito

**Solução:**
- Desabilite modo privado
- Ative cookies no navegador

**Configuração (Firefox):**
- about:preferences → Privacidade → Histórico
- Mude para "Lembrar histórico"

**Configuração (Chrome):**
- ⋯ → Configurações → Privacidade
- Certifique-se que cookies estão habilitados

---

#### P14: Estou em tela branca/em branco
**R:** Página pode não ter carregado completamente.

1. Aguarde 3-5 segundos
2. Recarregue (F5)
3. Se persistir, verifique console:
   - F12 → Aba "Console"
   - Veja se há erros vermelhos
   - Reporte erros com screenshot

---

#### P15: O CSS não está carregando (sem estilos)
**R:** Arquivo CSS não foi encontrado.

Causas:
- ❌ Servidor local não está rodando
- ❌ Caminho relativo está errado
- ❌ Arquivo foi movido/deletado

**Solução:**
1. Verifique se servidor está ativo
2. Confirme estrutura de pastas (html/, css/, js/)
3. Recarregue página (não ctrl+shift+r)

---

#### P16: Botões não funcionam ao clicar
**R:** JavaScript pode estar desabilitado.

**Habilitar JavaScript:**

**Chrome:**
- Configurações → Privacidade → Configurações de Site → JavaScript
- Permitir que sites executem JavaScript

**Firefox:**
- about:config
- Procure "javascript.enabled"
- Certifique-se que está `true`

---

### Dados e Privacidade

#### P17: Meus dados são seguros?
**R:** No sistema atual:
- ⚠️ Dados são armazenados localmente (seu computador)
- ⚠️ Não há criptografia
- ⚠️ Senhas estão em código-aberto

**Recomendação:** Use apenas para desenvolvimento/teste.

Para produção, implemente:
- ✅ HTTPS/TLS
- ✅ Autenticação servidor
- ✅ Hash de senhas
- ✅ Criptografia de dados sensíveis

---

#### P18: Como deletar meus dados?
**R:** 

1. **Limpar localStorage:**
   ```javascript
   localStorage.clear()
   ```

2. **Via DevTools:**
   - F12 → Application
   - Local Storage → site
   - Clique direito → Delete All

3. **Limpar cookies:**
   - Configurações → Privacidade
   - Limpar Dados

---

#### P19: Posso fazer backup dos dados?
**R:** Sim, manualmente:

```javascript
// Exportar localStorage
const data = localStorage;
const backup = JSON.stringify(data);
console.log(backup);
// Copie e salve em arquivo .json
```

**Importar:**
```javascript
// Cole e execute
const backup = JSON.parse('{"chave":"valor"}');
Object.entries(backup).forEach(([k,v]) => {
  localStorage.setItem(k, v);
});
```

---

### Navegadores

#### P20: Qual navegador é recomendado?
**R:** Todos modernos funcionam:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Não recomendado:**
- ❌ Internet Explorer (obsoleto)
- ❌ Navegadores muito antigos

---

#### P21: Funciona no celular?
**R:** Sim! Totalmente responsivo:
- ✅ iPhone/iPad (Safari)
- ✅ Android (Chrome, Firefox)
- ✅ Tablets
- ✅ Notebooks

Layout adapta para tela pequena automaticamente.

---

#### P22: E em tablet?
**R:** Sim, funciona perfeitamente!

Layout otimizado para:
- iPad: 2 colunas
- Android tablet: 2-3 colunas
- Mantém usabilidade

---

### Performance

#### P23: O site está lento, como otimizar?
**R:** Tente:

1. **Limpe cache/cookies**
   - Libera espaço na memória
   - Pode ter dados corrompidos

2. **Feche abas extras**
   - Cada aba consome RAM
   - Mantenha apenas necessário

3. **Reinicie navegador**
   - Libera memória
   - Recarrega extensões

4. **Desabilite extensões**
   - Algumas desaceleram
   - Teste com modo privado

5. **Atualize o navegador**
   - Melhorias de performance
   - Segurança aprimorada

---

#### P24: Estou recebendo avisos "Este site é lento"
**R:** Esse aviso aparece se:
- Página demora >3 segundos
- Muitos scripts rodando
- Imagens grandes carregando

**Em produção**, otimizações serão implementadas:
- Compressão de assets
- Cache de servidor
- Code splitting

---

### Extensões e Plugins

#### P25: Posso usar extensões do navegador?
**R:** Sim, algumas são úteis:
- ✅ **ColorZilla**: Inspetor de cores
- ✅ **WhatFont**: Identifica fontes
- ✅ **Lighthouse**: Analisa performance
- ✅ **Accessibility Inspector**: Verifica acessibilidade

---

## 🔧 Troubleshooting Avançado

### Não consigo fazer login

**Sintoma**: Botão "Entrar" não funciona

**Checklist**:
1. [ ] JavaScript está habilitado? (F12 → Console)
2. [ ] Você digitou a senha correta?
3. [ ] localStorage está habilitado?
4. [ ] Tentou outro navegador?

**Se nenhum funcionar**:
```javascript
// No console (F12)
// Limpe tudo
localStorage.clear();
sessionStorage.clear();
// Recarregue
window.location.reload();
```

---

### Dados sumiram

**Sintoma**: localStorage.clear() foi executado ou navegador foi atualizado

**Recuperação**:
- ❌ Infelizmente não há backup automático
- ✅ Se salvou manualmente, restaure usando script anterior

**Prevenção futura**:
- Use backend com sincronização
- Implementar backup automático
- Versionamento de dados

---

### Múltiplos perfis logados

**Problema**: Diferentes usuários no mesmo computador

**Solução**:
```javascript
// Cada navegador tem localStorage isolado
// Use diferentes navegadores:
// - Chrome: Vendedor
// - Firefox: Estoquista
// - Edge: Administrativo

// Ou use modo privado/incógnito
// Cada sessão tem localStorage vazio
```

---

### Seletor de Perfil Congelado

**Sintoma**: Dropdown não abre ou está travado

**Solução**:
1. Recarregue (F5)
2. Hard refresh (Ctrl+Shift+R)
3. Teste em outro navegador
4. Verifique se é problema de CSS

```javascript
// Teste no console
document.getElementById('role-select').disabled = false;
```

---

### Calendário não mostra lotes

**Sintoma**: Página do calendário está vazia

**Causas possíveis**:
1. Dados não carregaram
2. Lotes não têm datas configuradas
3. Script de calendário não iniciou

**Verificação**:
```javascript
// Console
const lotes = localStorage.getItem('lotes');
console.log(lotes); // Deve mostrar dados JSON
```

---

## 📚 Recursos Adicionais

### Documentação Completa
- [`README.md`](./README.md) - Visão geral e início
- [`TECHNICAL_GUIDE.md`](./TECHNICAL_GUIDE.md) - Documentação técnica
- [`USER_GUIDES.md`](./USER_GUIDES.md) - Guias por perfil

### Ferramentas Úteis

| Ferramenta | Uso |
|-----------|-----|
| DevTools (F12) | Debug e inspeção |
| Network tab | Monitorar requisições |
| Console | Executar JavaScript |
| Lighthouse | Análise de performance |
| WAVE | Acessibilidade |

### Links Úteis

- [MDN Web Docs](https://developer.mozilla.org)
- [JavaScript Info](https://javascript.info)
- [CSS Tricks](https://css-tricks.com)
- [Web Accessibility](https://www.w3.org/WAI/)

---

## 📧 Contacte-nos

Não encontrou sua pergunta?

### Opções de Suporte

1. **Email**: support@gestaoestoque.com
2. **Issues GitHub**: [Abrir Issue](https://github.com/seu-usuario/GESTAO_ESTOQUE/issues)
3. **Slack**: #suporte-gestao-estoque
4. **Presencial**: Quarta-feira 14:00-15:00

**Tempo de resposta:**
- ⚡ Bug crítico: < 1 hora
- 🚀 Bug menor: < 4 horas
- 💬 Dúvida: < 24 horas

---

## ✅ Checklist de Resolução

Ao contatar suporte, tenha pronto:

- [ ] Navegador e versão (Chrome 120)
- [ ] Sistema operacional (Windows 11)
- [ ] O que você estava tentando fazer
- [ ] Exatamente o que aconteceu
- [ ] Screenshot ou vídeo (se possível)
- [ ] Passos para reproduzir o problema
- [ ] Tentativas de solução (se houver)
- [ ] Console errors (F12 → Console)

---

## 🚀 Próximas Melhorias

Com base em feedback de usuários:

- [ ] Autenticação com email
- [ ] Recuperação de senha
- [ ] Two-Factor Authentication (2FA)
- [ ] Sincronização em nuvem
- [ ] Notificações em tempo real
- [ ] Aplicativo mobile nativo
- [ ] Suporte offline avançado
- [ ] Temas (claro/escuro)

---

**Última atualização:** 2026-05-31  
**Versão:** 1.0.0

Obrigado por usar Gestão de Estoque! Se este guia foi útil, compartilhe com sua equipe. 🎉
