# Pass.in - Node.js 🖥👨🏽‍💻

O pass.in é uma aplicação de gestão de participantes em eventos presenciais.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

# Ferramentas
<p>Essa foram as ferramentas utilziadas na aplicação ⬇⬇⬇</p>

![NODE](https://img.shields.io/badge/nodejs-%2320232a.svg?style=for-the-badge&logo=node.js&logoColor=green)
![SQLITE](https://img.shields.io/badge/SQLite-%2320232a.svg?style=for-the-badge&logo=SQLite&logoColor=%2361DAFB)
![TYPESCRIPT](https://img.shields.io/badge/TypeScript-%2320232a.svg?style=for-the-badge&logo=typescript&logoColor=blue)
![ZOD](https://img.shields.io/badge/zod-%2320232a.svg?style=for-the-badge&logo=zod&logoColor=blue)
![PRISMA](https://img.shields.io/badge/PRISMA-%2320232a.svg?style=for-the-badge&logo=prisma&logoColor=blue)
![FASTIFY](https://img.shields.io/badge/fastify-%2320232a.svg?style=for-the-badge&logo=fastify&logoColor=white)




# Banco de Dados
<p>
  Nessa aplicação vamos utilizar banco de dados relacional (SQLite). Para ambiente de desenvolvimento seguiremos com o SQLite pela facilidade do ambiente.
</p>

![SQLite](https://img.shields.io/badge/SQLite-%2320232a.svg?style=for-the-badge&logo=SQLite&logoColor=%2361DAFB)

# Resumo

Nesse projeto foi desenvolvido uma aplicação back-end em Node.js, aplicação dos conceitos de API REST, utilizando TypeScript, Fastify como framework, integração do Prisma ORM + SQLite e Zod para validação de dados.

# Estrutura do banco (SQL)

```sql
-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL,
    "maximum_attendees" INTEGER
);

-- CreateTable
CREATE TABLE "attendees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "attendees_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "check_ins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attendeeId" INTEGER NOT NULL,
    CONSTRAINT "check_ins_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "attendees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "attendees_event_id_email_key" ON "attendees"("event_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "check_ins_attendeeId_key" ON "check_ins"("attendeeId");```
