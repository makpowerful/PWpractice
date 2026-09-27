pipeline {
    // 1. We change agent to any so Jenkins initializes the workspace without breaking
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout Source') {
            steps {
                checkout scm
            }
        }

        stage('Execute Playwright Tests in Docker') {
            steps {
                // 2. We use docker.image script block which handles Windows paths flawlessly
                script {
                    def playwrightImg = docker.image("://microsoft.com")
                    
                    // This runs all commands inside the safely isolated Linux container
                    playwrightImg.inside("-u root") {
                        echo 'Installing project dependencies inside Docker container...'
                        sh 'npm ci'
                        
                        echo 'Running Playwright Cross-Browser Testing Suite...'
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            sh 'npx playwright test'
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                echo 'Publishing reporting assets to Jenkins...'
                try {
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'playwright-report',
                        reportFiles: 'index.html',
                        reportName: 'Playwright HTML Report'
                    ])
                } catch (Exception e) {
                    echo "Could not publish Playwright Report: ${e.message}"
                }
                
                try {
                    allure includeProperties: false, 
                           jdk: '', 
                           properties: [], 
                           reportBuildPolicy: 'ALWAYS', 
                           results: [[path: 'allure-results']]
                } catch (Exception e) {
                    echo "Could not publish Allure Report: ${e.message}"
                }
            }
        }
    }
}
