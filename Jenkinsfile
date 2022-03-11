pipeline {
    // master executor should be set to 0
    agent any
    stages {
	    
	stage('pull latest image') {
	    steps {
		bat "docker pull sandocker100/springboot:latest"
	    }
	}
        stage('Build Jar') {
            steps {
                //sh
                bat "mvn clean package -DskipTests"
            }
        }
        stage('Build Image') {
            steps {
                //sh
                bat "docker build -t=boomboom/selenium-docker ."
            }
        }
        stage('Push Image') {
            steps {
			    withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'pass', usernameVariable: 'user')]) {
                    //sh
			        bat "docker login --username=${user} --password=${pass}"
			        bat "docker tag boomboom/selenium-docker sandocker100/springboot:${env.BUILD_NUMBER}"
			        bat "docker push sandocker100/springboot:${env.BUILD_NUMBER}"
			    }
            }
        }
    }
}
