pipeline {
    agent { label 'worker' }

    environment {
        IMAGE_NAME = "jenkinsdemo"
        IMAGE_TAG = "latest"
        DEPLOY_DIR = "/home/jenkins/deploy/myapp"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "📥 Kod çekiliyor..."
                git branch: 'main', url: 'https://github.com/eyakisik/jenkins-web-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "🐳 Docker imajı oluşturuluyor..."
                sh """
                    docker build -t $IMAGE_NAME:$IMAGE_TAG .
                """
            }
        }

        stage('Test in Docker') {
            steps {
                echo "🧪 Testler docker içinde çalıştırılıyor..."
                sh """
                    docker run --rm $IMAGE_NAME:$IMAGE_TAG npm test
                """
            }
        }

        stage('Extract Build Artifacts') {
            steps {
                echo "📦 Build çıktıları alınıyor..."
                sh """
                    rm -rf dist
                    docker run --rm $IMAGE_NAME:$IMAGE_TAG sh -c "tar -czf - dist" > dist.tar.gz
                    mkdir -p dist
                    tar -xzf dist.tar.gz -C dist
                """
            }
        }

        stage('Deploy') {
            steps {
                echo "🚀 Deploy ediliyor..."
                sh """
                    mkdir -p $DEPLOY_DIR
                    rm -rf $DEPLOY_DIR/*
                    cp -r dist/dist/* $DEPLOY_DIR/
                """
            }
        }

    }

    post {
        success {
            echo "🎉 Deployment başarıyla tamamlandı!"
        }
        failure {
            echo "❌ Pipeline fail oldu. Loglara bak."
        }
    }
}
