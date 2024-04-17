import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <h1>환영합니다!</h1>
      <p>이것은 간단한 메인 페이지입니다. 테스트 용도로 만들어졌습니다.</p>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/signin"> signin </Link>
      </div>
    </div>
  );
}

export default MainPage;
