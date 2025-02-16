# az-204-prep

This is a sample repository to prepare for AZ-204 certification, just touching couple of topics to get the feeling.

## Why

Hands-on XP is necessary in order to learn properly Azure offerings.

## How

- Create Azure account (if not exists) and (new) Pay-as-you-Go subscription.

## Tasks

I've asked an LLM to help me with these, here are the projects suggested:

### **1. Deploy a Web App Using Azure App Service**

- Create an Azure App Service plan.
- Deploy a simple Node.js or .NET web application.
- Configure environment variables and scaling options.

> Done [1-app-service-generated](./1-app-service-generated/README.md)

TODO:

- scaling
- deployment slots
- auth
- cert? (probably not going to happen)
- APIM
- Monitoring? -> Task 10

### **2. Implement Azure Functions**

- Create an HTTP-triggered Azure Function.
- Integrate the function with Azure Storage (Blob or Table).
- Set up Application Insights to monitor performance.

### **3. Work with Azure Blob Storage**

- Upload, download, and delete files using the Azure SDK.
- Implement soft delete and versioning.
- Use managed identity for authentication instead of access keys.

### **4. Set Up Azure Cosmos DB**

- Deploy a Cosmos DB instance (SQL API).
- Create a database and collection.
- Write a simple app to perform CRUD operations.

### **5. Build and Deploy a Containerized Application**

- Containerize a Node.js or .NET app using Docker.
- Push the container to Azure Container Registry.
- Deploy it using Azure Container Apps or Azure Kubernetes Service (AKS).

### **6. Secure an Azure Web API with Azure AD**

- Create an Azure AD application.
- Implement authentication in an ASP.NET or Node.js API.
- Protect endpoints using JWT validation.

### **7. Implement an Event-Driven Architecture**

- Set up an Event Grid topic.
- Create an Azure Function subscriber.
- Trigger events from a storage account or custom application.

### **8. Automate Resource Deployment with ARM/Bicep**

- Write an ARM template or Bicep script to deploy an App Service and a database.
- Parameterize the script for different environments.
- Deploy using Azure CLI or Azure DevOps.

### **9. Use Azure Logic Apps for Workflow Automation**

- Create a Logic App that connects to an external API.
- Automate a workflow (e.g., trigger an email on file upload).
- Secure the Logic App using managed identity.

### **10. Monitor and Troubleshoot Applications**

- Enable Application Insights for a web app.
- Set up logs and custom telemetry.
- Create an alert rule for application errors.
