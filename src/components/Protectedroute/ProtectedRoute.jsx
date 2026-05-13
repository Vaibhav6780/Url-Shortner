import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/authstore.js";

function ProtectedRoute({ children }) {

    const { isAuthenticated, loading } = useAuthStore();

    
    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
   
    return children;
}

export default ProtectedRoute;