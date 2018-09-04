# Easy Puppeteer Crawling Boilerplate

The environment you can implement a simple crawling application right now with Puppeteer, TypeScript and DB ([TypeORM](https://github.com/typeorm/typeorm)) on Docker

## Usage

1. Install dependencies (TypeScript related packages are required also in local for coding)

```
$ yarn
```

2. Write your awesome crawling codes in `src/crawl.ts`

if you need to store data, define entities as well. see [TypeORM](https://github.com/typeorm/typeorm). connection settings are already done.

3. Run crawling

```
$ docker-compose run app
```

4. Extract data

if necessary, extract data from postgres container.

```
$ docker-compose exec postgres psql -P pager=off -U postgres -c "select * from table;" -A -F $'\t' | sed '$d' > result.tsv
```
