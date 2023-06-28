import { useRef } from 'react';

/**
 * useInitializeRefs Hook
 *
 * @param {number} count - The number of refs to initialize.
 * @returns {React.MutableRefObject} - The array of initialized refs.
 *
 * @description This hook is used to initialize an array of refs with a specific count. It takes in a count parameter, which
 * specifies the number of refs to initialize. The hook returns a React mutable ref object containing the array of initialized refs.
 */
const useInitializeRefs = (count:number): React.MutableRefObject<any[]> => {
  const formRefs: React.MutableRefObject<any[]> = useRef(Array(count).fill(null));
  return formRefs;
};
export default useInitializeRefs;