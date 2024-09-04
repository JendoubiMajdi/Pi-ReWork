pipeline{
    agent any

    stages {
        stage('Install dependencies') {
            steps{
                script{
                    dir('backend') {
                        sh('npm install')
                    }
                }
            }
        }

        stage('Unit Test'){
            steps{
                script{
                    dir('backend') {
                        sh('npm test')
                    }
                }
            }
        }

        stage('Build application'){
            steps{
                script{
                    dir('backend') {
                        sh('npm run build-dev')
                    }
                }
            }
        }
    }
}
