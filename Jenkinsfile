pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                    git branch: 'main', url: 'https://github.com/JendoubiMajdi/Pi-ReWork.git'
            }
        }

        stage('Install dependencies') {
            steps {
                    script {
                        sh('npm install -f')
                    }
            }
        }

        stage('Unit Test') {
            steps {
                    script {
                        sh('npm test')
                    }
            }
        }

        stage('Build application') {
            steps {
                    script {
                        sh('npm run build-dev')
                    }
            }
        }

                stage('SonarQube Analysis') {
            steps {
                    script {
                        def scannerHome = tool 'scanner' 
                        withSonarQubeEnv {
                            sh "${scannerHome}/bin/sonar-scanner"
                        }
                }
            }
        }

    } // End of stages

} // End of pipeline
