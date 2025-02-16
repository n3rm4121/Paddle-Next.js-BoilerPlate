# Paddle Payment Processor Integration for SaaS

Read Full Blog 👉 [nirmaldhakal.xyz/set-up-paddle-in-nextjs-saas-application](nirmaldhakal.xyz/set-up-paddle-in-nextjs-saas-application)

This repository demonstrates how to integrate **Paddle** as a payment processor into your **Next.js** SaaS application. By following the steps in this repo, you'll be able to manage subscriptions, handle payments, and interact with Paddle’s API using the `@paddle/paddle-js` SDK.

## Prerequisites

Before you get started, make sure you have the following:

- A **Paddle account** (sign up on [Paddle](https://www.paddle.com/)).
- A **Next.js project** (this project uses **Next.js 15** with **TypeScript**).
- A basic understanding of React and how to work with APIs.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/n3rm4121/Paddle-Next.js-BoilerPlate.git  
   cd paddle-payment-integration
   ```

2. **Install dependencies**:

Make sure to have Node.js installed, and run the following command to install the required packages:

```bash
npm install
```

3. **Set up environment variables**:

Create a ``.env.local`` file at the root of the project and add your Paddle Client Token (you can get this token from your Paddle account).

```bash
NEXT_PUBLIC_PADDLE_VENDER_ID=12345
PADDLE_API_KEY=
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=test_
NEXT_PUBLIC_PADDLE_ENVIRONMENT=sandbox
```

4. **Run the project**:

After the installation is complete, run the app in development mode:

```bash
npm run dev
```


This will start the Next.js app at ```http://localhost:3000```.
