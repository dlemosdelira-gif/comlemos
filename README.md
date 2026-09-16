# comlemos — Controle da loja

App simples para o controle do negócio (loja + distribuição para bares/mercadinhos).

## Módulo atual: Produtos & Preços

`index.html` é um app de página única, sem instalação, feito para uso em tablet:

- Cadastro de produtos por categoria (Bebidas, Doces, Salgados, Cigarros, Mercearia, Outros)
- Preço de custo e preço de venda, com margem calculada automaticamente
- Busca e filtro por categoria
- Dados sincronizados em tempo real via Firebase (Firestore)

## Módulo atual: Caixa Diário

`caixa.html` registra o fechamento de cada dia, substituindo as contas manuais de saldo:

- Lançamento por dia: venda na loja, venda na rua/entregas, retiradas e despesas
- Resultado do dia calculado automaticamente (entradas − saídas)
- Resumo com totais de vendas loja/rua, despesas e saldo acumulado do período
- Um lançamento por data (editar substitui o do dia), sincronizado via Firebase

## Módulo atual: Fiado

`fiado.html` controla as vendas a prazo para bares/mercadinhos:

- Cadastro de cliente (nome, endereço, telefone)
- Lançamento de "compra fiado" (aumenta a dívida) e "pagamento" (reduz a dívida)
- Saldo devedor calculado automaticamente por cliente, lista ordenada por quem deve mais
- Histórico completo de movimentações por cliente
- Card com o total a receber de todos os clientes
- Sincronizado via Firebase

Para usar, basta abrir `index.html`, `caixa.html` ou `fiado.html` no navegador (ou publicar como página estática, como no GitHub Pages) — há navegação entre as três telas no topo.

## Sincronização entre dispositivos (Firebase)

Todos os dados (produtos, caixa, fiado) ficam salvos no Firestore do projeto `comlemos-66e5f`, então qualquer alteração feita em um aparelho aparece automaticamente nos outros que tiverem o link aberto — não precisa recarregar a página.

As chaves de configuração ficam em `firebase-config.js` e são públicas por natureza (chave de identificação do app web, não uma senha). O acesso ao banco está em **modo de teste** (aberto, sem login), por escolha, já que o app não tem tela de login — qualquer pessoa com o link consegue ler e editar os dados. O modo de teste do Firestore expira automaticamente em ~30 dias; quando isso acontecer, será preciso voltar ao console do Firebase (Firestore → Regras) e definir regras permanentes (abertas ou, futuramente, com login).

## Próximos módulos planejados

- Contas a pagar / fornecedores
- Relatório mensal consolidado
