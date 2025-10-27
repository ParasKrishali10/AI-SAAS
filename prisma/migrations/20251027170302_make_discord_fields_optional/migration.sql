-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "accessToken" DROP NOT NULL,
ALTER COLUMN "discordId" DROP NOT NULL,
ALTER COLUMN "discordUsername" DROP NOT NULL,
ALTER COLUMN "refreshToken" DROP NOT NULL;
