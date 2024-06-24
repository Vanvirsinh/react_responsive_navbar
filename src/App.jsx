import "./font.css";
import Layout from "./components/Layout";
import {
  Home, About, Solutions, Products, Blog, Contact, FrontEndDev,
  BackEndDev, FullStackDev, AppDevelopment, CloudService, AIandML,
  ThreatIntelligence, NetworkSecurity, Compliance, Regulations
} from "./components/Pages";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/solutions",
        element: <Solutions />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/services",
        children: [
          {
            path: "web-development",
            children: [
              {
                path: "front-end",
                element: <FrontEndDev />
              },
              {
                path: "back-end",
                element: <BackEndDev />
              },
              {
                path: "full-stack",
                element: <FullStackDev />
              }
            ]
          },
          {
            path: "app-development",
            element: <AppDevelopment />
          },
          {
            path: "cloud-services",
            element: <CloudService />
          },
          {
            path: "ai-and-ml",
            element: <AIandML />
          },
          {
            path: "cybersecurity",
            children: [
              {
                path: "threat-intelligence",
                element: <ThreatIntelligence />
              },
              {
                path: "network-security",
                element: <NetworkSecurity />
              },
              {
                path: "compliance",
                element: <Compliance />
              },
              {
                path: "regulations",
                element: <Regulations />
              },
            ]
          }
        ]
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
