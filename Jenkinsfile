pipeline {
    agent any

    environment {
        // Forces Playwright to run in headless mode so it doesn't try to open physical windows
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
                // If you are on Windows, use 'bat' instead of 'sh'
                bat 'npm ci' 
                
                echo 'Installing required Playwright system browser binaries...'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Execute Automation Tests') {
            steps {
                echo 'Running Playwright Cross-Browser Testing Suite...'
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat 'npx playwright test'
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
