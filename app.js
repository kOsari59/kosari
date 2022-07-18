const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000); //33001번 포트 쓸꺼임

app.get('/', (req, res) => {// /를 주소 GET 요청으로 받으면 업로드(메인화면) 파일을 보낸다
    res.sendFile(path.join(__dirname, 'html/melon.html'));
});

//에러나면 에러처리 템블릿 렌더링해주기
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

//포트설정
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});