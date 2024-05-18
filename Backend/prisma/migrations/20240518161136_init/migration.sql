-- CreateTable
CREATE TABLE "Operation" (
    "id" SERIAL NOT NULL,
    "hostile_plane" JSONB NOT NULL,
    "planes" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("id")
);
