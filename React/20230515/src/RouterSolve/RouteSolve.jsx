import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  useParams,
} from 'react-router-dom';

function RouteSolve() {
  const productIds = [1, 2, 3, 4, 5];
  return (
    <BrowserRouter>
      <h1>퀴즈</h1>
      <Link to="/">홈페이지</Link>
      {productIds.map((productId) => (
        <Link to={`/products/${productId}`}>상품{productId}</Link>
      ))}
      <Link to="/cart"> one </Link>
      <Link to="/users"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/products/:id/notice" element={<ProductNotice />} />
        <Route path="/cart" element={<Cart name="licat" />} />
        <Route path="/users/" element={<Users />}>
          <Route path="coupon/" element={<div>쿠폰</div>} />
          <Route path="question/" element={<div>퀘스쳔</div>} />
          <Route path="notice/" element={<div>공지사항</div>} />
        </Route>

        <Route path="/three/*" element={<Three />}>
          <Route path="" element={<HojunIndex />} />
          <Route path="hojunone/" element={<HojunOne />} />
          <Route path="hojuntwo/" element={<HojunTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

function Cart({ name }) {
  return <h1>{name} 카트입니다.</h1>;
}

function Users() {
  return (
    <>
      <h1>여기는 Users</h1>
      <Outlet />
      <Link to="coupon/">쿠폰</Link>
      <Link to="question/">퀘스쳔</Link>
      <Link to="notice/">노티스</Link>
    </>
  );
}

function Three() {
  return (
    <>
      <h1>Hello Three 3</h1>
      <Outlet />
    </>
  );
}

function Products() {
  const location = useLocation();
  const { id } = useParams();
  console.log(location);
  return (
    <>
      <h1>hello Products {id}</h1>
      <Link to="./notice">Notice</Link>
    </>
  );
}
function ProductNotice() {
  const location = useLocation();
  const { id } = useParams();
  console.log(location);
  return <h1>hello Products {id} Notice</h1>;
}

function HojunIndex() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun index</h1>;
}

function HojunOne() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun 1</h1>;
}

function HojunTwo() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun 2</h1>;
}

export default RouteSolve;
