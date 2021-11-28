# SoyYo Tech Test

## Description

### Installation

```bash
npm install
```

### Env

You need to set `URL_TARGET` variable in your own `.env` file with this url

```bash
https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities
```

### End-point

You need to hit this end-point `/entities/filter`

### Body Request

- `startId` is required and an integer
- `endId` is required and an integer

**Example:**

```JSON
{
	"startId": 1,
	"endId": 3
}
```

## Running the app

```bash
# dev and watch mode
npm run dev
```

```bash
# prod mode
npm start
```

## Running with Docker

```bash
# dev
docker-compose -f docker-compose.dev.yml up --build -d
```

```bash
# prod
docker-compose up --build -d
```

## License

MIT licensed
