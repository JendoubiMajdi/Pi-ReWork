pipeline {
    agent any

    stages {

      stage('Checkout SCM') {
            steps {
                checkout([$class: 'GitSCM',
                  branches: [[name: '*/BackEnd']],
                  userRemoteConfigs: [[url: 'https://github.com/JendoubiMajdi/Pi-ReWork.git']]
                ])
            }
        }

        stage('Move to Backend Directory') {
            steps {
              dir('BackEnd'){
                 git branch: 'BackEnd', url: 'https://github.com/JendoubiMajdi/Pi-ReWork.git' 
              }
            }
        }

        stage('Check Node.js Version') {
    steps {
        script {
            sh 'node -v'
            sh 'npm -v'
        }
    }
}



        stage('Install dependencies') {
            steps {
              dir('BackEnd'){
                    script {
                        sh('npm install')
                    }
              }
            }
        }

                stage('Unit Test') {
            steps {
              dir('BackEnd'){
                        script {
                        sh('npm test')
                    }            
              }
            }
        }


        stage('Build application') {
            steps {
              dir('BackEnd'){
                                    script {
                        sh('npm run build-dev')
                    }
              }

            }
        }

                stage('SonarQube Analysis') {
            steps {
              dir('BackEnd'){
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
