# 나의 청년내일채움공제

복잡한 로그인 없이 간단하게 자신의 계약 정보를 확인한다.  
[바로가기](https://hoondragonite.github.io/MySbcPlan/)

## 프로젝트 소개
사용자가 기입한 청년내일채움공제 계약 정보를 기반으로 지금까지 납부한 금액과 적립된 금액을 조회한다.  
단, 납부예정일에 정상적으로 금액이 납부되었다는 가정하에 조회한다.  
(현재일자가 납부예정일 당일일 경우 납부했다는 것으로 함)  

## 목표
1. LocalStorage에 대해 알아본다.
2. 진행 현황에 따른 시각적 이미지를 표현한다.
3. Mobile First 전략으로 반응형으로 화면을 구성해본다.
4. 공인인증서 로그인 없이 간단한 정보만으로 자신의 계약 정보를 조회한다.

## 포함한 기능
1. 청약기본정보 입력  
    - 이름  
    - 계약일자  
    - 업체명  
    - 핵심인력 납부일자  
    - 중소기업 이체일  
    - 납부예정일 변경 여부 확인  
2. 납부금액 조회
    - 계약일자부터 현재일자까지 적립된 금액을 조회한다.



## Tech Stack
### Language
HTML5  
CSS3  
Javascript  
### Library
Moment.js
Falling Sakura (https://codepen.io/parkgun/pen/dmQRaX)

## Issue
1. Edge로 접속해서 저장된 LocalStorage와 크롬 LocalStorage가 다른 것 같음  
    -> Edge에서 저장해놓고 크롬으로 들어가면 저장 안 되어 있음    

## 글 쓸 거리
1. document ready, window load 차이
2. localStorage에 대해 +브라우저별 저장소
