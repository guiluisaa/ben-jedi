import React, {
  lazy,
  Suspense,
  ReactElement,
  ComponentType,
  ComponentPropsWithRef
} from 'react';

type Factory<T extends ComponentType<any>> = () => Promise<{
  default: T;
}>;

/**
 * Recebe uma função _lazy_ que retorna uma importação assíncrona de um
 * componente. A encapsula num `<Suspense />` carregado com fallback para o
 * `<Loading />`.
 *
 * @example
 *
 * const SignInForm = toLoadable(() => import('./SignInForm.component.tsx'));
 *
 * <SignInForm />
 *
 * @param factory
 */
const toLoadable = <T extends ComponentType<any>>(factory: Factory<T>) => ({
  ...props
}: ComponentPropsWithRef<T>): ReactElement => {
  const Component = lazy(factory);

  return (
    <Suspense fallback={<>Loading...</>}>
      <Component {...props} />
    </Suspense>
  );
};

export default toLoadable;
