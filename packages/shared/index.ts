export interface User {
    id: string;
    email: string;
    role: 'admin' | 'user';
    tenantId: string;
  }
  
  export interface Book {
    id: string;
    title: string;
    status: 'available' | 'borrowed';
    tenantId: string;
  }