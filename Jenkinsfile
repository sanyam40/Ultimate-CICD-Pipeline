pipeline {
    agent {
        docker {
            image 'sanyam40/ultimate-cicd-pipeline:v1'
            args '--user root -v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sanyam40/Ultimate-CICD-Pipeline'
            }
        }

        stage('Install NodeJS') {
            steps {
                sh 'sudo apt-get install -y nodejs'
                sh 'sudo apt-get install -y npm'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Static Code Analysis') {
            steps {
                withCredentials([string(credentialsId: 'sonarqube', variable: 'SONAR_TOKEN')]) {
                    sh "cd sanyam40/Ultimate-CICD && sonar-scanner -Dsonar.login=${SONAR_TOKEN} -Dsonar.host.url=${SONAR_URL}"
                }
            }
        }

        stage('Docker Build') {
            environment {
                DOCKER_IMAGE = "sanyam40/ultimate-cicd-pipeline:${BUILD_NUMBER}"
                REGISTRY_CREDENTIALS = credentials('docker-cred')
            }
            steps {
                sh "cd sanyam40/Ultimate-CICD && docker build -t ${DOCKER_IMAGE} ."
                def dockerImage = docker.image("${DOCKER_IMAGE}")
                docker.withRegistry('https://index.docker.io/v1/', REGISTRY_CREDENTIALS) {
                    dockerImage.push()
                }
            }
        }

        stage('Update Deployment File') {
            environment {
                GIT_REPO_NAME = 'Ultimate-CICD-Pipeline'
                GIT_USER = 'sanyam40'
            }
            steps {
                withCredentials([string(credentialsId: 'github', variable: 'GITHUB_TOKEN')]) {
                    sh """
                        git config user.email "sanyamnarang40@gmail.com"
                        git config user.name "sanyam40"
                        sed -i "s/replaceImageTag/${BUILD_NUMBER}/g" sanyam40/Ultimate-CICD/manifests/deployment.yml
                        git add sanyam40/Ultimate-CICD/manifests/deployment.yml
                        git commit -m "Update deployment image to version ${BUILD_NUMBER}"
                        git push https://${GITHUB_TOKEN}@github.com/${GIT_USER}/${GIT_REPO_NAME} HEAD:main
                    """
                }
            }
        }
    }
}
