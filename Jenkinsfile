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
              dir('backend'){
                 git branch: 'BackEnd', url: 'https://github.com/JendoubiMajdi/Pi-ReWork.git' 
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
