import { useState, useEffect } from 'react';

export const useIsFlexGapSupported = () => {
  const [isFlexGapSupported, setIsFlexGapSupported] = useState(false);

  useEffect(() => {
    const flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.flexDirection = 'column';
    flex.style.rowGap = '1px';

    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));

    document.body.appendChild(flex);

    const isSupported = flex.scrollHeight === 1;

    flex.parentNode.removeChild(flex);

    setIsFlexGapSupported(isSupported);
  }, []);

  return isFlexGapSupported;
};

export default useIsFlexGapSupported;
