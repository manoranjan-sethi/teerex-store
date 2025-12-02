pipeline {
    agent any

    environment {
        DOCKER_USERNAME = credentials('docker-username')   // Jenkins credential ID
        DOCKER_PASSWORD = credentials('docker-password')   // Jenkins credential ID
    }

    stages {
        stage('Docker Login') {
            steps {
                sh '''
                    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                '''
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t shop:latest .'
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag shop:latest manoranjansethi/shop:latest'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push manoranjansethi/shop:latest'
            }
        }

        stage('Deploy with Ansible') {
            steps {
                sh 'ansible-playbook /var/lib/jenkins/playbooks/deployment.yaml'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}