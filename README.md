# Board
## Planner
* 2020.08.23 ~ 2020.08.26 : REST 등 공부
* 2020.08.27 ~ : 기존 소스코드 분석
* 2020.08.28 ~ 2020.08.30 : 사용 언어, DB 정하기
* 

## Language, DB
#### Frontend : React
>  **Why React?**   
참고자료 : 
[youthfulhps 블로그][youthfulhps]
[velopert][velopert]
 
* **Component 단위 작성**
유지 보수 용이
* **Virtual DOM**
연산 비용 적음

동적인 웹 어플리케이션을 만들고 싶고, 유지 보수가 용이한 웹 애플리케이션을 만들고 싶으므로 ReactJS 선택.
관련 자료가 많은 것도 선택에 영향을 주었다.
React를 사용할 시 디버깅을 쉽게 하기 위하여 typescript를 사용하기로 했다.


#### Backend : expressJS
> Why expressJS?   
참고자료 : <https://medium.com/@micheleriva/properly-deploy-reactjs-with-expressjs-e1ac376dfede>

* **Javascript 기반(언어 통일)**
* **Server Side Rendering에 강점**
서버사이드렌더링이 필요하면 구현할 
* **NodeJS API 사용 가능**

#### DB : MySQL
> Why MySQL?   
참고 자료 :
[나의 블로그][나의 블로그]

##### SQL과 NoSQL을 비교 :
프로젝트가 수정 operation이 자주 사용될 것으로 생각되고, schema가 고정될 것으로 생각하여 SQL을 고려하게 되었다.
SQL에서는 무료로 사용 가능한 MySQL과 PostgreSQL을 고려하였으나 비교적 자료가 많은 편인 MySQL을 선택하였다.

[youthfulhps]: https://velog.io/@youthfulhps/React-React%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0
[velopert]: https://velopert.com/3612
[나의 블로그]: https://woojinger.tistory.com/34
