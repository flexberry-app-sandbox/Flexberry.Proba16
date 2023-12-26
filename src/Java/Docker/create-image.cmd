docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba16-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba16-java/app ../../..
