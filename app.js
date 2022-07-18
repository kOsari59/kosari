const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000); //33001�� ��Ʈ ������

app.get('/', (req, res) => {// /�� �ּ� GET ��û���� ������ ���ε�(����ȭ��) ������ ������
    res.sendFile(path.join(__dirname, 'html/melon.html'));
});

//�������� ����ó�� �ۺ� ���������ֱ�
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

//��Ʈ����
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '�� ��Ʈ���� ��� ��');
});