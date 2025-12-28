
import { Routes, Route } from 'react-router-dom'
import AdminHome from '../pages/admin/AdminHome'
import UserHome from '../pages/user/UserHome'

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<UserHome/>} />
      <Route path="/admin" element={<AdminHome/>} />
    </Routes>
  )
}
