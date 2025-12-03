pipeline {
    agent any
    stages {
        stage('Checkout') { 
            steps {
                git branch: 'main',
                    url: 'https://github.com/manoranjan-sethi/teerex-store.git'
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

        stage('Build & Push Docker Image') {
            steps {
                sh """
                  ansible-playbook ${WORKSPACE}/ansible/playbook.yaml \
                    -e workspace=${WORKSPACE} \
                    -e docker_username=${DOCKER_USERNAME} \
                    -e docker_password=${DOCKER_PASSWORD} \
                    -e image_name=spartan0007/shop \
                    -e image_tag=v${BUILD_NUMBER}
                """
            }
        }
    }
}