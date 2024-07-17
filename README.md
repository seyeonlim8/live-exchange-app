# Full-Stack Serverless Real-Time Currency Conversion App
![React App · 10 19pm · 07-17](https://github.com/user-attachments/assets/9780fede-75d9-4ce1-acb7-2f78f8a7f24a)

## Project Overview

This project is a Full-Stack Serverless application designed to enable real-time currency conversion for user expenses. The application leverages a combination of AWS services for backend processes and React for the frontend to provide a seamless and responsive user experience.

## Tech Stack

- **Backend:**
  - AWS Lambda
  - Amazon API Gateway
  - Amazon DynamoDB
  - Amazon Cognito
  - Node.js
- **Frontend:**
  - React
  - HTML/CSS/JavaScript
  - AWS Amplify

## Features

- Real-time currency conversion using Open Exchange Rates API.
- Secure user authentication and authorization with Amazon Cognito.
- CRUD operations for user expenses stored in DynamoDB.
- Responsive user interface built with React.

## Project Structure

### Backend

The backend consists of three main AWS Lambda functions written in JavaScript:

1. **convert-currency**
   - Uses Open Exchange Rates API to fetch the current exchange rate for the selected currency.
2. **add-expenses**
   - Updates the DynamoDB table with the new expense amount provided by the user.
3. **get-current-expenses**
   - Fetches the current total expenses of the user from the DynamoDB table.

Each Lambda function is triggered by an API created using Amazon API Gateway.

### Frontend

The frontend is built using React and AWS Cognito for authentication. It includes components for:

- User login and sign-up.
- Fetching and displaying current user expenses.
- Adding new expenses.
- Converting expenses to the selected currency.

## Detailed Explanation
### AWS Lambda Functions
* convert-currency:
  - Fetches the current exchange rate from Open Exchange Rates API.

* add-expenses:
  - Updates the user's total expenses in DynamoDB.

* get-current-expenses:
  - Retrieves the current total expenses of the user.

### Amazon DynamoDB
The DynamoDB table stores user information and their total expenses.

### Amazon Cognito
Amazon Cognito handles user authentication and authorization, ensuring secure access to the application.

### Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License
This project is licensed under the MIT License.
