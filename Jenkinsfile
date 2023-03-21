pipeline {
agent {
// this image provides everything needed to run Cypress
docker {
image 'cypress/base:10'
}
}

stages {
// first stage installs node dependencies and Cypress binary
stage('build') {
steps {
// there a few default environment variables on Jenkins
// on local Jenkins machine (assuming port 8080) see
// http://localhost:8080/pipeline-syntax/globals#env
echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
sh 'npm ci'
sh 'npm run cy:verify'
}
}

stage('start local server') {
steps {
// start local server in the background
// we will shut it down in "post" command block
sh 'nohup npm run start &'
}
}

// this stage runs end-to-end tests, and each agent uses the workspace
// from the previous stage
stage('cypress parallel tests') {
environment {
// Because parallel steps share the workspace they might race to delete
// screenshots and videos folders. Tell Cypress not to delete these folders
CYPRESS_trashAssetsBeforeRuns = 'false'
}

// https://jenkins.io/doc/book/pipeline/syntax/#parallel
parallel {
// start several test jobs in parallel, and they all
// will use Cypress Split to load balance any found spec files
stage('set A') {
steps {
echo "Running build ${env.BUILD_ID}"
sh "npx cypress run --env split=2,splitIndex=0"
}
}

// second thread runs the same command
stage('set B') {
steps {
echo "Running build ${env.BUILD_ID}"
sh "npx cypress run --env split=2,splitIndex=1"
}
}
}

}
}

post {
// shutdown the server running in the background
always {
echo 'Stopping local server'
sh 'pkill -f http-server'
}
}
}