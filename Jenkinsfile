pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = "benepick.kr-central-2.kcr.dev"
        IMAGE_NAME = "benepick-frontend"
        IMAGE_TAG = "latest" // 필요한 경우 다른 태그로 변경
        DOCKER_IMAGE = "${DOCKER_REGISTRY}/benepick-container/${IMAGE_NAME}:${IMAGE_TAG}"
        REGISTRY_CREDENTIALS_ID = "docker-registry-credentials"
        GITHUB_CREDENTIALS_ID = "github-token"
        SSH_CREDENTIALS_ID = "deploy-server-ssh" // SSH 인증 정보
        REMOTE_SERVER = "ubuntu@10.0.0.120"

    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'API-372--Nginx-And-Modify-Pipeline', credentialsId: GITHUB_CREDENTIALS_ID, url: 'https://github.com/KEA-8PI/BenePick-Frontend.git'
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
        stage('Deploy to Remote Server') {
            steps {
                script {
                    sshagent(["${SSH_CREDENTIALS_ID}"]) {
                        withCredentials([usernamePassword(credentialsId: REGISTRY_CREDENTIALS_ID, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                            sh """
                            ssh -o StrictHostKeyChecking=no -t ${REMOTE_SERVER} << EOF
                                echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin ${DOCKER_REGISTRY}
                                docker pull ${DOCKER_IMAGE}
                                docker stop ${IMAGE_NAME} || true
                                docker rm ${IMAGE_NAME} || true
                                docker run -d --restart unless-stopped --name ${IMAGE_NAME} -p 3000:3000 ${DOCKER_IMAGE}
EOF
                            """
                        }
                    }
                }
            }
        }
        
        stage('Cleanup Docker Images') {
            steps {
                script {
                    sh "docker rmi ${DOCKER_IMAGE} || true"
                }
            }
        }
    }
}
