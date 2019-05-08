# escape-filas-backend

### Definições para uso do graphql

* Para utilizar o graphql deve usar sempre o endpoint /graphql;
* Todas as requisições podem ser POST;

Abaixo alguns exemplos de requisição:

#### Coletar filas
`{ "query": "{ reports { id name placeId } }"}`

#### Reportar filas

Há duas formas de enviar o report de fila

##### Quando já possuir o place

`{ "query": "mutation { addReport (name:\"Nome do lugar\", placeId:\"Id do lugar\") {id name placeId } }"
}`

#### Quando só possuir a 'lat' e 'lng'

`{ "query": "mutation { addReportLocation (lat:\"-26.9063448\", lng:\"-49.0770172\") {id name placeId } }"
}`