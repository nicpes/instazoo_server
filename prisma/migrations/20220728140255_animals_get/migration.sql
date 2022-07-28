-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "activeTime" TEXT NOT NULL,
    "lenghtMin" INTEGER NOT NULL,
    "lenghtMax" INTEGER NOT NULL,
    "weightMin" INTEGER NOT NULL,
    "weightMax" INTEGER NOT NULL,
    "lifespan" INTEGER NOT NULL,
    "geoRange" TEXT NOT NULL,
    "imageLink" TEXT NOT NULL,

    CONSTRAINT "Animals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diet" (
    "id" SERIAL NOT NULL,
    "diet" VARCHAR(255) NOT NULL,
    "animalId" INTEGER NOT NULL,

    CONSTRAINT "Diet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animalType" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "animalId" INTEGER NOT NULL,

    CONSTRAINT "animalType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habitatType" (
    "id" SERIAL NOT NULL,
    "habitat" VARCHAR(255) NOT NULL,
    "animalId" INTEGER NOT NULL,

    CONSTRAINT "habitatType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userAnimals" (
    "userId" INTEGER NOT NULL,
    "animalId" INTEGER NOT NULL,

    CONSTRAINT "userAnimals_pkey" PRIMARY KEY ("userId","animalId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Diet" ADD CONSTRAINT "Diet_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animalType" ADD CONSTRAINT "animalType_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habitatType" ADD CONSTRAINT "habitatType_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userAnimals" ADD CONSTRAINT "userAnimals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userAnimals" ADD CONSTRAINT "userAnimals_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
