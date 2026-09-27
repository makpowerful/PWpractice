pipeline {
    agent {
        docker {
            // Explicitly wrapped in double quotes to prevent registry parsing errors on Windows hosts
            image "://microsoft.com"
            args "-u root"
            // Re-uses the existing node workspace cache instead of building unique volumes
            reuseNode true
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
                sh 'npm ci' 
            }
        }

        stage('Execute Automation Tests') {
            steps {
                echo 'Running Playwright Cross-Browser Testing Suite inside Docker...'
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            // Script block protects execution if workspace steps fail early
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
                    echo "Skipping HTML report publishing: Workspace folder not generated yet."
                }
                
                try {
                    allure includeProperties: false, 
                           jdk: '', 
                           properties: [], 
                           reportBuildPolicy: 'ALWAYS', 
                           results: [[path: 'allure-results']]
                } catch (Exception e) {
                    echo "Skipping Allure report publishing: Workspace folder not generated yet."
                }
            }
        }
    }
}
