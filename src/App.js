// src/App.js
import AuthUI from "./components/AuthUI";
import { useUser, UserProvider } from "./contexts/UserContext";
import { logout } from "./utils/auth";

function Dashboard() {
  const { user } = useUser();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome, {user.email}</h1>
      <button onClick={logout} className="bg-gray-500 text-white p-2 mt-4 rounded">
        Logout
      </button>
    </div>
  );
}

function App() {
  const { user, loading } = useUser();

  if (loading) return <p>Loading...</p>;

  return user ? <Dashboard /> : <AuthUI />;
}

export default function RootApp() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

