import Dashboard from "@/components/dashboard/Dashboard"
import { Inter } from "next/font/google"
import { Container, Row, Col } from "../components/index"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return <Dashboard />
}
