import React from "react";

export class ErrorBoundary extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if ((this.state as any)?.errorInfo) {
      // Error path
      return (
        <div>
          <h2>{this.props.debug ?? "Something went wrong."}</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {(this.state as any)?.error &&
              (this.state as any)?.error.toString()}
            <br />
            {(this.state as any)?.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
