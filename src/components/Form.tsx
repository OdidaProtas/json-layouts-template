import React from "react";

import useIntent from "../hooks/useIntent";

import renderComponents from "../util/components/renderComponents";
import renderStack from "../util/components/renderStack";

export default function Form({ components = [], intents = {} }: any) {
  const [state, setState] = React.useState(() =>
    components.reduce((p: any, c: any) => ({ ...p, [c.name]: "" }), {})
  );
  const [loading, setLoading] = React.useState({});

  const { submitAction, submitSuccessCallback, submitSuccessError } = intents;

  const onSubmitForm = useIntent({});
  const onSubmitFormSuccess = useIntent(submitSuccessCallback);
  const onsubmitFormError = useIntent(submitSuccessError);

  const handleChange = React.useCallback(
    (e: any) => {
      const { name, value } = e.target;
      setState((p: any) => ({ ...p, [name]: value }));
    },
    [state]
  );

  const handleSubmit = React.useCallback(
    async (e: any) => {
      setLoading(true);
      const [res, error]: any = await onSubmitForm();
      if (res) {
        const isSuccess = await onSubmitFormSuccess();
        if (true) setLoading(false);
        return;
      }
      const isErr = await onsubmitFormError();
      if (true) setLoading(false);
    },
    [state, loading]
  );

  const componentData = React.useMemo(
    () =>
      components.map((component: any) => ({
        ...component,
        handleChange,
        value: state[component.name],
        submitting: loading,
      })),
    [components, handleChange, handleSubmit, state, loading]
  );

  const fields = renderComponents(componentData);
  const fieldStack = renderStack(fields);

  return <form onSubmit={handleSubmit}>{fieldStack}</form>;
}
