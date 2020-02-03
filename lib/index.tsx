import React from 'react';
import debounce from 'lodash/debounce';
import { DebounceSettings } from 'lodash';

export const debounceRender = <P extends object>(Component: React.ComponentType<P>, wait?: number, options?: DebounceSettings) =>
  class DebouncedContainer extends React.Component<P> {
    shouldComponentUpdate() {
      this.updateDebounced();
      return false;
    }
    componentWillUnmount() {
      this.updateDebounced.cancel();
    }
    updateDebounced = debounce(this.forceUpdate, wait, options);
    render() {
      return <Component {...this.props as P} />;
    }
  };
export default debounceRender;