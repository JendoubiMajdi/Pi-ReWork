pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                dir('backend') {
                    git branch: 'main', url: 'https://github.com/JendoubiMajdi/Pi-ReWork.git'
                }
            }
        }

        stage('Install dependencies') {
            steps {
                dir('backend') {
                    script {
                        sh('npm install -f')
                    }
                }
            }
        }

        stage('Unit Test') {
            steps {
                dir('backend') {
                    script {
                        sh('npm test')
                    }
                }
            }
        }

        stage('Build application') {
            steps {
                dir('backend') {
                    script {
                        sh('npm run build-dev')
                    }
                }
            }
        }

                stage('SonarQube Analysis') {
            steps {
                dir('backend') {
                    script {
                        def scannerHome = tool 'scanner' 
                        withSonarQubeEnv {
                            sh "${scannerHome}/bin/sonar-scanner"
                        }
                    }
                }
            }
        }

    } // End of stages

} // End of pipeline
