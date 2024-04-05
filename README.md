# Ultimate CI/CD Pipeline
This Repository contains the Implementation of the Ultimate CI/CD Pipeline Project Built using Jenkins, Docker, SonarQube, and Kubernetes for the React.js Project


![Untitled-2024-03-22-1134](https://github.com/sanyam40/Ultimate-CICD-Pipeline/assets/87993985/df3f9e91-19c6-42e5-8427-4fbeeae13174)

**Tools Used**

* Jenkins
* SonarQube
* Docker
* Kubernetes

## Pipeline Steps
**1. Code Commit**
- Developers commit their code changes to a version control system like Git.

**2. Push to GitHub**
- The code is pushed to a GitHub repository.

**3. Pipeline Trigger**
- Pushing code to GitHub triggers the CI/CD pipeline.

**4. Jenkins**
- Jenkins, a popular open-source automation server, fetches the code from the GitHub repository.

**5. Code Quality Analysis**
- SonarQube, a tool for continuous inspection of code quality, is used to analyze the code for bugs, code smells, and vulnerabilities. SonarQube generates a report that developers can use to improve their code quality.

**6. Unit Testing**
- Unit tests are automated tests that verify the functionality of individual units of code. The pipeline executes the unit tests to ensure that the code changes haven't broken any existing functionality.

**7. Build Docker Image**
- If the unit tests pass, the pipeline builds a Docker image of the React application. A Docker image packages the application's code, dependencies, and configuration files into a standardized unit that can run consistently on any Linux machine.

**8. Push Docker Image (Main Branch)**
- If the code is being pushed to the main branch, the pipeline pushes the Docker image to a Docker repository like Docker Hub.

**9. Update Kubernetes Deployment**
- The pipeline updates the Kubernetes deployment to use the newly created Docker image. This could involve updating the deployment manifest or directly applying changes to the Kubernetes cluster.

**10. Deploy to Kubernetes (Main Branch)**
- If the code is being pushed to the main branch, the pipeline deploys the application to a Kubernetes cluster. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.
