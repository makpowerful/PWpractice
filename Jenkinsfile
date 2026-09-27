pipeline {
    // 1. Switched from 'agent any' to use the official Playwright Docker container
    agent {
        docker {
            image '://microsoft.com'
            args '-u root'
        }
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout Source') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                // 2. Changed 'bat' to 'sh' because Docker runs on a Linux base
                sh 'npm ci' 
                
                // NOTE: 'npx playwright install --with-deps' is REMOVED 
                // because all browsers and OS libraries are already baked into the Docker image!
            }
        }

        stage('Execute Automation Tests') {
            steps {
                echo 'Running Playwright Cross-Browser Testing Suite inside Docker...'
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    // 3. Changed 'bat' to 'sh'
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            echo 'Publishing reporting assets to Jenkins...'
            
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
            
            allure includeProperties: false, 
                   jdk: '', 
                   properties: [], 
                   reportBuildPolicy: 'ALWAYS', 
                   results: [[path: 'allure-results']]
        }
    }
}
