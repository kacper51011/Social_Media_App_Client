import type React from "react";

export const reportAccessibility = async (
  App: typeof React,
  config?: Record<string, unknown>
): Promise<void> => {
  const axe = await import("@axe-core/react");
  const ReactDOM = await import("react-dom");

  axe.default(App, ReactDOM, 1000, config);
};

export default reportAccessibility;
