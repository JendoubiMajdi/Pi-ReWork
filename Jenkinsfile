pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                dir('C:/Users/majdi/Desktop/GitPi/backend/Pi-ReWork') {
                    bat '''
                    your-windows-install-command.bat
                    '''
                }
            }
        }
        stage('Unit Test') {
            steps {
                dir('C:/Users/majdi/Desktop/GitPi/backend/Pi-ReWork') {
                    bat '''
                    your-windows-test-command.bat
                    '''
                }
            }
        }
        stage('Build application') {
            steps {
                dir('C:/Users/majdi/Desktop/GitPi/backend/Pi-ReWork') {
                    bat '''
                    your-windows-build-command.bat
                    '''
                }
            }
        }
    }
}
