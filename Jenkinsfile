pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                dir('backend/Pi-ReWork') {
                    git 'https://github.com/JendoubiMajdi/Pi-ReWork.git'
                }
            }
        }

        stage('Install dependencies') {
            steps {
                dir('backend/Pi-ReWork') {
                    script {
                        sh('npm install')
                    }
                }
            }
        }

        stage('Unit Test') {
            steps {
                dir('backend/Pi-ReWork') {
                    script {
                        sh('npm test')
                    }
                }
            }
        }

        stage('Build application') {
            steps {
                dir('backend/Pi-ReWork') {
                    script {
                        sh('npm run build-dev')
                    }
                }
            }
        }

    } // End of stages

} // End of pipeline
