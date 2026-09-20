pipeline {
    agent any
    
    tools {
        // Ensure this matches the name configured in Jenkins global tool configuration
        nodejs 'node' 
    }

    environment {
        // Forces Playwright to run in headless mode so it doesn't fail trying to open visual browser windows on your Jenkins server
        CI = 'true'
    }

    stages {
        stage('Checkout Source') {
            steps {
                // Pulls project code from your configured Git repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm ci' // Fast, clean install optimized for CI/CD servers
                
                echo 'Installing required Playwright system browser binaries...'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Execute Automation Tests') {
            steps {
                echo 'Running Playwright Cross-Browser Testing Suite...'
                // The catchError block ensures that even if tests fail, the pipeline moves forward to publish reports
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            echo 'Publishing reporting assets to Jenkins...'
            
            // 1. Publish standard Playwright HTML Report
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
            
            // 2. Compile and Publish rich interactive Allure Report
            allure includeProperties: false, 
                   jdk: '', 
                   properties: [], 
                   reportBuildPolicy: 'ALWAYS', 
                   results: [[path: 'allure-results']]
        }
    }
}
