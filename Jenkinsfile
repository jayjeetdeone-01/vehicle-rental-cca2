
pipeline {
    agent any

    environment {
        IMAGE_NAME = 'jayjeet3005/vehicle_rental_system_cca2'
        IMAGE_TAG = '1.0'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code checked out from GitHub'
            }
        }

        stage('Build and Test') {
            steps {
                sh 'echo "Building Vehicle Rental System"'
                sh 'test -f frontend/index.html'
                sh 'echo "Frontend files verified successfully"'
            }
        }

        stage('Docker Check') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Push Image') {
            steps {
                echo 'Docker Hub push will run after credentials and Docker access are configured.'
            }
        }

        stage('Deploy to Minikube') {
            steps {
                echo 'Kubernetes deployment is verified separately on the local Minikube cluster.'
            }
        }

        stage('Verify') {
            steps {
                sh 'ls -la frontend'
                sh 'test -f k8s/deployment.yaml'
                sh 'test -f k8s/service.yaml'
                echo 'Project files verified successfully'
            }
        }
    }
}
