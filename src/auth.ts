// Simple localStorage-based authentication (demo only, not production-ready)

export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
}

const STORAGE_KEY = 'haokhidaiviet_user';
const USERS_KEY = 'haokhidaiviet_users';

// Get stored users (for email/password login)
function getStoredUsers(): Record<string, { password: string; user: User }> {
  const stored = localStorage.getItem(USERS_KEY);
  return stored ? JSON.parse(stored) : {};
}

// Save users
function saveUsers(users: Record<string, { password: string; user: User }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Get current user
export function getCurrentUser(): User | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

// Email/Password Register
export async function registerWithEmail(email: string, password: string): Promise<User> {
  if (password.length < 6) {
    throw new Error('Mật khẩu phải có ít nhất 6 ký tự');
  }

  const users = getStoredUsers();

  if (users[email]) {
    throw new Error('Email đã được sử dụng');
  }

  const user: User = {
    id: `user_${Date.now()}`,
    email,
    displayName: email.split('@')[0],
  };

  users[email] = { password, user };
  saveUsers(users);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));

  return user;
}

// Email/Password Login
export async function loginWithEmail(email: string, password: string): Promise<User> {
  const users = getStoredUsers();
  const stored = users[email];

  if (!stored || stored.password !== password) {
    throw new Error('Email hoặc mật khẩu không chính xác');
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored.user));
  return stored.user;
}

// Google Login (fake)
export async function loginWithGoogle(): Promise<User> {
  const user: User = {
    id: `google_${Date.now()}`,
    email: 'demo@google.com',
    displayName: 'Google User Demo',
    photoURL: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg',
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
}

// Facebook Login (fake)
export async function loginWithFacebook(): Promise<User> {
  const user: User = {
    id: `facebook_${Date.now()}`,
    email: 'demo@facebook.com',
    displayName: 'Facebook User Demo',
    photoURL: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg',
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
}

// Logout
export async function logout(): Promise<void> {
  localStorage.removeItem(STORAGE_KEY);
}

// Auth state observer (simple polling)
export function onAuthStateChanged(callback: (user: User | null) => void): () => void {
  // Initial call
  callback(getCurrentUser());

  // Poll for changes every second
  const interval = setInterval(() => {
    callback(getCurrentUser());
  }, 1000);

  // Return unsubscribe function
  return () => clearInterval(interval);
}
