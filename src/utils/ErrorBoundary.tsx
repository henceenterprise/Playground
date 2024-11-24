import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Atualiza o estado para mostrar a mensagem de fallback
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Aqui podes fazer log dos erros, por exemplo, para um serviço de monitorização
    console.error("Erro capturado pelo ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Mostra uma mensagem personalizada de fallback
      return <h1>Algo correu mal. Por favor, tenta novamente mais tarde.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
