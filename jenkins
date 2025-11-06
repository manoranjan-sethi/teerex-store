pipeline {
    agent any

    environment {
        IMAGE_NAME = 'spartan007/teerex-store:latest'
        PROJECT_NAME = 'teerex-store'
        PROJECT_KEY = 'SHOP'
    }

    stages {
        stage('Clone') {
            steps {
                git branch:'main', url:'https://github.com/manoranjan-sethi/teerex-store.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage ('Build Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage ('Login to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable:'DOCKER_PASS')]) {
                        sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        """
                    }
                }
            }
        }

        stage ('Push Image') {
            steps {
                sh 'docker push ${IMAGE_NAME}'
                
            }
            
        }
    }
}