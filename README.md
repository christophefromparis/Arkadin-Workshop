# PALO IT Apigee Workshop

![alt text](./images/ApigeeWorkshop.png)

## General presentation

### Google Apigee Edge (:hourglass: 5')

![alt text](./images/ApigeeOverview.JPG)

![alt text](./images/ApigeeOverview2.JPG)

## Practice Apigee (:hourglass: 45')

### Create your Apigee account: https://login.apigee.com/sign_up (:hourglass: 1')
It's right now or never:heavy_exclamation_mark:

### Create your API specification (:hourglass: 10')
![alt text](./images/OpenAPI.JPG)

The [Open API Initiative](https://www.openapis.org/). In 2015 Open API specification = Swagger 2.0 specification.

By using [Apigee](https://apigee.com/specs) or [Swagger](http://editor.swagger.io/#/)

:muscle: It's time to exercise...
Write your specification by using your favorite tool (either Apigee or Swagger or another else). The specification must describes a new operation called /subsidiaries/countryCode. This service have to return a list of subsidiaries given a country code (Use the description of others services to describe it).
Use the [file Subsidiaries-0.9-swagger.json](./src/Subsidiaries-0.9-swagger.json)

### Create an API proxy from SOAP service (:hourglass: 15')

We're going to retrieve the weather for your city by using the following SOAP service http://www.webservicex.com/New/Home/ServiceDetail/56

Firsly, I'm going to show you :tv: how to do this and secondly it's your turn :white_check_mark:

:muscle: It's time to exercise...
Create an API proxy (SOAP service) with the WSDL URL http://www.webservicex.com/globalweather.asmx?wsdl and test the API with Postman (or your favorite tool).

### Create an API proxy from specification (:hourglass: 5')

You can retrieve the [Specifications here](https://app.swaggerhub.com/search?query=%20arkadin)

The [JSON specification for the Subsidiaries API](https://app.swaggerhub.com/apiproxy/schema/file/arkadin_api/Subsidiaries/1.0.0/swagger.json)

:muscle: It's time to exercise...
Create the Subsidiaries API proxy from the specification.

### Create an REST API proxy (:hourglass: 30')

Use the Rest API: https://jsonplaceholder.typicode.com/

:muscle: It's time to exercise...
1. Create a reverse proxy
- existing API URL = https://jsonplaceholder.typicode.com/
- secure access = pass through (at the moment) 
2. Test the API
- By using a trace session
3. Add a quota limit policy (the source describing the policy is in [the src directory](./src))
![alt text](./images/QuotaPolicy.JPG)
4. Create a specific proxy endpoint (for the URL /users and the HTTP verb GET)
5. Add a JSON-To-XML policy (or a XML-To-JSON :smiling_imp:) to convert the response format in XML
![alt text](./images/XmlPolicy.JPG)
6. Add a condition on policy :trollface: We want to convert the response format (XML or JSON) depending the request header 'Accept'
7. Add a apikey verification ![alt text](./images/VerifyKeyPolicy.JPG)
In order to use the apikey, explain the publish process (developers, app, product and key).

Please, show me the [video](https://vimeo.com/113342105) (and listen the beautiful music :hear_no_evil:) (:hourglass: 3')

![alt text](./images/ApigeeProduct.JPG)

##### Create a product
##### Register developers
##### Register apps

:muscle: It's time to exercise...
Ok, I'm a developer, from a partner, and you want to give me an access to your API. My email is ccosnefroy@palo-it.com and I'm waiting your email with the information needed to use your API.
So, you have to publish your API and give me the elements in order to test the API.

Depending on time we can also:
Add a cache
Add a new proxy endpoint to reset the quota

### Add an API proxy with Node.js (:hourglass: 10')

Node.js tutorial: https://www.w3schools.com/nodejs/
See the version.js file

:muscle: It's time to exercise...
1. Add a new proxy endpoint nammed getVersion (URL /version and HTTP verb GET)
2. Create a new script (Node.js) and copy the version.js file
3. Create a new target endpoint using the Node.js
4. Add a routeRule to redirect the calls to the good endpoind (use the RouteRule snippet in [the src directory](./src))

## Feedbacks (:hourglass: 5')

![alt text](./images/IloveAPI.JPG)

### Specification
OpenAPI and Swagger, Apigee isn't enought strong (or not enought finish, as you prefer).

### Mock
Used and approved by me :thumbsup:

### Development
Easy to use
Easy to understand
Easy to version
You have to know policies and how retrieve the documentation about parameters (because there're a lot of parameters)
I have to draw up a best practices document :blue_book:

### Test
##### Postman, Postman and Postman :thumbsup:
##### Collection runner on Postman 
Postman collection runner to automatize tests
But how test the API availability in production:question:

### Production
Several environments :thumbsup:, easy to configure. Load balancing.

#### Reports
To explore in details

## Questions:question: (:hourglass: 5')


