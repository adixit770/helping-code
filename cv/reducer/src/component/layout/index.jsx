import { useEffect } from "react";

const MainLayout = ({ children,secure=false }) => {
  const login = true;
  useEffect(() => {
    if(secure){
        if (!login) {
            alert("go to login");
          }
    }
   
  }, []);
  return <div>navbar{children}footer</div>;
};

export default MainLayout;
