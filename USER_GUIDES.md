# Guias de Usuário - Gestão de Estoque

Manuais específicos para cada perfil de usuário.

---

## 📚 Índice de Perfis

1. [Vendedor](#-vendedor)
2. [Estoquista](#-estoquista)
3. [Administrativo](#-administrativo)

---

## 👤 Vendedor

### Credenciais de Acesso
- **Usuário**: Vendedor
- **Senha**: vendedor123

### Visão Geral do Perfil

Como vendedor, você tem acesso a ferramentas para:
- ✅ Visualizar dados de vendas em tempo real
- ✅ Identificar clientes VIP
- ✅ Consultar estoque disponível
- ✅ Acessar histórico de vendas
- ✅ Ver produtos em destaque

**Você NÃO pode:**
- ❌ Modificar estoque diretamente
- ❌ Gerar relatórios administrativos
- ❌ Acessar dados financeiros completos

### Navegação Principal

```
Dashboard (Início)
├── Vendas em Tempo Real
├── Mapa de Estoque (consulta)
├── Novidades em Destaque
├── Calendário de Lotes
└── Sair
```

### Workflows Principais

#### 1️⃣ Consultar Estoque Disponível

1. Clique em **"Mapa de Estoque"** no dashboard
2. Procure o produto desejado
3. Verifique quantidade disponível
4. Veja data de validade (cor verde = ok)
5. Se vermelho, confirme com estoquista

#### 2️⃣ Registrar Venda

1. Vá para **"Vendas em Tempo Real"**
2. Clique em **"Nova Venda"**
3. Selecione o produto
4. Insira quantidade
5. Informe cliente (se VIP)
6. Confirme venda

**Dica**: O sistema ajusta estoque automaticamente!

#### 3️⃣ Acompanhar Comissões

1. Dashboard mostra **"Vendas do Dia"**
2. Acesse **"Vendas em Tempo Real"**
3. Role para **"Meu Histórico"**
4. Veja comissão acumulada

#### 4️⃣ Verificar Produtos em Destaque

1. Clique em **"Novidades em Destaque"**
2. Veja produtos com maior rotatividade
3. Concentre esforços nesses itens
4. Use indicadores de popularidade

### Dicas e Melhores Práticas

| Dica | Benefício |
|------|-----------|
| Verifique estoque ANTES de prometer entrega | Evita desentendimentos |
| Foque em produtos vermelhos (top vendas) | Aumenta sua comissão |
| Consulte clientes VIP periodicamente | Manutenção de relacionamento |
| Atente a alertas de validade | Evita venda de produtos vencidos |

### Troubleshooting

**P: Não vejo o estoque atualizado**
R: Aguarde 5 minutos para sincronização. Se persistir, contate estoquista.

**P: Como reverter uma venda registrada?**
R: Clique na venda em histórico → "Cancelar" → Confirme.

**P: Posso ver dados de outros vendedores?**
R: Não, por segurança você só vê suas vendas.

---

## 📦 Estoquista

### Credenciais de Acesso
- **Usuário**: Estoquista
- **Senha**: estoque123

### Visão Geral do Perfil

Como estoquista, você gerencia:
- ✅ Entradas e saídas de estoque
- ✅ Monitorar níveis mínimos
- ✅ Alertar sobre validades próximas
- ✅ Registrar movimentações
- ✅ Organizar armazém

**Você NÃO pode:**
- ❌ Registrar vendas
- ❌ Acessar dados financeiros
- ❌ Mudar configurações do sistema

### Navegação Principal

```
Dashboard (Início)
├── Mapa de Estoque (gestão)
├── Calendário de Lotes
├── Novidades em Destaque
├── Estoque (consulta rápida)
└── Sair
```

### Workflows Principais

#### 1️⃣ Registrar Entrada de Estoque

1. Vá para **"Mapa de Estoque"**
2. Clique em **"Nova Entrada"**
3. Selecione produto
4. Informe quantidade
5. Escaneie código de lote (se tiver)
6. Defina data de validade
7. Confirme entrada

#### 2️⃣ Alertar Produtos com Baixo Estoque

1. Dashboard mostra **"Alertas de Estoque"**
2. Cada alerta em vermelho precisa de reposição
3. Clique no alerta
4. Veja **"Sugestão de Reposição"**
5. Contate vendedor ou gerente

#### 3️⃣ Gerenciar Validades (Crítico!)

1. Acesse **"Calendário de Lotes"**
2. Veja visual com código de cores:
   - 🟢 Verde: Seguro (>30 dias)
   - 🟡 Amarelo: Atenção (7-30 dias)
   - 🔴 Vermelho: Crítico (<7 dias)
3. Clique em lotes amarelos/vermelhos
4. **Ações**:
   - Destacar para promoção
   - Reservar para cliente especial
   - Ou preparar para descarte

#### 4️⃣ Registrar Saída de Estoque (Venda)

1. Após venda registrada pelo vendedor
2. Sistema notifica em **"Pendências"**
3. Confirme a saída (reduz estoque)
4. Marque como "Processada"

**Importante**: Saídas podem ser:
- Venda (reduz estoque)
- Dano/Perda (reduz com motivo)
- Devolução (aumenta estoque)

#### 5️⃣ Gerar Relatório de Movimentação

1. Vá para **"Estoque"**
2. Clique em **"Filtros"**
3. Selecione período (ex: últimos 7 dias)
4. Clique em **"Gerar Relatório"**
5. Exporte em Excel ou PDF

### Checklist Diário

- [ ] **Manhã**: Revisar alertas (red/yellow)
- [ ] **Manhã**: Verificar validades próximas
- [ ] **Meio-dia**: Processar entradas pendentes
- [ ] **Tarde**: Conferir saídas da venda
- [ ] **Fim do dia**: Gerar relatório de movimento
- [ ] **Fim do dia**: Documentar desvios

### Dicas e Melhores Práticas

| Dica | Benefício |
|------|-----------|
| Use FIFO (First In, First Out) | Minimiza perdas por validade |
| Verifique lotes ao receber | Detecta problemas cedo |
| Organize por categoria | Agiliza busca e inventário |
| Reporte desvios imediatamente | Permite correções rápidas |

### Níveis Mínimos Recomendados

| Categoria | Mínimo | Máximo |
|-----------|--------|--------|
| Chás populares | 20 | 100 |
| Chás premium | 5 | 30 |
| Grãos comuns | 30 | 150 |
| Blends especiais | 3 | 20 |

### Troubleshooting

**P: Lote venceu, o que fazer?**
R: Marque como "Descarte" no sistema. Preserve documentação para auditoria.

**P: Quantidade não bate com a contagem física**
R: Clique em "Ajustar Contagem" → justifique desvio → reavalie se há furtos.

**P: Como criar um novo produto?**
R: Contate administrativo. Você pode sugerir em "Solicitações".

---

## ⚙️ Administrativo

### Credenciais de Acesso
- **Usuário**: Administrativo
- **Senha**: admin123

### Visão Geral do Perfil

Como administrador, você possui acesso completo para:
- ✅ Gerar relatórios financeiros
- ✅ Gerenciar usuários e permissões
- ✅ Configurar sistema
- ✅ Visualizar KPIs e métricas
- ✅ Exportar dados
- ✅ Aprovar operações críticas

**Responsabilidades:**
- 👁️ Supervisão geral da operação
- 📊 Análise de desempenho
- 🔧 Manutenção do sistema
- 📋 Conformidade e auditoria

### Navegação Principal

```
Dashboard (Início)
├── Gestão Administrativa
├── Vendas (relatórios)
├── Estoque (auditoria)
├── Calendário de Lotes
├── Novidades em Destaque
└── Sair
```

### Workflows Principais

#### 1️⃣ Gerar Relatório de Vendas

1. Vá para **"Gestão Administrativa"**
2. Clique em **"Relatórios"** → **"Vendas"**
3. Configure filtros:
   - Período (data início/fim)
   - Vendedor (opcional)
   - Produto (opcional)
4. Clique em **"Gerar"**
5. Análise disponível em:
   - Tabela resumida
   - Gráficos
   - Exportar CSV/PDF

#### 2️⃣ Criar Novo Usuário

1. Vá para **"Gestão Administrativa"**
2. Clique em **"Usuários"** → **"Novo Usuário"**
3. Preencha:
   - Nome completo
   - Email
   - Perfil (vendedor/estoquista/admin)
   - Senha inicial
4. Sistema envia convite por email
5. Usuário muda senha no primeiro login

#### 3️⃣ Configurar Níveis Mínimos de Estoque

1. Acesse **"Gestão Administrativa"**
2. Clique em **"Configurações"** → **"Estoque"**
3. Para cada produto:
   - Defina "Quantidade Mínima"
   - Sistema alerta quando < mínimo
   - Recomendação: 20% da média de venda

#### 4️⃣ Analisar KPIs do Dia

Dashboard mostra em tempo real:

| KPI | Interpretação | Ação |
|-----|-------------------|------|
| **Vendas do Dia** | Total em R$ | Comparar com meta |
| **Itens Alertas** | Produtos c/ baixo estoque | Autorizar reposição |
| **Lotes Críticos** | Vencimento < 7 dias | Destacar/promover |
| **Taxa Devolução** | % de vendas devolvidas | Se >5%, investigar |

#### 5️⃣ Gerar Auditoria de Estoque

1. Vá para **"Gestão Administrativa"**
2. Clique em **"Auditoria"** → **"Estoque"**
3. Selecione período
4. Sistema compara:
   - Registros de entrada
   - Registros de saída
   - Desvios
5. Gere relatório com desvios

#### 6️⃣ Configurar Permissões de Usuário

1. Vá para **"Usuários"**
2. Clique no usuário
3. Ajuste permissões por seção:
   - 📊 Vendas: Ver/Editar
   - 📦 Estoque: Ver/Editar
   - 📅 Calendário: Ver/Editar
4. Salve

#### 7️⃣ Exportar Dados Completos

1. Vá para **"Gestão Administrativa"**
2. Clique em **"Exportação"**
3. Selecione dados:
   - Todos os produtos
   - Histórico de vendas
   - Histórico de estoque
   - Usuários e acessos
4. Escolha formato: Excel, CSV, JSON
5. Download gerado

### Relatórios Disponíveis

#### Relatório de Vendas
```
Período: Jan-Dez 2026
├── Total: R$ 150.000
├── Ticket Médio: R$ 250
├── Produto #1: Chá Oolong
│   ├── Quantidade: 500 un
│   └── Receita: R$ 25.000
└── Taxa Crescimento: +15%
```

#### Relatório de Estoque
```
Data: 31/05/2026
├── Total de Itens: 128
├── Valor do Estoque: R$ 45.000
├── Itens com Baixo Estoque: 5
├── Itens Vencidos: 0
└── Disponibilidade Média: 85%
```

#### Relatório de Performance
```
Período: Últimos 30 dias
├── Vendedor #1: R$ 12.000 (+10%)
├── Vendedor #2: R$ 10.500 (+5%)
├── Produto Mais Vendido: Chá Premium
├── Margem de Lucro: 35%
└── Taxa de Satisfação: 4.8/5
```

### Configurações Importantes

#### Segurança
- [ ] Estabeleça senhas fortes (8+ caracteres)
- [ ] Habilite autenticação de dois fatores
- [ ] Revise acessos mensalmente
- [ ] Monitore logs de atividade

#### Operacional
- [ ] Defina metas mensais de venda
- [ ] Configure alertas de validade (dias antes)
- [ ] Padronize nomes de produtos
- [ ] Backup automático (diário)

#### Financeiro
- [ ] Reconciliar vendas vs. caixa
- [ ] Verificar margens de lucro
- [ ] Análise de custos
- [ ] Previsão de fluxo de caixa

### Checklist de Administrador

**Diário**
- [ ] Revisar KPIs principais
- [ ] Verificar alertas críticos
- [ ] Confirmar transações grandes

**Semanal**
- [ ] Gerar relatório de vendas
- [ ] Revisar estoque vs. validade
- [ ] Analisar performance de vendedores
- [ ] Atualizar configurações se necessário

**Mensal**
- [ ] Auditoria completa de estoque
- [ ] Reconciliação financeira
- [ ] Análise de tendências
- [ ] Planejamento do mês seguinte

### Dicas de Gestão

| Estratégia | Benefício |
|-----------|-----------|
| Usar dashboard como base de decisões | Tomar decisões informadas |
| Revisar relatórios históricos | Identificar padrões |
| Comunicar resultados à equipe | Alinha objetivos |
| Premiar vendedores top | Motiva equipe |
| Fazer inventário trimestral | Detecta desvios cedo |

### Troubleshooting

**P: Como restaurar dados de um backup?**
R: Acesse "Configurações" → "Backup" → "Restaurar" → Selecione data.

**P: Um usuário perdeu acesso, como reativar?**
R: Vá para "Usuários" → Selecione usuário → "Reativar" → Resetar senha.

**P: Preciso de um relatório personalizado?**
R: Use "Filtros Avançados" ou exporte dados e processe em Excel.

---

## 🔐 Segurança para Todos os Perfis

### Boas Práticas

✅ **Faça:**
- Faça logout ao sair do computador
- Use senha única por pessoa
- Reporte atividades suspeitas
- Confirme operações críticas

❌ **Não faça:**
- Compartilhe sua senha
- Deixe computador desbloqueado
- Use "Lembrar senha" em computadores públicos
- Clique em links suspeitos

### Timeout de Segurança

- Session expira após **30 minutos** de inatividade
- Você será redirecionado para login
- Dados pendentes podem ser perdidos
- Salve com frequência em seções longas

---

## 📞 Suporte

**Problema com seu acesso?**
- Contate admin local
- Inclua: seu nome, perfil, problema específico
- Tempo de resolução: 1-2 horas úteis

**Dúvida sobre funcionalidade?**
- Consulte seção "Dicas" do seu perfil
- Ou contate supervisor

**Bug ou comportamento estranho?**
- Anote exatamente o que aconteceu
- Inclua horário
- Contate desenvolvedor com print-screen

---

**Última atualização:** 2026-05-31  
**Versão:** 1.0.0

Boa sorte na sua operação! 🎯
