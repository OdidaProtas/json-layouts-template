import React from "react";
import renderComponents from "../renderComponents";
import renderStack from "../renderStack";

export default function Form({ components = [], intents = {} }: any) {
  const [state, setState] = React.useState(() =>
    components.reduce((p: any, c: any) => ({ ...p, [c.name]: "" }), {})
  );
  const [loading, setLoading] = React.useState({});

  const handleChange = React.useCallback(
    (e: any) => {
      const { name, value } = e.target;
      setState((p: any) => ({ ...p, [name]: value }));
    },
    []
  );

  const handleSubmit = React.useCallback(() => {}, []);

  const componentData = React.useMemo(
    () =>
      components.map((component: any) => ({
        ...component,
        handleChange,
        value: state[component.name],
        submitting: loading,
      })),
    [components, handleChange, state, loading]
  );

  const fields = renderComponents(componentData);
  const fieldStack = renderStack(fields);

  return <form onSubmit={handleSubmit}>{fieldStack}</form>;
}
