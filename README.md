# comlemos — Controle da loja

App simples para o controle do negócio (loja + distribuição para bares/mercadinhos).

## Módulo atual: Produtos & Preços

`index.html` é um app de página única, sem instalação, feito para uso em tablet:

- Cadastro de produtos por categoria (Bebidas, Doces, Salgados, Cigarros, Mercearia, Outros)
- Preço de custo e preço de venda, com margem calculada automaticamente
- Busca e filtro por categoria
- Dados salvos no próprio navegador (localStorage), funciona offline

## Módulo atual: Caixa Diário

`caixa.html` registra o fechamento de cada dia, substituindo as contas manuais de saldo:

- Lançamento por dia: venda na loja, venda na rua/entregas, retiradas e despesas
- Resultado do dia calculado automaticamente (entradas − saídas)
- Resumo com totais de vendas loja/rua, despesas e saldo acumulado do período
- Um lançamento por data (editar substitui o do dia), dados salvos no navegador (offline)

Para usar, basta abrir `index.html` ou `caixa.html` no navegador do tablet (ou publicar como página estática) — há navegação entre as duas telas no topo.

## Próximos módulos planejados

- Controle de fiado por cliente (bares/mercadinhos)
