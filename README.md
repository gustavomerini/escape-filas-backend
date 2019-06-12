# escape-filas-backend

### Definições para uso do graphql

* Para utilizar o graphql deve usar sempre o endpoint /graphql;
* Todas as requisições podem ser POST;

Abaixo alguns exemplos de requisição:

#### Coletar reports de filas
`{ "query": "{ reports { id name placeId } }"}`

#### Reportar filas

Há duas formas de enviar o report de fila

##### Quando já possuir o place

`{ "query": "mutation { addReport (name:\"Nome do lugar\", placeId:\"Id do lugar\") {id name placeId } }"
}`

#### Quando só possuir a 'lat' e 'lng'

`{ "query": "mutation { addReportLocation (lat:\"-26.9063448\", lng:\"-49.0770172\") {id name placeId } }"
}`

### Coletar filas agrupadas por reports
`{ "query": "{ placeLines { placeId quantity placeName } }" }
`

### Coletar fila agrupada por report
`{ "query": "{ placeLine(placeId: \"Id do lugar\") { placeId quantity placeName } }" }
`

### Coletar filas agrupadas por report com base na 'lat', 'lng' e 'radius'
`{ "query" : "{ placeLinesRadius(lat:\"-26.9035332\", lng:\"-49.0874129\", radius:50) { placeId quantity placeName } }"}
`