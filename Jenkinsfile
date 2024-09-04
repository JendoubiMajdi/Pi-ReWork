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
              dir('backend'){
                    script {
                        sh('npm install -f')
                    }
              }
            }
        }



        stage('Build application') {
            steps {
              dir('backend'){
                                    script {
                        sh('nest build')
                    }
              }

            }
        }

                stage('SonarQube Analysis') {
            steps {
              dir('backend'){
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
