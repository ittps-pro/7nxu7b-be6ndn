import * as React from 'react';
import {
  useId,
  Link,
  Button,
  Toaster,
  useToastController,
  Toast,
  ToastTitle,
  ToastBody,
  ToastFooter,
} from '@fluentui/react-components';

// Toast
export const Default = () => {
  const toasterId = useId('toaster');
  const { dispatchToast } = useToastController(toasterId);
  const notify = () =>
    dispatchToast(
      <Toast>
        <ToastTitle action={<Link>Отмена</Link>}>Email sent</ToastTitle>
        <ToastBody subtitle="Subtitle">This is a toast body</ToastBody>
        <ToastFooter>
          <Link>Open</Link>
          <Link>Action</Link>
        </ToastFooter>
      </Toast>,
      { intent: 'success' }
    );

  return (
    <>
      <Toaster toasterId={toasterId} />
    </>
  );
};
