## Forecast App.

- Basic Forecast REST API made with NestJS framework. Allow an API consumer to retreive weather forecasts for a given city.
- Supported cities: Málaga, Granada, Madrid.

## Domain UML

- UML with main domain vocabulary.

![Forecast Domain](./docs/Forecastapp.png)

## Running locally

- Copy `.env.example` file and rename to `.env`
- Install the packages: `npm install`
- Run the app:
    ```bash
    # development
    $ npm run start
     
    # watch mode
    $ npm run start:dev
      
    # production mode
    $ npm run start:prod
    ```

## OpenAPI documentation

- Find openAPI documents on /api/v1/docs.

## Test coverage

- Run the test with jest:
    ```bash
    # Tests
    $ npx jest
    ```
## Server driven UI

- Basic server driven UI behavior in root path. Open with browser to see this feature.

## Posible future upgrades

- Optimice client page by adding CSS.
- Fetch data from a 3º party forecast API and stream data using NestJS SSE (Server-Sent Events).
- Allow system to find IP location and display the forecast.
