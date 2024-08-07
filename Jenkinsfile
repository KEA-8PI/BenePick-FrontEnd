pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = "benepick.kr-central-2.kcr.dev"
        IMAGE_NAME = "benepick-frontend"
        IMAGE_TAG = "latest" // 필요한 경우 다른 태그로 변경
        DOCKER_IMAGE = "${DOCKER_REGISTRY}/benepick-container/${IMAGE_NAME}:${IMAGE_TAG}"
        REGISTRY_CREDENTIALS_ID = "docker-registry-credentials"
        GITHUB_CREDENTIALS_ID = "github-token"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'API-206--CI-CD-dev', credentialsId: GITHUB_CREDENTIALS_ID, url: 'https://github.com/KEA-8PI/BenePick-Frontend.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build(DOCKER_IMAGE)
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", "${REGISTRY_CREDENTIALS_ID}") {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", "${REGISTRY_CREDENTIALS_ID}") {
                        sh """
                        docker pull ${DOCKER_IMAGE}
                        docker stop ${IMAGE_NAME} || true
                        docker rm ${IMAGE_NAME} || true
                        docker run -d --name ${IMAGE_NAME} -p 80:80 ${DOCKER_IMAGE}
                        """
                    }
                }
            }
        }   
    }
}
