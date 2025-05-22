import Footer from "../Elements/footer";
import Header from "../Elements/header";

const AuthLayouts = ({ children }) => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default AuthLayouts;
