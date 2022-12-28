<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el proyecto
2. Ejecutar

```bash
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo `.env.template` y renombar la copia a `.env`

6. Llenar las variables de entorno definidas en el `.env`

7. Ejecutar la aplicacion en dev:

```bash
yarn start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

<br/>

# Production build

1. Crear el archivo `.env.prod`
2. Llenar las variables de entorno para produccion
3. Crear la nueva imagen

```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

<br/>

# Stack usado

- MongoDB
- NestJS
- Typescript
