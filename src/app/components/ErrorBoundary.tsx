import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = { children: ReactNode; fallback?: ReactNode };

type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback !== undefined) {
        return this.props.fallback;
      }
      return (
        <div className="flex min-h-dvh items-center justify-center bg-[#FAF8F6] px-6 text-center text-[#2C2820]">
          <p className="max-w-md text-sm">
            Κάτι πήγε στραβά κατά τη φόρτωση. Ανανεώστε τη σελίδα ή δοκιμάστε ξανά αργότερα.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
