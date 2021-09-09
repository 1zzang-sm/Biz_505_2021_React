import './App.css';

// 개별로 컴포넌트를 import 하기
// import Header from './comps/header'
// import Footer from './comps/footer'
// import RemBody from './comps/RemBody'

// index.jsx file을 사용하여 통합 관리하기
// import {Header, RemBody, Footer} from './comps/index'

/**
 * import {} from './comps' 코드를 만나면
 * 먼저 './comps.js' 또는 './comps.jsx' file을 찾는다.
 * 없으면 './comps' 폴더를 찾는다.
 * 그리고 폴더에 index.js 또는 index.jsx 파일을 찾는다.
 * 있으면 해당 파일에 설정된 값들을 import 한다.
 * 
 * ./comps 폴더에 index.js(jsx) file이 있으면 파일이름을 생략할 수 있다.
 * import { Header, RemBody, Footer} from './comps'
 */
import { Header, Footer} from './comps'
import {RemBody} from './comps'

function App() {
  return (
    <div className="App">
		<Header />
		<RemBody />
		<Footer />
    </div>
  );
}

export default App;
