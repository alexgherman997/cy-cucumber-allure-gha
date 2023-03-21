pipeline {
  agent any
  tools {nodejs "node"}
  stages {
  
    // Install and verify Cypress
    stage('installation') {
      steps {
        sh 'npm install cypress --save-dev'
      }
    }
    stage('run e2e tests') {
      steps {
        sh 'npm run cy:runAuthnMFE'
      }
    }
  }
  post {
    // Send an email in case of failure
    }
}