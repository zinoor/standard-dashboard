import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import ProductCodingStandard from 'src/views/productCodingStandard';
import MatlabStandard from './views/productCodingStandard/MatlabStandard';
import ProductTestingStandard from './views/productTestingStandard';
import CPlusPlusStandard from './views/productTestingStandard/CPlusPlusStandard';
import JavascriptStandard from './views/productTestingStandard/JavascriptStandard';
import ProductDesignStandard from './views/ProductDesignStandard';
import AppDesignStandard from './views/ProductDesignStandard/AppDesignStandard';
import LiveEditorTaskDesignStandard from './views/ProductDesignStandard/LiveEditorTaskDesignStandard';
import MathworksWebStandard from './views/ProductDesignStandard/MathworksWebStandard';
import Prism from './views/ProductDesignStandard/Prism';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'product-coding-standards', element: <ProductCodingStandard /> },
      { path: 'matlab-standard', element: <MatlabStandard /> },
      { path: 'product-testing-standards', element: <ProductTestingStandard /> },
      { path: 'cplusplus-standard', element: <CPlusPlusStandard /> },
      { path: 'javascript-standard', element: <JavascriptStandard /> },
      { path: 'product-design-standards', element: <ProductDesignStandard /> },
      { path: 'app-design-standard', element: <AppDesignStandard /> },
      { path: 'live-editor-standard', element: <LiveEditorTaskDesignStandard /> },
      { path: 'mathwork-web-standard', element: <MathworksWebStandard /> },
      { path: 'prism', element: <Prism /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
