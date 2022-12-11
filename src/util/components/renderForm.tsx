import React from "react";
import { ErrorBoundary } from "../../features/errorBoundary";
import renderFallbackSkeletons from "./display/renderFallbackSkeletons";
const Form = React.lazy(() => import("../../components/Form"));

export default function renderForm({ components = [] }: any) {
  const formSkeletonFallback = React.useMemo(
    () => renderFallbackSkeletons(components),
    [components]
  );
  return (
    <ErrorBoundary>
      <React.Suspense fallback={formSkeletonFallback}>
        <Form components={components} />;
      </React.Suspense>
    </ErrorBoundary>
  );
}
