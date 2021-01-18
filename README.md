# Lermoney-challenge

Lermoney Code Challenge - Teste técnico

## Clean architecture api.

Seguindo alguns principios do clean architecture, temos um repository que se conecta com o banco, a service que orquestra a comunicação entre o repository, os helpers(onde fica algumas regras de negocios) e a controller, e a controller é onde recebemos e enviamos dados ao client.

## Testes automatizados.

Para rodar os testes, bastar executar o comando abaixo:

> **npm test**

## Como rodar a aplicação?

#### Docker container

O projeto roda atravez de containers no Docker. Você precisa ter instalado o Docker na sua máquina.
Após isso basta rodar o seguinte comando:

> **docker-compose up**

O ambiente de desenvolvimento estará rodando localmente para você. O nodemon mantém o servidor do container de pé, ou seja, você não precisará
ficar parando o container e subindo ele novamente a cada mudança que você fizer.

## Advertisers

#### Cria Advertiser

```bash
curl --request POST \
  --url http://localhost:3777/api/v1/advertisers \
  --header 'Content-Type: application/json' \
  --data '{
	"advertiser_name": "Nagdumo"
}'
```

## Offers:

#### Cria oferta

```bash
curl --request POST \
  --url http://localhost:3777/api/v1/offers \
  --header 'Content-Type: application/json' \
  --data '{
	"advertiser_id": 12,
	"url": "https://www.walmart.com/ip/LG-TONE-Free-HBS-FN4-Bluetooth-Wireless-Stereo-Earbuds-with-Meridian-Audio-Black/892215549",
	"description": "LG TONE Free HBS-FN4 Bluetooth® Wireless Stereo Earbuds with Meridian Audio, Black",
	"starts_at": "2021-01-10T00:27:25",
	"ends_at": "2021-01-25T23:59:00",
	"premium": true
}'
```

#### Lista ofertas

```bash
curl --request GET \
  --url 'http://localhost:3777/api/v1/offers?page=1' \
  --header 'Content-Type: application/json'
```

#### Atualiza oferta

```bash
curl --request PUT \
  --url http://localhost:3777/api/v1/offers/39 \
  --header 'Content-Type: application/json' \
  --data '{
	"starts_at": "2021-01-24T00:27:25.000Z",
	"ends_at": "2021-01-25T23:59:00.000Z",
	"premium": false
}'
```

#### Deleta oferta

```bash
curl --request PUT \
  --url http://localhost:3777/api/v1/offers/39 \
  --header 'Content-Type: application/json' \
  --data '{
	"starts_at": "2021-01-24T00:27:25.000Z",
	"ends_at": "2021-01-25T23:59:00.000Z",
	"premium": false
}'
```
