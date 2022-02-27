
# Credit Application Frontend
* A credit application is received by obtaining name, surname, national Id number, phone number and monthly income information from the customer. As a result of the information received, the application approval information and the credit limit given are displayed according to the requirements. The result is also shown to the customer using toastify. 
* If the customer has made an application before, cannot apply again and sees a message that you have already applied.
* In addition, the customer can view the application made by entering the national Id number. 
* Made using the React library and formik is used for forms.

### Functional Requirements
* National Id number, name, surname, monthly income and phone number informations are taken with the form and the customer is shown the credit result and credit limit.
### Functional Requirements Of Backend
* New customers can be created in the system, existing customers can be updated or deleted.
* If the credit score is below 500, the customer will be rejected. (Credit result: Rejected)
* If the credit score is between 500 points and 1000 points and the monthly income is below 5000 TL, the credit application of the customer is approved and a limit of 10.000 TL is assigned to the customer. (Credit Result: Aproved)
* If the credit score is between 500 points and 1000 points and the monthly income is above 5000 TL, the credit application of the customer is approved and a 20.000 TL limit is assigned to the customer. (Credit Result: Approved)
* If the credit score is equal to or above 1000 points, the customer is assigned a limit equal to MONTHLY INCOME * CREDIT LIMIT MULTIPLIER.The credit limit multiplier is 4 by default. (Credit Result: Approved)
* As a result of the conclusion of the credit, the relevant application is recorded in the database. Afterwards, an informative SMS is sent to the relevant phone number and the approval status information (rejection or approval), limit information is returned from the endpoint.
* A completed loan application can only be queried with an national ID number.

### Requirements
For Building and running the application belows are required:

* React
* Axios
* Formik
* React Toastify
* React Bootstrap
* Yup

## Credit Application Backend Project
It is a restful credit application system that receives credit application requests and returns the credit result to the customer according to the relevant criteria. It is written using the Spring Boot framework.
* Here is the link to the backend project.
[Credit-Application-System](https://github.com/vildntn/Credit-Application-System)

## Helper Project with RabbitMQ
After applying for a credit to the customer, the simulation of sending an sms was made with a microservice architecture.
Communication between the two architectures takes place with RabbitMQ.

* Here is the link to the Helper project.
[Credit-Application-Helper](https://github.com/vildntn/Credit-Application-Helper)

## Images
Photos of Frontend are below.

<img src="https://user-images.githubusercontent.com/77413677/155842313-aa97ee67-65b2-4b85-b0ca-9d318ed259ee.png" width="28%"></img>
<img src="https://user-images.githubusercontent.com/77413677/155843375-78e092cd-4eb7-4d9f-982c-6b1202426a15.png" width="28%"></img>
<img src="https://user-images.githubusercontent.com/77413677/155842387-8a2f15ea-ffaa-42c7-9a9e-32061f3302dc.png" width="28%"></img>
<img src="https://user-images.githubusercontent.com/77413677/155842420-f51931df-1ea8-4ef5-bdae-0b1a8949283b.png" width="28%"></img>
<img src="https://user-images.githubusercontent.com/77413677/155843398-360bfe9a-9b15-4e9f-9f44-aeef68523f0c.png" width="28%"></img>
<img src="https://user-images.githubusercontent.com/77413677/155843426-f9ab0ea9-2877-49ec-b70a-948e57460493.png" width="28%"></img>
<img src="https://user-images.githubusercontent.com/77413677/155843455-26a10752-ac05-48fa-8b77-4e6cc3ee7a94.png" width="28%"></img>
<img src="https://user-images.githubusercontent.com/77413677/155891058-d238d19a-d0fd-48a9-a8f7-690606a5d09e.png" width="28%"></img>



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
"# Credit-Application-Frontend" 
"# Credit-Application-Frontend" 
