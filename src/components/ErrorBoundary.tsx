'use client';

import React, { useState, useEffect, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ErrorBoundary({ 
  children, 
  fallback = <div className="h-screen flex items-center justify-center">
    <h1>Sorry.. there was an error</h1>
  </div> 
}: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error('Uncaught error:', error);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return fallback;
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
} 