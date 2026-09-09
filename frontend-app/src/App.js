import TechDashboard from "./technical/TechDashboard";
import TechnicalSupportDashboard from "./technical/TechnicalSupportDashboard";
import TechnicalSupport from "./technical/TechnicalSupport";

import Campaigns from "./marketing/Campaigns";
import DemoRequests from "./marketing/DemoRequests";
import LeadPipeline from "./marketing/LeadPipeline";

import FinancialDashboard from "./finance/FinancialDashboard";
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

import { useState } from "react";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import CreateStaff from "./components/CreateStaff";
import ResetPassword from "./components/ResetPassword";
import StaffList from "./components/StaffList";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";
import Profile from "./components/Profile";

// ✅ MAIN PROFESSIONAL DASHBOARD
import MainDashboard from "./pages/MainDashboard";

// ✅ ROTA MANAGEMENT PAGE
import RotaPage from "./pages/Dashboard";

// ✅ BACKEND API
import { apiPost } from "./api";


function App() {
  const [page, setPage] = useState("welcome");
  const [loggedUser, setLoggedUser] = useState(null);


  // 🔑 LOGIN SYSTEM
  // Login now checks Django/PostgreSQL instead of localStorage
  const handleLogin = async (staffId, password) => {
    try {
      console.log("LOGIN REQUEST:", {
        username: staffId,
      });

      const response = await apiPost("/accounts/login/", {
        username: staffId,
        password: password,
      });

      console.log("LOGIN RESPONSE:", response);

      setLoggedUser({
        staffId: response.staff_id,
        staffName: response.staff_name,
      });

      setPage("dashboard");

    } catch (err) {
      console.error("LOGIN ERROR:", err);

      alert(
        err?.message ||
        "Invalid Staff ID or Password"
      );
    }
  };


  // ✅ WELCOME PAGE
  if (page === "welcome") {
    return (
      <Welcome
        onGo={() => setPage("login")}
      />
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


  // 💳 SUBSCRIPTIONS
  if (page === "subscriptions") {
    return (
      <Subscriptions
        setPage={setPage}
      />
    );
  }


  // 🧾 INVOICES
  if (page === "invoices") {
    return (
      <Invoices
        setPage={setPage}
      />
    );
  }


  // 💰 PAYMENTS
  if (page === "payments") {
    return (
      <Payments
        setPage={setPage}
      />
    );
  }


  // 📋 PLANS
  if (page === "plans") {
    return (
      <Plans
        setPage={setPage}
      />
    );
  }


  // 👥 STAFF LIST
  if (page === "staffList") {
    return (
      <StaffList
        user={loggedUser}
        onBack={() => setPage("dashboard")}
      />
    );
  }


  // 🔔 NOTIFICATIONS
  if (page === "notifications") {
    return (
      <Notifications
        onBack={() => setPage("dashboard")}
      />
    );
  }


  // ⚙️ SETTINGS
  if (page === "settings") {
    return (
      <Settings
        onBack={() => setPage("dashboard")}
      />
    );
  }


  // 👤 PROFILE
  if (page === "profile") {
    return (
      <Profile
        user={loggedUser}
        onBack={() => setPage("dashboard")}
      />
    );
  }


  // 📊 LEAD PIPELINE
  if (page === "leadPipeline") {
    return (
      <LeadPipeline
        setPage={setPage}
      />
    );
  }


  // 📅 DEMO REQUESTS
  if (page === "demoRequests") {
    return (
      <DemoRequests
        setPage={setPage}
      />
    );
  }


  // 📢 CAMPAIGNS
  if (page === "campaigns") {
    return (
      <Campaigns
        setPage={setPage}
      />
    );
  }


  // 🛠️ TECHNICAL SUPPORT DASHBOARD
  if (page === "technicalSupport") {
    return (
      <TechnicalSupportDashboard
        setPage={setPage}
        currentPage={page}
      />
    );
  }


  // 💻 TECHNICAL DASHBOARD
  if (page === "technicalDashboard") {
    return (
      <TechDashboard
        setPage={setPage}
        currentPage={page}
      />
    );
  }


  // 👥 MARKETING LEADS
  if (page === "marketingLeads") {
    return (
      <MarketingLeads
        setPage={setPage}
      />
    );
  }


  // 👤 USER MANAGEMENT
  if (page === "userManagement") {
    return (
      <UserManagement
        setPage={setPage}
      />
    );
  }


  // 🔐 ROLES & PERMISSIONS
  if (page === "rolesPermissions") {
    return (
      <RolesPermissions
        setPage={setPage}
      />
    );
  }


  // 📜 AUDIT LOGS
  if (page === "auditLogs") {
    return (
      <AuditLogs
        setPage={setPage}
      />
    );
  }


  // 🔒 SECURITY SETTINGS
  if (page === "securitySettings") {
    return (
      <SecuritySettings
        setPage={setPage}
      />
    );
  }


  // ⚙️ ADMIN SETTINGS
  if (page === "adminSettings") {
    return (
      <AdminSettings
        setPage={setPage}
      />
    );
  }


  // 👥 CUSTOMERS
  if (page === "customers") {
    return (
      <Customers
        setPage={setPage}
      />
    );
  }


  // 🎫 SUPPORT TICKETS
  if (page === "supportTickets") {
    return (
      <SupportTickets
        setPage={setPage}
        currentPage={page}
      />
    );
  }


  // 📁 CASE MANAGEMENT
  if (page === "caseManagement") {
    return (
      <CaseManagement
        setPage={setPage}
      />
    );
  }


  // 🎓 TRAINING REQUESTS
  if (page === "trainingRequests") {
    return (
      <TrainingRequests
        setPage={setPage}
      />
    );
  }


  // 🛠️ TECHNICAL ISSUES
  if (page === "technicalIssues") {
    return (
      <TechnicalIssues
        setPage={setPage}
      />
    );
  }


  // 📡 SYSTEM MONITORING
  if (page === "systemMonitoring") {
    return (
      <SystemMonitoring
        setPage={setPage}
      />
    );
  }


  // 📜 SYSTEM LOGS
  if (page === "systemLogs") {
    return (
      <SystemLogs
        setPage={setPage}
      />
    );
  }


  // 📈 ANALYTICS
  if (page === "analytics") {
    return (
      <Analytics
        setPage={setPage}
      />
    );
  }


  // 💬 PRODUCT FEEDBACK
  if (page === "productFeedback") {
    return (
      <ProductFeedback
        setPage={setPage}
      />
    );
  }


  // 📚 KNOWLEDGE BASE
  if (page === "knowledgeBase") {
    return (
      <KnowledgeBase
        setPage={setPage}
      />
    );
  }


  // 🛠️ TECHNICAL SUPPORT
  if (page === "technicalSupportPage") {
    return (
      <TechnicalSupport
        setPage={setPage}
      />
    );
  }


  return null;
}


export default App;