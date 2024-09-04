

pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    dir('C:\Users\majdi\Desktop\GitPi\backend\Pi-ReWork\package.json') {
                        sh('npm install')
                    }
                }
            }
        }

        stage('Unit Test') {
            steps {
                script {
                    dir('C:\Users\majdi\Desktop\GitPi\backend\Pi-ReWork\package.json') {
                        sh('npm test')
                    }
                }
            }
        }

        stage('Build application') {
            steps {
                script {
                    dir('C:\Users\majdi\Desktop\GitPi\backend\Pi-ReWork\package.json') {
                        sh('npm run build-dev')
                    }
                }
            }
        }
    }
}
