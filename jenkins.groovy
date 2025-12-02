pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/manoranjan-sethi/teerex-store.git'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds',
                                                 usernameVariable: 'DOCKER_USERNAME',
                                                 passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                    '''
                }
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