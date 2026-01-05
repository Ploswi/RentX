# RentX – Clean Architecture com InversifyJS

Projeto acadêmico para demonstrar Clean Architecture, DDD básico, Dependency Inversion Principle (DIP)
e Inversão de Controle (IoC) utilizando Node.js, TypeScript e InversifyJS.

## Objetivo
Provar que a regra de negócio (Use Cases) é totalmente independente de infraestrutura,
permitindo alternar implementações apenas trocando o container de injeção de dependência.

## Arquitetura
- Domain: Entidades e contratos (interfaces)
- Application: Casos de uso (regras de negócio)
- Infra: Implementações concretas e containers IoC
- Adapters: Pontos de entrada (CLI)

## Containers
- container.prod.ts → usado pela aplicação real
- container.test.ts → usado nos testes unitários

## Executar testes
```bash
npm run test
```

## Executar aplicação (CLI)
```bash
npm run dev
```

## Conceitos aplicados
- Clean Architecture
- DDD
- IoC / DIP
- Testes unitários sem banco de dados