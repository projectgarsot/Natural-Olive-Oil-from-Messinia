import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface CompanyDetail {
  label: string;
  value: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ElementType;
}

export type DocType = 'balance' | 'income';

export interface FinancialDoc {
  id: string;
  year: string;
  type: DocType;
  title: string;
  url: string;
}