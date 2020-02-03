import React from 'react';
import { DebounceSettings } from 'lodash';
export declare const debounceRender: <P extends object>(Component: React.ComponentType<P>, wait?: number | undefined, options?: DebounceSettings | undefined) => {
  new (props: Readonly<P>): {
    shouldComponentUpdate(): boolean;
    componentWillUnmount(): void;
    updateDebounced: ((callback?: (() => void) | undefined) => void) & import("lodash").Cancelable;
    render(): JSX.Element;
    context: any;
    setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<P> & Readonly<{
      children?: React.ReactNode;
    }>;
    state: Readonly<{}>;
    refs: {
      [key: string]: React.ReactInstance;
    };
    componentDidMount?(): void;
    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>): any;
    componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
  };
  new (props: P, context?: any): {
    shouldComponentUpdate(): boolean;
    componentWillUnmount(): void;
    updateDebounced: ((callback?: (() => void) | undefined) => void) & import("lodash").Cancelable;
    render(): JSX.Element;
    context: any;
    setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<P> & Readonly<{
      children?: React.ReactNode;
    }>;
    state: Readonly<{}>;
    refs: {
      [key: string]: React.ReactInstance;
    };
    componentDidMount?(): void;
    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>): any;
    componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
  };
  contextType?: React.Context<any> | undefined;
};
export default debounceRender;
