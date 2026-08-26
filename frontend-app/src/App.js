import TechDashboard from "./technical/TechDashboard";
import TechnicalSupportDashboard from "./technical/TechnicalSupportDashboard";
import TechnicalSupport from "./technical/TechnicalSupport";
import Campaigns from "./marketing/Campaigns";
import DemoRequests from "./marketing/DemoRequests";
import LeadPipeline from "./marketing/LeadPipeline";
import FinancialDashboard from "./finance/FinancialDashboard";
import { useState } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import CreateStaff from "./components/CreateStaff";
import ResetPassword from "./components/ResetPassword";
import StaffList from "./components/StaffList";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Subscriptions from "./finance/Subscriptions";
import Invoices from "./finance/Invoices";
import Payments from "./finance/Payments";
import Plans from "./finance/Plans";
import MarketingLeads from "./marketing/MarketingLeads";
import UserManagement from "./admin/UserManagement";
import RolesPermissions from "./admin/RolesPermissions";
import AuditLogs from "./admin/AuditLogs";
import SecuritySettings from "./admin/SecuritySettings";
import AdminSettings from "./admin/AdminSettings";

import Customers from "./support/Customers";
import SupportTickets from "./support/SupportTickets";
import CaseManagement from "./support/CaseManagement";
import TrainingRequests from "./support/TrainingRequests";

import TechnicalIssues from "./technical/TechnicalIssues";
import SystemMonitoring from "./technical/SystemMonitoring";
import SystemLogs from "./technical/SystemLogs";

import Analytics from "./analytics/Analytics";
import ProductFeedback from "./analytics/ProductFeedback";
import KnowledgeBase from "./technical/KnowledgeBase";
// ✅ MAIN PROFESSIONAL DASHBOARD
import MainDashboard from "./pages/MainDashboard";

// ✅ ROTA MANAGEMENT PAGE
import RotaPage from "./pages/Dashboard";


// 🔐 AUTO ADMIN ACCOUNT
const seedAdmin = () => {
  const existing =
    JSON.parse(localStorage.getItem("staffAccounts")) || [];

  const adminExists =
    existing.some((u) => u.staffId === "admin-glv");

  if (!adminExists) {
    existing.push({
      staffId: "admin-glv",
      staffName: "Admin User",
      password: "admin123",
    });

    localStorage.setItem(
      "staffAccounts",
      JSON.stringify(existing)
    );
  }
};

seedAdmin();


function App() {
  const [page, setPage] = useState("welcome");
  const [loggedUser, setLoggedUser] = useState(null);

  // 🔑 LOGIN SYSTEM
  const handleLogin = (staffId, password) => {
    const staffList =
      JSON.parse(localStorage.getItem("staffAccounts")) || [];

    const foundStaff = staffList.find(
      (s) =>
        s.staffId === staffId &&
        s.password === password
    );

    if (foundStaff) {
      setLoggedUser(foundStaff);
      setPage("dashboard");
    } else {
      alert("Invalid Staff ID or Password");
    }
  };

  // ✅ WELCOME PAGE
  if (page === "welcome") {
    return (
      <Welcome onGo={() => setPage("login")} />
    );
  }

  // ✅ LOGIN PAGE
  if (page === "login") {
    return (
      <Login
        onLogin={handleLogin}
        onForgot={() => setPage("reset")}
        onCreateStaff={() => setPage("createStaff")}
      />
    );
  }

  // ✅ CREATE STAFF PAGE
  if (page === "createStaff") {
    return (
      <CreateStaff
        onBack={() => setPage("login")}
      />
    );
  }

  // ✅ RESET PASSWORD PAGE
  if (page === "reset") {
    return (
      <ResetPassword
        onBack={() => setPage("login")}
      />
    );
  }

  // ✅ MAIN HEALTHCARE DASHBOARD
  if (page === "dashboard") {
    return (
      <MainDashboard
        user={loggedUser}
        setPage={setPage}
      />
    );
  }

  // ✅ ROTA MANAGEMENT PAGE
  if (page === "rota") {
    return (
      <RotaPage
        setPage={setPage}
      />
    );
  }

  // 💰 FINANCIAL DASHBOARD
if (page === "finance") {
  return (
    <FinancialDashboard
      setPage={setPage}
    />
  );
}
if (page === "subscriptions") {
  return (
    <Subscriptions
      setPage={setPage}
    />
  );
  
}
if (page === "invoices") {
  return (
    <Invoices
      setPage={setPage}
    />
  );
}
  
if (page === "payments") {
  return (
    <Payments
      setPage={setPage}
    />
  );
}
if (page === "plans") {
  return (
    <Plans
      setPage={setPage}
    />
  );
}
  // ✅ STAFF LIST
  if (page === "staffList") {
    return (
      <StaffList
        user={loggedUser}
        onBack={() => setPage("dashboard")}
      />
    );
  }

  // ✅ NOTIFICATIONS
  if (page === "notifications") {
    return (
      <Notifications
        onBack={() => setPage("dashboard")}
      />
    );
  }

  // ✅ SETTINGS
  if (page === "settings") {
    return (
      <Settings
        onBack={() => setPage("dashboard")}
      />
    );
  }
  
  // ✅ PROFILE
  if (page === "profile") {
    return (
      <Profile
        user={loggedUser}
        onBack={() => setPage("dashboard")}
      />
    );
  }
  if (page === "leadPipeline") {
    return (
      <LeadPipeline
        setPage={setPage}
      />
    );
  }
  if (page === "demoRequests") {
    return (
      <DemoRequests
        setPage={setPage}
      />
    );
  }
  if (page === "campaigns") {
    return (
      <Campaigns
        setPage={setPage}
      />
    );
  }
  if (page === "technicalSupport") {
    return (
      <TechnicalSupportDashboard
        setPage={setPage}
        currentPage={page}
      />
    );
  }
if (page === "technicalDashboard") {
  return (
    <TechDashboard
      setPage={setPage}
      currentPage={page}
    />
  );
}
  
  if (page === "marketingLeads") {
    return <MarketingLeads setPage={setPage} />;
  }
  if (page === "campaigns") return <Campaigns setPage={setPage} />;

  if (page === "userManagement") return <UserManagement setPage={setPage} />;
  if (page === "rolesPermissions") return <RolesPermissions setPage={setPage} />;
  if (page === "auditLogs") return <AuditLogs setPage={setPage} />;
  if (page === "securitySettings") return <SecuritySettings setPage={setPage} />;
  if (page === "adminSettings") return <AdminSettings setPage={setPage} />;
  if (page === "customers") return <Customers setPage={setPage} />;

if (page === "supportTickets") {
  return (
    <SupportTickets
      setPage={setPage}
      currentPage={page}
    />
  );
}

if (page === "caseManagement") return <CaseManagement setPage={setPage} />;
if (page === "trainingRequests") return <TrainingRequests setPage={setPage} />;
  
  if (page === "technicalIssues") return <TechnicalIssues setPage={setPage} />;
  if (page === "systemMonitoring") return <SystemMonitoring setPage={setPage} />;
  if (page === "systemLogs") return <SystemLogs setPage={setPage} />;
  
  if (page === "analytics") return <Analytics setPage={setPage} />;
  if (page === "productFeedback") return <ProductFeedback setPage={setPage} />;
  if (page === "knowledgeBase") return <KnowledgeBase setPage={setPage} />;
  return null;
}

export default App;
