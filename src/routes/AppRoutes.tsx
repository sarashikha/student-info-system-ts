import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Help from "../pages/Help";

import AdminHome from "../pages/admin/AdminHome";
import StudentsAdmin from "../pages/admin/StudentsAdmin";
import CoursesAdmin from "../pages/admin/CoursesAdmin";
import DegreeReqAdmin from "../pages/admin/DegreeReqAdmin";
import MessagesAdmin from "../pages/admin/MessagesAdmin";;

import UserHome from "../pages/user/UserHome";
import CoursesUser from "../pages/user/CoursesUser";
import DegreeReqUser from "../pages/user/DegreeReqUser";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/students" element={<StudentsAdmin />} />
      <Route path="/admin/courses" element={<CoursesAdmin />} />
      <Route path="/admin/degree-reqs" element={<DegreeReqAdmin />} />
      <Route path="/admin/messages" element={<MessagesAdmin />} />

      <Route path="/user" element={<UserHome />} />
      <Route path="/user/courses" element={<CoursesUser />} />
      <Route path="/user/degree-reqs" element={<DegreeReqUser />} />

      <Route path="/help" element={<Help />} />

      <Route path="*" element={<h2 style={{ padding: 40 }}>Page Not Found</h2>} />
    </Routes>
  );
}